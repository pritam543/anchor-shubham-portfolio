import SlideDown from '../components/SlideDown';
import { Mic2, Heart, Trophy, Globe } from 'lucide-react';

export default function About() {
    return (
        <div className="py-20 max-w-6xl mx-auto px-6">
            <SlideDown className="text-center mb-16">
                <p className="text-goldAccent text-xs font-bold uppercase tracking-widest">The Person Behind The Mic</p>
                <h1 className="text-4xl md:text-6xl font-black mt-2">Meet Shubham Atre</h1>
                <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                    From local theatre beginnings to commanding national stages for global brands and luxury destination weddings.
                </p>
            </SlideDown>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <SlideDown delay={0.1}>
                    <img
                        src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop"
                        alt="Anchor Shubham"
                        className="rounded-2xl border-2 border-goldAccent/30 shadow-2xl w-full h-[450px] object-cover"
                    />
                </SlideDown>

                <SlideDown delay={0.2} className="space-y-6 text-zinc-300 leading-relaxed text-sm md:text-base">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        "An event isn't remembered by the schedule; it is remembered by the energy."
                    </h2>
                    <p>
                        With over 8 years in the live events domain, I have anchored 500+ diverse events ranging from high-stakes corporate award ceremonies to high-tempo Sangeet battles across India.
                    </p>
                    <p>
                        My style combines spontaneous wit, stage presence, and respectful crowd control. Whether addressing a hall of 2,000 corporate executives or 300 enthusiastic wedding guests, I ensure everyone feels part of the celebration.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-white font-semibold">
                        <div className="flex items-center gap-2">
                            <Trophy className="text-goldAccent" size={20} />
                            <span>Multi-Award Nominee</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="text-goldAccent" size={20} />
                            <span>Pan-India Availability</span>
                        </div>
                    </div>
                </SlideDown>
            </div>
        </div>
    );
}