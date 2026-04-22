import { Link } from "react-router";
import { Brain, CheckCircle2, ChevronRight, Sparkles, Code2, Zap, Shield, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useEffect, useState } from "react";

export function LargeLanguageModels() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const capabilities = [
    {
      icon: Code2,
      title: "Custom LLM Development",
      description: "Build and fine-tune large language models tailored to your domain and use cases"
    },
    {
      icon: Zap,
      title: "Prompt Engineering",
      description: "Optimize prompts and system instructions for consistent, high-quality outputs"
    },
    {
      icon: Brain,
      title: "RAG Systems",
      description: "Implement Retrieval-Augmented Generation for knowledge-grounded responses"
    },
    {
      icon: Shield,
      title: "Safety & Alignment",
      description: "Ensure responsible AI with guardrails, content filtering, and bias mitigation"
    }
  ];

  const applications = [
    {
      category: "Content Generation",
      examples: [
        "Automated content writing and copywriting",
        "Product descriptions and marketing materials",
        "Technical documentation and user guides",
        "Email drafting and response suggestions"
      ]
    },
    {
      category: "Conversational AI",
      examples: [
        "Customer support chatbots",
        "Virtual assistants and concierges",
        "Sales and lead qualification bots",
        "Interactive learning tutors"
      ]
    },
    {
      category: "Code & Development",
      examples: [
        "Code generation and completion",
        "Automated testing and bug detection",
        "Code review and refactoring suggestions",
        "Documentation generation"
      ]
    },
    {
      category: "Data Processing",
      examples: [
        "Document summarization and analysis",
        "Information extraction from text",
        "Sentiment analysis and classification",
        "Translation and localization"
      ]
    }
  ];

  const technologies = [
    "GPT-4, Claude, and other frontier models",
    "Fine-tuning with LoRA, QLoRA, and full fine-tuning",
    "LangChain and LlamaIndex frameworks",
    "Vector databases (Pinecone, Weaviate, Chroma)",
    "Hugging Face Transformers",
    "OpenAI API, Anthropic API, Azure OpenAI",
    "Prompt optimization and chain-of-thought",
    "Function calling and tool integration"
  ];

  const process = [
    {
      step: "1",
      title: "Use Case Analysis",
      description: "Identify specific business problems and requirements for LLM implementation"
    },
    {
      step: "2",
      title: "Model Selection",
      description: "Choose the optimal base model or fine-tuning approach based on your needs"
    },
    {
      step: "3",
      title: "Development & Training",
      description: "Build, train, and optimize the LLM solution with your data and requirements"
    },
    {
      step: "4",
      title: "Integration & Deployment",
      description: "Deploy the model into production with monitoring and continuous improvement"
    }
  ];

  return (
    <>
      {/* Hero Section with Parallax Background */}
      <section className="pt-32 pb-32 mt-20 px-6 relative overflow-hidden z-10" style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.9))' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'url(https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="mb-12"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <Link to="/expertise" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6">
              ← Back to Expertise
            </Link>
            <div className="inline-flex items-center gap-2 border-l-2 border-blue-400 px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Advanced AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Large Language Models
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Harness the power of state-of-the-art language models to transform how your business processes, generates, and understands text at scale.
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 gap-12 items-center"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY3ODMxODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Large Language Models"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all backdrop-blur-sm"
                    style={{
                      transform: `translateY(${scrollY * (0.05 + index * 0.02)}px)`,
                    }}
                  >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                    <p className="text-slate-400 text-sm">{capability.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section with Parallax */}
      <section className="py-32 mt-20 px-6 relative z-20 overflow-hidden" style={{ background: 'linear-gradient(to bottom, rgba(30, 41, 59, 0.95), rgba(30, 41, 59, 0.9))' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            transform: `translateY(${(scrollY - 600) * 0.4}px)`,
            backgroundImage: 'url(https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/80 via-slate-800/60 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="text-center mb-12"
            style={{
              transform: `translateY(${(scrollY - 400) * 0.2}px)`,
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">LLM Applications</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Transform your business operations with versatile language model capabilities
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 gap-8"
            style={{
              transform: `translateY(${(scrollY - 500) * 0.15}px)`,
            }}
          >
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all backdrop-blur-sm"
                style={{
                  transform: `translateY(${(scrollY - 600) * (0.08 + index * 0.02)}px)`,
                }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{app.category}</h3>
                <ul className="space-y-3">
                  {app.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section with Parallax */}
      <section className="py-32 mt-20 px-6 relative z-30 overflow-hidden" style={{ background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.95), rgba(2, 6, 23, 0.9))' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            transform: `translateY(${(scrollY - 1200) * 0.35}px)`,
            backgroundImage: 'url(https://images.unsplash.com/photo-1776106905694-6226a396da7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="text-center mb-12"
            style={{
              transform: `translateY(${(scrollY - 1100) * 0.18}px)`,
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technologies & Tools</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Expertise across the modern LLM technology stack
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
            style={{
              transform: `translateY(${(scrollY - 1200) * 0.12}px)`,
            }}
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-all text-center backdrop-blur-sm"
                style={{
                  transform: `translateY(${(scrollY - 1300) * (0.05 + (index % 4) * 0.015)}px)`,
                }}
              >
                <span className="text-slate-300 text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Parallax */}
      <section className="py-32 mt-20 px-6 relative z-40 overflow-hidden" style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.9))' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            transform: `translateY(${(scrollY - 1800) * 0.3}px)`,
            backgroundImage: 'url(https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/65 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="text-center mb-12"
            style={{
              transform: `translateY(${(scrollY - 1700) * 0.2}px)`,
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Implementation Process</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              A proven approach to LLM development and deployment
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{
              transform: `translateY(${(scrollY - 1800) * 0.15}px)`,
            }}
          >
            {process.map((phase, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all backdrop-blur-sm"
                style={{
                  transform: `translateY(${(scrollY - 1900) * (0.08 + index * 0.025)}px)`,
                }}
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-400">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-slate-400 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Parallax */}
      <section className="py-32 mt-20 px-6 relative z-50 overflow-hidden" style={{ background: 'linear-gradient(to bottom, rgba(30, 41, 59, 0.95), rgba(30, 41, 59, 0.9))' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            transform: `translateY(${(scrollY - 2400) * 0.25}px)`,
            backgroundImage: 'url(https://images.unsplash.com/photo-1765046255479-669cf07a0230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/85 via-slate-800/65 to-slate-800/85" />

        <div
          className="max-w-4xl mx-auto text-center relative z-10"
          style={{
            transform: `translateY(${(scrollY - 2300) * 0.1}px)`,
          }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build with LLMs?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's explore how large language models can transform your business processes and unlock new capabilities.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Start a Conversation
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/expertise" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg transition-colors">
              View All Expertise
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
