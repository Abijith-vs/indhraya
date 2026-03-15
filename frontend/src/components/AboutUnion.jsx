import { User, Shield, BookOpen, Palette, Users, GraduationCap, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';

const leadership = [
  // First Row
  { name: 'Mazin k h', position: 'Chairperson', icon: User, image: '/leadership/DSC01047.JPG.jpeg', row: 1 },
  { name: 'Arya V', position: 'Vice Chairperson', icon: User, image: '/leadership/DSC01069.JPG.jpeg', row: 1 },
  { name: 'Muhammed Anwar N', position: 'General Secretary', icon: Shield, image: '/leadership/DSC01145.JPG.jpeg', row: 1 },

  // Second Row
  { name: 'Nikhil s', position: 'Magazine Editor', icon: BookOpen, image: '/leadership/DSC00997.JPG.jpeg', row: 2 },
  { name: 'Muhammed Hashir K S', position: 'Arts Club Secretary', icon: Palette, image: '/leadership/DSC00988.JPG.jpeg', row: 2 },

  // Third Row
  { name: 'Mohammed Shifan C P', position: 'UUC 1', icon: GraduationCap, image: '/leadership/DSC01115.JPG.jpeg', row: 3 },
  { name: 'Anju nivedha M', position: 'UUC 2', icon: GraduationCap, image: '/leadership/DSC01020.JPG.jpeg', row: 3 },
  { name: 'Muzawira', position: 'Lady Rep 1', icon: Star, image: '/leadership/DSC01037.JPG.jpeg', row: 3 },
  { name: 'Fathima Sithara C K', position: 'Lady Rep 2', icon: Star, image: '/leadership/DSC00944.JPG.jpeg', row: 3 }
];

const AboutUnionComp = memo(() => {

  const groupedLeadership = useMemo(() => {
    const groups = {};
    leadership.forEach(l => {
      if (!groups[l.row]) groups[l.row] = [];
      groups[l.row].push(l);
    });
    return Object.keys(groups)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .map(rowNum => ({
        rowNum: parseInt(rowNum),
        leaders: groups[rowNum]
      }));
  }, []);

  return (
    <section id="union" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
              The People <br />Behind the <span className="text-blue-500 italic font-serif">Vision</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Meet the 2026 NSSCE Union—your elected voices dedicated to building a vibrant and inclusive campus community.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end">
            <div className="text-6xl font-bold text-white/5 tracking-tighter uppercase leading-none">Unity</div>
            <div className="text-6xl font-bold text-white/5 tracking-tighter uppercase leading-none">2026</div>
          </div>
        </div>

        {/* Uniform Grid Layout */}
        <div className="flex flex-col gap-8 items-center w-full">
          {groupedLeadership.map(({ rowNum, leaders }, rowIndex) => (
            <motion.div
              key={`row-${rowNum}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 w-full"
            >
              {leaders.map((leader) => (
                <div
                  key={leader.position}
                  className="relative group overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 w-full max-w-[320px] sm:w-[280px] lg:w-[300px] h-[380px] flex-shrink-0"
                >
                  {/* Image with dynamic hover effects */}
                  <div className="w-full h-full overflow-hidden bg-zinc-800">
                    <img
                      src={leader.image}
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="600"
                      sizes="(max-width: 768px) 280px, 320px"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 opacity-75 group-hover:opacity-100"
                      alt={leader.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x600?text=Leader';
                      }}
                    />
                  </div>

                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="max-w-[75%]">
                      <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1 leading-tight block">
                        {leader.position}
                      </p>
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                        {leader.name}
                      </h4>
                    </div>
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 transition-all group-hover:bg-blue-500/20 group-hover:border-blue-500/50 flex-shrink-0">
                      <leader.icon className="text-white w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
              {/* Static Engagement Card in Row 2 */}
              {rowIndex === 1 && (
                <motion.div className="w-full max-w-[320px] sm:w-[280px] lg:w-[300px] h-[380px] rounded-[2.5rem] bg-blue-600 p-8 flex flex-col justify-between group overflow-hidden relative flex-shrink-0">
                  <Heart className="text-white fill-white w-10 h-10 relative z-10" />
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold text-white mb-2 italic">Student Voice.</h4>
                    <p className="text-blue-100 text-sm leading-tight">Representing the heartbeat of NSSCE </p>
                  </div>
                  {/* Visual background blob */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

AboutUnionComp.displayName = 'AboutUnion';

export default AboutUnionComp;
