import HeroSlideshow from '../components/HeroSlideshow';
import SectionReveal from '../components/SectionReveal';
import { Mic, Users, Award, Calendar, Sparkles, CheckCircle2, Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
    { icon: Mic, number: "500+", label: "Live Stage Events" },
    { icon: Users, number: "1M+", label: "Audience Mesmerized" },
    { icon: Award, number: "150+", label: "Corporate Galas" },
    { icon: Calendar, number: "8+", label: "Years on Stage" },
];

const brands = [
    "Tata Motors", "HDFC Bank", "Audi India", "Reliance Digital", "L&T", "Dainik Bhaskar", "Tech Mahindra"
];

const services = [
    {
        title: "Destination Weddings & Sangeet",
        description: "Grand royal couple entries, spontaneous family roasts, interactive games, and non-stop dance-floor escalation.",
        tag: "High Energy"
    },
    {
        title: "Corporate Summits & Awards",
        description: "Impeccable protocol moderation, dignitary felicitation, panel coordination, and high-profile executive presence.",
        tag: "Sophisticated"
    },
    {
        title: "Concerts & College Fests",
        description: "Stadium crowd chants, youth banter, pre-artist build-up, and relentless stage momentum for thousands.",
        tag: "Electric"
    }
];

const reasons = [
    "Instant crowd psychology analysis aur unscripted sharp humor",
    "Zero awkward dead-silence—effortless timeline control on live stages",
    "Bilingual fluency: Crisp Hindi & polished Corporate English",
    "Custom interactive games & curated stage segments"
];

const testimonials = [
    {
        name: "Rohit & Priya Mehta",
        event: "Destination Sangeet, Udaipur",
        text: "Shubham turned our Sangeet into pure celebration! Hamare dono families jo initially hesitant thi, unhe 15 minutes me stage par dance battle ke liye khada kar diya."
    },
    {
        name: "Sanjay Kapoor",
        event: "VP Marketing, Tech Summit",
        text: "One of the most articulate emcees we have worked with. Strict timeline synchronization and kept 1,200 attendees actively attentive during our leadership summit."
    }
];

export default function Home() {
    return (
        <div className="overflow-hidden bg-stageBg">
            <HeroSlideshow />

            {/* Brand Ticker */}
            <section className="py-8 bg-stageCard/60 border-y border-stageBorder/50">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75">
                    <span className="text-xs uppercase tracking-[0.25em] text-goldAccent font-bold">Trusted By Brands:</span>
                    {brands.map((b, i) => (
                        <span key={i} className="text-stageTextMuted font-medium text-sm hover:text-goldAccent transition-colors duration-300">
                            {b}
                        </span>
                    ))}
                </div>
            </section>

            {/* Stats Counter Section with Slide Reveal */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <SectionReveal>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div key={i} className="p-8 rounded-2xl bg-stageCard/80 border border-stageBorder text-center hover:border-goldAccent/50 transition-all duration-500 shadow-cardGlow">
                                    <Icon className="w-8 h-8 mx-auto text-goldAccent mb-3" />
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">{stat.number}</h3>
                                    <p className="text-stageTextMuted text-xs uppercase tracking-wider mt-2">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </SectionReveal>
            </section>

            {/* Services Grid with Blanket Slide Animation */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <SectionReveal className="text-center mb-16">
                    <p className="text-goldAccent text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2">
                        <Sparkles size={16} /> Versatility in Hosting
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black mt-3 text-white">What I Bring To The Mic</h2>
                </SectionReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <SectionReveal key={index} delay={index * 0.15}>
                            <div className="bg-stageCard border border-stageBorder rounded-3xl p-8 hover:border-goldAccent/60 hover:-translate-y-2 transition-all duration-500 shadow-cardGlow flex flex-col justify-between h-full group">
                                <div>
                                    <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 bg-goldAccent/10 text-goldAccent rounded-full border border-goldAccent/30">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-goldAccent transition-colors duration-300 mt-5 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-stageTextMuted text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>
                                <Link to="/services" className="inline-flex items-center gap-2 text-sm text-goldAccent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                    Explore Structure <ArrowRight size={16} />
                                </Link>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </section>

            {/* Why Choose Section with Blanket Reveal */}
            <section className="py-24 bg-stageCard/40 border-y border-stageBorder/50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <SectionReveal>
                        <span className="text-goldAccent text-xs font-bold uppercase tracking-[0.2em]">The Stage Edge</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-white leading-tight">
                            More Than An Emcee. <br />
                            <span className="bg-gradient-to-r from-goldLight to-goldAccent bg-clip-text text-transparent">
                                An Experience Curator.
                            </span>
                        </h2>
                        <p className="text-stageTextMuted text-sm md:text-base leading-relaxed mb-6">
                            A script can be memorized by anyone; real hosting requires reading room dynamics in milliseconds. My focus is keeping guests completely engrossed without feeling forced.
                        </p>
                        <div className="space-y-4">
                            {reasons.map((r, i) => (
                                <div key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                    <CheckCircle2 size={18} className="text-goldAccent shrink-0" />
                                    <span>{r}</span>
                                </div>
                            ))}
                        </div>
                    </SectionReveal>

                    <SectionReveal delay={0.2}>
                        <div className="rounded-3xl overflow-hidden border border-stageBorder/80 shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
                                alt="Anchor Shubham on Stage"
                                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stageBg via-transparent to-transparent opacity-80" />
                        </div>
                    </SectionReveal>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <SectionReveal className="text-center mb-16">
                    <p className="text-goldAccent text-xs font-bold uppercase tracking-[0.2em]">Verified Reviews</p>
                    <h2 className="text-3xl md:text-5xl font-black mt-2 text-white">Words From Event Curators</h2>
                </SectionReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <SectionReveal key={i} delay={i * 0.15}>
                            <div className="bg-stageCard border border-stageBorder p-8 rounded-3xl relative shadow-cardGlow hover:border-goldAccent/40 transition-all duration-500">
                                <Quote className="w-12 h-12 text-goldAccent/15 absolute top-6 right-6" />
                                <div className="flex gap-1 text-goldAccent mb-4">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} size={15} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-zinc-300 italic text-sm md:text-base leading-relaxed mb-6">
                                    "{t.text}"
                                </p>
                                <div>
                                    <h4 className="font-bold text-white">{t.name}</h4>
                                    <p className="text-goldAccent text-xs tracking-wider">{t.event}</p>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </section>

            {/* Call To Action Banner */}
            <section className="py-20 bg-gradient-to-r from-stageCard via-stageBg to-stageCard border-t border-goldAccent/30 text-center">
                <SectionReveal className="max-w-3xl mx-auto px-6">
                    <h3 className="text-3xl md:text-5xl font-black mb-4 text-white">Let's Electrify Your Stage</h3>
                    <p className="text-stageTextMuted text-sm md:text-base mb-8">
                        Dates book up months in advance, especially during wedding and corporate annual quarter peaks.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-gradient-to-r from-goldAccent to-goldLight text-stageBg px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-goldGlow hover:scale-105 transition-all duration-500"
                    >
                        Lock Your Event Date
                    </Link>
                </SectionReveal>
            </section>
        </div>
    );
}