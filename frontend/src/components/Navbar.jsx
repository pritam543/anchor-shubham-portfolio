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
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-champagne/20 shadow-xs transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="group flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-champagne/20 border border-champagne/50 flex items-center justify-center group-hover:border-champagneDark transition-all duration-300">
                        <Mic2 className="w-5 h-5 text-espresso group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-xl font-extrabold tracking-wider text-espresso group-hover:text-champagneDark transition-colors duration-300">
                        SHUBHAM <span className="font-light text-champagneDark">ATRE</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-2">
                    {navLinks.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                                    ? 'text-espresso bg-champagne/25 shadow-xs font-semibold'
                                    : 'text-warmMuted hover:text-espresso hover:bg-creamLight/60'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-espresso hover:bg-champagneDark hover:text-espresso shadow-softGlow transition-all duration-300"
                >
                    <PhoneCall size={14} />
                    <span>Book Anchor</span>
                </Link>
            </div>
        </header>
    );
}