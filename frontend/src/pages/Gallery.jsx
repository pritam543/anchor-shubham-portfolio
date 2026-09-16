import SectionReveal from '../components/SectionReveal';

const galleryPhotos = [
    { url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", title: "Concert Euphoria" },
    { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", title: "Corporate Gala Night" },
    { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop", title: "Royal Sangeet Glow" },
    { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", title: "Keynote Leadership" },
    { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop", title: "National Award Gala" },
    { url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop", title: "Youth Arena Fest" },
];

export default function Gallery() {
    return (
        <div className="py-20 bg-deepWine text-cream">
            <div className="max-w-6xl mx-auto px-6">
                <SectionReveal className="text-center mb-16">
                    <p className="text-roseGold text-xs font-bold uppercase tracking-[0.25em]">Stage In Action</p>
                    <h1 className="text-4xl md:text-6xl font-black mt-2 text-cream">Moments & Showreels</h1>
                    <p className="text-nudeBeige mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        A visual showcase of crowd energy, elegant galas, and stage highlights across India.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {galleryPhotos.map((photo, i) => (
                        <SectionReveal key={i} delay={i * 0.1}>
                            <div className="relative group overflow-hidden rounded-3xl border border-roseGold/40 h-80 shadow-roseGlow">
                                <img
                                    src={photo.url}
                                    alt={photo.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deepWine via-deepWine/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                                <div className="absolute bottom-5 left-5">
                                    <span className="text-[11px] uppercase text-roseGold font-bold tracking-widest">Live Stage</span>
                                    <h3 className="text-cream font-bold text-lg">{photo.title}</h3>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}