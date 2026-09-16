import SectionReveal from '../components/SectionReveal';
import { Trophy, Globe, Sparkles, Award } from 'lucide-react';

export default function About() {
    return (
        <div className="py-20 max-w-6xl mx-auto px-6 bg-stageBg">
            <SectionReveal className="text-center mb-16">
                <p className="text-goldAccent text-xs font-bold uppercase tracking-[0.25em]">Behind The Microphone</p>
                <h1 className="text-4xl md:text-6xl font-black mt-2 text-white">The Voice & Energy</h1>
                <p className="text-stageTextMuted mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    From high-stakes boardrooms to electrifying destination stages across India.
                </p>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <SectionReveal>
                    <div className="relative rounded-3xl overflow-hidden border border-stageBorder shadow-cardGlow">
                        <img
                            src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop"
                            alt="Shubham Atre Portrait"
                            className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stageBg via-transparent to-transparent opacity-70" />
                    </div>
                </SectionReveal>

                <SectionReveal delay={0.2} className="space-y-6 text-stageTextMuted text-sm md:text-base leading-relaxed">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                        "An event is not remembered by the schedule. It is remembered by how the room felt."
                    </h2>
                    <p>
                        With 8+ years commanding stages nationwide, Shubham Atre has anchored 500+ diverse events ranging from high-stakes corporate award galas to high-tempo Sangeet celebrations.
                    </p>
                    <p>
                        His signature hosting methodology merges sharp, unscripted wit, corporate elegance, and high-energy interactive crowd control. Whether speaking to 3,000 corporate delegates or 400 festive wedding guests, every person is brought into the experience.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stageBorder text-white font-semibold">
                        <div className="flex items-center gap-3">
                            <Trophy className="text-goldAccent" size={20} />
                            <span className="text-sm">500+ Stages Hosted</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe className="text-goldAccent" size={20} />
                            <span className="text-sm">Pan-India Availability</span>
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </div>
    );
}