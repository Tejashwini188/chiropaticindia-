'use client';

import { motion } from 'framer-motion';

export const SpineVisual = () => {
    return (
        <div className="relative w-full aspect-[4/5] max-w-[520px] mx-auto">
            {/* Main visual container - Matches the soft cyan/blue of original but in light green */}
            <div className="absolute inset-0 bg-emerald-50/40 rounded-[2.5rem] overflow-hidden border border-emerald-100/30">
                
                {/* Grid Background - subtle and clean */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Spine SVG Visualization - Using exact proportions from reference */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                    <svg viewBox="0 0 200 500" className="w-full h-full opacity-90 drop-shadow-xl">
                        {/* Spine vertebrae - Exact values from reference code */}
                        {[
                            { y: 30, w: 28, h: 16, rx: 6 },
                            { y: 52, w: 30, h: 16, rx: 6 },
                            { y: 74, w: 32, h: 16, rx: 6 },
                            { y: 96, w: 34, h: 16, rx: 6 },
                            { y: 118, w: 34, h: 16, rx: 6 },
                            { y: 140, w: 36, h: 16, rx: 6 },
                            { y: 162, w: 36, h: 16, rx: 6 },
                            { y: 190, w: 38, h: 18, rx: 6 },
                            { y: 214, w: 40, h: 18, rx: 6 },
                            { y: 238, w: 42, h: 18, rx: 6 },
                            { y: 262, w: 44, h: 18, rx: 6 },
                            { y: 286, w: 44, h: 18, rx: 6 },
                            { y: 316, w: 46, h: 20, rx: 7 },
                            { y: 342, w: 48, h: 20, rx: 7 },
                            { y: 368, w: 50, h: 20, rx: 7 },
                            { y: 394, w: 50, h: 20, rx: 7 },
                            { y: 420, w: 48, h: 20, rx: 7 },
                        ].map((v, i) => (
                            <motion.rect
                                key={i}
                                x={100 - v.w / 2}
                                y={v.y}
                                width={v.w}
                                height={v.h}
                                rx={v.rx}
                                fill={`url(#spineGrad${i < 5 ? '1' : i < 12 ? '2' : '3'})`}
                                stroke="oklch(0.42 0.09 160)"
                                strokeWidth="0.5"
                                strokeOpacity="0.3"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                            />
                        ))}

                        {/* Discs between vertebrae - Exact values from reference code */}
                        {[48, 70, 92, 114, 136, 158, 186, 210, 234, 258, 282, 312, 338, 364, 390, 416].map((y, i) => (
                            <motion.ellipse
                                key={`disc-${i}`}
                                cx="100"
                                cy={y}
                                rx={12 + (i > 6 ? 4 : i > 11 ? 6 : 0)}
                                ry="3"
                                fill="oklch(0.55 0.11 160)"
                                fillOpacity="0.3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 + i * 0.04 }}
                            />
                        ))}

                        {/* Nerve pathways (The Line Forming) - Exact path from reference */}
                        <motion.path
                            d="M100 30 C 80 100, 120 200, 100 250 C 80 300, 120 370, 100 440"
                            stroke="url(#nerveGrad)"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }}
                        />

                        {/* Glow effect on healthy areas - Exact positions from reference */}
                        {[100, 240, 350].map((y, i) => (
                            <motion.circle
                                key={`glow-${i}`}
                                cx="100"
                                cy={y}
                                r="25"
                                fill="url(#glowGrad)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.6, 0] }}
                                transition={{ delay: 2 + i * 0.5, duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            />
                        ))}

                        {/* SVG Definitions for Gradients - Emerald version of original colors */}
                        <defs>
                            <linearGradient id="spineGrad1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="oklch(0.96 0.02 160)" />
                                <stop offset="100%" stopColor="oklch(0.85 0.06 160)" />
                            </linearGradient>
                            <linearGradient id="spineGrad2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="oklch(0.85 0.06 160)" />
                                <stop offset="100%" stopColor="oklch(0.75 0.1 160)" />
                            </linearGradient>
                            <linearGradient id="spineGrad3" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="oklch(0.75 0.1 160)" />
                                <stop offset="100%" stopColor="oklch(0.65 0.12 160)" />
                            </linearGradient>
                            <linearGradient id="nerveGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="oklch(0.55 0.11 160)" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="oklch(0.42 0.09 160)" stopOpacity="0.4" />
                            </linearGradient>
                            <radialGradient id="glowGrad">
                                <stop offset="0%" stopColor="oklch(0.55 0.11 160)" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="oklch(0.55 0.11 160)" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};
