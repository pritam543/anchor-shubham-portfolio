import { motion } from 'framer-motion';

export default function SectionReveal({ children, className = "", delay = 0 }) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Content jo blank slide pass hone par smoothly reveal hoga */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: delay + 0.35, ease: [0.25, 1, 0.5, 1] }}
            >
                {children}
            </motion.div>

            {/* Blank Curtain Slide jo upar se niche aayegi */}
            <motion.div
                initial={{ top: "-100%", bottom: "0%" }}
                whileInView={{ top: ["-100%", "0%", "100%"] }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, delay: delay, ease: [0.65, 0, 0.35, 1] }}
                className="pointer-events-none absolute inset-x-0 h-full z-30 bg-gradient-to-b from-transparent via-goldAccent/25 to-stageCard border-y border-goldAccent/40"
            />
        </div>
    );
}