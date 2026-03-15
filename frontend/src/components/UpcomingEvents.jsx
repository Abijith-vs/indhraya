import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CalendarDays } from 'lucide-react';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        const data = await response.json();
        setEvents(data.slice(0, 3));
      } catch (err) { console.error(err); } finally { setLoading(false); }
    };
    fetchEvents();
  }, []);

  return (
    <section id="events" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-bold text-white tracking-tighter">Live <br /><span className="text-emerald-500">Experiences.</span></h2>
          <div className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px]">What's Next</div>
        </div>

        <div className="grid gap-6">
          {!loading && events.length === 0 ? (
            <div className="text-center py-20 border border-white/5 rounded-[2.5rem] bg-zinc-900/20 backdrop-blur-sm">
              <p className="text-gray-500 text-lg">No upcoming events scheduled at the moment.</p>
              <p className="text-gray-600 text-sm mt-2 font-light italic">Stay tuned for some exciting experiences!</p>
            </div>
          ) : (
            events.map((event, i) => {
              const date = new Date(event.eventDate);
              return (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-zinc-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row"
                >
                  {/* Image Section */}
                  <div className="w-full md:w-80 h-64 md:h-auto overflow-hidden relative">
                    <img
                      src={`http://localhost:5000${event.posterImage}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-emerald-500 mb-4">
                      <CalendarDays size={16} />
                      <span className="text-xs font-black uppercase tracking-[0.2em]">
                        {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">{event.title}</h3>
                    <div className="flex items-center gap-2 text-gray-500 mb-8">
                      <MapPin size={14} />
                      <span className="text-sm font-medium">{event.location || 'College Main Hub'}</span>
                    </div>
                    <button className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                      Register Interest <ArrowRight size={18} className="text-emerald-500" />
                    </button>
                  </div>
                </motion.div>
              )
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;