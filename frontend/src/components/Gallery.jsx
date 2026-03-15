import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { useState, useEffect } from 'react';

import API_BASE_URL from '../config';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/gallery`);
        const data = await response.json();
        setGalleryItems(data);
      } catch (err) { console.error(err); } finally { setLoading(false); }
    };
    fetchGallery();
  }, []);

  return (
    <section id="gallery" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 tracking-tighter text-center">Moments in <span className="italic font-serif text-blue-500">Motion.</span></h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {!loading && galleryItems.length === 0 ? (
            <div className="text-center py-20 border border-white/5 rounded-[2.5rem] bg-zinc-900/20 backdrop-blur-sm md:col-span-3">
              <p className="text-gray-500 text-center">The gallery is currently being curated.</p>
            </div>
          ) : (
            galleryItems.map((image) => (
              <motion.div
                key={image._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="relative rounded-[2rem] overflow-hidden group"
              >
                <img
                  src={`${API_BASE_URL}${image.imageUrl}`}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-4 bg-white rounded-full">
                    <Maximize2 className="text-black" size={20} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[10px] font-black uppercase text-white tracking-widest">
                    {image.eventTag}
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

