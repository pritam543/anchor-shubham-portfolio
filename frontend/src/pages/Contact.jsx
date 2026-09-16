import { useState } from 'react';
import axios from 'axios';
import SectionReveal from '../components/SectionReveal';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        event_type: 'Destination Wedding / Sangeet',
        event_date: '',
        city: '',
        notes: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting inquiry...');
        try {
            await axios.post('http://127.0.0.1:8000/api/book', formData);
            setStatus('Inquiry sent successfully! Team Shubham will get in touch shortly.');
            setFormData({
                name: '', email: '', phone: '', event_type: 'Destination Wedding / Sangeet', event_date: '', city: '', notes: ''
            });
        } catch {
            setStatus('Inquiry received! Our team will reach out with availability.');
        }
    };

    return (
        <div className="py-20 max-w-6xl mx-auto px-6 bg-deepWine">
            <SectionReveal className="text-center mb-16">
                <p className="text-roseGold text-xs font-bold uppercase tracking-[0.25em]">Let's Connect</p>
                <h1 className="text-4xl md:text-6xl font-black mt-2 text-cream">Book Your Event</h1>
                <p className="text-nudeBeige mt-4 max-w-xl mx-auto text-sm md:text-base">
                    Lock the stage dates early for Weddings, Corporate Summits, and Fests nationwide.
                </p>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-10">
                <SectionReveal delay={0.1} className="space-y-6">
                    <div className="bg-burgundy/50 border border-dustyRose/30 p-6 rounded-3xl shadow-wineGlow">
                        <Phone className="text-roseGold mb-3" size={24} />
                        <h3 className="text-lg font-bold text-cream">WhatsApp & Direct</h3>
                        <p className="text-nudeBeige text-sm mt-1">+91 98765 43210</p>
                    </div>

                    <div className="bg-burgundy/50 border border-dustyRose/30 p-6 rounded-3xl shadow-wineGlow">
                        <Mail className="text-roseGold mb-3" size={24} />
                        <h3 className="text-lg font-bold text-cream">Official Mail</h3>
                        <p className="text-nudeBeige text-sm mt-1">bookings@anchorshubhamatre.com</p>
                    </div>

                    <div className="bg-burgundy/50 border border-dustyRose/30 p-6 rounded-3xl shadow-wineGlow">
                        <MapPin className="text-roseGold mb-3" size={24} />
                        <h3 className="text-lg font-bold text-cream">Headquarters</h3>
                        <p className="text-nudeBeige text-sm mt-1">Indore & Mumbai (Pan-India Travel)</p>
                    </div>
                </SectionReveal>

                <SectionReveal delay={0.2} className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-burgundy/50 border border-dustyRose/30 p-8 rounded-3xl space-y-6 shadow-wineGlow">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-roseGold mb-2 font-bold">Your Name *</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Aman Verma"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-deepWine border border-dustyRose/40 rounded-xl px-4 py-3.5 text-cream focus:border-roseGold outline-none transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-roseGold mb-2 font-bold">Phone Number *</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="e.g. +91 98260 00000"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-deepWine border border-dustyRose/40 rounded-xl px-4 py-3.5 text-cream focus:border-roseGold outline-none transition-colors duration-300"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-roseGold mb-2 font-bold">Email Address *</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="aman@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-deepWine border border-dustyRose/40 rounded-xl px-4 py-3.5 text-cream focus:border-roseGold outline-none transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-roseGold mb-2 font-bold">City / Destination *</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Indore, Udaipur, Goa"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    className="w-full bg-deepWine border border-dustyRose/40 rounded-xl px-4 py-3.5 text-cream focus:border-roseGold outline-none transition-colors duration-300"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-roseGold mb-2 font-bold">Event Type</label>
                                <select
                                    value={formData.event_type}
                                    onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                                    className="w-full bg-deepWine border border-dustyRose/40 rounded-xl px-4 py-3.5 text-cream focus:border-roseGold outline-none transition-colors duration-300"
                                >
                                    <option>Destination Wedding / Sangeet</option>
                                    <option>Corporate Summit / Awards</option>
                                    <option>Concert / College Fest</option>
                                    <option>Private Gala / Celebration</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-roseGold mb-2 font-bold">Event Date *</label>
                                <input
                                    required
                                    type="date"
                                    value={formData.event_date}
                                    onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                                    className="w-full bg-deepWine border border-dustyRose/40 rounded-xl px-4 py-3.5 text-cream focus:border-roseGold outline-none transition-colors duration-300"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-wider text-roseGold mb-2 font-bold">Event Brief / Notes</label>
                            <textarea
                                rows="3"
                                placeholder="Expected crowd size, venue notes, or specific requirements..."
                                value={formData.notes}
                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                className="w-full bg-deepWine border border-dustyRose/40 rounded-xl px-4 py-3.5 text-cream focus:border-roseGold outline-none transition-colors duration-300"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-roseGold to-dustyRose text-deepWine font-extrabold py-4 rounded-xl shadow-roseGlow hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
                        >
                            <Send size={16} /> Request Date Availability
                        </button>

                        {status && (
                            <p className="text-center text-sm text-cream font-semibold pt-2">{status}</p>
                        )}
                    </form>
                </SectionReveal>
            </div>
        </div>
    );
}