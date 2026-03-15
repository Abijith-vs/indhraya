import { Building2, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { number: 'A+', label: 'NAAC Grade', icon: GraduationCap, color: 'from-blue-500 to-indigo-600' },
  { number: '8th', label: 'KIRF Rank', icon: Award, color: 'from-emerald-500 to-teal-600' },
  { number: '5th', label: 'KIRF Placement', icon: Building2, color: 'from-orange-500 to-red-600' },
  { number: '3000+', label: 'Students', icon: Users, color: 'from-purple-500 to-pink-600' }
];

const AboutCollege = () => {
  return (
    <section id="college" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Main Context Card */}
          <div className="md:col-span-7 bg-zinc-900 rounded-[3rem] p-12 border border-white/5 flex flex-col justify-between overflow-hidden relative group min-h-[400px]">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                An Institution <br />of <span className="text-blue-500 italic font-serif">Excellence&apos;.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Since 1960, NSSCE Palakkad has been the incubator for India's brightest engineering minds.
                Spanning 125 acres of innovation and technical excellence.
              </p>
            </div>
            <div className="mt-12 flex gap-4 relative z-10">
              <button className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-transform">Campus Tour</button>
              <button className="px-6 py-3 bg-white/5 text-white font-bold rounded-full text-sm border border-white/10 hover:bg-white/10 transition-colors">Read History</button>
            </div>
            {/* Visual background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
          </div>

          {/* College Photo Card */}
          <div className="md:col-span-5 relative group overflow-hidden rounded-[3rem] border border-white/5 min-h-[400px]">
            <img
              src="/IMG_4230.png"
              alt="NSSCE Campus"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            <div className="absolute bottom-8 left-8">
              <p className="text-white/60 text-xs font-black uppercase tracking-[0.3em]">NSSCE Palakkad</p>
              <h4 className="text-white text-2xl font-bold">125 Acres of Greenery</h4>
            </div>
          </div>

          {/* Stats Grid - Full Width */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} p-4 mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <stat.icon className="text-white w-full h-full" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2 tracking-tighter">{stat.number}</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCollege;

