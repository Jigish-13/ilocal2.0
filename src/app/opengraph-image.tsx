import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
export const alt = 'iLocal — Every path from pharmacy to patient. One connected platform.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), 'public/brand/ilocal-logo.png'));
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#f6f4ef',
        display: 'flex',
        flexDirection: 'column',
        padding: '60px 75px',
        color: '#111c33',
      }}
    >
      <img
        src={`data:image/png;base64,${logo.toString('base64')}`}
        width={190}
        height={79}
        alt="iLocal"
      />
      <div style={{ display: 'flex', fontSize: 17, letterSpacing: 3, marginTop: 25 }}>
        THE PHARMACY-TO-PATIENT PLATFORM
      </div>
      <div
        style={{
          fontSize: 68,
          letterSpacing: -3,
          marginTop: 28,
          lineHeight: 1.08,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span>Every path from</span>
        <span style={{ color: '#233f9f' }}>pharmacy to patient.</span>
        <span>One connected platform.</span>
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 17,
          marginTop: 35,
          borderTop: '1px solid #bcc3c8',
          paddingTop: 22,
        }}
      >
        Kiosk · Counter · Curbside · Bedside · Courier
      </div>
    </div>,
    size,
  );
}
