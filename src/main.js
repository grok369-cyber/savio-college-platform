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

const root = document.getElementById('root');

const state = {
  currentTab: 'home',
  mobileMenuOpen: false,
  isDarkMode: true,
  isAdmin: localStorage.getItem('savio_admin_logged_in') === 'true',
  passwordInput: '',
  loginError: '',
  toast: { visible: false, message: '', type: 'success' },
  blogs: getStoredItems('savio_blogs', defaultBlogs),
  gallery: getStoredItems('savio_gallery', defaultGallery),
  newBlogTitle: '',
  newBlogCategory: 'Academic',
  newBlogContent: '',
  newBlogImage: '',
  newGalleryTitle: '',
  newGalleryCaption: '',
  newGalleryImage: ''
};

function getStoredItems(key, fallback) {
  const saved = localStorage.getItem(key);
  if (!saved) return fallback;

  try {
    return JSON.parse(saved);
  } catch {
    return fallback;
  }
}

function saveCollections() {
  localStorage.setItem('savio_blogs', JSON.stringify(state.blogs));
  localStorage.setItem('savio_gallery', JSON.stringify(state.gallery));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.isDarkMode ? 'dark' : 'light');
}

function triggerToast(message, type = 'success') {
  state.toast = { visible: true, message, type };
  render();

  clearTimeout(triggerToast.timer);
  triggerToast.timer = setTimeout(() => {
    state.toast = { visible: false, message: '', type: 'success' };
    render();
  }, 3400);
}

function handleAdminLogin(event) {
  event.preventDefault();
  if (state.passwordInput === 'SavioAdmin2026') {
    state.isAdmin = true;
    localStorage.setItem('savio_admin_logged_in', 'true');
    state.loginError = '';
    state.passwordInput = '';
    state.currentTab = 'admin-dashboard';
    triggerToast('Welcome Back, Administrator! Access Authorized.');
  } else {
    state.loginError = 'Invalid Admin Passcode. Please check spelling.';
    triggerToast('Authentication Failed.', 'error');
  }
}

function handleAdminLogout() {
  state.isAdmin = false;
  localStorage.removeItem('savio_admin_logged_in');
  state.currentTab = 'home';
  triggerToast('Logged out of Admin Portal.');
}

function handleAddBlog(event) {
  event.preventDefault();
  if (!state.newBlogTitle.trim() || !state.newBlogContent.trim()) {
    triggerToast('Please fill out the Title and Content!', 'error');
    return;
  }

  const newPost = {
    id: Date.now(),
    title: state.newBlogTitle.trim(),
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    tag: state.newBlogCategory,
    content: state.newBlogContent.trim(),
    imageUrl: state.newBlogImage.trim() || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80'
  };

  state.blogs = [newPost, ...state.blogs];
  state.newBlogTitle = '';
  state.newBlogCategory = 'Academic';
  state.newBlogContent = '';
  state.newBlogImage = '';
  saveCollections();
  triggerToast('Blog article successfully published!');
}

function handleAddGalleryImage(event) {
  event.preventDefault();
  if (!state.newGalleryTitle.trim() || !state.newGalleryImage.trim()) {
    triggerToast('Title and Image URL are required!', 'error');
    return;
  }

  const newPhoto = {
    id: Date.now(),
    title: state.newGalleryTitle.trim(),
    caption: state.newGalleryCaption.trim(),
    imageUrl: state.newGalleryImage.trim()
  };

  state.gallery = [newPhoto, ...state.gallery];
  state.newGalleryTitle = '';
  state.newGalleryCaption = '';
  state.newGalleryImage = '';
  saveCollections();
  triggerToast('New visual showcase photo uploaded!');
}

function handleDeleteBlog(id) {
  state.blogs = state.blogs.filter((post) => post.id !== id);
  saveCollections();
  triggerToast('Blog post deleted successfully.', 'info');
}

function handleDeleteGalleryItem(id) {
  state.gallery = state.gallery.filter((item) => item.id !== id);
  saveCollections();
  triggerToast('Gallery showcase photo deleted.', 'info');
}

