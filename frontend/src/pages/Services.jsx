import SectionReveal from '../components/SectionReveal';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        title: "Destination Weddings & Royal Sangeet",
        subtitle: "Turning celebrations into unforgettable high-energy memories",
        points: [
            "Royal couple entry choreography voice-overs",
            "Interactive family Sangeet dance battles & roasts",
            "Bespoke couple game segments & audience banter",
            "DJ coordination & dance-floor escalation routines"
        ],
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop"
    },
    {
        title: "Corporate Summits, Awards & Launches",
        subtitle: "Precision protocol, prestige, and seamless executive flow",
        points: [
            "Strict agenda timing & seamless keynote introductions",
            "VIP dignitary handling & award handover protocols",
            "Audience polling, interactive icebreakers & moderation",
            "Fireside chats & leadership panel orchestration"
        ],
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop"
    },
    {
        title: "Concerts, Music Festivals & Sports Leagues",
        subtitle: "Stadium-shaking crowd chants & relentless momentum",
        points: [
            "Celebrity artist opening build-up & hype engine",
            "10,000+ crowd simultaneous chanting & waving",
            "Live sponsor giveaways & interactive stage challenges",
            "Fast-paced emergency improvisation without awkwardness"
        ],
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=900&auto=format&fit=crop"
    }
];

export default function Services() {
    return (
        <div className="py-20 max-w-6xl mx-auto px-6 bg-deepWine">
            <SectionReveal className="text-center mb-16">
                <p className="text-roseGold text-xs font-bold uppercase tracking-[0.25em]">Curation Options</p>
                <h1 className="text-4xl md:text-6xl font-black mt-2 text-cream">Specialized Emcee Formats</h1>
                <p className="text-nudeBeige mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    Every celebration has a distinct rhythm. Choose the stage hosting style tailored to your event.
                </p>
            </SectionReveal>

            <div className="space-y-16">
                {servicesList.map((service, index) => (
                    <SectionReveal key={index} delay={0.1}>
                        <div className="grid md:grid-cols-2 gap-8 items-center bg-burgundy/50 border border-dustyRose/30 rounded-3xl p-8 hover:border-roseGold transition-all duration-500 shadow-wineGlow">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-cream mb-2">{service.title}</h2>
                                <p className="text-roseGold text-sm mb-6 font-medium">{service.subtitle}</p>
                                <div className="space-y-3 mb-8">
                                    {service.points.map((pt, i) => (
                                        <div key={i} className="flex items-center gap-3 text-cream text-sm">
                                            <CheckCircle2 size={17} className="text-roseGold shrink-0" />
                                            <span>{pt}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    to="/contact"
                                    className="inline-block bg-gradient-to-r from-roseGold to-dustyRose text-deepWine px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-roseGlow"
                                >
                                    Book Format
                                </Link>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-dustyRose/30 h-[320px]">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                                />
                            </div>
                        </div>
                    </SectionReveal>
                ))}
            </div>
        </div>
    );
}