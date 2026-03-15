import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, Info, Upload, FileText, X } from 'lucide-react';
// Firebase imports removed - placeholder for email submission
// import { db, storage } from '../firebase.js';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    registerNumber: '',
    department: '',
    description: '',
    file: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const removeFile = () => setFormData({ ...formData, file: null });

  return (
    <section id="complaints" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column - Context */}
          <div className="lg:sticky lg:top-32">
            <span className="text-rose-500 font-bold tracking-[0.3em] uppercase text-sm">Voice of Student</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-8 leading-tight">Something on your <span className="italic font-serif underline decoration-rose-500/50">mind?</span></h2>

            <div className="space-y-6">
              {[
                { icon: MessageSquare, title: "Direct Communication", desc: "Your concerns are shared only with the relevant Union members." },
                { icon: Info, title: "Supportive Resolution", desc: "We aim to respond with a plan of action within 48 hours." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <item.icon className="text-rose-500 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            layout
            className="bg-zinc-900/50 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                  <motion.form
                  key="form"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setLoading(true);
                    setError('');
                    try {
// Email submission redirect
                      const unionEmail = 'collegeunionnssce2026@gmail.com';
                      const subject = `Student Complaint from ${formData.name || 'Anonymous'}`;
                      let body = `Register Number: ${formData.registerNumber}\n\nDepartment: ${formData.department}\n\nGrievance:\n${formData.description}`;
                      if (formData.file) {
                        body += `\n\nSupporting file: ${formData.file.name} (please attach manually)`;
                      }
                      const mailtoLink = `mailto:${unionEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      window.location.href = mailtoLink;
                      setSubmitted(true);
                    } catch (err) {
                      console.error(err);
                      setError('Failed to submit. Please try again.');
                    } finally {
                      setLoading(false);
                    }
                  }}
                >
                  {/* Personal Details Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">Full Name</label>
                      <input
                        type="text" required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-rose-500 transition-colors"
                        placeholder="Name"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">Register Number</label>
                      <input
                        type="text" required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-rose-500 transition-colors"
                        placeholder="Register Number"
                        onChange={(e) => setFormData({ ...formData, registerNumber: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Department Field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">Department</label>
                    <input
                      type="text" required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-rose-500 transition-colors"
                      placeholder="Department"
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">Grievance Details</label>
                    <textarea
                      rows="4" required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-rose-500 transition-colors resize-none"
                      placeholder="Tell us what happened..."
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  {/* Custom File Upload */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">Supporting Documents (Optional)</label>
                    {!formData.file ? (
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 hover:border-rose-500/50 transition-all group">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 text-gray-500 group-hover:text-rose-500 transition-colors mb-2" />
                          <p className="text-xs text-gray-500">Click to upload photo or PDF</p>
                        </div>
                        <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,.pdf" />
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
                        <div className="flex items-center gap-3">
                          <FileText className="text-rose-500" size={20} />
                          <span className="text-sm text-white truncate max-w-[200px]">{formData.file.name}</span>
                        </div>
                        <button onClick={removeFile} className="p-1 hover:bg-rose-500/20 rounded-full transition-colors">
                          <X size={16} className="text-rose-500" />
                        </button>
                      </div>
                    )}
                  </div>

                  {error && (
                    <div className="p-4 bg-rose-500/20 border border-rose-500/50 rounded-2xl text-rose-400 text-sm">
                      {error}
                    </div>
                  )}
                  <button disabled={loading} className="w-full py-5 bg-rose-600 hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-xl shadow-rose-600/20">
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Voice
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-emerald-500 w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Message Logged</h3>
                  <p className="text-gray-400 max-w-xs mx-auto">We've received your voice. We'll be in touch through your registered college email.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-12 text-rose-500 font-bold hover:underline">Submit another one</button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintForm;