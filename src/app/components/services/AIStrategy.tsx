import { Link } from "react-router";
import { Brain, CheckCircle2, ChevronRight, Target, TrendingUp, Users, BarChart3, Shield, Lightbulb, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";

export function AIStrategy() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const benefits = [
    {
      icon: Target,
      title: "Clear Roadmap",
      description: "Strategic plan aligned with your business objectives and resources"
    },
    {
      icon: TrendingUp,
      title: "Maximize ROI",
      description: "Focus on high-impact AI initiatives that deliver measurable value"
    },
    {
      icon: Users,
      title: "Team Alignment",
      description: "Get stakeholders on board with clear communication and shared vision"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify and address potential challenges before implementation"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Assessment",
      description: "Deep dive into your business goals, current capabilities, data landscape, and organizational readiness for AI adoption.",
      deliverables: ["Current state analysis", "AI maturity assessment", "Data readiness evaluation", "Stakeholder interviews"]
    },
    {
      step: "2",
      title: "Opportunity Identification",
      description: "Identify and prioritize AI use cases that align with your business objectives and deliver maximum value.",
      deliverables: ["Use case catalog", "Impact vs. effort matrix", "Quick wins identification", "Long-term opportunities"]
    },
    {
      step: "3",
      title: "Strategy Development",
      description: "Create a comprehensive AI strategy including technology recommendations, resource planning, and governance frameworks.",
      deliverables: ["AI strategy document", "Technology stack recommendations", "Resource requirements", "Governance framework"]
    },
    {
      step: "4",
      title: "Roadmap & Planning",
      description: "Develop a phased implementation roadmap with clear milestones, timelines, and success metrics.",
      deliverables: ["Implementation roadmap", "Timeline and milestones", "Budget estimates", "Success metrics and KPIs"]
    }
  ];

  const offerings = [
    {
      title: "AI Readiness Assessment & Maturity Modeling",
      description: "Evaluate your organization's current state and readiness for AI adoption. We assess your data infrastructure, technical capabilities, team skills, and organizational culture to create a maturity model that identifies gaps and opportunities."
    },
    {
      title: "Use Case Identification & Prioritization",
      description: "Discover high-impact AI opportunities aligned with your business goals. We work with stakeholders to identify potential use cases, evaluate feasibility and impact, and create a prioritized backlog based on value, effort, and strategic alignment."
    },
    {
      title: "Technology Stack Evaluation & Recommendations",
      description: "Navigate the complex AI technology landscape with expert guidance. We evaluate frameworks, platforms, and tools to recommend the optimal stack for your needs, considering factors like scalability, cost, team expertise, and integration requirements."
    },
    {
      title: "Build vs. Buy vs. Partner Analysis",
      description: "Make informed decisions on how to acquire AI capabilities. We analyze the tradeoffs between building custom solutions, purchasing off-the-shelf products, or partnering with vendors, considering your budget, timeline, and strategic objectives."
    },
    {
      title: "Data Strategy & Infrastructure Planning",
      description: "Establish a solid foundation for AI success. We help you design data collection, storage, and processing strategies, plan infrastructure requirements, and ensure data quality, governance, and compliance standards are in place."
    },
    {
      title: "ROI Analysis & Business Case Development",
      description: "Quantify the business value of AI investments. We develop detailed financial models, calculate expected returns, identify cost drivers, and create compelling business cases to secure stakeholder buy-in and funding."
    },
    {
      title: "AI Governance & Ethics Frameworks",
      description: "Build responsible and trustworthy AI systems. We help establish governance structures, ethical guidelines, bias detection processes, and compliance frameworks to ensure your AI implementations are fair, transparent, and accountable."
    },
    {
      title: "Organizational Change Management",
      description: "Navigate the human side of AI transformation. We develop change management strategies to address resistance, upskill teams, redesign workflows, and foster an AI-ready culture throughout your organization."
    },
    {
      title: "Vendor Selection & Evaluation",
      description: "Choose the right AI partners and solutions. We create evaluation criteria, conduct vendor assessments, facilitate proof-of-concepts, and guide procurement processes to ensure you select solutions that meet your requirements."
    },
    {
      title: "Pilot Project Planning & Execution",
      description: "De-risk AI initiatives through targeted pilots. We help scope, plan, and execute proof-of-concept projects that validate assumptions, demonstrate value, and provide learning experiences before full-scale implementation."
    }
  ];

  const industries = [
    { name: "Healthcare", example: "Patient outcome prediction, diagnostic assistance" },
    { name: "Financial Services", example: "Risk assessment, fraud detection, algorithmic trading" },
    { name: "Retail & E-commerce", example: "Demand forecasting, personalization, inventory optimization" },
    { name: "Manufacturing", example: "Predictive maintenance, quality control, supply chain optimization" },
    { name: "Technology & SaaS", example: "Product intelligence, user behavior analysis, automation" },
    { name: "Professional Services", example: "Process automation, client insights, resource optimization" }
  ];

  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6">
              ← Back to Services
            </Link>
            <div className="inline-flex items-center gap-2 border-l-2 border-blue-400 px-4 py-2 mb-6">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Strategic Planning</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Strategy & Consulting
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Navigate the AI landscape with confidence. Get expert guidance on how to leverage artificial intelligence to achieve your business goals and competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY3ODMxODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Strategy"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">What's Included</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive consulting services to guide your AI journey
          </p>
          <div className="max-w-4xl mx-auto space-y-3">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white font-semibold">{offering.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-400 pl-8">{offering.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Our Process</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            A structured approach to developing your AI strategy
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-400">{phase.step}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{phase.title}</h3>
                    <p className="text-slate-400 mb-4">{phase.description}</p>
                  </div>
                </div>
                <div className="ml-16">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">Deliverables:</h4>
                  <ul className="space-y-1">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Industry Experience</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Proven AI strategy expertise across diverse sectors
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-slate-400 text-sm">{industry.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your AI Strategy?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss your business goals and create a customized AI roadmap that drives results.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Schedule Consultation
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
