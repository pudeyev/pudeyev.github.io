import { Link } from "react-router";
import { Mail, Linkedin, Github, MapPin, Calendar, Send, User, MessageSquare, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border-l-2 border-blue-400 px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Let's Connect</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's discuss your project and explore how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>

              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="21d1ad20-3db9-4fe2-bf74-f19ed335113d"></input>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <a href="mailto:pudeyev@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                        pudeyev@gmail.com
                      </a>
                      <p className="text-slate-400 text-sm mt-1">I typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                      <p className="text-slate-300">Available for remote work worldwide</p>
                      <p className="text-slate-400 text-sm mt-1">Open to on-site consultations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Availability</h3>
                      <p className="text-slate-300">Currently accepting new projects</p>
                      <p className="text-slate-400 text-sm mt-1">Flexible hours across time zones</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Connect on Social</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/piousbox"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                    >
                      <Linkedin className="w-6 h-6 text-slate-300" />
                    </a>
                    <a
                      href="https://github.com/piousbox"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                    >
                      <Github className="w-6 h-6 text-slate-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-6">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Initial Consultation</h3>
              <p className="text-slate-400 text-sm">Free 30-minute discovery call to discuss your needs and goals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Proposal & Planning</h3>
              <p className="text-slate-400 text-sm">Detailed project scope, timeline, and cost estimate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Execution & Delivery</h3>
              <p className="text-slate-400 text-sm">Agile development with regular updates and collaboration</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
