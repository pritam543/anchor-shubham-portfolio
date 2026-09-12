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
        <header className="sticky top-0 z-50 backdrop-blur-md bg-stageDark/85 border-b border-goldAccent/20">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-wider text-goldAccent">
                    <Mic2 className="w-7 h-7 text-goldAccent animate-pulse" />
                    <span>SHUBHAM <span className="text-white font-light">ATRE</span></span>
                </Link>

                <nav className="hidden md:flex gap-8 font-medium">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`relative py-1 transition-all duration-300 hover:text-goldAccent ${location.pathname === item.path ? 'text-goldAccent font-semibold' : 'text-zinc-300'
                                } group`}
                        >
                            {item.name}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-goldAccent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                <Link
                    to="/contact"
                    className="flex items-center gap-2 border border-goldAccent text-goldAccent px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-goldAccent hover:text-stageDark shadow-lg shadow-goldAccent/10 hover:shadow-goldAccent/30 hover:scale-105"
                >
                    <PhoneCall size={16} /> Book Anchor
                </Link>
            </div>
        </header>
    );
}