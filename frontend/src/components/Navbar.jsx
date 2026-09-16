import { Link, useLocation } from 'react-router-dom';
import { Mic2, PhoneCall } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-stageBg/85 border-b border-stageBorder/60 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Brand Logo with Glow */}
                <Link to="/" className="group flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-goldAccent/10 border border-goldAccent/40 flex items-center justify-center group-hover:border-goldAccent transition-all duration-500 shadow-goldGlow">
                        <Mic2 className="w-5 h-5 text-goldAccent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-xl font-extrabold tracking-wider text-white group-hover:text-goldAccent transition-colors duration-300">
                        SHUBHAM <span className="font-light text-goldAccent">ATRE</span>
                    </span>
                </Link>

                {/* Navigation Items with Smooth Hover Animations */}
                <nav className="hidden md:flex items-center gap-2">
                    {navLinks.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-500 ease-out hover:text-goldLight ${isActive
                                    ? 'text-goldAccent bg-goldAccent/10 border border-goldAccent/30 shadow-sm'
                                    : 'text-stageTextMuted hover:bg-white/[0.04]'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA Button */}
                <Link
                    to="/contact"
                    className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-stageBg bg-gradient-to-r from-goldAccent to-goldLight hover:from-goldLight hover:to-goldAccent shadow-goldGlow hover:shadow-lg hover:scale-105 transition-all duration-500"
                >
                    <PhoneCall size={14} className="animate-bounce" />
                    <span>Book Anchor</span>
                </Link>
            </div>
        </header>
    );
}