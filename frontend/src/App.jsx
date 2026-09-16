import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-deepWine text-cream flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="py-8 text-center text-nudeBeige border-t border-dustyRose/20 text-sm bg-deepWine">
          © {new Date().getFullYear()} Anchor Shubham Atre. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;