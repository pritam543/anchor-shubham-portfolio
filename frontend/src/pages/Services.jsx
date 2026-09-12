import SlideDown from '../components/SlideDown';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const detailedServices = [
    {
        title: "Luxury Destination Weddings & Sangeet",
        subtitle: "Turn celebrations into unforgettable family memories",
        points: [
            "Royal bride & groom entry choreography voice-over",
            "Interactive Sangeet family face-offs & dance battles",
            "Bespoke couple quiz & impromptu roast sessions",
            "High energy dance-floor countdown & DJ coordination"
        ],
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Corporate Summits, Awards & Product Launches",
        subtitle: "Precision, prestige, and executive presence",
        points: [
            "Strict schedule pacing & seamless stage transitions",
            "VIP dignitary protocol & award handover ceremonies",
            "Audience ice-breakers & live polling engagement",
            "Fireside chats, keynote intros & panel moderation"
        ],
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Concerts, College Fests & Sports Leagues",
        subtitle: "High decibel energy and stadium control",
        points: [
            "Celebrity artist opening build-up & hype engine",
            "10,000+ crowd simultaneous chanting & waving",
            "Sponsor integration & live giveaway segments",
            "Unscripted improvisational crowd banter"
        ],
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
    }
];

export default function Services() {
    return (
        <div className="py-20 max-w-6xl mx-auto px-6">
            <SlideDown className="text-center mb-16">
                <p className="text-goldAccent text-xs font-bold uppercase tracking-widest">What I Offer</p>
                <h1 className="text-4xl md:text-6xl font-black mt-2">Specialized Emcee Services</h1>
                <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                    Custom stage hosting formats designed specifically for your event category.
                </p>
            </SlideDown>

            <div className="space-y-16">
                {detailedServices.map((s, index) => (
                    <SlideDown key={index} delay={index * 0.15}>
                        <div className={`grid md:grid-cols-2 gap-8 items-center bg-stageCard border border-white/10 rounded-3xl p-8 hover:border-goldAccent/40 transition-all ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{s.title}</h2>
                                <p className="text-goldAccent text-sm mb-6 font-medium">{s.subtitle}</p>
                                <div className="space-y-3 mb-8">
                                    {s.points.map((p, i) => (
                                        <div key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                            <CheckCircle2 size={18} className="text-goldAccent shrink-0" />
                                            <span>{p}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    to="/contact"
                                    className="inline-block bg-goldAccent text-stageDark px-6 py-2.5 rounded-full font-bold text-sm hover:bg-goldHover transition-colors"
                                >
                                    Book This Service
                                </Link>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/10 h-[300px]">
                                <img src={s.img} alt={s.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>
                    </SlideDown>
                ))}
            </div>
        </div>
    );
}