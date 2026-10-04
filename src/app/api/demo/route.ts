import { validateDemoRequest } from '@/lib/forms/schema';
import { submitDemoRequest, SubmissionNotConfiguredError } from '@/lib/forms/adapter';
export const runtime = 'nodejs';
const headers = { 'Cache-Control': 'no-store' };
function isSameOrigin(origin: string, host: string | null) {
  try {
    const url = new URL(origin);
    return ['http:', 'https:'].includes(url.protocol) && url.host === host;
  } catch {
    return false;
  }
}
export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin && !isSameOrigin(origin, request.headers.get('host')))
    return Response.json(
      { message: 'This request could not be verified. Please try again from the website.' },
      { status: 403, headers },
    );
  if (!request.headers.get('content-type')?.includes('application/json'))
    return Response.json({ message: 'JSON content is required.' }, { status: 415, headers });
  // Read a bounded stream so a missing or dishonest Content-Length cannot create an unbounded body.
  const reader = request.body?.getReader();
  if (!reader)
    return Response.json({ message: 'Enter your contact details.' }, { status: 400, headers });
  let size = 0;
  const chunks: Uint8Array[] = [];
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 8192) {
        await reader.cancel();
        return Response.json(
          { message: 'The submitted form is too large.' },
          { status: 413, headers },
        );
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    const payload: unknown = JSON.parse(new TextDecoder().decode(bytes));
    const result = validateDemoRequest(payload);
    if (!result.data)
      return Response.json(
        { errors: result.errors, message: 'Please review the highlighted fields.' },
        { status: 400, headers },
      );
    const receipt = await submitDemoRequest(result.data);
    return Response.json(receipt, { headers });
  } catch (error) {
    if (error instanceof SyntaxError)
      return Response.json(
        { message: 'The form could not be read. Please try again.' },
        { status: 400, headers },
      );
    if (error instanceof SubmissionNotConfiguredError)
      return Response.json(
        {
          message:
            'Online requests are not available yet. Please try again once the website is live.',
        },
        { status: 503, headers },
      );
    return Response.json(
      { message: 'We couldn’t submit the form. Please try again.' },
      { status: 500, headers },
    );
  }
}
