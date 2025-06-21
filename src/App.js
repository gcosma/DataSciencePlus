import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Menu, X, BookOpen, Users, Award, GraduationCap, Heart, Target, Brain, Play } from 'lucide-react';

export default function ProfCosmaPortfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProject, setCurrentProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "DECODE",
      fullTitle: "Data-driven machinE-learning aided stratification & management of multiple long-term COnditions in adults with intellectual disabilitiEs",
      description: "A £2.8 million NIHR-funded project developing machine learning solutions for healthcare management of adults with intellectual disabilities.",
      detailedDescription: "DECODE addresses the complex healthcare needs of adults with intellectual disabilities through AI-driven stratification and management tools. We're developing predictive models using clinical records and temporal data to identify at-risk patients and recommend personalised care pathways, with a strong focus on ethical AI frameworks for vulnerable populations.",
      objectives: [
        "Develop predictive models for patient stratification using clinical records analysis",
        "Create AI tools for personalised care pathway recommendations",
        "Establish ethical frameworks for AI use with vulnerable populations",
        "Build scalable solutions for NHS integration",
        "Conduct validation studies ensuring safety and efficacy"
      ],
      impact: "Will improve healthcare outcomes for thousands of adults with intellectual disabilities across the UK, reducing emergency admissions by up to 30%.",
      tech: ["Clinical Records Analysis", "Temporal Data Processing", "Predictive Modeling", "Healthcare AI", "Ethical AI"],
      category: "Healthcare AI & Data Science",
      status: "Active (2023-2027)",
      funding: "£2.8M NIHR",
      role: "Co-Investigator (AI lead)",
      icon: Heart,
      image: "/images/projects/decode-healthcare.jpg",
      gradient: "from-emerald-400 to-cyan-600",
      partners: ["Leicestershire Partnership NHS Trust", "University of Leicester", "King's College London", "Swansea University"],
      youtubeId: "dQw4w9WgXcQ",
      hasVideo: true,
      pageId: "decode"
    },
    {
      id: 2,
      title: "I-SIRCh",
      fullTitle: "Using artificial intelligence to improve the investigation of factors contributing to adverse maternity incidents involving Black mothers and families",
      description: "A £180K THF/NIHR project using advanced NLP to address critical healthcare inequalities in maternal mortality.",
      detailedDescription: "I-SIRCh tackles the healthcare inequality where Black women are four times more likely to die in pregnancy and childbirth. Using sophisticated natural language processing, we analyse maternity incident reports to identify causal factors and systemic biases that contribute to these disparities.",
      objectives: [
        "Develop NLP systems for analysing maternity incident reports",
        "Identify causal factors and interaction patterns in adverse outcomes",
        "Create bias detection algorithms for healthcare investigations",
        "Generate actionable insights for healthcare policy",
        "Establish best practices for AI analysis of sensitive healthcare data"
      ],
      impact: "Will inform targeted interventions to reduce maternal mortality among Black mothers, influencing national healthcare policy and training programmes.",
      tech: ["Natural Language Processing", "Named Entity Recognition", "Healthcare AI", "Bias Mitigation", "Social Justice AI"],
      category: "Healthcare Equity & AI Ethics",
      status: "Active Research",
      funding: "£180K THF/NIHR",
      role: "Joint Principal Investigator",
      icon: Target,
      image: "/images/projects/maternity-ai.jpg",
      gradient: "from-purple-400 to-pink-600",
      partners: ["Healthcare Safety Investigation Branch (HSIB)", "Professor Patrick Waterson", "The Health Foundation"],
      youtubeId: "jNQXAC9IVRw",
      hasVideo: true,
      pageId: "isirch"
    },
    {
      id: 3,
      title: "Themis.AI",
      fullTitle: "Identifying Early Help Referrals for Local Authorities with Machine Learning and Bias Analysis",
      description: "A £75K project developing ethical AI systems for local government early intervention identification.",
      detailedDescription: "Named after the Greek goddess of justice, Themis.AI develops machine learning models to help local authorities identify families needing early help interventions. The project emphasises bias-free algorithms, explainable AI interfaces, and comprehensive ethical frameworks for public sector deployment.",
      objectives: [
        "Develop machine learning models for early intervention prediction",
        "Create comprehensive bias detection and mitigation frameworks",
        "Build data preparation pipelines for local authority datasets",
        "Design explainable AI interfaces for social workers",
        "Establish ethical guidelines for AI in local government"
      ],
      impact: "Will help local authorities provide timely family support whilst ensuring AI decisions are fair and transparent. Framework scalable to other UK local authorities.",
      tech: ["Machine Learning", "Bias Analysis", "Data Science", "Public Sector AI", "Explainable AI", "Ethical AI"],
      category: "Public Sector AI & Ethics",
      status: "Active Development",
      funding: "£75K Loughborough EPG & Leicestershire CC",
      role: "Principle Investigator",
      icon: Brain,
      image: "/images/projects/themis-ai.jpg",
      gradient: "from-blue-400 to-indigo-600",
      partners: ["Leicestershire County Council", "Dr Axel Finke", "Loughborough University"],
      youtubeId: null,
      hasVideo: false,
      pageId: "themis"
    }
  ];

  const teamMembers = [
    {
      name: "Dr Rania Kousovista",
      position: "Research Associate - DECODE Project",
      specialisation: "Clinical Records Analysis & Temporal Data Processing",
      type: "staff",
      image: "/images/team-members/person.jpg"
    },
    {
      name: "Dr Emeka Raphael",
      position: "Research Associate - DECODE Project",
      specialisation: "Machine Learning & Healthcare AI",
      type: "staff",
      image: "/images/team-members/person.jpg"
    },
    {
      name: "Dr Mohit Kumar",
      position: "Research Associate - I-SIRCh Project",
      specialisation: "Natural Language Processing & Healthcare Equity",
      type: "staff",
      image: "/images/team-members/person.jpg"
    },
    {
      name: "Dr Eufrasio Lima Neto",
      position: "Research Associate - Themis.AI Project",
      specialisation: "Machine Learning & Bias Analysis",
      type: "staff",
      image: "/images/team-members/person.jpg"
    },
    {
      name: "Petros Andreou",
      position: "PhD Student in Cybersecurity AI",
      specialisation: "Selective Forgetting for Large Language Models",
      funder: "Darktrace",
      type: "phd",
      image: "/images/team-members/person.jpg"
    },
    {
      name: "Alex Buck",
      position: "PhD Student in AI Applications",
      specialisation: "AI-based tools for Vehicle Condition Monitoring",
      funder: "Royal Air Force (RAF)",
      type: "phd",
      image: "/images/team-members/person.jpg"
    },
    {
      name: "Jonathan Bailiss",
      position: "PhD Student in Data Science",
      specialisation: "Information trajectories in sociodemographic data",
      funder: "County Council Partnership",
      type: "phd",
      image: "/images/team-members/person.jpg"
    },
    {
      name: "Andrew Houston",
      position: "PhD Student in Healthcare AI",
      specialisation: "Complexity-based approaches to improve trust in healthcare AI",
      funder: "Academic Department of Military Rehabilitation",
      type: "phd",
      image: "/images/team-members/person.jpg"
    }
  ];

  const Navigation = () => (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">GC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Prof. Georgina Cosma</h1>
              <p className="text-xs text-gray-500">Loughborough University</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {['home', 'projects', 'group'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 capitalize ${
                  currentPage === page 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {page === 'group' ? 'Research Group' : page}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
            <div className="space-y-2 pt-4">
              {['home', 'projects', 'group'].map((page) => (
                <button
                  key={page}
                  onClick={() => { setCurrentPage(page); setIsMenuOpen(false); }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 capitalize"
                >
                  {page === 'group' ? 'Research Group' : page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 mb-8 shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                Professor of AI & Data Science
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Professor</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Georgina Cosma
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leading innovative research in Neural Information Retrieval, Computational Intelligence, 
                and Responsible AI at Loughborough University.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={() => setCurrentPage('projects')}
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Explore Research Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setCurrentPage('group')}
                  className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl border border-gray-200"
                >
                  <Users className="w-5 h-5" />
                  Meet My Team
                </button>
              </div>

              <div className="flex justify-center lg:justify-start gap-4">
                <a href="https://github.com/gcosma" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/in/georginacosma/" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </a>
                <a href="https://scholar.google.co.uk/citations?user=OpHkDDIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <BookOpen className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </a>
                <a href="mailto:g.cosma@lboro.ac.uk" className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-3xl rotate-3 shadow-2xl"></div>
                <div className="absolute inset-4 bg-white rounded-3xl shadow-inner flex items-center justify-center -rotate-3">
                  <img 
                    src="/images/profile/georgina-cosma.jpg" 
                    alt="Professor Georgina Cosma"
                    className="w-80 h-80 rounded-2xl object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                  <Brain className="w-12 h-12 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am Professor of AI & Data Science at Loughborough University, where I lead the Neural Information 
                Processing, Retrieval & Modelling research group. My research focuses on developing AI systems that 
                are not only technically advanced but also ethical, fair, and beneficial to society.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My academic journey began with a PhD in Computer Science from the University of Warwick, specialising 
                in intelligent information retrieval. Since then, I have built a research programme that spans neural 
                information retrieval, computational intelligence, and responsible AI development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What drives my research is the conviction that AI must serve humanity responsibly. I work on projects 
                that address real societal challenges—from healthcare inequalities to supporting vulnerable populations. 
                My current research portfolio includes major NIHR-funded projects worth over £3 million.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Academic Excellence</h3>
                <p className="text-gray-600 text-sm">Leading research group with distinguished publication record</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Grant Leadership</h3>
                <p className="text-gray-600 text-sm">Principal Investigator on major NIHR projects</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Social Impact</h3>
                <p className="text-gray-600 text-sm">Addressing healthcare inequalities through responsible AI</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Community Service</h3>
                <p className="text-gray-600 text-sm">Active reviewer for EPSRC and funding bodies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ProjectsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Current Research Projects</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Leading innovative research projects at the intersection of artificial intelligence, healthcare, 
            and social justice. Each project represents a significant contribution to responsible AI development.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-75 rounded-3xl`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="relative w-full h-80 object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-700">{project.category}</span>
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-lg">
                      <IconComponent className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white rounded-3xl p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.status}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.funding}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                    <h3 className="text-lg text-gray-600 mb-6 font-medium">{project.fullTitle}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Role: {project.role}</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-700 mb-2">Key Partners:</h5>
                        <div className="text-sm text-gray-600">
                          {project.partners.join(", ")}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setCurrentProject(project)}
                        className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        View Project Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const ProjectPageTemplate = ({ project }) => {
    const IconComponent = project.icon;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <button 
            onClick={() => setCurrentProject(null)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Projects
          </button>

          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.funding}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
                <h2 className="text-xl text-gray-600 mb-6 font-medium">{project.fullTitle}</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{project.detailedDescription}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">My Role: {project.role}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {project.hasVideo && project.youtubeId ? (
                  <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${project.youtubeId}`}
                        title={`${project.title} Project Video`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-3">Watch our project overview and research findings</p>
                  </div>
                ) : (
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-75 rounded-3xl`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="relative w-full h-80 object-cover rounded-3xl"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-700">{project.category}</span>
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-lg">
                      <IconComponent className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Objectives</h3>
                <ul className="space-y-4">
                  {project.objectives.map((objective, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-700">{objective}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Expected Impact</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.impact}</p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Collaborating Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.partners.map((partner, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-gray-700 font-medium">{partner}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ResearchGroupPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Research Group</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the talented researchers and PhD students working on cutting-edge AI and data science projects.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Staff</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.filter(member => member.type === 'staff').map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{member.position}</p>
                  <p className="text-gray-700 text-sm">{member.specialisation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">PhD Students</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.filter(member => member.type === 'phd').map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{member.position}</p>
                  <p className="text-gray-700 text-sm mb-2">{member.specialisation}</p>
                  <p className="text-gray-500 text-xs">Funded by: {member.funder}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans antialiased text-gray-900">
      <Navigation />
      
      {currentProject ? (
        <ProjectPageTemplate project={currentProject} />
      ) : (
        <>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'projects' && <ProjectsPage />}
          {currentPage === 'group' && <ResearchGroupPage />}
        </>
      )}
    </div>
  );
}