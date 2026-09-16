import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import SectionReveal from './SectionReveal';
import 'swiper/css';
import 'swiper/css/effect-fade';

const stageImages = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1920&auto=format&fit=crop"
];

export default function HeroSlideshow() {
    return (
        <div className="relative h-[90vh] w-full overflow-hidden bg-stageBg">
            {/* Smooth Fade Image Slider */}
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                speed={2500}
                fadeEffect={{ crossFade: true }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false
                }}
                loop={true}
                className="h-full w-full"
            >
                {stageImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="h-full w-full bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-105"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            {/* Radial Vignette & Gradient Shading for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-stageBg via-stageBg/75 to-stageBg/50" />
                            <div className="absolute inset-0 bg-radial-gradient from-transparent via-stageBg/30 to-stageBg" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Floating Center Hero Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
                <SectionReveal className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-goldAccent/30 backdrop-blur-md mb-6 shadow-goldGlow">
                        <span className="w-2 h-2 rounded-full bg-goldAccent animate-ping" />
                        <p className="text-goldAccent tracking-[0.2em] font-semibold uppercase text-xs">
                            Celebrity Emcee • Corporate Host • Destination Wedding Specialist
                        </p>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
                        Electrifying Stages. <br />
                        <span className="bg-gradient-to-r from-goldLight via-goldAccent to-amber-600 bg-clip-text text-transparent">
                            Commanding The Room.
                        </span>
                    </h1>

                    <p className="text-stageTextMuted text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Spontaneous wit, immaculate crowd psychology, and high-octane stage energy delivering seamless experiences for India's biggest celebrations.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-goldAccent to-goldLight text-stageBg hover:scale-105 hover:shadow-goldGlow transition-all duration-500"
                        >
                            Check Availability
                        </Link>
                        <Link
                            to="/gallery"
                            className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-sm tracking-wider uppercase border border-stageBorder bg-white/[0.03] backdrop-blur-md text-white hover:border-goldAccent hover:text-goldAccent transition-all duration-500"
                        >
                            Watch Showreels
                        </Link>
                    </div>
                </SectionReveal>
            </div>
        </div>
    );
}