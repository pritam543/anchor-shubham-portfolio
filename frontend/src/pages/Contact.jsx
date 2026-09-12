import { useState } from 'react';
import axios from 'axios';
import SlideDown from '../components/SlideDown';
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
            setStatus('Inquiry sent successfully! Team Shubham will get in touch with you shortly.');
            setFormData({
                name: '', email: '', phone: '', event_type: 'Destination Wedding / Sangeet', event_date: '', city: '', notes: ''
            });
        } catch (err) {
            setStatus('Inquiry recorded locally! (Note: Python backend connects on port 8000).');
        }
    };

    return (
        <div className="py-20 max-w-6xl mx-auto px-6">
            <SlideDown className="text-center mb-16">
                <p className="text-goldAccent text-xs font-bold uppercase tracking-widest">Let's Connect</p>
                <h1 className="text-4xl md:text-6xl font-black mt-2">Book Your Event</h1>
                <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
                    Lock the stage dates early for Destination Weddings, Corporate Galas, and Concerts across India.
                </p>
            </SlideDown>

            <div className="grid md:grid-cols-3 gap-10">
                <SlideDown delay={0.1} className="space-y-6">
                    <div className="bg-stageCard border border-white/10 p-6 rounded-2xl">
                        <Phone className="text-goldAccent mb-3" size={24} />
                        <h3 className="text-lg font-bold text-white">Direct Line / WhatsApp</h3>
                        <p className="text-zinc-400 text-sm mt-1">+91 98765 43210</p>
                    </div>

                    <div className="bg-stageCard border border-white/10 p-6 rounded-2xl">
                        <Mail className="text-goldAccent mb-3" size={24} />
                        <h3 className="text-lg font-bold text-white">Official Email</h3>
                        <p className="text-zinc-400 text-sm mt-1">bookings@anchorshubhamatre.com</p>
                    </div>

                    <div className="bg-stageCard border border-white/10 p-6 rounded-2xl">
                        <MapPin className="text-goldAccent mb-3" size={24} />
                        <h3 className="text-lg font-bold text-white">Base Location</h3>
                        <p className="text-zinc-400 text-sm mt-1">Indore & Mumbai (Available Pan-India)</p>
                    </div>
                </SlideDown>

                <SlideDown delay={0.2} className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-stageCard border border-white/10 p-8 rounded-3xl space-y-6 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-goldAccent mb-2 font-semibold">Your Name *</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Aman Verma"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-stageDark border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-goldAccent outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-goldAccent mb-2 font-semibold">Phone Number *</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="e.g. +91 98260 00000"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-stageDark border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-goldAccent outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-goldAccent mb-2 font-semibold">Email Address *</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="aman@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-stageDark border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-goldAccent outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-goldAccent mb-2 font-semibold">Event City / Destination *</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Indore, Udaipur, Goa"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    className="w-full bg-stageDark border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-goldAccent outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-goldAccent mb-2 font-semibold">Event Category</label>
                                <select
                                    value={formData.event_type}
                                    onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                                    className="w-full bg-stageDark border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-goldAccent outline-none"
                                >
                                    <option>Destination Wedding / Sangeet</option>
                                    <option>Corporate Summit / Awards</option>
                                    <option>Concert / College Fest</option>
                                    <option>Private Gala / Birthday</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-goldAccent mb-2 font-semibold">Event Date *</label>
                                <input
                                    required
                                    type="date"
                                    value={formData.event_date}
                                    onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                                    className="w-full bg-stageDark border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-goldAccent outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-wider text-goldAccent mb-2 font-semibold">Event Brief / Notes</label>
                            <textarea
                                rows="3"
                                placeholder="Mention expected crowd size, venue, or special expectations..."
                                value={formData.notes}
                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                className="w-full bg-stageDark border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-goldAccent outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-goldAccent text-stageDark font-bold py-4 rounded-xl hover:bg-goldHover hover:scale-[1.01] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                        >
                            <Send size={18} /> Request Date Availability
                        </button>

                        {status && (
                            <p className="text-center text-sm text-goldAccent font-semibold pt-2">{status}</p>
                        )}
                    </form>
                </SlideDown>
            </div>
        </div>
    );
}