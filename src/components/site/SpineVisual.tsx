import { motion } from 'framer-motion';

const vertebrae = [
  { y: 30, w: 28, h: 18, rx: 6 },
  { y: 50, w: 30, h: 18, rx: 6 },
  { y: 70, w: 32, h: 18, rx: 6 },
  { y: 90, w: 34, h: 18, rx: 6 },
  { y: 110, w: 34, h: 18, rx: 6 },
  { y: 130, w: 36, h: 18, rx: 6 },
  { y: 150, w: 36, h: 18, rx: 6 },
  { y: 175, w: 38, h: 20, rx: 6 },
  { y: 198, w: 40, h: 20, rx: 6 },
  { y: 221, w: 42, h: 20, rx: 6 },
  { y: 244, w: 44, h: 20, rx: 6 },
  { y: 267, w: 44, h: 20, rx: 6 },
  { y: 295, w: 46, h: 22, rx: 7 },
  { y: 320, w: 48, h: 22, rx: 7 },
  { y: 345, w: 50, h: 22, rx: 7 },
  { y: 370, w: 50, h: 22, rx: 7 },
  { y: 395, w: 48, h: 22, rx: 7 },
];

const discs = [49, 69, 89, 109, 129, 149, 172, 196, 219, 242, 265, 292, 317, 342, 367, 392];


export const SpineVisual = () => {
  return (
    <div className="relative w-full max-w-[380px] aspect-[2/3] mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary/5 via-transparent to-primary/10 border border-primary/10 backdrop-blur-sm shadow-xl">
      {/* SVG Spine Visualization */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <svg viewBox="0 0 200 500" className="w-full h-full opacity-95 drop-shadow-xl">
          <defs>
            <linearGradient id="spineGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.95 0.02 160)" />
              <stop offset="100%" stopColor="oklch(0.9 0.05 160)" />
            </linearGradient>
            <linearGradient id="spineGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.9 0.05 160)" />
              <stop offset="100%" stopColor="oklch(0.85 0.08 160)" />
            </linearGradient>
            <linearGradient id="spineGrad3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.85 0.08 160)" />
              <stop offset="100%" stopColor="oklch(0.8 0.1 160)" />
            </linearGradient>
            <linearGradient id="nerveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.2" />
            </linearGradient>
            <radialGradient id="glowGrad">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Vertebrae */}
          {vertebrae.map((v, i) => (
            <motion.rect
              key={`vertebra-${i}`}
              x={100 - v.w / 2}
              y={v.y}
              width={v.w}
              height={v.h}
              rx={v.rx}
              fill={`url(#spineGrad${i < 5 ? '1' : i < 12 ? '2' : '3'})`}
              stroke="var(--color-primary)"
              strokeWidth="0.3"
              strokeOpacity="0.1"
              initial={{ opacity: 0, scale: 0.8, y: v.y + 10 }}
              animate={{ opacity: 1, scale: 1, y: v.y }}
              transition={{ 
                delay: 0.2 + i * 0.03, 
                duration: 0.7,
                ease: [0.23, 1, 0.32, 1] 
              }}
              style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.05))" }}
            />
          ))}

          {/* Intervertebral Discs (Seamlessly Blended) */}
          {discs.map((y, i) => (
            <motion.ellipse
              key={`disc-${i}`}
              cx="100"
              cy={y}
              rx={12 + (i > 6 ? 4 : i > 11 ? 6 : 0)}
              ry="4" // Increased height for seamless overlap
              fill="oklch(0.15 0.05 160)" 
              fillOpacity="0.2"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4 + i * 0.03, duration: 0.8, ease: "easeOut" }}
              style={{ filter: "blur(1px)" }} // Softened edges for blending
            />
          ))}




          {/* Nerve Pathway */}
          <motion.path
            d="M100 30 C 80 100, 120 200, 100 250 C 80 300, 120 370, 100 440"
            stroke="url(#nerveGrad)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 3, ease: "easeInOut" }}
          />

          {/* Pulsing Health Glows */}
          {[100, 240, 350].map((y, i) => (
            <motion.circle
              key={`glow-${i}`}
              cx="100"
              cy={y}
              r="40"
              fill="url(#glowGrad)"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ 
                opacity: [0, 0.4, 0],
                scale: [0.9, 1.3, 0.9]
              }}
              transition={{ 
                delay: 1.5 + i * 1, 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          ))}

        </svg>
      </div>
    </div>
  );
};

