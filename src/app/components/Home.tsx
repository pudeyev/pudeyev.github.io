import { Link } from "react-router";
import { Brain, Sparkles, Mail, Linkedin, Github, ChevronRight, Cpu, Database, Network, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Home() {
  return (
    <>
      <section className="pt-32 pb-32 px-6 relative bg-slate-900">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-slate-800" style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">AI & Machine Learning Expert</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming Ideas into Intelligent Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Software consultant specializing in AI/ML integration, custom model development, and intelligent automation for forward-thinking businesses.
            </p>
            <div className="flex gap-4">
              <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
                Get Started
                <ChevronRight className="w-5 h-5" />
              </a>
              <Link to="/services" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg transition-colors">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY3ODMxODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="AI Technology"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 pb-32 px-6 bg-slate-800 relative">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-slate-900" style={{
          clipPath: 'polygon(0 0, 100% 50%, 100% 100%, 0 100%)'
        }}></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Services</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            End-to-end AI solutions tailored to your business needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Strategy & Consulting</h3>
              <p className="text-slate-400">
                Strategic guidance on AI adoption, feasibility studies, and roadmap planning to maximize ROI.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Model Development</h3>
              <p className="text-slate-400">
                Build and fine-tune machine learning models specific to your domain and requirements.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Integration</h3>
              <p className="text-slate-400">
                Seamlessly integrate AI capabilities into existing systems and workflows.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              View All Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="expertise" className="py-20 pb-32 px-6 relative bg-slate-900">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-slate-700" style={{
          clipPath: 'polygon(0 60%, 100% 20%, 100% 100%, 0 100%)'
        }}></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Technical Expertise</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Deep knowledge across the AI/ML technology stack
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY3ODMxODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Chip"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Machine Learning & Deep Learning</h3>
                  <p className="text-slate-400">TensorFlow, PyTorch, scikit-learn, transformers, LLMs, computer vision, NLP</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Engineering</h3>
                  <p className="text-slate-400">Data pipelines, ETL, feature engineering, model deployment, MLOps</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cloud & Infrastructure</h3>
                  <p className="text-slate-400">AWS, GCP, Azure, Docker, Kubernetes, serverless architectures</p>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/expertise" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
                  Areas of Expertise
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">AI Innovation Showcase</h2>
          <div className="max-w-5xl mx-auto">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={4000}
              arrows={true}
              className="ai-slider"
            >
              <div className="px-4">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1776106905694-6226a396da7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzc2ODc4NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI Data Visualization"
                    className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 rounded-b-2xl">
                    <h3 className="text-2xl font-bold text-white mb-2">Advanced Data Analytics</h3>
                    <p className="text-slate-300">Transform raw data into actionable insights with AI-powered analytics</p>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzc2ODc4NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Neural Network"
                    className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 rounded-b-2xl">
                    <h3 className="text-2xl font-bold text-white mb-2">Neural Networks & Deep Learning</h3>
                    <p className="text-slate-300">Cutting-edge machine learning models for complex problem solving</p>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765046255479-669cf07a0230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzc2ODc4NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI Patterns"
                    className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 rounded-b-2xl">
                    <h3 className="text-2xl font-bold text-white mb-2">Intelligent Automation</h3>
                    <p className="text-slate-300">Streamline operations with AI-driven process automation</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-700 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl text-slate-300 mb-8">
            Ready to leverage AI for your business? Get in touch to discuss your project.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:contact@example.com" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
