import { Outlet, Link, useLocation } from "react-router";
import { Brain, Mail, Linkedin, Github, MapPin } from "lucide-react";

export function Root() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-semibold text-white">AI Consultant</span>
          </Link>
          <div className="flex gap-6">
            <Link
              to="/services"
              className={`px-3 py-2 transition-colors border-b-2 ${
                isActive('/services')
                  ? 'text-blue-400 bg-blue-500/10 border-blue-400'
                  : 'text-slate-300 hover:text-blue-400 border-transparent'
              }`}
            >
              Services
            </Link>
            <Link
              to="/expertise"
              className={`px-3 py-2 transition-colors border-b-2 ${
                isActive('/expertise')
                  ? 'text-blue-400 bg-blue-500/10 border-blue-400'
                  : 'text-slate-300 hover:text-blue-400 border-transparent'
              }`}
            >
              Expertise
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 transition-colors border-b-2 ${
                isActive('/contact')
                  ? 'text-blue-400 bg-blue-500/10 border-blue-400'
                  : 'text-slate-300 hover:text-blue-400 border-transparent'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer className="bg-slate-950 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-semibold text-white">AI Consultant</span>
              </Link>
              <p className="text-slate-400 text-sm mb-4">
                Transforming businesses through intelligent AI solutions and expert consulting.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-slate-300" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5 text-slate-300" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/expertise" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    AI Strategy & Consulting
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    Custom Model Development
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    Generative AI Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <a href="mailto:contact@example.com" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    contact@example.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">
                    100 S 1st St<br />Austin, TX 78701
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <p className="text-slate-400 text-sm">
                  &copy; 2026 AI Software Consultant. All rights reserved.
                </p>
                <span className="text-slate-500 text-sm">v0.1.0</span>
              </div>
              <div className="flex gap-6">
                <Link to="/terms" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
