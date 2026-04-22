import { Link } from "react-router";
import { Cpu, Database, Network, Brain, Code2, Boxes, Cloud, LineChart, Sparkles, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Expertise() {
  const technicalAreas = [
    {
      icon: Brain,
      title: "Machine Learning & Deep Learning",
      description: "Advanced expertise in building and deploying state-of-the-art ML models",
      skills: [
        "TensorFlow & PyTorch",
        "Transformers & LLMs",
        "Computer Vision (CNN, YOLO, ResNet)",
        "Natural Language Processing",
        "Reinforcement Learning",
        "Neural Architecture Search"
      ]
    },
    {
      icon: Code2,
      title: "AI Frameworks & Tools",
      description: "Proficient in modern AI development tools and frameworks",
      skills: [
        "Hugging Face Transformers",
        "LangChain & LlamaIndex",
        "OpenAI API & Anthropic Claude",
        "scikit-learn & XGBoost",
        "Keras & JAX",
        "ONNX & TensorRT"
      ]
    },
    {
      icon: Database,
      title: "Data Engineering & MLOps",
      description: "End-to-end data pipeline design and model lifecycle management",
      skills: [
        "Apache Spark & Airflow",
        "Feature Stores (Feast, Tecton)",
        "MLflow & Kubeflow",
        "Data versioning (DVC)",
        "Model monitoring & drift detection",
        "A/B testing frameworks"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Scalable deployment across major cloud platforms",
      skills: [
        "AWS (SageMaker, Lambda, ECS)",
        "Google Cloud (Vertex AI, GKE)",
        "Azure (ML Studio, AKS)",
        "Docker & Kubernetes",
        "Serverless architectures",
        "Infrastructure as Code (Terraform)"
      ]
    },
    {
      icon: Network,
      title: "Model Deployment & Serving",
      description: "Production-ready model deployment and optimization",
      skills: [
        "REST & gRPC APIs",
        "Model compression & quantization",
        "Edge deployment (TFLite, ONNX)",
        "Real-time inference systems",
        "Batch prediction pipelines",
        "Auto-scaling & load balancing"
      ]
    },
    {
      icon: LineChart,
      title: "Data Science & Analytics",
      description: "Statistical analysis and business intelligence solutions",
      skills: [
        "Python (pandas, NumPy, SciPy)",
        "R & Julia",
        "SQL & NoSQL databases",
        "Tableau & Power BI",
        "Statistical modeling",
        "Time series forecasting"
      ]
    }
  ];

  const industries = [
    { name: "Healthcare & Life Sciences", icon: "🏥" },
    { name: "Financial Services", icon: "💰" },
    { name: "E-commerce & Retail", icon: "🛒" },
    { name: "Manufacturing & IoT", icon: "🏭" },
    { name: "Media & Entertainment", icon: "🎬" },
    { name: "Technology & SaaS", icon: "💻" }
  ];

  const specializations = [
    {
      title: "Large Language Models",
      items: ["Fine-tuning GPT models", "Prompt engineering", "RAG systems", "Custom chatbots", "Semantic search"],
      link: "/expertise/large-language-models",
      
    },
    {
      title: "Computer Vision",
      items: ["Object detection", "Image segmentation", "Face recognition", "OCR systems", "Medical imaging"]
    },
    {
      title: "Natural Language Processing",
      items: ["Sentiment analysis", "Named entity recognition", "Text classification", "Machine translation", "Question answering"]
    },
    {
      title: "Predictive Analytics",
      items: ["Demand forecasting", "Churn prediction", "Anomaly detection", "Recommendation systems", "Risk modeling"]
    }
  ];

  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border-l-2 border-blue-400 px-4 py-2 mb-6">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technical Expertise
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep knowledge across the entire AI/ML technology stack, from research and development to production deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY3ODMxODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Technology"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">Core Competencies</h2>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Machine Learning & Deep Learning</h3>
                  <p className="text-slate-400">Expert in TensorFlow, PyTorch, transformers, LLMs, computer vision, and NLP</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Engineering & MLOps</h3>
                  <p className="text-slate-400">Building scalable data pipelines, feature engineering, and model deployment</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cloud & Infrastructure</h3>
                  <p className="text-slate-400">AWS, GCP, Azure, Docker, Kubernetes, and serverless architectures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{area.description}</p>
                  <ul className="space-y-2 mb-4">
                    {area.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                  {index === 0 && (
                    <Link
                      to="/expertise/large-language-models"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      Explore LLMs
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">AI Specializations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Boxes className="w-6 h-6 text-blue-400" />
                  <Link to={spec.link}>
                    <h3 className="text-2xl font-semibold text-white">{spec.title}</h3>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {spec.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Industry Experience</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Delivered AI solutions across diverse industries and use cases
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all text-center">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Discuss Your Project</h2>
          <p className="text-xl text-slate-300 mb-8">
            Ready to leverage cutting-edge AI technology for your business? Let's explore how my expertise can help.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Get in Touch
              <ChevronRight className="w-5 h-5" />
            </a>
            <Link to="/services" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
