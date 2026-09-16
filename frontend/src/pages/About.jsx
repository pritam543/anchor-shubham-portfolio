import SectionReveal from '../components/SectionReveal';
import { Trophy, Globe } from 'lucide-react';

export default function About() {
    return (
        <div className="py-20 max-w-6xl mx-auto px-6 bg-deepWine">
            <SectionReveal className="text-center mb-16">
                <p className="text-roseGold text-xs font-bold uppercase tracking-[0.25em]">Behind The Microphone</p>
                <h1 className="text-4xl md:text-6xl font-black mt-2 text-cream">The Voice & Energy</h1>
                <p className="text-nudeBeige mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    From high-stakes boardrooms to electrifying destination stages across India.
                </p>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <SectionReveal>
                    <div className="relative rounded-3xl overflow-hidden border border-dustyRose/40 shadow-wineShadow">
                        <img
                            src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop"
                            alt="Shubham Atre Portrait"
                            className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deepWine via-transparent to-transparent opacity-70" />
                    </div>
                </SectionReveal>

                <SectionReveal delay={0.2} className="space-y-6 text-nudeBeige text-sm md:text-base leading-relaxed">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-cream">
                        "An event is not remembered by the schedule. It is remembered by how the room felt."
                    </h2>
                    <p>
                        With 8+ years commanding stages nationwide, Shubham Atre has anchored 500+ events ranging from elite luxury weddings to corporate leadership conventions.
                    </p>
                    <p>
                        His signature methodology combines sharp, unscripted wit, sophisticated presence, and high-energy interactive crowd coordination.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-dustyRose/30 text-cream font-semibold">
                        <div className="flex items-center gap-3">
                            <Trophy className="text-roseGold" size={20} />
                            <span className="text-sm">500+ Stages Hosted</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe className="text-roseGold" size={20} />
                            <span className="text-sm">Pan-India Availability</span>
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </div>
    );
}