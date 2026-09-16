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
        <div className="relative h-[88vh] w-full overflow-hidden bg-deepWine">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                speed={2500}
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
            >
                {stageImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="h-full w-full bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-105"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            {/* Deep Wine Overlay */}
                            <div className="absolute inset-0 bg-deepWine/75" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
                <SectionReveal className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy/80 border border-roseGold/40 backdrop-blur-md mb-6 shadow-roseGlow">
                        <span className="w-2 h-2 rounded-full bg-roseGold animate-ping" />
                        <p className="text-cream tracking-[0.2em] font-semibold uppercase text-xs">
                            Celebrity Emcee • Corporate Host • Wedding Specialist
                        </p>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black tracking-tight text-cream mb-6 leading-[1.15]">
                        Electrifying Stages. <br />
                        <span className="text-roseGold">Commanding The Room.</span>
                    </h1>

                    <p className="text-nudeBeige text-base md:text-lg mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                        Spontaneous wit, refined charm, and magnetic energy delivering unforgettable experiences for premier weddings and corporate summits.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-roseGold text-deepWine hover:bg-burgundy hover:text-cream shadow-roseGlow transition-all duration-300"
                        >
                            Check Availability
                        </Link>
                        <Link
                            to="/gallery"
                            className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-xs tracking-wider uppercase border border-nudeBeige/60 bg-deepWine/40 backdrop-blur-md text-cream hover:border-roseGold hover:text-roseGold transition-all duration-300"
                        >
                            Watch Showreels
                        </Link>
                    </div>
                </SectionReveal>
            </div>
        </div>
    );
}