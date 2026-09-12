import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import SlideDown from './SlideDown';
import 'swiper/css';
import 'swiper/css/effect-fade';

const stageImages = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop"
];

export default function HeroSlideshow() {
    return (
        <div className="relative h-[85vh] w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
            >
                {stageImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="h-full w-full bg-cover bg-center transition-transform duration-[6000ms] scale-105"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-stageDark via-stageDark/70 to-black/80" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
                <SlideDown className="max-w-3xl">
                    <p className="text-goldAccent tracking-widest font-semibold uppercase text-xs md:text-sm mb-4 px-4 py-1 border border-goldAccent/40 rounded-full inline-block bg-stageDark/50 backdrop-blur-md">
                        Celebrity Emcee • Corporate Host • Wedding Specialist
                    </p>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Electrifying Stages. <br />
                        <span className="text-goldAccent">Engaging Crowds.</span>
                    </h1>

                    <p className="text-zinc-300 text-base md:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
                        High energy, spontaneous humor aur seamless crowd control har stage, gala night aur destination wedding ke liye.
                    </p>

                    <div className="flex gap-4 justify-center items-center">
                        <a
                            href="/contact"
                            className="bg-goldAccent text-stageDark px-8 py-3 rounded-full font-bold shadow-xl hover:bg-goldHover hover:scale-105 transition-all duration-300"
                        >
                            Check Availability
                        </a>
                        <a
                            href="/gallery"
                            className="border border-zinc-500 backdrop-blur-sm px-8 py-3 rounded-full font-bold hover:border-goldAccent hover:text-goldAccent transition-all duration-300 hover:scale-105"
                        >
                            Watch Showreels
                        </a>
                    </div>
                </SlideDown>
            </div>
        </div>
    );
}