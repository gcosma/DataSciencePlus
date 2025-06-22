import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Menu, X, BookOpen, Users, Award, GraduationCap, Heart, Target, Brain, Play, Presentation, Monitor, Code, Globe, Calendar, MapPin, Clock } from 'lucide-react';
import profileImage from './images/profile/GCosma2.jpg';
import decodeImage from './images/projects/decode-ai.jpg';
import isirchImage from './images/projects/isirch-ai.jpg';
import themisImage from './images/projects/themis-ai.jpg';
import personImage from './images/team-members/person.jpg';
import svgcKtpImage from './images/projects/svgc-ktp.svg';

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
      image: decodeImage,
      gradient: "from-emerald-400 to-cyan-600",
      partners: ["Leicestershire Partnership NHS Trust", "University of Leicester", "King's College London", "Swansea University"],
      youtubeId: "5SaU7rDzC3g",
      hasVideo: true,
      pageId: "decode"
    },
    {
      id: 2,
      title: "I-SIRCh",
      fullTitle: "Using artificial intelligence to improve the investigation of factors contributing to adverse maternity incidents involving mothers and families across ethnic groups",
      description: "A £180K THF/NIHR project using advanced NLP to address critical healthcare inequalities in maternal mortality.",
      detailedDescription: "I-SIRCh tackles the healthcare inequality in pregnancy and childbirth. Using sophisticated natural language processing, we analyse maternity incident reports to identify causal factors and systemic biases that contribute to these disparities.",
      objectives: [
        "Develop NLP systems for analysing maternity incident reports",
        "Identify causal factors and interaction patterns in adverse outcomes",
        "Create bias detection algorithms for healthcare investigations",
        "Generate actionable insights for healthcare policy",
        "Establish best practices for AI analysis of sensitive healthcare data"
      ],
      impact: "Will inform targeted interventions to reduce maternal mortality among mothers, influencing national healthcare policy and training programmes.",
      tech: ["Natural Language Processing", "Named Entity Recognition", "Healthcare AI", "Bias Mitigation", "Social Justice AI"],
      category: "Healthcare Equity & AI Ethics",
      status: "Active Research",
      funding: "£180K THF/NIHR",
      role: "Joint Principal Investigator",
      icon: Target,
      image: isirchImage,
      gradient: "from-purple-400 to-pink-600",
      partners: ["Healthcare Safety Investigation Branch (HSIB)", "The Health Foundation"],
      youtubeIds: ["2h4u5WdZ7dM", "98lofiDaM-A"],
      hasVideo: true,
      hasMultipleVideos: true,
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
      image: themisImage,
      gradient: "from-blue-400 to-indigo-600",
      partners: ["Leicestershire County Council", "Dr Axel Finke", "Loughborough University"],
      youtubeId: null,
      hasVideo: false,
      pageId: "themis"
    },
    {
      id: 4,
      title: "SVGC KTP",
      fullTitle: "Innovative Document Deduplication Algorithms for Government Digital Systems",
      description: "Knowledge Transfer Partnership with SVGC developing innovative algorithms for government document deduplication and adaptive AI systems that evolve with changing policy landscapes.",
      detailedDescription: "This pioneering KTP with SVGC develops innovative algorithms specifically for government document deduplication and processing. Our adaptive AI systems are designed to evolve with changing policy landscapes, addressing the critical challenge of managing vast government document repositories. The project creates intelligent deduplication algorithms that understand government document contexts, reduce storage costs, improve information retrieval, and adapt to evolving public sector requirements and policy changes.",
      objectives: [
        "Develop innovative algorithms for intelligent government document deduplication",
        "Create adaptive AI systems that evolve with changing policy landscapes",
        "Build context-aware deduplication systems for public sector document management",
        "Implement algorithms that understand government document hierarchies and relationships",
        "Establish frameworks for scalable document processing in government databases",
        "Reduce storage costs and improve information retrieval efficiency in public sector"
      ],
      impact: "Delivering transformative efficiency in government document management through intelligent deduplication algorithms. The adaptive systems significantly reduce storage costs, eliminate redundant information, and improve document retrieval times. The AI systems evolve with policy changes, ensuring long-term effectiveness and scalability across government departments.",
      tech: ["Document Deduplication", "Adaptive Algorithms", "Government AI", "Policy-Aware Systems", "Intelligent Document Processing", "Public Sector Innovation"],
      category: "Government AI & Document Processing",
      status: "Active Research",
      funding: "KTP Grant - SVGC Partnership",
      role: "Academic Supervisor",
      icon: Target,
      image: svgcKtpImage, // Use the new image variable
      gradient: "from-green-400 to-emerald-600",
      partners: ["SVGC", "Loughborough University", "University of Glasgow (Previous KTP)"],
      youtubeId: null,
      hasVideo: false,
      pageId: "svgc-ktp"
    }    
  ];

  const teamMembers = [
    // =============================================================================
    // CURRENT TEAM MEMBERS
    // =============================================================================
    
    // Current PhD Students (Primary Supervision)
    {
      name: "Petros Andreou",
      position: "PhD Student in neural machine unlearning",
      specialisation: "Selective Forgetting for Large Language Models",
      funder: "Darktrace",
      startDate: "April 2024",
      type: "phd",
      status: "current",
      image: personImage
    },
    {
      name: "Alex Buck",
      position: "PhD Student in AI Applications", 
      specialisation: "AI-based tools for Vehicle Condition Monitoring",
      funder: "Royal Air Force (RAF)",
      startDate: "October 2023",
      type: "phd",
      status: "current",
      image: personImage
    },
    {
      name: "Mikel Williams",
      position: "PhD Student in Information Retrieval",
      specialisation: "Neural Information Retrieval with cross-modal knowledge transfer",
      funder: "Self-funded",
      startDate: "July 2021",
      type: "phd",
      status: "current",
      image: personImage
    },
    {
      name: "Jamie Lanyon",
      position: "PhD Student in neural machine unlearning",
      specialisation: "Selective Forgetting for Large Language Models",
      funder: "self-funded",
      startDate: "TBC",
      type: "phd",
      status: "current",
      image: personImage
    },

    // =============================================================================
    // ALUMNI - RESEARCH STAFF (Now in Academic Positions)
    // =============================================================================
    
    {
      name: "Dr Rania Kousovista",
      position: "Senior Researcher, Department of Epidemiology, Erasmus MC & Associate Fellow in AI, Loughborough University",
      specialisation: "Clinical Records Analysis & Temporal Data Processing",
      previousRole: "Research Fellow - DECODE Project",
      type: "research_alumni",
      image: personImage
    },
    {
      name: "Dr Emeka Raphael",
      position: "Lecturer, Aston University",
      specialisation: "Machine Learning & Healthcare AI",
      previousRole: "Research Associate - DECODE Project", 
      type: "research_alumni",
      image: personImage
    },
    {
      name: "Dr Mohit Kumar",
      position: "Lecturer in Transport and Logistics Management, University of Greenwich & Associate Fellow in AI, Loughborough University",
      specialisation: "Natural Language Processing & Healthcare Equity",
      previousRole: "Research Associate - I-SIRCh Project",
      type: "research_alumni",
      image: personImage
    },
    {
      name: "Dr Eufrasio Lima Neto",
      position: "Associate Professor, Department of Statistics, Federal University of Paraíba",
      specialisation: "Machine Learning & Bias Analysis",
      previousRole: "Research Associate - Themis.AI Project",
      type: "research_alumni", 
      image: personImage
    },

    // =============================================================================
    // ALUMNI - PhD GRADUATES
    // =============================================================================
    
    // Recent PhD Completions (2021-2024)
    {
      name: "Jonathan Bailiss",
      position: "PhD Graduate - Data Science",
      specialisation: "Information trajectories in sociodemographic data",
      funder: "County Council Partnership",
      startDate: "October 2022",
      completionDate: "2024",
      type: "phd_alumni",
      image: personImage
    },
    {
      name: "Andrew Houston", 
      position: "PhD Graduate - Healthcare AI",
      specialisation: "Complexity-based approaches to improve trust in healthcare AI",
      funder: "Academic Department of Military Rehabilitation",
      startDate: "January 2021",
      completionDate: "2024",
      type: "phd_alumni",
      image: personImage
    },
    {
      name: "Jingrui (Jerry) Hou",
      position: "PhD Graduate - Machine Learning", 
      specialisation: "Continual Lifelong Learning for Cross-Modal Information Retrieval",
      funder: "Chinese Scholarship Council (CSC)",
      startDate: "October 2021",
      completionDate: "2024",
      type: "phd_alumni",
      image: personImage
    },
    
    // PhD Completions (2020-2023)
    {
      name: "Clifford Zhang",
      position: "PhD Graduate - AI & Surface Analysis",
      specialisation: "AI-based Detection, Classification and Analysis of Defects on Surfaces", 
      funder: "Railston & Co Ltd and Loughborough University",
      startDate: "October 2020",
      completionDate: "December 2023",
      type: "phd_alumni",
      image: personImage
    },
    {
      name: "Yan Gong",
      position: "PhD Graduate - Information Retrieval",
      specialisation: "Visual-Semantic Embedding Networks for Cross-modal Information Retrieval",
      funder: "Self-funded", 
      startDate: "October 2020",
      completionDate: "August 2023",
      type: "phd_alumni",
      image: personImage
    },
    
    // Earlier PhD Completion (2016-2019)
    {
      name: "Sadegh Salesi",
      position: "PhD Graduate - Evolutionary Computation",
      specialisation: "Evolutionary Computation-based Feature Selection for Finding a Stable Set of Features in High-dimensional Data",
      startDate: "October 2016", 
      completionDate: "August 2019",
      type: "phd_alumni",
      image: personImage
    },

    // =============================================================================
    // ALUMNI - MRes GRADUATES  
    // =============================================================================
    
    {
      name: "Salim Maaji",
      position: "MRes Graduate - Deep Learning",
      specialisation: "Deep Learning for Real-time Voltage Stability Prediction",
      institution: "Nottingham Trent University",
      completionDate: "2019",
      type: "mres_alumni",
      image: personImage
    },
    {
      name: "Gulrukh Turabee", 
      position: "MRes Graduate - Deep Learning",
      specialisation: "Sleep EEG data classification using transparent deep learning",
      institution: "Nottingham Trent University",
      completionDate: "2019",
      type: "mres_alumni",
      image: personImage
    },
    {
      name: "Bhavesh Pandya",
      position: "MRes Graduate - Biometric Recognition", 
      specialisation: "Deep Learning for multi-modal Biometric Recognition",
      institution: "Nottingham Trent University",
      completionDate: "2018",
      type: "mres_alumni",
      image: personImage
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
            {['home', 'projects', 'group', 'outreach'].map((page) => (
              <button
                key={page}
                onClick={() => {
                        setCurrentPage(page);
                        setCurrentProject(null); // Clear project view when navigating
                      }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 capitalize ${
                  currentPage === page 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
        
                {page === 'group' ? 'Research Group' : page === 'outreach' ? 'Outreach' : page}
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
              {['home', 'projects', 'group', 'outreach'].map((page) => (
                <button
                  key={page}
                  onClick={() => { setCurrentPage(page); setIsMenuOpen(false); }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 capitalize"
                >
                  {page === 'group' ? 'Research Group' : page === 'outreach' ? 'Outreach' : page}
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
                    src={profileImage}
                    alt="Professor Georgina Cosma"
                    className="w-80 h-80 rounded-2xl object-contain"
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
                      className="relative w-full h-80 object-contain rounded-3xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
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
    
    // I-SIRCh project publications timeline data
    const isirchPublications = project.pageId === 'isirch' ? [
      {
        year: "2025",
        type: "Project Establishment",
        title: "LENS.ai - Learning from Evidence through Natural language Systems",
        venue: "Software Development Project Launch",
        description: "Continuation of I-SIRCh research, extending AI capabilities from HSIB maternity investigation reports to coroners' reports and other healthcare documents, focusing on using artificial intelligence to improve the investigation of factors contributing to adverse maternity incidents involving mothers across ethnic groups",
        location: "Project Establishment",
        color: "amber"
      },
      {
        year: "2025",
        type: "Conference Presentation",
        title: "What do Prevention of Future Death Reports tell us about maternity care in UK hospitals?",
        venue: "HealTAC 2025",
        authors: "Georgina Cosma, Patrick Waterson, Thomas Jun and Jonathan Back",
        location: "Conference Presentation",
        color: "emerald"
      },
      {
        year: "2025",
        type: "Policy Conference Talk",
        title: "On the role of digital transformation in improving the safety of maternity care, including next steps for the use of AI tools in improving safety outcomes",
        venue: "Westminster Health Forum policy conference: Priorities for improving maternity services in England",
        description: "Panel member on 'Priorities for improving maternal and neonatal safety, and next steps for tackling disparities in care'. Chaired half the conference.",
        date: "28th January 2025",
        location: "Westminster, London",
        color: "purple"
      },
      {
        year: "2024",
        type: "Conference Talk",
        title: "Data Science and AI Solutions for Healthcare",
        venue: "NortHFutures Digital Health Symposium",
        date: "8th November 2024",
        color: "blue"
      },
      {
        year: "2024",
        type: "Journal Article",
        title: "I-SIRch: AI-powered concept annotation tool for equitable extraction and analysis of safety insights from maternity investigations",
        authors: "Singh, MK, Cosma, G, Waterson, P, Back, J, Jun, GT",
        venue: "International Journal of Population Data Science",
        volume: "9(2)",
        doi: "10.23889/ijpds.v9i2.2439",
        year_published: "2024",
        color: "indigo"
      },
      {
        year: "2024",
        type: "Conference Paper",
        title: "Intelligent Multi-document Summarisation for Extracting Insights on Racial Inequalities from Maternity Incident Investigation Reports",
        authors: "Cosma, G., Singh, M.K., Waterson, P., Jun, G.T., Back, J.",
        venue: "Artificial Intelligence in Healthcare. AIiH 2024",
        series: "Lecture Notes in Computer Science, vol 14976",
        publisher: "Springer, Cham",
        doi: "10.1007/978-3-031-67285-9_23",
        editors: "Xie, X., Styles, I., Powathil, G., Ceccarelli, M. (eds)",
        color: "rose"
      },
      {
        year: "2024",
        type: "Conference Paper", 
        title: "Unveiling disparities in maternity care: a topic modelling approach to analysing maternity incident investigation reports",
        authors: "Cosma, G, Singh, MK, Waterson, P, Jun, GT, Back, J",
        venue: "Artificial Intelligence in Healthcare. First International Conference, AIiH 2024",
        location: "Swansea, UK, September 4–6, 2024",
        pages: "pp.295-308",
        isbn: "9783031672774",
        doi: "10.1007/978-3-031-67278-1_23",
        editors: "Xie, X, Styles, I, Powathil, G, Ceccarelli, M (ed)",
        publisher: "Springer",
        color: "cyan"
      }
    ] : [];

    const getPublicationColorClasses = (color) => {
      const colors = {
        emerald: { bg: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-800", glow: "shadow-emerald-200" },
        blue: { bg: "bg-blue-500", badge: "bg-blue-100 text-blue-800", glow: "shadow-blue-200" },
        purple: { bg: "bg-purple-500", badge: "bg-purple-100 text-purple-800", glow: "shadow-purple-200" },
        rose: { bg: "bg-rose-500", badge: "bg-rose-100 text-rose-800", glow: "shadow-rose-200" },
        indigo: { bg: "bg-indigo-500", badge: "bg-indigo-100 text-indigo-800", glow: "shadow-indigo-200" },
        cyan: { bg: "bg-cyan-500", badge: "bg-cyan-100 text-cyan-800", glow: "shadow-cyan-200" },
        amber: { bg: "bg-amber-500", badge: "bg-amber-100 text-amber-800", glow: "shadow-amber-200" }
      };
      return colors[color] || colors.blue;
    };
    
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

          <div className="bg-white rounded-3xl p-10 shadow-2xl mb-12">
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
                
                {/* LENS Project Information for I-SIRCh page */}
                {project.pageId === 'isirch' && (
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 rounded-lg mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <h3 className="text-xl font-bold text-gray-900">LENS.ai - Learning from Evidence through Natural language Systems</h3>
                    </div>
                    <p className="text-gray-700 mb-3 font-medium">A continuation of I-SIRCh</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      I-SIRCh tackled healthcare inequalities in maternity care by analysing maternity investigation reports provided by HSIB. LENS.ai extends this capability to analyse coroners' reports and can be further developed to analyse other healthcare reports, using sophisticated natural language processing to identify causal factors and systemic biases that contribute to disparities across ethnic groups.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Key System Capabilities:</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li><strong>Automated Data Collection:</strong> Web scraping of UK Judiciary PFD reports with metadata extraction</li>
                        <li><strong>Intelligent Document Clustering:</strong> Semantic similarity-based grouping and thematic organisation</li>
                        <li><strong>Advanced Topic Modelling:</strong> Multiple vectorisation methods (TF-IDF, BM25, weighted schemes) for pattern discovery</li>
                        <li><strong>Generative Summarisation:</strong> AI-powered cluster summaries and extractive text analysis</li>
                        <li><strong>Healthcare-Specific Annotation:</strong> Bio_ClinicalBERT for medical concept identification</li>
                        <li><strong>Multi-Framework Analysis:</strong> Theme identification across I-SIRCh, House of Commons, and custom frameworks</li>
                        <li><strong>Interactive Dashboards:</strong> Comprehensive visualisation with correlation analysis and temporal trends</li>
                      </ul>
                    </div>
                    <p className="text-gray-700 font-semibold">
                      <strong>My Role: Joint Principal Investigator with Patrick Waterson (human factors)</strong>
                    </p>
                  </div>
                )}
                
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
                {/* I-SIRCh Image for I-SIRCh page */}
                {project.pageId === 'isirch' && (
                  <div className="relative mt-24">
                    <img 
                      src={isirchImage}
                      alt="I-SIRCh AI System Interface"
                      className="w-full h-80 object-cover rounded-3xl shadow-lg"
                    />
                  
                  </div>
                )}
                
                {project.hasVideo && project.hasMultipleVideos && project.youtubeIds ? (
                  <div className="space-y-4">
                    {project.youtubeIds.map((videoId, index) => (
                      <div key={index} className="relative">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={`${project.title} Project Video ${index + 1}`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        {index === 0 && (
                          <p className="text-center text-sm text-gray-600 mt-3">Project overview and research findings</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : project.hasVideo && project.youtubeId ? (
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

          {/* Publications Timeline - Only show for I-SIRCh project */}
          {project.pageId === 'isirch' && isirchPublications.length > 0 && (
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-4xl font-bold text-gray-900 mb-12 text-centre">Publications & Presentations Timeline</h3>
              
              <div className="relative">
                {/* Enhanced Timeline line with gradient */}
                <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-full shadow-lg"></div>
                
                {/* Floating timeline dots */}
                <div className="absolute left-6 top-0 bottom-0">
                  {isirchPublications.map((_, index) => (
                    <div 
                      key={index} 
                      className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-4 border-blue-300"
                      style={{ top: `${(index * 100) / (isirchPublications.length - 1)}%` }}
                    ></div>
                  ))}
                </div>
                
                <div className="space-y-12 pl-4">
                  {isirchPublications.map((pub, index) => {
                    const colorClasses = getPublicationColorClasses(pub.color);
                    
                    return (
                      <div key={index} className="relative flex items-start gap-12">
                        {/* Enhanced Timeline dot */}
                        <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl ${colorClasses.bg} ${colorClasses.glow} transform hover:scale-110 transition-all duration-300 rotate-3 hover:rotate-0`}>
                          <BookOpen className="w-10 h-10 text-white" />
                          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                        </div>
                        
                        {/* Enhanced Content card */}
                        <div className="flex-1 group">
                          <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                            {/* Card decoration */}
                            <div className={`absolute top-0 left-0 w-20 h-1 ${colorClasses.bg} rounded-full`}></div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                              <div className={`px-4 py-2 rounded-full text-sm font-semibold ${colorClasses.badge} shadow-sm`}>
                                <Calendar className="w-4 h-4 inline mr-2" />
                                {pub.year}
                              </div>
                              <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                                {pub.type}
                              </div>
                            </div>
                            
                            <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                              {pub.title}
                            </h4>
                            
                            {pub.authors && (
                              <p className="text-gray-600 text-lg mb-3 leading-relaxed">
                                <span className="font-medium">Authors:</span> {pub.authors}
                              </p>
                            )}
                            
                            <div className="mb-3">
                              <p className="text-gray-700 font-medium text-lg">{pub.venue}</p>
                              {pub.volume && <p className="text-gray-600 text-sm">Volume: {pub.volume}</p>}
                              {pub.series && <p className="text-gray-600 text-sm">{pub.series}</p>}
                              {pub.location && <p className="text-gray-600 text-sm">{pub.location}</p>}
                              {pub.publisher && <p className="text-gray-600 text-sm">Publisher: {pub.publisher}</p>}
                              {pub.editors && <p className="text-gray-600 text-sm">Editors: {pub.editors}</p>}
                            </div>
                            
                            {pub.description && (
                              <p className="text-gray-600 mb-3 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                                {pub.description}
                              </p>
                            )}
                            
                            {pub.date && (
                              <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {pub.date}
                              </p>
                            )}
                            
                            <div className="flex flex-wrap gap-3 text-sm">
                              {pub.pages && (
                                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                                  Pages: {pub.pages}
                                </span>
                              )}
                              {pub.isbn && (
                                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                                  ISBN: {pub.isbn}
                                </span>
                              )}
                              {pub.doi && (
                                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-medium">
                                  DOI: <a 
                                    href={`https://doi.org/${pub.doi}`} 
                                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title={`View publication: ${pub.title}`}
                                  >
                                    {pub.doi}
                                  </a>
                                </span>
                              )}
                              {pub.year_published && pub.year_published !== pub.year && (
                                <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full font-medium">
                                  Published: {pub.year_published}
                                </span>
                              )}
                            </div>
                            
                            {/* Hover effect decoration */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
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

        {/* Current PhD Students */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current PhD Students</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.filter(member => member.type === 'phd' && member.status === 'current').map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{member.position}</p>
                  <p className="text-gray-700 text-sm mb-2">{member.specialisation}</p>
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xs">Funded by: {member.funder}</p>
                    <p className="text-gray-500 text-xs">Started: {member.startDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Alumni */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Alumni</h2>
          <p className="text-gray-600 mb-8">Former research staff who have moved to prestigious academic positions</p>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.filter(member => member.type === 'research_alumni').map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-xl object-contain flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{member.position}</p>
                    <p className="text-gray-700 text-sm mb-2">{member.specialisation}</p>
                    <p className="text-blue-600 text-xs font-medium">{member.previousRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PhD Alumni */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">PhD Alumni</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.filter(member => member.type === 'phd_alumni').map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.position}</p>
                  <p className="text-gray-700 text-sm mb-3">{member.specialisation}</p>
                  <div className="space-y-1">
                    {member.funder && <p className="text-gray-500 text-xs">Funded by: {member.funder}</p>}
                    <p className="text-gray-500 text-xs">
                      {member.startDate} - {member.completionDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MRes Alumni */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">MRes Alumni</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.filter(member => member.type === 'mres_alumni').map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.position}</p>
                  <p className="text-gray-700 text-sm mb-3">{member.specialisation}</p>
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xs">{member.institution}</p>
                    <p className="text-gray-500 text-xs">Completed: {member.completionDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const OutreachPage = () => {
    const timelineEvents = [
      {
        date: "June 2025",
        title: "HealTac Conference Poster Presentation",
        type: "Conference Presentation",
        description: "Presented research poster at the HealTac conference, showcasing latest findings in healthcare AI applications.",
        status: "completed",
        icon: Award,
        color: "emerald"
      },
      {
        date: "February 6, 2025",
        title: "AI Opportunities Action Plan – lessons and opportunities for the public sector",
        type: "Talk",
        description: "Delivered talk on AI opportunities and lessons for public sector implementation.",
        status: "completed",
        icon: Presentation,
        color: "blue"
      },
      {
        date: "January 28, 2025",
        title: "Westminster Health Forum: Priorities for improving maternity services in England",
        type: "Panel Discussion",
        description: "Panel member discussing priorities for improving maternal and neonatal safety, and next steps for tackling disparities in care. Chaired half the conference on digital transformation role in maternity care safety.",
        status: "completed",
        icon: Users,
        color: "purple"
      },
      {
        date: "November 8, 2024",
        title: "NortHFutures Digital Health Symposium",
        type: "Talk",
        description: "Presented 'Data Science and AI Solutions for Healthcare' at the digital health symposium.",
        status: "completed",
        icon: Heart,
        color: "rose"
      },
      {
        date: "October 2023",
        title: "Ethics and Governance in AI Course",
        type: "Course Delivery",
        description: "Delivered 12-hour course on Ethics and Governance in AI via the Royal Statistical Society.",
        status: "completed",
        icon: BookOpen,
        color: "indigo"
      },
      {
        date: "October 2023",
        title: "AI Ethics Training for CDT PhD Students",
        type: "Training",
        description: "Delivered AI ethics awareness training for PhD students of CDT centres.",
        status: "completed",
        icon: GraduationCap,
        color: "amber"
      },
      {
        date: "March 2023",
        title: "Ethical AI Webinar for NHS Knowledge Specialists",
        type: "Webinar",
        description: "Conducted webinar about ethical AI specifically for NHS Knowledge and Library specialists.",
        status: "completed",
        icon: Monitor,
        color: "cyan"
      },
      {
        date: "2023",
        title: "County Council Ethics and Governance Course",
        type: "Short Course",
        description: "Delivered short course on Ethics and Governance in AI to county councils.",
        status: "completed",
        icon: Code,
        color: "violet"
      },
      {
        date: "2023",
        title: "PPI Group Training Sessions",
        type: "Training",
        description: "Delivered 4 short courses on machine learning, AI and ethical AI to I-SIRCh and DECODE project Patient and Public Involvement (PPI) groups.",
        status: "completed",
        icon: Users,
        color: "teal"
      },
      {
        date: "January 25, 2023",
        title: "C-Dice AI Ethics Training",
        type: "Training",
        description: "Delivered AI ethics awareness training for C-Dice Postgraduate Researchers and PhD students.",
        status: "completed",
        icon: Brain,
        color: "orange"
      },
      {
        date: "October 2022",
        title: "Royal Statistical Society AI Course",
        type: "Course Delivery",
        description: "Delivered 20-hour course on Ethics and Governance in AI via the Royal Statistical Society.",
        status: "completed",
        icon: BookOpen,
        color: "pink"
      },
      {
        date: "2022",
        title: "County Council Data Processing Training",
        type: "Consultancy Training",
        description: "Delivered 23-hour training to County Council employees on pre-processing large data towards ethical machine learning.",
        status: "completed",
        icon: Target,
        color: "lime"
      }
    ];

    const getColorClasses = (color) => {
      const colors = {
        emerald: { bg: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-800", glow: "shadow-emerald-200" },
        blue: { bg: "bg-blue-500", badge: "bg-blue-100 text-blue-800", glow: "shadow-blue-200" },
        purple: { bg: "bg-purple-500", badge: "bg-purple-100 text-purple-800", glow: "shadow-purple-200" },
        rose: { bg: "bg-rose-500", badge: "bg-rose-100 text-rose-800", glow: "shadow-rose-200" },
        indigo: { bg: "bg-indigo-500", badge: "bg-indigo-100 text-indigo-800", glow: "shadow-indigo-200" },
        amber: { bg: "bg-amber-500", badge: "bg-amber-100 text-amber-800", glow: "shadow-amber-200" },
        cyan: { bg: "bg-cyan-500", badge: "bg-cyan-100 text-cyan-800", glow: "shadow-cyan-200" },
        violet: { bg: "bg-violet-500", badge: "bg-violet-100 text-violet-800", glow: "shadow-violet-200" },
        teal: { bg: "bg-teal-500", badge: "bg-teal-100 text-teal-800", glow: "shadow-teal-200" },
        orange: { bg: "bg-orange-500", badge: "bg-orange-100 text-orange-800", glow: "shadow-orange-200" },
        pink: { bg: "bg-pink-500", badge: "bg-pink-100 text-pink-800", glow: "shadow-pink-200" },
        lime: { bg: "bg-lime-500", badge: "bg-lime-100 text-lime-800", glow: "shadow-lime-200" }
      };
      return colors[color] || colors.blue;
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 mb-8 shadow-lg border border-blue-100">
              <Globe className="w-4 h-4 mr-2" />
              Professional Outreach & Education
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Outreach & Course Delivery
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Sharing research and knowledge through conferences, workshops, training sessions, and community engagement activities.
            </p>
          </div>

          {/* Course Inquiry Section */}
          <section className="mb-20">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Course Delivery Services</h2>
                <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto">
                  If you are a company or organisation interested in a course on Ethical AI, please feel free to send me an email to discuss. 
                  I also offer courses on Ethics and Governance in AI via the Royal Statistical Society.
                </p>
                <div className="text-center">
                  <a 
                    href="mailto:g.cosma@lboro.ac.uk" 
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Get in Touch About Courses
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Activities Timeline</h2>
            <div className="relative">
              {/* Enhanced Timeline line with gradient */}
              <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
              
              {/* Floating timeline dots */}
              <div className="absolute left-6 top-0 bottom-0">
                {timelineEvents.map((_, index) => (
                  <div 
                    key={index} 
                    className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-4 border-blue-300"
                    style={{ top: `${(index * 100) / (timelineEvents.length - 1)}%` }}
                  ></div>
                ))}
              </div>
              
              <div className="space-y-12 pl-4">
                {timelineEvents.map((event, index) => {
                  const IconComponent = event.icon;
                  const colorClasses = getColorClasses(event.color);
                  
                  return (
                    <div key={index} className="relative flex items-start gap-12">
                      {/* Enhanced Timeline dot */}
                      <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl ${colorClasses.bg} ${colorClasses.glow} transform hover:scale-110 transition-all duration-300 rotate-3 hover:rotate-0`}>
                        <IconComponent className="w-10 h-10 text-white" />
                        <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                      </div>
                      
                      {/* Enhanced Content card */}
                      <div className="flex-1 group">
                        <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                          {/* Card decoration */}
                          <div className={`absolute top-0 left-0 w-20 h-1 ${colorClasses.bg} rounded-full`}></div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          
                          <div className="flex flex-wrap items-center gap-3 mb-6">
                            <div className={`px-4 py-2 rounded-full text-sm font-semibold ${colorClasses.badge} shadow-sm`}>
                              <Calendar className="w-4 h-4 inline mr-2" />
                              {event.date}
                            </div>
                            <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                              {event.type}
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {event.description}
                          </p>
                          
                          {/* Hover effect decoration */}
                          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Enhanced Contact Section */}
          <section className="text-center">
            <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-white/5 to-transparent rounded-full"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Professional Collaboration
                </div>
                <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  For information about outreach opportunities, conference presentations, course delivery, or ethical AI training, please contact me.
                </p>
                <a 
                  href="mailto:g.cosma@lboro.ac.uk" 
                  className="group bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold transition-all duration-300 inline-flex items-center gap-4 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Contact Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };



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
          {currentPage === 'outreach' && <OutreachPage />}
        </>
      )}
    </div>
  );
}