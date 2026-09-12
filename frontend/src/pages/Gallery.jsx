import SlideDown from '../components/SlideDown';
import { Play } from 'lucide-react';

const galleryPhotos = [
    { url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", title: "Concert Hype" },
    { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", title: "Corporate Gala" },
    { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop", title: "Luxury Sangeet" },
    { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", title: "Keynote Moderation" },
    { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop", title: "Awards Night" },
    { url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop", title: "Youth Festival" },
];

export default function Gallery() {
    return (
        <div className="py-20 max-w-6xl mx-auto px-6">
            <SlideDown className="text-center mb-16">
                <p className="text-goldAccent text-xs font-bold uppercase tracking-widest">Stage In Action</p>
                <h1 className="text-4xl md:text-6xl font-black mt-2">Visual Moments & Showreels</h1>
                <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                    A glimpse into the crowds, lighting, energy, and memorable events hosted by Shubham.
                </p>
            </SlideDown>

            {/* Grid of Stage Photos with Zoom Hover Effect */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {galleryPhotos.map((photo, i) => (
                    <SlideDown key={i} delay={i * 0.1}>
                        <div className="relative group overflow-hidden rounded-2xl border border-white/10 h-72">
                            <img
                                src={photo.url}
                                alt={photo.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stageDark via-stageDark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-4 left-4">
                                <span className="text-xs uppercase text-goldAccent font-semibold tracking-wider">Live Capture</span>
                                <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                            </div>
                        </div>
                    </SlideDown>
                ))}
            </div>
        </div>
    );
}