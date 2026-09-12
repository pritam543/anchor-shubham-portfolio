import HeroSlideshow from '../components/HeroSlideshow';
import SlideDown from '../components/SlideDown';
import { Mic, Users, Award, Calendar, Sparkles, CheckCircle2, Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
    { icon: Mic, number: "500+", label: "Live Shows Hosted" },
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
        description: "Grand couple entries, spontaneous family roasts, interactive games aur packed dance floor vibes.",
        tag: "High Energy"
    },
    {
        title: "Corporate Summits & Awards",
        description: "Flawless protocol management, dignitary felicitation, panel coordination aur refined stage presence.",
        tag: "Sophisticated"
    },
    {
        title: "College Fests & Concerts",
        description: "Stadium-shaking crowd chants, youth banter, pre-artist hype aur relentless stage momentum.",
        tag: "Electric"
    }
];

const reasons = [
    "Instant crowd psychology analysis aur unscripted humor",
    "Zero awkward pauses—effortless time management on live stages",
    "Bilingual fluency: Crisp Hindi & polished Corporate English",
    "Custom tailored games and audience interaction segments"
];

const testimonials = [
    {
        name: "Rohit & Priya Mehta",
        event: "Destination Sangeet, Udaipur",
        text: "Shubham made our Sangeet night unforgettable! Humare dono parivaar jo pehle sharma rahe the, unhe 20 minute me dance floor par la khada kiya."
    },
    {
        name: "Sanjay Kapoor",
        event: "VP Marketing, Tech Summit",
        text: "One of the most professional emcees we have worked with. Strict timeline follow kiya aur CEO panel discussion ko bohot smooth banaya."
    }
];

export default function Home() {
    return (
        <div className="overflow-hidden">
            <HeroSlideshow />

            {/* Brand & Clients Ticker */}
            <div className="py-6 bg-stageDark border-b border-white/10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
                    <span className="text-xs uppercase tracking-widest text-goldAccent font-bold">Trusted By Brands:</span>
                    {brands.map((b, i) => (
                        <span key={i} className="text-zinc-400 font-semibold text-sm hover:text-white transition-colors">
                            {b}
                        </span>
                    ))}
                </div>
            </div>

            {/* Stats Counter Section */}
            <section className="py-16 bg-stageCard border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <SlideDown key={i} delay={i * 0.1} className="text-center">
                                <Icon className="w-8 h-8 mx-auto text-goldAccent mb-2" />
                                <h3 className="text-3xl md:text-4xl font-extrabold text-white">{stat.number}</h3>
                                <p className="text-zinc-400 text-sm mt-1">{stat.label}</p>
                            </SlideDown>
                        );
                    })}
                </div>
            </section>

            {/* Services Grid with Gold Accents */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <SlideDown className="text-center mb-16">
                    <p className="text-goldAccent text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                        <Sparkles size={16} /> Stage Mastery
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold mt-2">What I Bring To The Mic</h2>
                </SlideDown>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <SlideDown key={index} delay={index * 0.15}>
                            <div className="bg-stageCard border border-white/10 rounded-2xl p-8 hover:border-goldAccent/60 hover:-translate-y-3 transition-all duration-300 group shadow-lg flex flex-col justify-between h-full">
                                <div>
                                    <span className="text-xs font-semibold px-3 py-1 bg-goldAccent/10 text-goldAccent rounded-full border border-goldAccent/20">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-goldAccent transition-colors mt-4 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>
                                <Link to="/services" className="inline-flex items-center gap-2 text-sm text-goldAccent font-semibold group-hover:underline">
                                    Learn Details <ArrowRight size={15} />
                                </Link>
                            </div>
                        </SlideDown>
                    ))}
                </div>
            </section>

            {/* Why Choose Shubham Section */}
            <section className="py-20 bg-stageCard/60 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <SlideDown>
                        <span className="text-goldAccent text-xs font-bold uppercase tracking-widest">Stage Philosophy</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">
                            More Than Just Speaking — <br />
                            <span className="text-goldAccent">I Command The Room.</span>
                        </h2>
                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
                            Har event ka ek heartbeat hota hai. Mera focus scripted lines ratne par nahi, balki audience ka mood padhkar live stage par dynamic flow create karne par hota hai.
                        </p>
                        <div className="space-y-3">
                            {reasons.map((r, i) => (
                                <div key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                    <CheckCircle2 size={18} className="text-goldAccent shrink-0" />
                                    <span>{r}</span>
                                </div>
                            ))}
                        </div>
                    </SlideDown>

                    <SlideDown delay={0.2} className="relative">
                        <div className="rounded-2xl overflow-hidden border border-goldAccent/30 shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop"
                                alt="Anchor on Stage"
                                className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stageDark via-transparent to-transparent" />
                        </div>
                    </SlideDown>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <SlideDown className="text-center mb-16">
                    <p className="text-goldAccent text-xs font-bold uppercase tracking-widest">Client Feedback</p>
                    <h2 className="text-3xl md:text-5xl font-extrabold mt-2">What Event Curators Say</h2>
                </SlideDown>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <SlideDown key={i} delay={i * 0.15}>
                            <div className="bg-stageCard border border-white/10 p-8 rounded-2xl relative shadow-xl hover:border-goldAccent/40 transition-all">
                                <Quote className="w-10 h-10 text-goldAccent/20 absolute top-6 right-6" />
                                <div className="flex gap-1 text-goldAccent mb-4">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-zinc-300 italic text-sm md:text-base leading-relaxed mb-6">
                                    "{t.text}"
                                </p>
                                <div>
                                    <h4 className="font-bold text-white">{t.name}</h4>
                                    <p className="text-goldAccent text-xs">{t.event}</p>
                                </div>
                            </div>
                        </SlideDown>
                    ))}
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-stageCard via-stageDark to-stageCard border-t border-goldAccent/30 text-center">
                <SlideDown className="max-w-3xl mx-auto px-6">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Planning An Upcoming Event?</h3>
                    <p className="text-zinc-400 text-sm md:text-base mb-8">
                        Dates fast fill up hoti hain, especially wedding aur corporate quarter-end seasons me.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-goldAccent text-stageDark px-10 py-4 rounded-full font-bold shadow-xl hover:bg-goldHover hover:scale-105 transition-all duration-300"
                    >
                        Lock Your Date Now
                    </Link>
                </SlideDown>
            </section>
        </div>
    );
}