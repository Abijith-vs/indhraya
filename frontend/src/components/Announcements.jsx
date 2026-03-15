import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, CalendarDays, RefreshCw, ArrowRight } from 'lucide-react';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/announcements');
        if (!response.ok) throw new Error('Failed to fetch announcements');
        const data = await response.json();
        setAnnouncements(data);
      } catch (err) {
        console.error('Error fetching announcements:', err);
        setError('Could not load announcements at this time.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <section id="announcements" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Subtle Indigo Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-20">
          <span className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-[10px]">Bulletin</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 tracking-tighter">
            News & <span className="italic font-serif text-gray-500">Updates.</span>
          </h2>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-indigo-400">
            <RefreshCw className="animate-spin w-10 h-10 mb-4 opacity-50" />
            <span className="text-sm font-bold tracking-widest uppercase opacity-50">Syncing Feed...</span>
          </div>
        ) : (error || announcements.length === 0) ? (
          <div className="text-center py-20 border border-white/5 rounded-[2.5rem] bg-zinc-900/20 backdrop-blur-sm">
            <p className="text-gray-500 text-lg">The bulletin is currently empty.</p>
            <p className="text-gray-600 text-sm mt-2 font-light italic">Check back soon for Union news.</p>
          </div>
        ) : (
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/50 via-indigo-500/10 to-transparent hidden md:block" />

            <div className="space-y-12">
              {announcements.map((announcement, i) => (
                <motion.div
                  key={announcement._id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col md:flex-row gap-8 group"
                >
                  {/* Icon Node */}
                  <div className="relative z-10 hidden md:flex w-12 h-12 rounded-full bg-zinc-900 border border-white/10 items-center justify-center group-hover:border-indigo-500/50 transition-colors shadow-2xl">
                    <Megaphone className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 pb-12 border-b border-white/5 last:border-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {announcement.title}
                      </h3>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <CalendarDays className="w-3 h-3 text-gray-500" />
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                          {new Date(announcement.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed font-light text-lg whitespace-pre-wrap max-w-3xl">
                      {announcement.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 opacity-0 group-hover:opacity-100 transition-all">
                      Read Details <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Announcements;