import SectionReveal from '../components/SectionReveal';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        title: "Destination Weddings & Sangeet Battles",
        subtitle: "Turning celebrations into unforgettable high-energy memories",
        points: [
            "Royal couple entry choreography voice-overs",
            "Interactive family Sangeet dance battles & roasts",
            "Bespoke couple game segments & audience banter",
            "DJ coordination & dance-floor escalation routines"
        ],
        img: "/hero-stage.jpg"
    },
    {
        title: "Haldi, Mehendi & Phere Rituals",
        subtitle: "Sacred customs enriched with heartfelt warmth & engagement",
        points: [
            "Vibrant Haldi pool-party icebreakers & flower petal showers",
            "Heartfelt storytelling during Phere & bridal walkthrough",
            "Elderly family involvement & respectful facilitation",
            "Pacing rituals to avoid tiring wedding guests"
        ],
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop"
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
    }
];

export default function Services() {
    return (
        <div className="py-20 bg-pearl text-espresso min-h-screen">
            <div className="max-w-6xl mx-auto px-6">
                <SectionReveal className="text-center mb-16">
                    <p className="text-champagneDark text-xs font-bold uppercase tracking-[0.25em]">Curation Options</p>
                    <h1 className="text-4xl md:text-6xl font-black mt-2 text-espresso">Specialized Stage Formats</h1>
                    <p className="text-warmMuted mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        Every celebration has a distinct rhythm. Choose the stage hosting style tailored to your event.
                    </p>
                </SectionReveal>

                <div className="space-y-16">
                    {servicesList.map((service, index) => (
                        <SectionReveal key={index} delay={0.1}>
                            <div className="grid md:grid-cols-2 gap-8 items-center bg-white border border-champagne/20 rounded-3xl p-8 hover:border-champagneDark transition-all duration-300 shadow-luxuryCard">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-espresso mb-2">{service.title}</h2>
                                    <p className="text-champagneDark text-sm mb-6 font-bold">{service.subtitle}</p>
                                    <div className="space-y-3 mb-8">
                                        {service.points.map((pt, i) => (
                                            <div key={i} className="flex items-center gap-3 text-warmMuted text-sm font-medium">
                                                <CheckCircle2 size={17} className="text-champagneDark shrink-0" />
                                                <span>{pt}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="inline-block bg-espresso text-white hover:bg-champagneDark hover:text-espresso px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-softGlow"
                                    >
                                        Book Format
                                    </Link>
                                </div>

                                <div className="overflow-hidden rounded-2xl border border-champagne/20 h-[320px]">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}