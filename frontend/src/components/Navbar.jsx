import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Dock from './Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscComment, VscOrganization, VscMortarBoard, VscLayers } from 'react-icons/vsc';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // const sections = ['home', 'union', 'college', 'events', 'gallery', 'complaints', 'announcements', 'contact'];
      // for (let section of sections) {
      //   const el = document.getElementById(section);
      //   if (el && el.getBoundingClientRect().top < 100 && el.getBoundingClientRect().bottom > 100) {
      //     setActiveSection(section);
      //     break;
      //   }
      // }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#', icon: <VscHome size={18} /> },
    { name: 'Union', href: '#union', icon: <VscOrganization size={18} /> },
    { name: 'College', href: '#college', icon: <VscMortarBoard size={18} /> },
    { name: 'Events', href: '#events', icon: <VscArchive size={18} /> },
    { name: 'Gallery', href: '#gallery', icon: <VscLayers size={18} /> },
    { name: 'Voice', href: '#complaints', icon: <VscComment size={18} /> }
  ];

  const dockItems = navItems.map(item => ({
    icon: item.icon,
    label: item.name,
    onClick: () => {
      const el = document.getElementById(item.href.slice(1) || 'home');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else if (item.href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }));



  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 py-6 px-4 flex justify-center pointer-events-none">
      {/* Desktop Logo */}
      <div className="hidden md:block absolute left-12 top-10 pointer-events-auto">
        <a href="/" className="text-xl font-bold text-white tracking-tighter">
          NSSCE<span className="text-blue-500">.</span>UNION
        </a>
      </div>

      <div className={`flex items-center transition-all duration-500 pointer-events-auto ${scrolled ? 'translate-y-2' : ''
        }`}>
        <div className={`hidden md:flex items-center gap-4`}>
          {/* We'll use the Dock here */}
          <Dock
            items={dockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>

        {/* Mobile Toggle & Logo for mobile - needs to be separate since Dock is desktop only here */}
        <div className={`md:hidden flex justify-between items-center h-14 w-screen px-6 rounded-full border border-white/5 ${scrolled ? 'bg-black/40 backdrop-blur-2xl shadow-2xl' : 'bg-black/20 backdrop-blur-md'
          }`}>
          <a href="/" className="text-xl font-bold text-white tracking-tighter">
            NSSCE<span className="text-blue-500">.</span>UNION
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
            {isOpen ? <X size={20} /> : <Menu size={20} /> }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-zinc-900/95 backdrop-blur-3xl rounded-[2rem] p-8 border border-white/10 md:hidden shadow-2xl pointer-events-auto"
          >
            <div className="space-y-4 text-center">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block text-2xl font-bold text-white">
                  {item.name}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;

