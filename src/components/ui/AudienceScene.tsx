import Image from 'next/image';
import { HandoffIllustration } from './HandoffIllustration';
export function AudienceScene({
  audience,
}: {
  audience: 'health-systems' | 'retail' | 'community' | 'employers';
}) {
  const health = audience === 'health-systems';
  return (
    <div className={`audience-scene scene-${audience}`}>
      <div className="scene-location">
        <span>
          {health
            ? 'CONNECTED CARE'
            : audience === 'retail'
              ? 'CONNECTED LOCATIONS'
              : audience === 'community'
                ? 'LOCAL CARE'
                : 'WORKPLACE ACCESS'}
        </span>
        <i aria-hidden="true">↗</i>
      </div>
      {health ? (
        <HandoffIllustration type="bedside" />
      ) : audience === 'community' ? (
        <HandoffIllustration type="counter" />
      ) : (
        <div className="audience-hardware-scene">
          <div className="scene-architecture" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <Image
            src="/hardware/main.png"
            width={1200}
            height={1200}
            sizes="(max-width:700px) 80vw, 550px"
            alt={
              audience === 'retail'
                ? 'Authentic iLocal pickup hardware in an illustrative pharmacy setting'
                : 'Authentic iLocal pickup hardware in an illustrative workplace setting'
            }
          />
          <span className="scene-connection" aria-hidden="true" />
        </div>
      )}
      <p>Illustrative setting · configured with the pharmacy</p>
    </div>
  );
}
