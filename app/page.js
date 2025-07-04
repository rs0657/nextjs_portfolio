"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image';
// Glass card styling for professional look
const glassCard = "backdrop-blur-md bg-white/80 border border-white/50 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1";

// Section Title Component
const SectionTitle = ({ title }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
      {title}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
  </div>
);

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = ['About', 'Education', 'Experience', 'Projects', 'Certifications', 'Contact'];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-800' 
                  : 'text-gray-800 drop-shadow-lg'
              }`}>
                Raghuram
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                      scrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      scrolled ? 'bg-blue-600' : 'bg-blue-600'
                    }`}></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inset ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:ring-blue-500' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:ring-blue-500'
                }`}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg 
                  className={`h-6 w-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        mobileMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={handleMobileMenuClick}
        ></div>
        
        {/* Mobile Menu Panel */}
        <div className={`fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Navigation</h2>
            <button
              onClick={handleMobileMenuClick}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu Items */}
          <div className="py-6 px-4">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleMobileMenuClick}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 relative group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item}</span>
                    <svg className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500">© 2025 Raghuram</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Hero Section Component
const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50 pt-20">
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-2xl">
          <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
            <Image 
              src="/profile-pic.png" 
              alt="Raghuram - Profile Photo" 
              width={192} 
              height={192} 
              className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
              style={{ objectPosition: 'center top' }}
              onError={(e) => {
                // Fallback to gradient background with initials if image fails to load
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
              <span className="text-6xl font-bold text-white">R</span>
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
          Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Raghuram</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Computer Science and Engineering Student at SRM IST
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
          <div className="text-3xl mb-3">💻</div>
          <h3 className="font-bold text-lg mb-2 text-gray-800">Full-Stack Development</h3>
          <p className="text-gray-700 text-sm font-medium">Building modern web applications with React, Next.js, and Node.js</p>
        </div>
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
          <div className="text-3xl mb-3">🤖</div>
          <h3 className="font-bold text-lg mb-2 text-gray-800">AI & IoT</h3>
          <p className="text-gray-700 text-sm font-medium">Exploring artificial intelligence and Internet of Things technologies</p>
        </div>
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="font-bold text-lg mb-2 text-gray-800">Embedded Systems</h3>
          <p className="text-gray-700 text-sm font-medium">Working with ESP32, TinyML, and hardware integration projects</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <a 
          href="#projects" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 inline-block" 
          suppressHydrationWarning={true}
        >
          View My Work
        </a>
        <a 
          href="https://drive.google.com/file/d/1xFShJS2Q4_z6O6bt1yKhM93oH5pNgoEF/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 inline-block" 
          suppressHydrationWarning={true}
        >
          View Resume
        </a>
      </div>
    </div>
  </section>
);

// About Section Component
const About = () => (
  <section id="about" className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
    <div className="max-w-6xl mx-auto">
      <SectionTitle title="About Me" />
      <div className="max-w-4xl mx-auto">
        <div className={glassCard + " p-8 text-center relative overflow-hidden"}>
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-full -translate-y-20 -translate-x-20"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-full translate-y-16 translate-x-16"></div>
          <div className="relative z-10">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                <Image 
                  src="/profile-pic.png" 
                  alt="Raghuram - Profile Photo" 
                  width={128} 
                  height={128} 
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: 'center top' }}
                  onError={(e) => {
                    // Fallback to gradient background with initials if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
                  <span className="text-3xl font-bold text-white">R</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I&apos;m Raghuram, a Computer Science and Engineering student at SRM IST (2022–2026). 
              Passionate about full-stack development, embedded systems and data analysis. Enjoy solving real-time problems with technology.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-800">Problem Solver</p>
                <p className="text-sm text-gray-600">Love tackling complex challenges</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-800">Fast Learner</p>
                <p className="text-sm text-gray-600">Quickly adapt to new technologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-800">Team Player</p>
                <p className="text-sm text-gray-600">Collaborate effectively with others</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Education Section Component
const Education = () => {
  const educationData = [
    {
      level: "Undergraduate",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology",
      location: "Kattankulathur, Chennai",
      duration: "2022 - 2026",
      grade: "CGPA: 9.09",
      gradeType: "cgpa",
      logoPlaceholder: "SRM",
      logoUrl: "/srm-logo.png", // SRM logo
      color: "from-blue-600 to-purple-600",
      bgColor: "from-blue-600/10 to-purple-600/10"
    },
    {
      level: "Higher Secondary",
      degree: "Class XII (Science Stream)(State Board)",
      institution: "AMM School",
      location: "Chennai, Tamil Nadu",
      duration: "2022",
      grade: "Percentage: 79",
      gradeType: "percentage",
      logoPlaceholder: "XII",
      logoUrl: "/amm-logo.jpeg", // AMM School logo
      color: "from-green-600 to-blue-600",
      bgColor: "from-green-600/10 to-blue-600/10"
    },
    {
      level: "Secondary",
      degree: "Class X (State Board)",
      institution: "AMM School",
      location: "Chennai, Tamil Nadu",
      duration: "2020",
      grade: "Percentage: 72%",
      gradeType: "percentage",
      logoPlaceholder: "X",
      logoUrl: "/amm-logo.jpeg", // Same AMM School logo for both Class X and XII
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/10 to-pink-600/10"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Education" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className={glassCard + " p-6 relative overflow-hidden sm:aspect-square aspect-auto min-h-[400px] flex flex-col"}>
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${edu.bgColor} rounded-full -translate-y-10 translate-x-10`}></div>
              <div className="relative z-10 flex flex-col h-full">
                {/* Logo Section */}
                <div className="flex justify-center mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2">
                      <Image 
                        src={edu.logoUrl} 
                        alt={`${edu.institution} Logo`} 
                        width={64} 
                        height={64} 
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                          // Fallback to text if logo fails to load
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-lg font-bold text-gray-700">{edu.logoPlaceholder}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex-1 text-center">
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${edu.color} text-white mb-2`}>
                      {edu.level}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">{edu.degree}</h3>
                  <p className="text-sm font-semibold mb-2" style={{color: edu.color.includes('blue') ? '#2563eb' : edu.color.includes('green') ? '#059669' : '#9333ea'}}>
                    {edu.institution}
                  </p>
                  <p className="text-xs text-gray-600 mb-3">{edu.location}</p>
                  
                  <div className="flex flex-col gap-2 text-gray-600 text-xs mb-4">
                    <span className="flex items-center justify-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{edu.duration}</span>
                    </span>
                    <span className="flex items-center justify-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-gray-800">{edu.grade}</span>
                    </span>
                  </div>
                </div>
                
                {/* Grade Highlight */}
                <div className="mt-auto">
                  <div className={`bg-gradient-to-r ${edu.color} rounded-xl p-3 text-white text-center`}>
                    <div className="text-xl font-bold">
                      {edu.gradeType === 'cgpa' ? '9.09' : edu.gradeType === 'percentage' && edu.level === 'Higher Secondary' ? '79%' : '72%'}
                    </div>
                    <div className="text-xs opacity-90">
                      {edu.gradeType === 'cgpa' ? 'CGPA' : 'Percentage'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const Experience = () => {
  const experienceData = [
    {
      title: "Project Intern",
      company: "Tata Consultancy Services",
      mode: "On-site",
      duration: "June 2025 - August 2025",
      location: "TCS Siruseri",
      description: [
        "Worked on full-stack development projects using React and Node.js",
        "Created a Task Management System for internal use",
        "Collaborated with teammates to enhance application performance and user experience"
      ],
      technologies: ["React.js", "MongoDB", "Express.js", "UI/UX", "GitHub"],
      logoUrl: "/tcs-logo.png", // Add TCS logo
      logoPlaceholder: "TCS",
      color: "from-green-600 to-blue-600",
      bgColor: "from-green-600/10 to-blue-600/10"
    },
        {
      title: "Data and Automation Intern",
      company: "Sesheng",
      mode: "Remote",
      duration: "May 2025 - July 2025",
      location: "Remote",
      description: [
        "Learned data gathering and analysis for NoSQL databases",
        "Helped in database and schema design and selection",
        "Collaborated with senior developers on Application Tracking System (ATS) project development"
      ],
      technologies: ["MongoDB", "SQL", "Database Design"],
      logoUrl: "/Sesheng-Logo.png", // Add Sesheng logo
      logoPlaceholder: "SE",
      color: "from-green-600 to-blue-600",
      bgColor: "from-green-600/10 to-blue-600/10"
    },
     {
      title: "Web Development Intern",
      company: "Gevinst Technologies",
      mode: "On-site",
      duration: "May 2024 - July 2024",
      location: "Chennai, India",
      description: [
        "Learned Bootstrap, JavaScript, basics of React, and back-end fundamentals",
        "Created internal tools and helped improve UI/UX components",
        "Collaborated with senior developers on multiple client projects"
      ],
      technologies: ["Bootstrap", "JavaScript", "React", "UI/UX"],
      logoUrl: "/gevinst-logo.png", // Add Gevinst Technologies logo
      logoPlaceholder: "GT",
      color: "from-green-600 to-blue-600",
      bgColor: "from-green-600/10 to-blue-600/10"
    },
    {
      title: "Community Connect",
      company: "Beyond Pages Trust",
      mode: "Hybrid",
      duration: "June 2024 - July 2024",
      location: "Chennai, India",
      description: [
        "Participated in community service and development initiatives aimed at creating a positive impact on local communities.",
        "Involved in outreach activities, organizing events, and leading awareness campaigns.",
        "Worked collaboratively with team members to implement meaningful social projects."
      ],
      technologies: ["Community Engagement", "Social Development", "Team Collaboration", "Effective Collaboration"],
      logoUrl: "/Beyond-Pages-Trust.jpeg", // Add AppWorks Studio logo
      logoPlaceholder: "AW",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/10 to-red-600/10"
    },
   
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Experience" />
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {experienceData.map((exp, index) => (
            <div key={index} className={glassCard + " p-6 relative overflow-hidden hover:scale-105 transition-all duration-300"}>
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${exp.bgColor} rounded-full -translate-y-10 translate-x-10`}></div>
              <div className="relative z-10">
                {/* Company Logo and Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg p-1.5`}>
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                      <Image 
                        src={exp.logoUrl} 
                        alt={`${exp.company} Logo`} 
                        width={64} 
                        height={64} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to text if logo fails to load
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-base font-bold text-gray-700">{exp.logoPlaceholder}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 leading-tight">{exp.title}</h3>
                    <p className="font-semibold mb-1" style={{color: exp.color.includes('green') ? '#059669' : exp.color.includes('purple') ? '#9333ea' : exp.color.includes('blue') ? '#2563eb' : exp.color.includes('orange') ? '#ea580c' : '#0d9488'}}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Duration, Location, and Mode */}
                <div className="flex flex-col gap-1 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{exp.duration}</span>
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{exp.location}</span>
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{exp.mode}</span>
                  </span>
                </div>

                {/* Description */}
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="flex items-start">
                      <span className={`w-1.5 h-1.5 bg-gradient-to-r ${exp.color} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        exp.color.includes('green') ? 'bg-green-100 text-green-700' :
                        exp.color.includes('purple') ? 'bg-purple-100 text-purple-700' :
                        exp.color.includes('blue') ? 'bg-blue-100 text-blue-700' :
                        exp.color.includes('orange') ? 'bg-orange-100 text-orange-700' :
                        'bg-teal-100 text-teal-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const Projects = () => {
  const data = {
    "Undergraduate Projects": [
      { 
        title: "Embedded Machine Learning for Early Detection of Heart Attack Symptoms", 
        desc: "A real-time, offline health monitoring system using biomedical sensors and a lightweight ML model deployed on Arduino Nano 33 BLE Sense Rev2 to detect early signs of heart attacks in vehicle drivers.", 
        tech: ["Embedded ML", "Arduino Nano 33 BLE Sense", "TensorFlow Lite", "Biomedical Sensors", "C++"],
        icon: "❤️‍🩹"
      }
    ],
    "Course and Skill Development Projects": [
      {
        title: "QuickFix",
        desc: "A web-based platform that connects users with local repair technicians and DIY experts to provide instant or same-day repair services for household items such as furniture, appliances, and electronics. The app promotes sustainability by encouraging repairs instead of replacements, while also supporting the local economy.",
        tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "Agile (Scrum)", "MoSCoW Prioritization"],
        icon: "🛠️"
      },

        {
      "title": "React.js E-commerce",
      "desc": "A fully functional e-commerce web application built with React.js, featuring product browsing, shopping cart, and checkout functionalities.",
      "tech": ["React.js", "Redux", "React Router", "Axios", "Sass", "Bootstrap"],
      "icon": "🛒"
    }]
  };
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Projects" />
        {Object.keys(data).map((section, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">{section}</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {data[section].map((proj, i) => (
                <div key={i} className={glassCard + " p-8 group cursor-pointer"}>
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {proj.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {proj.title}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {proj.tech.map((techItem, techIdx) => (
                          <span 
                            key={techIdx} 
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Certifications Section Component
const Certifications = () => {
  const certs = [
    { 
      title: "Cisco IoT Certificate", 
      org: "Cisco NetAcad", 
      year: "2024",
      logoUrl: "/cisco-logo.png",
      logoPlaceholder: "CISCO",
      certificateLink: "https://drive.google.com/file/d/11Jh9SPyXnX2h_7qCpAAY-lfoWCBNiuE2/view?usp=drive_link",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Cisco Networking Certificate", 
      org: "Cisco NetAcad", 
      year: "2024",
      logoUrl: "/cisco-logo.png",
      logoPlaceholder: "CISCO",
      certificateLink: "https://drive.google.com/file/d/1SH4sQFY1rmfTgge5sBaN5o92dz-xkGoY/view?usp=sharing",
      color: "from-blue-600 to-indigo-600"
    },
    { 
      title: "Coursera DBMS Certificate", 
      org: "Coursera", 
      year: "2024",
      logoUrl: "/Coursera-Logo.png", // Coursera logo
      logoPlaceholder: "COURSERA",
      certificateLink: "https://drive.google.com/file/d/14d22egpw8fxDRotmTyzj26nU62PK3p0q/view?usp=sharing",
      color: "from-blue-400 to-blue-600"
    },
    { 
      title: "Google Cloud Computing Foundations", 
      org: "Google Cloud", 
      year: "2025",
      logoUrl: "/google-cloud.png",
      logoPlaceholder: "GCP",
      certificateLink: "https://drive.google.com/file/d/1RkYuPzHInqejkkkaQGzvlsOrEU5E10KK/view?usp=sharing",
      color: "from-green-500 to-blue-500"
    },
    { 
      title: "Programming In Java", 
      org: "NPTEL", 
      year: "2023",
      logoUrl: "/nptel-logo.png",
      logoPlaceholder: "NPTEL",
      certificateLink: "https://drive.google.com/file/d/1Iag6cRqa0Ug9jaYGCNLIibkeSO0hXFrW/view?usp=sharing",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Certifications" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div key={i} className={glassCard + " p-6 text-center group"}>
              <div className="relative mb-6">
                {/* Logo Container */}
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2">
                    <Image 
                      src={cert.logoUrl} 
                      alt={`${cert.org} Logo`} 
                      width={64} 
                      height={64} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback to text if logo fails to load
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-xs font-bold text-gray-700">{cert.logoPlaceholder}</span>
                    </div>
                  </div>
                </div>
                {/* Verified Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              {/* Certificate Content */}
              <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                {cert.title}
              </h4>
              <p className="text-gray-600 mb-1 font-medium">{cert.org}</p>
              <p className="text-sm text-gray-500 font-medium mb-4">{cert.year}</p>
              
              {/* View Certificate Button */}
              <a 
                href={cert.certificateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                suppressHydrationWarning={true}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>View Certificate</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(`Thank you ${form.name}! Your message has been sent successfully.`);
    setForm({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Let&apos;s Connect" />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 8610653380</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/raghuram-srikanth-0088bb286/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                suppressHydrationWarning={true}
              >
                <Image 
                  src="/linkdln.png" 
                  alt="LinkedIn" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="text-sm font-medium text-blue-600" style={{display: 'none'}}>in</span>
              </a>
              
              <a 
                href="https://github.com/rs0657" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                suppressHydrationWarning={true}
              >
                <Image 
                  src="/github-logo.png" 
                  alt="GitHub" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="text-sm font-medium text-gray-800" style={{display: 'none'}}>GH</span>
              </a>
              
              <a 
                href="mailto:raghuramsrikanth1104@gmail.com" 
                className="w-12 h-12 bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-red-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                suppressHydrationWarning={true}
              >
                <Image 
                  src="/gmail-logo.jpeg" 
                  alt="Gmail" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="text-sm font-medium text-red-600" style={{display: 'none'}}>@</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Homepage Component
export default function HomePage() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-gray-400 text-sm space-y-2">
            <p>&copy; 2025 Raghuram. All rights reserved.</p>
            <p>Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