function fillMockBlog() {
  state.newBlogTitle = 'Exploring Future Space Systems';
  state.newBlogCategory = 'Academic';
  state.newBlogContent = 'Our Senior Leadership course introduced an astrophysics unit today exploring deep-space satellite telemetry and sustainable mechanics.';
  state.newBlogImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80';
  triggerToast('Mock article details pre-filled!');
}

function fillMockGallery() {
  state.newGalleryTitle = 'Creative Design Workshop';
  state.newGalleryCaption = 'Collaborating with digital tools during practical visual media hours.';
  state.newGalleryImage = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80';
  triggerToast('Mock gallery details pre-filled!');
}

function renderHome() {
  return `
    <section class="hero-card">
      <div class="hero-copy">
        <p class="eyebrow">Savio Admissions 2026–2027</p>
        <h1>Innovation, purpose, and a future-ready campus experience.</h1>
        <p>Students access academic pathways, community engagement, and a curated digital experience that reflects the spirit of Savio College.</p>
        <div class="hero-actions">
          <button class="btn btn-primary" data-action="set-tab" data-tab="academics">Explore Programs</button>
          <button class="btn btn-secondary" data-action="set-tab" data-tab="about">Our Heritage</button>
        </div>
      </div>
      <div class="stats-grid">
        <article>
          <strong>12+</strong>
          <span>Student pathways</span>
        </article>
        <article>
          <strong>96%</strong>
          <span>College readiness</span>
        </article>
        <article>
          <strong>24/7</strong>
          <span>Community support</span>
        </article>
      </div>
    </section>

    <section class="section-grid">
      <div class="panel">
        <div class="panel-heading">
          <h2>Latest campus stories</h2>
          <button class="small-btn" data-action="set-tab" data-tab="admin-dashboard">Manage content</button>
        </div>
        <div class="card-list">
          ${state.blogs.slice(0, 3).map((post) => `
            <article class="content-card">
              <img src="${post.imageUrl}" alt="${escapeHtml(post.title)}" />
              <div>
                <p class="card-tag">${escapeHtml(post.tag)}</p>
                <h3>${escapeHtml(post.title)}</h3>
                <p>${escapeHtml(post.content)}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>

      <div class="panel">
        <div class="panel-heading">
          <h2>Featured gallery</h2>
          <button class="small-btn" data-action="set-tab" data-tab="admin-dashboard">Upload media</button>
        </div>
        <div class="gallery-grid">
          ${state.gallery.slice(0, 3).map((item) => `
            <article class="gallery-card">
              <img src="${item.imageUrl}" alt="${escapeHtml(item.title)}" />
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.caption)}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderAcademics() {
  return `
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Academic tracks</p>
          <h2>Designed for curiosity, leadership, and real-world growth.</h2>
        </div>
      </div>
      <div class="card-grid">
        <article class="info-card">
          <h3>STEM & Innovation</h3>
          <p>Project-based learning in engineering, coding, robotics, and experimentation.</p>
        </article>
        <article class="info-card">
          <h3>Humanities & Leadership</h3>
          <p>Communication, public speaking, ethics, and debate with civic impact.</p>
        </article>
        <article class="info-card">
          <h3>Creative Technology</h3>
          <p>Design, media production, digital storytelling, and web development workshops.</p>
        </article>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Our heritage</p>
          <h2>A school community rooted in excellence and shared purpose.</h2>
        </div>
      </div>
      <div class="about-grid">
        <article class="info-card">
          <h3>Campus values</h3>
          <p>We center learning around collaboration, perseverance, and respect for every learner.</p>
        </article>
        <article class="info-card">
          <h3>Student experience</h3>
          <p>From assemblies to exhibitions, students shape the culture through participation and initiative.</p>
        </article>
        <article class="info-card">
          <h3>Future focus</h3>
          <p>Our digital platform supports a connected school environment for families, staff, and students.</p>
        </article>
      </div>
    </section>
  `;
}

function renderAdminLogin() {
  return `
    <section class="panel auth-panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Portal access</p>
          <h2>Administrator login</h2>
        </div>
      </div>
      <form class="stacked-form" data-form="login">
        <label>
          <span>Passcode</span>
          <input type="password" name="passwordInput" placeholder="Enter admin passcode" value="${escapeHtml(state.passwordInput)}" />
        </label>
        ${state.loginError ? `<p class="form-error">${escapeHtml(state.loginError)}</p>` : ''}
        <button class="btn btn-primary" type="submit">Access dashboard</button>
      </form>
    </section>
  `;
}

function renderAdminDashboard() {
  return `
    <section class="dashboard-grid">
      <div class="panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Content management</p>
            <h2>Create a new story</h2>
          </div>
        </div>
        <form class="stacked-form" data-form="blog">
          <label>
            <span>Title</span>
            <input name="newBlogTitle" placeholder="Story title" value="${escapeHtml(state.newBlogTitle)}" />
          </label>
          <label>
            <span>Category</span>
            <select name="newBlogCategory">
              <option value="Academic" ${state.newBlogCategory === 'Academic' ? 'selected' : ''}>Academic</option>
              <option value="Extracurricular" ${state.newBlogCategory === 'Extracurricular' ? 'selected' : ''}>Extracurricular</option>
              <option value="Technology" ${state.newBlogCategory === 'Technology' ? 'selected' : ''}>Technology</option>
            </select>
          </label>
          <label>
            <span>Content</span>
            <textarea name="newBlogContent" rows="4" placeholder="Write the update for the campus blog">${escapeHtml(state.newBlogContent)}</textarea>
          </label>
          <label>
            <span>Image URL</span>
            <input name="newBlogImage" placeholder="Optional image URL" value="${escapeHtml(state.newBlogImage)}" />
          </label>
          <div class="form-actions">
            <button class="btn btn-primary" type="submit">Publish article</button>
            <button class="btn btn-secondary" type="button" data-action="fill-blog">Use sample</button>
          </div>
        </form>
      </div>

      <div class="panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Visual collection</p>
            <h2>Upload gallery media</h2>
          </div>
        </div>
        <form class="stacked-form" data-form="gallery">
          <label>
            <span>Title</span>
            <input name="newGalleryTitle" placeholder="Photo title" value="${escapeHtml(state.newGalleryTitle)}" />
          </label>
          <label>
            <span>Caption</span>
            <input name="newGalleryCaption" placeholder="Short caption" value="${escapeHtml(state.newGalleryCaption)}" />
          </label>
          <label>
            <span>Image URL</span>
            <input name="newGalleryImage" placeholder="Image URL" value="${escapeHtml(state.newGalleryImage)}" />
          </label>
          <div class="form-actions">
            <button class="btn btn-primary" type="submit">Add gallery item</button>
            <button class="btn btn-secondary" type="button" data-action="fill-gallery">Use sample</button>
          </div>
        </form>
      </div>

      <div class="panel full-width">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Live content</p>
            <h2>Current entries</h2>
          </div>
        </div>
        <div class="management-list">
          ${state.blogs.map((post) => `
            <article class="manage-card">
              <div>
                <h3>${escapeHtml(post.title)}</h3>
                <p>${escapeHtml(post.content)}</p>
              </div>
              <button class="small-btn danger" data-action="delete-blog" data-id="${post.id}">Delete</button>
            </article>
          `).join('')}
        </div>
        <div class="management-list">
          ${state.gallery.map((item) => `
            <article class="manage-card">
              <div>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.caption)}</p>
              </div>
              <button class="small-btn danger" data-action="delete-gallery" data-id="${item.id}">Remove</button>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function render() {
  applyTheme();
  const content = state.currentTab === 'academics'
    ? renderAcademics()
    : state.currentTab === 'about'
      ? renderAbout()
      : state.currentTab === 'admin-login'
        ? renderAdminLogin()
        : state.currentTab === 'admin-dashboard' && state.isAdmin
          ? renderAdminDashboard()
          : renderHome();

  root.innerHTML = `
    <div class="app-shell">
      ${state.toast.visible ? `
        <div class="toast ${state.toast.type}">
          <span class="dot"></span>
          <span>${escapeHtml(state.toast.message)}</span>
        </div>
      ` : ''}

      <div class="announcement-bar">
        <span>✨ Savio Admissions 2026–2027 are active. The digital experience is live and ready for students and families.</span>
      </div>

      <header class="site-header">
        <div class="brand" data-action="set-tab" data-tab="home">
          <div class="brand-mark">🎓</div>
          <div>
            <strong>SAVIO</strong>
            <p>Academy</p>
          </div>
        </div>

        <nav class="nav-links">
          <button class="nav-btn ${state.currentTab === 'home' ? 'active' : ''}" data-action="set-tab" data-tab="home">Home Hub</button>
          <button class="nav-btn ${state.currentTab === 'academics' ? 'active' : ''}" data-action="set-tab" data-tab="academics">Academic Tracks</button>
          <button class="nav-btn ${state.currentTab === 'about' ? 'active' : ''}" data-action="set-tab" data-tab="about">Our Heritage</button>
          ${state.isAdmin ? `<button class="nav-btn admin" data-action="set-tab" data-tab="admin-dashboard">Admin Panel</button>` : ''}
        </nav>

        <div class="header-actions">
          <button class="icon-btn" data-action="toggle-theme" title="Toggle theme">${state.isDarkMode ? '☀️' : '🌙'}</button>
          ${state.isAdmin ? `<button class="btn btn-ghost" data-action="logout">Exit Admin</button>` : `<button class="btn btn-primary" data-action="set-tab" data-tab="admin-login">Portal Login</button>`}
          <button class="mobile-menu" data-action="toggle-menu">☰</button>
        </div>
      </header>

      ${state.mobileMenuOpen ? `
        <div class="mobile-nav">
          <button data-action="set-tab" data-tab="home">Home Hub</button>
          <button data-action="set-tab" data-tab="academics">Academic Tracks</button>
          <button data-action="set-tab" data-tab="about">Our Heritage</button>
          ${state.isAdmin ? `<button data-action="set-tab" data-tab="admin-dashboard">Admin Panel</button>` : ''}
        </div>
      ` : ''}

      <main class="main-content">
        ${content}
      </main>

      <footer class="site-footer">
        <p>Built for Savio College with accessible, modern web standards.</p>
      </footer>
    </div>
  `;
}

root.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  const action = button.dataset.action;
  if (action === 'toggle-theme') {
    state.isDarkMode = !state.isDarkMode;
    render();
  } else if (action === 'toggle-menu') {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    render();
  } else if (action === 'set-tab') {
    state.currentTab = button.dataset.tab;
    state.mobileMenuOpen = false;
    render();
  } else if (action === 'logout') {
    handleAdminLogout();
  } else if (action === 'fill-blog') {
    fillMockBlog();
  } else if (action === 'fill-gallery') {
    fillMockGallery();
  } else if (action === 'delete-blog') {
    handleDeleteBlog(Number(button.dataset.id));
  } else if (action === 'delete-gallery') {
    handleDeleteGalleryItem(Number(button.dataset.id));
  }
});

root.addEventListener('submit', (event) => {
  const form = event.target;
  if (form.dataset.form === 'login') {
    handleAdminLogin(event);
  } else if (form.dataset.form === 'blog') {
    handleAddBlog(event);
  } else if (form.dataset.form === 'gallery') {
    handleAddGalleryImage(event);
  }
});

root.addEventListener('input', (event) => {
  const target = event.target;
  if (target.name === 'passwordInput') {
    state.passwordInput = target.value;
  } else if (target.name === 'newBlogTitle') {
    state.newBlogTitle = target.value;
  } else if (target.name === 'newBlogCategory') {
    state.newBlogCategory = target.value;
  } else if (target.name === 'newBlogContent') {
    state.newBlogContent = target.value;
  } else if (target.name === 'newBlogImage') {
    state.newBlogImage = target.value;
  } else if (target.name === 'newGalleryTitle') {
    state.newGalleryTitle = target.value;
  } else if (target.name === 'newGalleryCaption') {
    state.newGalleryCaption = target.value;
  } else if (target.name === 'newGalleryImage') {
    state.newGalleryImage = target.value;
  }
});

render();