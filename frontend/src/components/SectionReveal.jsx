import { motion } from 'framer-motion';

export default function SectionReveal({ children, className = "", delay = 0 }) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* 1. Content jo blank slide pass hone par smoothly fade-in hoga */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: delay + 0.35, ease: [0.25, 1, 0.5, 1] }}
            >
                {children}
            </motion.div>

            {/* 2. Rose Gold & Burgundy Curtain Slide */}
            <motion.div
                initial={{ top: "-100%", bottom: "0%" }}
                whileInView={{ top: ["-100%", "0%", "100%"] }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, delay: delay, ease: [0.65, 0, 0.35, 1] }}
                className="pointer-events-none absolute inset-x-0 h-full z-30 bg-gradient-to-b from-transparent via-roseGold/30 to-burgundy border-y border-dustyRose/50"
            />
        </div>
    );
}