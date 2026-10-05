import Image from 'next/image';
import { approvedProductInterface } from '@/content/platform-visuals';
/** No remote product access. Only an explicitly approved sanitized staging asset. */
export function ProductInterfaceFrame() {
  const asset = approvedProductInterface;
  if (!asset?.sanitizedStagingApproved) return null;
  return (
    <section className="product-interface section-space">
      <div className="wrap">
        <p className="eyebrow">Real product interface</p>
        <figure className="cloud-shell">
          <div className="cloud-toolbar">iLocal / approved staging interface</div>
          <Image
            src={asset.src}
            alt={asset.alt}
            width={asset.width}
            height={asset.height}
            sizes="(max-width:700px) 100vw, 1400px"
          />
          <figcaption>{asset.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
