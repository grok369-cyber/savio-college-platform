import React, { useState, useEffect } from 'react';

// =========================================================================
// PURE INLINE SVG ICONS (Bulletproof, high-contrast, zero-dependencies)
// =========================================================================
const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/><path d="M21.5 12v6"/></svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);

const LogOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/></svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
);

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
);

const defaultBlogs = [
  {
    id: 1,
    title: 'Annual STEM Exhibition 2026',
    date: 'July 15, 2026',
    tag: 'Academic',
    content: 'We are thrilled to announce our upcoming STEM Showcase. Submissions for engineering drafts, software architectures, and sustainable technology projects are open to all Senior Leadership students.',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Savio Academy Debaters Win National Trophy',
    date: 'July 10, 2026',
    tag: 'Extracurricular',
    content: 'Our debate team won the regional championship. Students led discussions on digital ethics and educational equality, capturing the final trophy in a display of exceptional eloquence.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Curriculum Improvements: Web Tech Integration',
    date: 'July 04, 2026',
    tag: 'Technology',
    content: 'Beginning next term, Middle College students will start using responsive web development environments to design school applications, aligning with modern technology needs.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80'
  }
];

const defaultGallery = [
  {
    id: 1,
    title: 'The Digital Learning Studio',
    caption: 'Students collaborating on dynamic prototypes, interactive interfaces, and computing basics.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Advanced Science Laboratory',
    caption: 'Equipped with precision testing platforms for biology, physics, and chemistry experiments.',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Athletics & Main Field Complex',
    caption: 'Fostering strong teamwork, strategic outdoor layouts, and physical stamina during match weeks.',
    imageUrl: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&auto=format&fit=crop&q=80'
  }
];

