import SectionReveal from '../components/SectionReveal';

const galleryPhotos = [
    { url: "/hero-stage.jpg", title: "Live Sangeet Euphoria" },
    { url: "frontend/public/images/download (1).jpeg", title: "Corporate Gala Night" },
    { url: "frontend/public/images/download (4).jpeg", title: "Royal Wedding Entry" },
    { url: "frontend/public/images/download (5).jpeg", title: "Keynote Moderation" },
    { url: "frontend/public/images/download (6).jpeg", title: "National Award Gala" },
    ,
];

export default function Gallery() {
    return (
        <div className="py-20 bg-pearl text-espresso min-h-screen">
            <div className="max-w-6xl mx-auto px-6">
                <SectionReveal className="text-center mb-16">
                    <p className="text-champagneDark text-xs font-bold uppercase tracking-[0.25em]">Stage In Action</p>
                    <h1 className="text-4xl md:text-6xl font-black mt-2 text-espresso">Moments & Showreels</h1>
                    <p className="text-warmMuted mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        A visual showcase of crowd energy, elegant galas, and stage highlights across India.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {galleryPhotos.map((photo, i) => (
                        <SectionReveal key={i} delay={i * 0.1}>
                            <div className="relative group overflow-hidden rounded-3xl border border-champagne/20 h-80 shadow-luxuryCard">
                                <img
                                    src={photo.url}
                                    alt={photo.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[11px] uppercase text-champagne font-bold tracking-widest">Live Stage</span>
                                    <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}