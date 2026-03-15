import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px]">Contact</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 tracking-tighter">
              Reach out <br /><span className="italic font-serif text-gray-500">anytime.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-xs font-light leading-tight pb-2">
            Whether it&apos;s a query or a suggestion, we&apos;re here to listen and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Location Card - Large Bento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group h-[400px] overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <MapPin className="text-blue-500" size={24} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">NSS College of Engineering</h4>
              <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                NSS Nagar, Akathethara, Palakkad, <br />Kerala - 678008
              </p>
            </div>

            <motion.a
              href="https://maps.app.goo.gl/s4LKv8Y6CaxnhxTM6" target="_blank"
              whileHover={{ gap: '1rem' }}
              className="relative z-10 flex items-center gap-2 text-white font-bold group-hover:text-blue-400 transition-all"
            >
              Open in Maps <ArrowUpRight size={18} />
            </motion.a>

            {/* College campus image */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 grayscale group-hover:opacity-50 group-hover:grayscale-0 transition-all duration-300">
              <img 
                src="/IMG_4230.png" 
                alt="NSS College of Engineering Campus" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>

          {/* Phone & Email - Right Column Bento */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8 flex-1 group"
            >
              <Phone className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={20} />
              <h4 className="text-white font-bold text-xl mb-4">Union Office</h4>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-white text-xs font-bold uppercase tracking-widest mb-1">Chairperson</span>
                  <p className="text-gray-400 text-sm font-medium">Mazin: +91 90618 88388</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-bold uppercase tracking-widest mb-1">Vice Chairperson</span>
                  <p className="text-gray-400 text-sm font-medium">Arya: +91 85909 05465</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-bold uppercase tracking-widest mb-1">General Secretary</span>
                  <p className="text-gray-400 text-sm font-medium">Anwar: +91 85890 63564</p>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8 flex-1 group"
            >
              <Mail className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={20} />
              <h4 className="text-white font-bold text-xl mb-4">Union Email</h4>
              <p className="text-gray-400 text-sm font-medium">nssceunion@gmail.com</p>
            </motion.div>
          </div>
        </div>

        {/* Footer Socials & CTA */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: 'https://facebook.com/nssceunion', label: 'Facebook' },
              { icon: Instagram, href: 'https://instagram.com/nssceunion', label: 'Instagram' },
              { icon: Youtube, href: 'https://youtube.com/@nssceunion', label: 'YouTube' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-gray-400 hover:text-white transition-all text-xs font-bold tracking-widest uppercase"
              >
                <social.icon size={14} />
                {social.label}
              </motion.a>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;