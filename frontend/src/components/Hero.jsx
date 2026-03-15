import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Subtle parallax and scale effects
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

    return (
        <div ref={containerRef} className="relative h-screen w-full bg-[#050505] overflow-hidden">
            {/* Minimalist Background */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <motion.div
                    style={{ scale }}
                    className="w-full h-full"
                >
                    <img
                        src="/clg_hero_bg.jpg"
                        alt="College Hero Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
            </motion.div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
                {/* Simplified Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold px-4 py-2 border border-blue-500/20 rounded-full bg-blue-500/5 backdrop-blur-sm">
                        Official Union Portal 2026
                    </span>
                </motion.div>

                {/* Refined Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight"
                >
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                                INDHRAYA
                            </span>
                        </div>
                        <span className="text-gray-500 italic font-light">COLLEGE UNION</span>
                    </div>
                </motion.h1>

                {/* Simplified Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-gray-450 text-base md:text-lg max-w-lg font-light leading-relaxed mb-10"
                >
                    Together We Rise
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                >
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20">
                        Explore Union <ArrowRight size={20} />
                    </button>
                    <button
                        onClick={() => document.getElementById('complaints')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 backdrop-blur-sm transition-all transform hover:scale-105 active:scale-95"
                    >
                        Voice Grievance
                    </button>
                </motion.div>

            </div>

            {/* Subtle Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
            >
                <div className="text-[10px] uppercase tracking-[0.2em] mb-4 text-white/50">Scroll</div>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white via-white/50 to-transparent" />
            </motion.div>
        </div>
    );
};

export default Hero;

