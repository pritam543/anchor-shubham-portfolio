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
        <header className="sticky top-0 z-50 backdrop-blur-md bg-deepWine/95 border-b border-nudeBeige/20 shadow-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Brand Logo */}
                <Link to="/" className="group flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-burgundy border border-roseGold/50 flex items-center justify-center group-hover:border-cream transition-all duration-300 shadow-roseGlow">
                        <Mic2 className="w-5 h-5 text-roseGold group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-xl font-extrabold tracking-wider text-cream group-hover:text-roseGold transition-colors duration-300">
                        SHUBHAM <span className="font-light text-roseGold">ATRE</span>
                    </span>
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-2">
                    {navLinks.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                                    ? 'text-cream bg-burgundy shadow-sm border border-roseGold/30'
                                    : 'text-nudeBeige hover:text-cream hover:bg-burgundy/50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Book Anchor Button */}
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-deepWine bg-roseGold hover:bg-burgundy hover:text-cream shadow-roseGlow transition-all duration-300"
                >
                    <PhoneCall size={14} />
                    <span>Book Anchor</span>
                </Link>
            </div>
        </header>
    );
}