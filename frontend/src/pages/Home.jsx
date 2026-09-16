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
        title: "Destination Weddings & Royal Sangeet",
        description: "Grand couple entries, family dance battles, witty roasts, and high-energy dance floor celebrations.",
        tag: "High Energy"
    },
    {
        title: "Corporate Summits & Leadership Galas",
        description: "Executive protocol, dignitary felicitation, panel coordination, and high-profile stage presence.",
        tag: "Sophisticated"
    },
    {
        title: "Concerts & Arena Fests",
        description: "Stadium chants, youth banter, pre-artist build-up, and non-stop momentum for massive crowds.",
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
        text: "Shubham made our Sangeet magical! Both our families were hesitant at first, but within 15 minutes he had everyone competing on the dance floor."
    },
    {
        name: "Sanjay Kapoor",
        event: "VP Marketing, Leadership Summit",
        text: "Remarkable stage charisma. Strict timeline discipline, seamless executive transitions, and kept over 1,200 delegates engaged throughout."
    }
];

export default function Home() {
    return (
        <div className="overflow-hidden bg-deepWine">
            <HeroSlideshow />

            {/* Brand Ticker */}
            <section className="py-7 bg-burgundy/40 border-y border-dustyRose/20">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-85">
                    <span className="text-xs uppercase tracking-[0.25em] text-roseGold font-bold">Trusted By Brands:</span>
                    {brands.map((b, i) => (
                        <span key={i} className="text-nudeBeige font-medium text-sm hover:text-cream transition-colors duration-300">
                            {b}
                        </span>
                    ))}
                </div>
            </section>

            {/* Stats Counter Section */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <SectionReveal>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div key={i} className="p-8 rounded-2xl bg-burgundy/50 border border-dustyRose/30 text-center hover:border-roseGold transition-all duration-500 shadow-wineGlow">
                                    <Icon className="w-8 h-8 mx-auto text-roseGold mb-3" />
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-cream">{stat.number}</h3>
                                    <p className="text-nudeBeige text-xs uppercase tracking-wider mt-2">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </SectionReveal>
            </section>

            {/* Services Grid */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <SectionReveal className="text-center mb-16">
                    <p className="text-roseGold text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2">
                        <Sparkles size={16} /> Versatility in Hosting
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black mt-3 text-cream">What I Bring To The Mic</h2>
                </SectionReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <SectionReveal key={index} delay={index * 0.15}>
                            <div className="bg-burgundy/60 border border-dustyRose/30 rounded-3xl p-8 hover:border-roseGold hover:-translate-y-2 transition-all duration-500 shadow-wineGlow flex flex-col justify-between h-full group">
                                <div>
                                    <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 bg-deepWine text-roseGold rounded-full border border-dustyRose/40">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-2xl font-bold text-cream group-hover:text-roseGold transition-colors duration-300 mt-5 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-nudeBeige text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>
                                <Link to="/services" className="inline-flex items-center gap-2 text-sm text-roseGold font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                    Explore Structure <ArrowRight size={16} />
                                </Link>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </section>

            {/* Spotlight Section */}
            <section className="py-24 bg-burgundy/30 border-y border-dustyRose/20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <SectionReveal>
                        <span className="text-roseGold text-xs font-bold uppercase tracking-[0.2em]">The Stage Edge</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-cream leading-tight">
                            More Than An Emcee. <br />
                            <span className="bg-gradient-to-r from-cream via-roseGold to-dustyRose bg-clip-text text-transparent">
                                An Experience Curator.
                            </span>
                        </h2>
                        <p className="text-nudeBeige text-sm md:text-base leading-relaxed mb-6">
                            A script can be memorized by anyone; true hosting requires reading the room's energy dynamically. I ensure every guest feels recognized and engaged.
                        </p>
                        <div className="space-y-4">
                            {reasons.map((r, i) => (
                                <div key={i} className="flex items-center gap-3 text-cream text-sm">
                                    <CheckCircle2 size={18} className="text-roseGold shrink-0" />
                                    <span>{r}</span>
                                </div>
                            ))}
                        </div>
                    </SectionReveal>

                    <SectionReveal delay={0.2}>
                        <div className="rounded-3xl overflow-hidden border border-dustyRose/40 shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
                                alt="Anchor Shubham on Stage"
                                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deepWine via-transparent to-transparent opacity-80" />
                        </div>
                    </SectionReveal>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <SectionReveal className="text-center mb-16">
                    <p className="text-roseGold text-xs font-bold uppercase tracking-[0.2em]">Verified Reviews</p>
                    <h2 className="text-3xl md:text-5xl font-black mt-2 text-cream">Words From Event Curators</h2>
                </SectionReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <SectionReveal key={i} delay={i * 0.15}>
                            <div className="bg-burgundy/50 border border-dustyRose/30 p-8 rounded-3xl relative shadow-wineGlow hover:border-roseGold transition-all duration-500">
                                <Quote className="w-12 h-12 text-roseGold/20 absolute top-6 right-6" />
                                <div className="flex gap-1 text-roseGold mb-4">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} size={15} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-cream italic text-sm md:text-base leading-relaxed mb-6">
                                    "{t.text}"
                                </p>
                                <div>
                                    <h4 className="font-bold text-cream">{t.name}</h4>
                                    <p className="text-roseGold text-xs tracking-wider">{t.event}</p>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-gradient-to-r from-deepWine via-burgundy to-deepWine border-t border-dustyRose/30 text-center">
                <SectionReveal className="max-w-3xl mx-auto px-6">
                    <h3 className="text-3xl md:text-5xl font-black mb-4 text-cream">Let's Electrify Your Stage</h3>
                    <p className="text-nudeBeige text-sm md:text-base mb-8">
                        Dates book up months in advance, especially during royal wedding and corporate calendar peaks.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-gradient-to-r from-roseGold to-dustyRose text-deepWine px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-roseGlow hover:scale-105 transition-all duration-500"
                    >
                        Lock Your Event Date
                    </Link>
                </SectionReveal>
            </section>
        </div>
    );
}