export default function App() {
  // Navigation & Theme States
  const [currentTab, setCurrentTab] = useState('home'); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Authentication State (Saved in LocalStorage so developers stay logged in when tweaking files)
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('savio_admin_logged_in') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Persistent Databases via LocalStorage
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem('savio_blogs');
    return saved ? JSON.parse(saved) : defaultBlogs;
  });

  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('savio_gallery');
    return saved ? JSON.parse(saved) : defaultGallery;
  });

  // Action Notification Toasts (Visual alternative to browser alert())
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  // Input fields for Blog upload
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogCategory, setNewBlogCategory] = useState('Academic');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [newBlogImage, setNewBlogImage] = useState('');

  // Input fields for Gallery upload
  const [newGalleryTitle, setNewGalleryTitle] = useState('');
  const [newGalleryCaption, setNewGalleryCaption] = useState('');
  const [newGalleryImage, setNewGalleryImage] = useState('');

  // Synchronize state changes with LocalStorage
  useEffect(() => {
    localStorage.setItem('savio_blogs', JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem('savio_gallery', JSON.stringify(gallery));
  }, [gallery]);

  // Utility to trigger visual notifications
  const triggerToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast({ visible: false, message: '', type: 'success' });
    }, 4000);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (passwordInput === 'SavioAdmin2026') {
      setIsAdmin(true);
      localStorage.setItem('savio_admin_logged_in', 'true');
      setLoginError('');
      setPasswordInput('');
      setCurrentTab('admin-dashboard');
      triggerToast('Welcome Back, Administrator! Access Authorized.');
    } else {
      setLoginError('Invalid Admin Passcode. Please check spelling.');
      triggerToast('Authentication Failed.', 'error');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('savio_admin_logged_in');
    setCurrentTab('home');
    triggerToast('Logged out of Admin Portal.');
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (!newBlogTitle.trim() || !newBlogContent.trim()) {
      triggerToast('Please fill out the Title and Content!', 'error');
      return;
    }

    const newPost = {
      id: Date.now(),
      title: newBlogTitle,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      tag: newBlogCategory,
      content: newBlogContent,
      imageUrl: newBlogImage.trim() || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80'
    };

    setBlogs([newPost, ...blogs]);
    setNewBlogTitle('');
    setNewBlogContent('');
    setNewBlogImage('');
    triggerToast('Blog article successfully published!');
  };

  const handleAddGalleryImage = (e) => {
    e.preventDefault();
    if (!newGalleryTitle.trim() || !newGalleryImage.trim()) {
      triggerToast('Title and Image URL are required!', 'error');
      return;
    }

    const newPhoto = {
      id: Date.now(),
      title: newGalleryTitle,
      caption: newGalleryCaption,
      imageUrl: newGalleryImage
    };

    setGallery([newPhoto, ...gallery]);
    setNewGalleryTitle('');
    setNewGalleryCaption('');
    setNewGalleryImage('');
    triggerToast('New visual showcase photo uploaded!');
  };

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter(post => post.id !== id));
    triggerToast('Blog post deleted successfully.', 'info');
  };

  const handleDeleteGalleryItem = (id) => {
    setGallery(gallery.filter(item => item.id !== id));
    triggerToast('Gallery showcase photo deleted.', 'info');
  };

  const fillMockBlog = () => {
    setNewBlogTitle('Exploring Future Space Systems');
    setNewBlogCategory('Academic');
    setNewBlogContent('Our Senior Leadership course introduced an astrophysics unit today exploring deep-space satellite telemetry and sustainable mechanics.');
    setNewBlogImage('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80');
    triggerToast('Mock article details pre-filled!');
  };

  const fillMockGallery = () => {
    setNewGalleryTitle('Creative Design Workshop');
    setNewGalleryCaption('Collaborating with digital tools during practical visual media hours.');
    setNewGalleryImage('https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80');
    triggerToast('Mock gallery details pre-filled!');
  };

  const themeBg = isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800';
  const themeHeader = isDarkMode ? 'bg-slate-950/95 border-slate-900' : 'bg-white/95 border-slate-200 shadow-sm';
  const themeTextMuted = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const themeTextTitle = isDarkMode ? 'text-white' : 'text-slate-900';
  const themeCard = isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm';
  const themeInput = isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-indigo-500' : 'bg-white border-slate-300 text-slate-800 focus:border-indigo-500';

  return (
    <div className={`min-h-screen ${themeBg} flex flex-col font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-200 relative`}>
      
      {/* Dynamic Action Toast Alert Notification Banner */}
      {toast.visible && (
        <div className="fixed top-24 right-6 z-50 animate-bounce">
          <div className={`px-4 py-3 rounded-xl shadow-2xl border text-xs font-bold flex items-center gap-2.5 ${
            toast.type === 'error' ? 'bg-red-500/10 border-red-500/30 text-red-400' :
            toast.type === 'info' ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' :
            'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
          }`}>
            <span className="w-2 h-2 rounded-full bg-current"></span>
            {toast.message}
          </div>
        </div>
      )}

      {/* 1. ANNOUNCEMENT BANNER */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-[11px] text-center py-2.5 px-4 font-semibold tracking-wide flex justify-center items-center gap-2 text-white shadow-md">
        <SparklesIcon />
        <span>Savio Admissions 2026-2027 are active. Groundwork aligned with "Savio College online platform project proporsal.docx".</span>
      </div>

      {/* 2. HEADER */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b ${themeHeader} transition-colors duration-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentTab('home')}>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center text-indigo-500 ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <GraduationCapIcon />
              </div>
            </div>
            <div>
              <span className={`text-xl font-extrabold tracking-tight ${isDarkMode ? 'bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent' : 'text-slate-900'}`}>SAVIO</span>
              <p className="text-[10px] text-indigo-600 font-bold tracking-widest uppercase animate-pulse">Academy</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => setCurrentTab('home')} 
              className={`text-sm font-semibold transition-colors ${currentTab === 'home' ? 'text-indigo-500' : `${themeTextMuted} hover:text-indigo-500`}`}
            >
              Home Hub
            </button>
            <button 
              onClick={() => setCurrentTab('academics')} 
              className={`text-sm font-semibold transition-colors ${currentTab === 'academics' ? 'text-indigo-500' : `${themeTextMuted} hover:text-indigo-500`}`}
            >
              Academic Tracks
            </button>
            <button 
              onClick={() => setCurrentTab('about')} 
              className={`text-sm font-semibold transition-colors ${currentTab === 'about' ? 'text-indigo-500' : `${themeTextMuted} hover:text-indigo-500`}`}
            >
              Our Heritage
            </button>
            {isAdmin && (
              <button 
                onClick={() => setCurrentTab('admin-dashboard')} 
                className="text-xs font-extrabold text-emerald-400 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
              >
                Admin Panel
              </button>
            )}
          </nav>

          {/* Action Hub */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
              className={`p-2.5 rounded-xl transition-all border ${isDarkMode ? 'bg-slate-900 text-yellow-400 border-slate-800 hover:bg-slate-800' : 'bg-white text-indigo-600 border-slate-200 hover:bg-slate-100 shadow-sm'}`}
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            {isAdmin ? (
              <button 
                onClick={handleAdminLogout}
                className="px-4 py-2 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded-xl text-xs font-bold transition-all border border-red-500/20 flex items-center gap-1.5"
              >
                <LogOutIcon /> Exit Admin
              </button>
            ) : (
              <button 
                onClick={() => setCurrentTab('admin-login')}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-600/20 flex items-center gap-1.5"
              >
                <LockIcon /> Portal Login
              </button>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg border ${isDarkMode ? 'bg-slate-900 text-yellow-400 border-slate-800' : 'bg-white text-indigo-600 border-slate-200'}`}
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-900 text-slate-400 border-slate-800' : 'bg-white text-slate-600 border border-slate-200'}`}
            >
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b ${isDarkMode ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'} px-4 py-4 space-y-3`}>
            <button 
              onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} 
              className={`block w-full text-left py-2 font-semibold ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-indigo-500'}`}
            >
              Home Hub
            </button>
            <button 
              onClick={() => { setCurrentTab('academics'); setMobileMenuOpen(false); }} 
              className={`block w-full text-left py-2 font-semibold ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-indigo-500'}`}
            >
              Academic Tracks
            </button>
            <button 
              onClick={() => { setCurrentTab('about'); setMobileMenuOpen(false); }} 
              className={`block w-full text-left py-2 font-semibold ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-indigo-500'}`}
            >
              Our Heritage
            </button>
            {isAdmin && (
              <button 
                onClick={() => { setCurrentTab('admin-dashboard'); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-2 text-emerald-400 font-bold"
              >
                Admin Panel Workspace
              </button>
            )}
            
            <div className={`pt-4 border-t ${isDarkMode ? 'border-slate-900' : 'border-slate-200'}`}>
              {isAdmin ? (
                <button 
                  onClick={() => { handleAdminLogout(); setMobileMenuOpen(false); }} 
                  className="w-full text-center py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-xs shadow-md"
                >
                  Exit Admin Workspace
                </button>
              ) : (
                <button 
                  onClick={() => { setCurrentTab('admin-login'); setMobileMenuOpen(false); }} 
                  className="w-full text-center py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs shadow-md"
                >
                  Admin Portal Login
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* 3. MAIN WORKSPACE VIEWS */}
      <main className="flex-grow">
        
        {/* PUBLIC HOME PAGE */}
        {currentTab === 'home' && (
          <div>
            {/* HERO SECTION */}
            <section className={`relative overflow-hidden pt-16 pb-20 md:pt-28 md:pb-32 ${isDarkMode ? 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))]' : 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.06),rgba(255,255,255,0))]'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 mb-6">
                  <SparklesIcon /> Persistent LocalStorage MVP Database Active
                </span>

                <h1 className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight ${themeTextTitle}`}>
                  Savio College<br />
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Online Platform Hub
                  </span>
                </h1>
                
                <p className={`mt-6 max-w-2xl mx-auto text-sm sm:text-base ${themeTextMuted} leading-relaxed`}>
                  A modernized central framework engineered for parent communication, showcasing visual achievements, and managing digital studies. Designed in reference to the proposals written by <strong>Mugerwa Martin Emmanuel</strong>.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button 
                    onClick={() => setCurrentTab('academics')}
                    className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    Examine Curriculum <ArrowRightIcon />
                  </button>
                  <button 
                    onClick={() => setCurrentTab('about')}
                    className={`w-full sm:w-auto px-6 py-3 font-semibold rounded-xl border transition-all text-sm ${isDarkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800' : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-sm'}`}
                  >
                    School Objectives
                  </button>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </section>

            {/* THREE CORE GOALS (From Proposal) */}
            <section className={`py-12 border-y ${isDarkMode ? 'bg-slate-900/40 border-slate-900' : 'bg-slate-100 border-slate-200'} transition-colors`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className={`p-6 rounded-xl border ${themeCard}`}>
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-4">
                      <BookOpenIcon />
                    </div>
                    <h3 className={`font-bold mb-2 ${themeTextTitle}`}>Structured Learning</h3>
                    <p className={`${themeTextMuted} text-xs leading-relaxed`}>
                      Providing digital access to modules, course tracks, study guidelines, and educational overviews.
                    </p>
                  </div>
                  <div className={`p-6 rounded-xl border ${themeCard}`}>
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                      <UsersIcon />
                    </div>
                    <h3 className={`font-bold mb-2 ${themeTextTitle}`}>Clear Communication</h3>
                    <p className={`${themeTextMuted} text-xs leading-relaxed`}>
                      Empowering teachers to seamlessly publish study updates, school achievements, and parent announcements.
                    </p>
                  </div>
                  <div className={`p-6 rounded-xl border ${themeCard}`}>
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                      <ImageIcon />
                    </div>
                    <h3 className={`font-bold mb-2 ${themeTextTitle}`}>Achievements Showcase</h3>
                    <p className={`${themeTextMuted} text-xs leading-relaxed`}>
                      Curating high-quality visual portfolios to bolster the academy's online brand competitiveness.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* LIVE BLOG SECTION */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                <div>
                  <h2 className={`text-2xl font-black ${themeTextTitle}`}>Campus Blogs & Study Updates</h2>
                  <p className={`${themeTextMuted} text-xs mt-1`}>The latest academic articles and announcements uploaded by administrators.</p>
                </div>
                {isAdmin ? (
                  <button onClick={() => setCurrentTab('admin-dashboard')} className="mt-2 md:mt-0 text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                    Manage Blogs & Gallery &rarr;
                  </button>
                ) : (
                  <button onClick={() => setCurrentTab('admin-login')} className="mt-2 md:mt-0 text-xs font-bold text-indigo-500 hover:underline flex items-center gap-1">
                    Admin login to write a post &rarr;
                  </button>
                )}
              </div>

              {blogs.length === 0 ? (
                <div className={`p-12 text-center rounded-2xl border border-dashed ${isDarkMode ? 'border-slate-900' : 'border-slate-300'}`}>
                  <p className={`${themeTextMuted} text-sm`}>No blog posts currently published. Use the Admin Panel to write the first one!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {blogs.map((post) => (
                    <article key={post.id} className={`rounded-xl border overflow-hidden flex flex-col justify-between ${themeCard} hover:scale-[1.01] transition-transform`}>
                      <div>
                        <div className="relative h-44 overflow-hidden bg-slate-800">
                          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                          <span className="absolute top-3 left-3 text-[9px] uppercase font-bold tracking-wider text-white bg-indigo-600 px-2 py-0.5 rounded">
                            {post.tag}
                          </span>
                        </div>
                        <div className="p-5">
                          <span className="text-[10px] text-slate-400 font-mono block mb-1">{post.date}</span>
                          <h4 className={`text-base font-bold mb-2 leading-snug ${themeTextTitle}`}>{post.title}</h4>
                          <p className={`${themeTextMuted} text-xs leading-relaxed line-clamp-3`}>{post.content}</p>
                        </div>
                      </div>
                      <div className={`px-5 pb-5 pt-3 border-t ${isDarkMode ? 'border-slate-900' : 'border-slate-100'} flex justify-between items-center text-xs`}>
                        <span className="text-slate-400">Published by: Admin</span>
                        <span className="text-indigo-500 font-bold cursor-pointer hover:underline">Read Full Article</span>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            {/* VISUAL SHOWCASE GALLERY */}
            <section className={`py-16 ${isDarkMode ? 'bg-slate-900/20 border-t border-slate-900' : 'bg-slate-100/50 border-t border-slate-200'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                  <h2 className={`text-2xl font-black ${themeTextTitle}`}>Our Visual Showcase</h2>
                  <p className={`${themeTextMuted} text-xs mt-1`}>Glimpses into student studies, practical workshops, and school infrastructure developments.</p>
                </div>

                {gallery.length === 0 ? (
                  <div className={`p-12 text-center rounded-2xl border border-dashed ${isDarkMode ? 'border-slate-900' : 'border-slate-300'}`}>
                    <p className={`${themeTextMuted} text-sm`}>Gallery is empty. Log in as an Admin to upload showcasing images!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {gallery.map((item) => (
                      <div key={item.id} className={`group rounded-xl overflow-hidden border ${isDarkMode ? 'border-slate-900 bg-slate-900' : 'border-slate-200 bg-slate-100'} relative aspect-video shadow-md`}>
                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition duration-300">
                          <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                          <p className="text-[11px] text-slate-300 leading-snug">{item.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* ACADEMICS PAGE */}
        {currentTab === 'academics' && (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
              <h1 className={`text-3xl font-black ${themeTextTitle}`}>Our Academic Framework</h1>
              <p className={`${themeTextMuted} mt-2 text-sm`}>Structuring curricula with rigorous standards to develop critical thinking, communication, and digital intelligence.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Junior Academy */}
              <div className={`p-6 rounded-xl border ${themeCard} flex flex-col justify-between`}>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-indigo-500 font-bold">Grades 1-5</span>
                  <h3 className={`text-xl font-bold mt-1 mb-3 ${themeTextTitle}`}>Junior School</h3>
                  <p className={`${themeTextMuted} text-xs leading-relaxed`}>Focusing on playful, creative mathematical logic, foundational literacy, and scientific curiosity. We cultivate early computational awareness using tactile block models.</p>
                </div>
                <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-slate-900' : 'border-slate-200'} text-[11px] text-indigo-400 font-semibold`}>
                  Modules: Creative Logic, Literacy Guild, Arts & Design
                </div>
              </div>

              {/* Middle College */}
              <div className={`p-6 rounded-xl border ${themeCard} flex flex-col justify-between`}>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-purple-500 font-bold">Grades 6-10</span>
                  <h3 className={`text-xl font-bold mt-1 mb-3 ${themeTextTitle}`}>Middle College</h3>
                  <p className={`${themeTextMuted} text-xs leading-relaxed`}>Guiding students through systematic analytical thought, scientific methods, laboratory research, and historic critical literary studies.</p>
                </div>
                <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-slate-900' : 'border-slate-200'} text-[11px] text-purple-400 font-semibold`}>
                  Modules: Experimental Chemistry, Git Web Architecture, Algebra
                </div>
              </div>

              {/* Senior Leadership */}
              <div className={`p-6 rounded-xl border ${themeCard} flex flex-col justify-between`}>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-pink-500 font-bold">Grades 11-12</span>
                  <h3 className={`text-xl font-bold mt-1 mb-3 ${themeTextTitle}`}>Senior Leadership</h3>
                  <p className={`${themeTextMuted} text-xs leading-relaxed`}>Advanced university readiness tracks, integrated digital engineering frameworks, global ethics, and real-world student capstone presentations.</p>
                </div>
                <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-slate-900' : 'border-slate-200'} text-[11px] text-pink-400 font-semibold`}>
                  Modules: Software Engineering, Applied Economics, Advanced Physics
                </div>
              </div>
            </div>
          </div>
        )}

        {/* WHY SAVIO / HERITAGE */}
        {currentTab === 'about' && (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h1 className={`text-3xl font-black mb-4 ${themeTextTitle}`}>School Heritage & Scope</h1>
              <p className={`${themeTextMuted} text-sm leading-relaxed mb-6`}>
                Savio Academy represents a modern communication hub, digital notes sharing gateway, and parent communication workspace. Our design aligns directly with the directives described in the <strong>"Savio College online platform project proporsal.docx"</strong> prepared by <strong>Mugerwa Martin Emmanuel</strong>.
              </p>

              <h3 className={`text-lg font-bold mb-3 ${themeTextTitle}`}>Our Strategic Objectives</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2.5 text-xs">
                  <span className="text-indigo-500 mt-0.5">•</span>
                  <span><strong>Communication Access:</strong> Streamlining feedback structures between school administrative councils, teachers, and student guardians.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs">
                  <span className="text-indigo-500 mt-0.5">•</span>
                  <span><strong>E-Learning Base:</strong> Structuring easy digital curriculum templates, showcasing course requirements, and saving key schedules.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs">
                  <span className="text-indigo-500 mt-0.5">•</span>
                  <span><strong>Visual Transparency:</strong> Utilizing custom blogs and showcase uploads to share school life developments in real-time.</span>
                </li>
              </ul>

              <div className={`p-5 rounded-xl border ${isDarkMode ? 'bg-slate-900/40 border-slate-900' : 'bg-slate-100 border-slate-200'} text-xs text-slate-400`}>
                <p className="font-semibold text-slate-300 mb-1">MVP Project Roadmap Status</p>
                Currently executing the 2-Month MVP phase focusing on high-speed LocalStorage persistence, enabling fully independent testing prior to production-grade server links.
              </div>
            </div>
          </div>
        )}

        {/* PASSWORD GATE LOGIN PAGE */}
        {currentTab === 'admin-login' && (
          <div className="py-20 px-4 flex justify-center items-center">
            <div className={`w-full max-w-md p-8 rounded-2xl border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-3">
                  <LockIcon />
                </div>
                <h2 className={`text-xl font-bold ${themeTextTitle}`}>Admin Authentication</h2>
                <p className={`${themeTextMuted} text-xs mt-1`}>Please enter the administrator passcode to access the uploading console.</p>
              </div>

              {loginError && (
                <div className="p-3 mb-4 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400 text-center font-semibold">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Passcode</label>
                  <input 
                    type="password" 
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter admin passcode"
                    className={`w-full p-3 rounded-xl text-xs border focus:outline-none focus:ring-1 focus:ring-indigo-500 ${themeInput}`}
                    required
                  />
                  <p className="text-[10px] text-slate-400 mt-2 italic text-center">
                    Prototype Key: <code className="bg-slate-800 px-1.5 py-0.5 text-indigo-400 rounded">SavioAdmin2026</code>
                  </p>
                </div>

                <div className="pt-2 flex gap-3">
                  <button 
                    type="button" 
                    onClick={() => setCurrentTab('home')}
                    className="w-1/2 py-2.5 rounded-xl border text-slate-400 border-slate-800 hover:bg-slate-800 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="w-1/2 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow-md shadow-indigo-600/10"
                  >
                    Verify Passcode
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* SECURE ADMIN DASHBOARD WORKSPACE */}
        {currentTab === 'admin-dashboard' && (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header section inside Admin dashboard */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4`}>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Authenticated Admin Console</span>
                <h1 className={`text-2xl font-black mt-2 ${themeTextTitle}`}>Mugerwa Admin Workspace</h1>
                <p className={`${themeTextMuted} text-xs`}>Publish and manage public blog records, student bulletins, and academic media.</p>
              </div>
              <button 
                onClick={handleAdminLogout}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-250 border border-slate-700 rounded-xl text-xs font-bold shadow"
              >
                Sign Out Workspace
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* WRITE NEW CAMPUS BLOG */}
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-800/20">
                  <h3 className={`font-black text-sm uppercase tracking-wide ${themeTextTitle}`}>1. Add Blog & Study Update</h3>
                  <button 
                    type="button" 
                    onClick={fillMockBlog}
                    className="text-[10px] text-indigo-400 hover:underline font-bold"
                  >
                    [Auto-Fill Test Record]
                  </button>
                </div>

                <form onSubmit={handleAddBlog} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Article Title</label>
                    <input 
                      type="text" 
                      value={newBlogTitle}
                      onChange={(e) => setNewBlogTitle(e.target.value)}
                      placeholder="e.g. Introducing Python Robotics Classes"
                      className={`w-full p-3 rounded-xl text-xs border focus:outline-none ${themeInput}`}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Category Classification</label>
                      <select 
                        value={newBlogCategory}
                        onChange={(e) => setNewBlogCategory(e.target.value)}
                        className={`w-full p-3 rounded-xl text-xs border focus:outline-none ${themeInput}`}
                      >
                        <option value="Academic">Academic Study</option>
                        <option value="Extracurricular">Extracurricular Achievement</option>
                        <option value="Technology">Technology & Digital</option>
                        <option value="Event">Campus Announcement</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Showcase Image URL</label>
                      <input 
                        type="url" 
                        value={newBlogImage}
                        onChange={(e) => setNewBlogImage(e.target.value)}
                        placeholder="Paste image address"
                        className={`w-full p-3 rounded-xl text-xs border focus:outline-none ${themeInput}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Article Body Content</label>
                    <textarea 
                      value={newBlogContent}
                      onChange={(e) => setNewBlogContent(e.target.value)}
                      placeholder="Type your study announcement or blog content..."
                      rows="4"
                      className={`w-full p-3 rounded-xl text-xs border focus:outline-none ${themeInput}`}
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition duration-200"
                  >
                    Publish Article to Home Feed
                  </button>
                </form>
              </div>

              {/* ADD NEW GALLERY IMAGE FOR SHOWCASE */}
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-800/20">
                  <h3 className={`font-black text-sm uppercase tracking-wide ${themeTextTitle}`}>2. Upload Showcase Image</h3>
                  <button 
                    type="button" 
                    onClick={fillMockGallery}
                    className="text-[10px] text-indigo-400 hover:underline font-bold"
                  >
                    [Auto-Fill Test Record]
                  </button>
                </div>

                <form onSubmit={handleAddGalleryImage} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Image Title</label>
                    <input 
                      type="text" 
                      value={newGalleryTitle}
                      onChange={(e) => setNewGalleryTitle(e.target.value)}
                      placeholder="e.g. Football Tournament Champions"
                      className={`w-full p-3 rounded-xl text-xs border focus:outline-none ${themeInput}`}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Image URL address</label>
                    <input 
                      type="url" 
                      value={newGalleryImage}
                      onChange={(e) => setNewGalleryImage(e.target.value)}
                      placeholder="e.g. https://images.unsplash.com/..."
                      className={`w-full p-3 rounded-xl text-xs border focus:outline-none ${themeInput}`}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Short Description / Caption</label>
                    <input 
                      type="text" 
                      value={newGalleryCaption}
                      onChange={(e) => setNewGalleryCaption(e.target.value)}
                      placeholder="Context detailing what is displayed..."
                      className={`w-full p-3 rounded-xl text-xs border focus:outline-none ${themeInput}`}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs transition duration-200"
                  >
                    Upload Photo to Showcase Gallery
                  </button>
                </form>
              </div>

            </div>

            {/* MANAGE RECENT UPLOADS TABLE */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Blog Management List */}
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}>
                <h4 className={`font-black text-xs uppercase tracking-wider mb-4 ${themeTextMuted}`}>Manage Blogs Table ({blogs.length})</h4>
                <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1">
                  {blogs.map(post => (
                    <div key={post.id} className={`p-3 rounded-lg border ${isDarkMode ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'} flex justify-between items-center`}>
                      <div className="truncate pr-3">
                        <p className={`text-xs font-bold truncate ${themeTextTitle}`}>{post.title}</p>
                        <span className="text-[9px] text-slate-400 font-mono">{post.date} • {post.tag}</span>
                      </div>
                      <button 
                        onClick={() => handleDeleteBlog(post.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition"
                        title="Delete Post"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Management List */}
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}>
                <h4 className={`font-black text-xs uppercase tracking-wider mb-4 ${themeTextMuted}`}>Manage Showcase Gallery ({gallery.length})</h4>
                <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1">
                  {gallery.map(item => (
                    <div key={item.id} className={`p-3 rounded-lg border ${isDarkMode ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'} flex justify-between items-center`}>
                      <div className="flex items-center gap-3 truncate pr-3">
                        <img src={item.imageUrl} alt="" className="w-8 h-8 rounded object-cover" />
                        <div className="truncate">
                          <p className={`text-xs font-bold truncate ${themeTextTitle}`}>{item.title}</p>
                          <span className="text-[9px] text-slate-400 block truncate">{item.caption}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleDeleteGalleryItem(item.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition"
                        title="Delete Image"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* 4. FOOTER */}
      <footer className={`py-10 border-t mt-auto ${isDarkMode ? 'bg-slate-950 border-slate-900' : 'bg-slate-100 border-slate-200'} transition-colors duration-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          
          <div className="flex items-center gap-2">
            <GraduationCapIcon />
            <span>© 2026 Savio College online platform. Proposed by Mugerwa Martin Emmanuel.</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setCurrentTab('home')} className="hover:text-indigo-500 font-bold">Home</button>
            <button onClick={() => setCurrentTab('academics')} className="hover:text-indigo-500 font-bold">Academics</button>
            <button onClick={() => setCurrentTab('about')} className="hover:text-indigo-500 font-bold">Our Heritage</button>
          </div>
        </div>
      </footer>

      {/* 5. FLOATING ADMIN "A" ACTION TRIGGER BUTTON */}
      <button 
        onClick={() => {
          if (isAdmin) {
            setCurrentTab('admin-dashboard');
          } else {
            setCurrentTab('admin-login');
          }
        }} 
        title="Admin Control Gateway Login"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-indigo-400 font-black text-base"
      >
        A
      </button>

    </div>
  );
}