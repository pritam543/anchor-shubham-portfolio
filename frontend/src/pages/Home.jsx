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
        title: "Sangeet & Destination Weddings",
        description: "Grand couple entries, family dance battles, impromptu roasts, and high-energy dance floor flow.",
        tag: "High Energy"
    },
    {
        title: "Haldi & Phere Protocols",
        description: "Heartwarming rituals, emotional storytelling, crowd involvement, and traditional decorum.",
        tag: "Traditional"
    },
    {
        title: "Corporate Summits & Receptions",
        description: "Executive protocol, dignitary felicitation, panel coordination, and high-profile stage presence.",
        tag: "Sophisticated"
    }
];

const reasons = [
    "Instant crowd psychology analysis aur unscripted sharp humor",
    "Zero awkward pauses—effortless timeline control on live stages",
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
        <div className="overflow-hidden bg-cream text-deepWine">
            {/* 1. HERO SECTION: Deep Wine */}
            <HeroSlideshow />

            {/* Brands Bar: Nude Beige */}
            <section className="py-6 bg-nudeBeige border-y border-burgundy/10">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-14">
                    <span className="text-xs uppercase tracking-[0.2em] text-burgundy font-bold">Trusted By Brands:</span>
                    {brands.map((b, i) => (
                        <span key={i} className="text-deepWine/80 font-semibold text-sm hover:text-burgundy transition-colors">
                            {b}
                        </span>
                    ))}
                </div>
            </section>

            {/* 2. ABOUT / THE STAGE EDGE: Cream #FFF5EA */}
            <section className="py-24 max-w-7xl mx-auto px-6 bg-cream">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <SectionReveal>
                        <span className="text-roseGold text-xs font-bold uppercase tracking-[0.2em]">The Stage Edge</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-burgundy leading-tight">
                            More Than An Emcee. <br />
                            <span className="text-deepWine">An Experience Curator.</span>
                        </h2>
                        <p className="text-deepWine/80 text-base leading-relaxed mb-6 font-normal">
                            A script can be memorized by anyone; true hosting requires reading the room's energy dynamically. I ensure every guest feels recognized and engaged.
                        </p>
                        <div className="space-y-4">
                            {reasons.map((r, i) => (
                                <div key={i} className="flex items-center gap-3 text-deepWine text-sm font-medium">
                                    <CheckCircle2 size={18} className="text-roseGold shrink-0" />
                                    <span>{r}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full bg-roseGold text-deepWine hover:bg-burgundy hover:text-cream transition-all duration-300"
                            >
                                Read Shubham's Story <ArrowRight size={14} />
                            </Link>
                        </div>
                    </SectionReveal>

                    <SectionReveal delay={0.2}>
                        <div className="rounded-3xl overflow-hidden border border-nudeBeige shadow-luxuryCard relative">
                            <img
                                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
                                alt="Anchor Shubham on Stage"
                                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </SectionReveal>
                </div>
            </section>

            {/* 3. SERVICES SECTION: Nude Beige #E8D5C4 */}
            <section className="py-24 bg-nudeBeige border-y border-burgundy/10">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionReveal className="text-center mb-16">
                        <p className="text-roseGold text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2">
                            <Sparkles size={16} /> Curated Offerings
                        </p>
                        <h2 className="text-3xl md:text-5xl font-black mt-3 text-burgundy">Wedding & Stage Formats</h2>
                    </SectionReveal>

                    {/* Cards: Cream #FFF5EA | Icons: Rose Gold #C98F8F | Titles: Burgundy #4A1022 */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((item, index) => (
                            <SectionReveal key={index} delay={index * 0.15}>
                                <div className="bg-cream border border-nudeBeige rounded-3xl p-8 hover:border-roseGold hover:-translate-y-2 transition-all duration-300 shadow-luxuryCard flex flex-col justify-between h-full group">
                                    <div>
                                        <span className="text-[11px] font-bold tracking-wider uppercase px-3.5 py-1 bg-nudeBeige text-burgundy rounded-full">
                                            {item.tag}
                                        </span>
                                        <h3 className="text-2xl font-bold text-burgundy group-hover:text-deepWine transition-colors mt-5 mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-deepWine/75 text-sm leading-relaxed mb-6 font-normal">
                                            {item.description}
                                        </p>
                                    </div>
                                    <Link to="/services" className="inline-flex items-center gap-2 text-sm text-burgundy font-bold group-hover:text-roseGold transition-colors">
                                        Explore Details <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. STATS / IMPACT: Deep Wine #260812 */}
            <section className="py-20 bg-deepWine text-cream">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionReveal>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={i} className="p-8 rounded-2xl bg-burgundy/60 border border-nudeBeige/20 text-center hover:border-roseGold transition-all duration-300 shadow-roseGlow">
                                        <Icon className="w-8 h-8 mx-auto text-roseGold mb-3" />
                                        <h3 className="text-3xl md:text-4xl font-extrabold text-cream">{stat.number}</h3>
                                        <p className="text-nudeBeige text-xs uppercase tracking-wider mt-2">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </SectionReveal>
                </div>
            </section>

            {/* 5. TESTIMONIALS SECTION: Cream #FFF5EA */}
            <section className="py-24 max-w-7xl mx-auto px-6 bg-cream">
                <SectionReveal className="text-center mb-16">
                    <p className="text-roseGold text-xs font-bold uppercase tracking-[0.2em]">Client Feedback</p>
                    <h2 className="text-3xl md:text-5xl font-black mt-2 text-burgundy">Words From Event Curators</h2>
                </SectionReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <SectionReveal key={i} delay={i * 0.15}>
                            <div className="bg-nudeBeige/40 border border-nudeBeige p-8 rounded-3xl relative shadow-luxuryCard hover:border-roseGold transition-all duration-300">
                                <Quote className="w-12 h-12 text-roseGold/30 absolute top-6 right-6" />
                                <div className="flex gap-1 text-roseGold mb-4">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} size={15} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-deepWine italic text-base leading-relaxed mb-6">
                                    "{t.text}"
                                </p>
                                <div>
                                    <h4 className="font-bold text-burgundy">{t.name}</h4>
                                    <p className="text-deepWine/70 text-xs font-medium tracking-wider">{t.event}</p>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </section>

            {/* 6. CONTACT / BOOKING BANNER: Burgundy #4A1022 */}
            <section className="py-20 bg-burgundy text-cream text-center">
                <SectionReveal className="max-w-3xl mx-auto px-6">
                    <h3 className="text-3xl md:text-5xl font-black mb-4 text-cream">Ready To Lock Your Event Date?</h3>
                    <p className="text-nudeBeige text-base mb-8 font-normal">
                        Dates fill up months in advance during destination wedding seasons and annual corporate summits.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-roseGold text-deepWine hover:bg-cream hover:text-burgundy px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-roseGlow transition-all duration-300"
                    >
                        Check Availability Now
                    </Link>
                </SectionReveal>
            </section>
        </div>
    );
}