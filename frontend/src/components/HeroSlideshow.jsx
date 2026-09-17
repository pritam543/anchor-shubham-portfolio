import { Link } from 'react-router-dom';
import SectionReveal from './SectionReveal';

export default function HeroSlideshow() {
    return (
        <div className="relative h-[88vh] w-full overflow-hidden bg-espresso">
            <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url('/hero-stage.jpg')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-transparent" />
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
                <SectionReveal className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/40 backdrop-blur-md mb-6">
                        <span className="w-2 h-2 rounded-full bg-champagne animate-ping" />
                        <p className="text-white tracking-[0.2em] font-semibold uppercase text-xs">
                            Celebrity Emcee • Corporate Host • Wedding Specialist
                        </p>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.15]">
                        Electrifying Stages. <br />
                        <span className="text-champagne">Commanding The Room.</span>
                    </h1>

                    <p className="text-creamLight text-base md:text-lg mb-10 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm">
                        Spontaneous wit, refined charm, and magnetic energy delivering unforgettable experiences for premier destination weddings and corporate galas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-champagne text-espresso hover:bg-white hover:text-espresso shadow-softGlow transition-all duration-300"
                        >
                            Check Availability
                        </Link>
                        <Link
                            to="/gallery"
                            className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-xs tracking-wider uppercase border border-white/50 bg-black/30 backdrop-blur-md text-white hover:border-champagne hover:text-champagne transition-all duration-300"
                        >
                            Watch Showreels
                        </Link>
                    </div>
                </SectionReveal>
            </div>
        </div>
    );
}