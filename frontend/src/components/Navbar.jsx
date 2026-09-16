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
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-deepWine/90 border-b border-burgundy/60 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Brand Logo */}
                <Link to="/" className="group flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-burgundy border border-roseGold/40 flex items-center justify-center group-hover:border-roseGold transition-all duration-500 shadow-roseGlow">
                        <Mic2 className="w-5 h-5 text-roseGold group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-xl font-extrabold tracking-wider text-cream group-hover:text-roseGold transition-colors duration-300">
                        SHUBHAM <span className="font-light text-roseGold">ATRE</span>
                    </span>
                </Link>

                {/* Multi-Nav Links with Smooth Pill Hover */}
                <nav className="hidden md:flex items-center gap-2">
                    {navLinks.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-500 ease-out hover:text-cream ${isActive
                                    ? 'text-cream bg-burgundy border border-roseGold/40 shadow-sm'
                                    : 'text-nudeBeige hover:bg-burgundy/40'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Call-to-action Button */}
                <Link
                    to="/contact"
                    className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-deepWine bg-gradient-to-r from-roseGold via-dustyRose to-roseGold hover:scale-105 shadow-roseGlow hover:shadow-lg transition-all duration-500"
                >
                    <PhoneCall size={14} className="animate-bounce" />
                    <span>Book Anchor</span>
                </Link>
            </div>
        </header>
    );
}