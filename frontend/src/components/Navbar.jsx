import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mic2, PhoneCall, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-champagne/20 shadow-xs transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

                {/* Brand Logo */}
                <Link to="/" onClick={handleNavClick} className="group flex items-center gap-2 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-champagne/20 border border-champagne/50 flex items-center justify-center group-hover:border-champagneDark transition-all duration-300">
                        <Mic2 className="w-4 h-4 sm:w-5 sm:h-5 text-espresso group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-lg sm:text-xl font-extrabold tracking-wider text-espresso group-hover:text-champagneDark transition-colors duration-300">
                        SHUBHAM <span className="font-light text-champagneDark">ATRE</span>
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
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

                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-espresso hover:bg-champagneDark hover:text-espresso shadow-softGlow transition-all duration-300"
                    >
                        <PhoneCall size={14} />
                        <span>Book Anchor</span>
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Navigation Menu"
                    className="md:hidden p-2 rounded-xl text-espresso hover:bg-champagne/20 transition-colors"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 border-b border-champagne/30 backdrop-blur-xl px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-4 duration-200">
                    <div className="flex flex-col space-y-2">
                        {navLinks.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={handleNavClick}
                                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive
                                        ? 'bg-champagne/25 text-espresso font-bold'
                                        : 'text-warmMuted hover:bg-creamLight hover:text-espresso'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="pt-2">
                        <Link
                            to="/contact"
                            onClick={handleNavClick}
                            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-espresso shadow-softGlow hover:bg-champagneDark hover:text-espresso transition-all"
                        >
                            <PhoneCall size={15} />
                            <span>Book Anchor</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}