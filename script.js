/* =============================
   Portfolio Interactive Script
   - Theme toggle with localStorage
   - Mobile navigation toggle
   - Dynamic project rendering (placeholder)
============================= */

// i18n dictionaries for static UI
const I18N = {
  ka: {
    'nav.hero': 'შესავალი',
    'nav.skills': 'უნარები',
    'nav.projects': 'პროექტები',
    'nav.why': 'რატომ მე',
    'nav.contact': 'კონტაქტი',
    'hero.title': 'Full Stack Web Developer <span class="accent-divider">|</span> React & Next.js Specialist',
    'hero.tagline': 'ვქმნი სწრაფ, მასშტაბირებად და მომხმარებელზე ორიენტირებულ ვებ-აპლიკაციებს.',
    'hero.intro': 'მაქვს 5-წლიანი გამოცდილება თანამედროვე ვებ-აპლიკაციების შექმნაში, UI/UX დიზაინის ზუსტ იმპლემენტაციასა და გუნდურ გარემოში მუშაობაში. ვმუშაობ როგორც ფრონტენდზე (React, Next.js, TypeScript), ისე ბექენდზე (Node.js, PostgreSQL, RESTful APIs). ჩემი მთავარი მიზანია სწრაფი, უსაფრთხო და მომხმარებელზე ორიენტირებული MVP-ების შექმნა. დამატებით, xcaucasus პროექტის ფარგლებში, მივიღე მცირე, მაგრამ პრაქტიკული გამოცდილება WordPress-ის მიმართულებითაც (თემების ოპტიმიზაცია, წარმადობა, SEO სტრუქტურა).',
    'skills.title': 'უნარები',
    'projects.title': 'პროექტები',
    'projects.desc': 'ქვემოთ ჩამოთვლილია რამდენიმე ძირითადი პროექტი. მოგვიანებით დავამატებთ სრულ ჩამონათვალს.',
    'why.title': 'რატომ მე?',
    'why.item1': 'დეტალებზე ორიენტირებული და ინიციატივიანი',
    'why.item2': 'Reference დიზაინის ზუსტი მიბაძვა და მაღალი კოდის სტანდარტი',
    'why.item3': 'მომხმარებლის გამოცდილების მუდმივი გაუმჯობესება',
    'why.item4': 'სწრაფი და სტაბილური MVP-ების მიწოდება',
    'why.item5': 'კოლაბორაციული მუშაობა Git / Agile პროცესში',
    'contact.title': 'კონტაქტი',
    'hero.cta.projects': 'პროექტები',
    'hero.cta.contact': 'დამიკავშირდი',
    'footer.rights': 'ყველა უფლება დაცულია.'
  },
  en: {
    'nav.hero': 'Home',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.why': 'Why Me',
    'nav.contact': 'Contact',
    'hero.title': 'Full Stack Web Developer <span class="accent-divider">|</span> React & Next.js Specialist',
    'hero.tagline': 'I build fast, scalable and user‑centric web applications.',
    'hero.intro': 'I have 5 years of experience building modern web applications, implementing precise UI/UX and collaborating in engineering teams. I work across frontend (React, Next.js, TypeScript) and backend (Node.js, PostgreSQL, RESTful APIs). My core focus is delivering fast, secure and user‑oriented MVPs. Additionally, through the xcaucasus project I gained hands‑on WordPress experience (theme optimization, performance, SEO structure).',
    'skills.title': 'Skills',
    'projects.title': 'Projects',
    'projects.desc': 'A selection of key projects is listed below. A full list will be added later.',
    'why.title': 'Why Me?',
    'why.item1': 'Detail‑oriented and proactive',
    'why.item2': 'Pixel‑accurate implementation & clean code',
    'why.item3': 'Continuous UX improvement mindset',
    'why.item4': 'Fast & stable MVP delivery',
    'why.item5': 'Collaborative within Git / Agile workflows',
    'contact.title': 'Contact',
    'hero.cta.projects': 'Projects',
    'hero.cta.contact': 'Contact Me',
    'footer.rights': 'All rights reserved.'
  }
};

const LANG_KEY = 'preferred-lang';
function loadLang(){
  const stored = localStorage.getItem(LANG_KEY);
  if(stored && (stored === 'ka' || stored === 'en')) return stored;
  return 'ka';
}
let currentLang = loadLang();

// Localized projects (store Georgian as base and provide English alt fields)
const PROJECTS = [
  {
    title: 'legal.ge',
    year: 2026,
    type: 'Production',
    status: 'მიმდინარე',
    status_en: 'In Progress',
    description: 'Legal Sandbox Georgia - ინოვაციური იურიდიული სერვისების პლატფორმა საქართველოში. პლატფორმა აერთიანებს 33+ იურიდიულ პრაქტიკას და 400+ სერვისს, მათ შორის: სანქციების კომპლაიენსი, LegalLaunch სტარტაპებისთვის, საბანკო და საფინანსო სამართალი, ინტელექტუალური საკუთრება. მოიცავს იურისტებისა და ადვოკატების პროფილებს, იურიდიული კომპანიების კატალოგს, სიახლეებისა და ბლოგის სექციას. მრავალენოვანი პლატფორმა (KA/EN) აგებული Next.js, React, TypeScript და PostgreSQL ტექნოლოგიებზე.',
    description_en: 'Legal Sandbox Georgia - innovative legal services platform in Georgia. The platform unites 33+ legal practices and 400+ services, including: sanctions compliance, LegalLaunch for startups, banking and finance law, intellectual property. Features lawyer and attorney profiles, legal companies catalog, news and blog sections. Multilingual platform (KA/EN) built on Next.js, React, TypeScript and PostgreSQL technologies.',
    stack: ['Next.js 15','React','TypeScript','SQL','i18n','Auth','SEO','Analytics'],
    live: 'https://legal.ge/',
    repo: '#',
    screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Flegal.ge?w=900&h=560'
  },
  {
    title: 'xparagliding.com',
    year: 2025,
    type: 'Production',
    status: 'მიმდინარე',
    status_en: 'In Progress',
    description: 'პარაგლაიდინგის ინდუსტრიისთვის საქართველოში შექმნილი ციფრული პლატფორმა. პროექტის მიზანია მთელი სფეროს ციფრული ტრანსფორმაცია - ონლაინ ჯავშნების სისტემიდან გლობალურ ინტეგრაციამდე. პლატფორმა მოიცავს: ფრენის ლოკაციების ინფორმაციას (გუდაური, მესტია, თბილისი, ანანური, რუსთავი), მრავალენოვან მხარდაჭერას (6 ენა: KA, EN, RU, DE, TR, AR), პრომო კოდების სისტემას, SuperAdmin პანელს კონტენტის მართვისთვის, პილოტების, კომპანიებისა და ოპერატორების ციფრულ პროფილებს, ავტომატიზირებულ ჯავშნების მართვას, რეალურ დროში ხელმისაწვდომობის ტრექინგს და ანალიტიკას. Next.js 15, React, TypeScript და PostgreSQL ტექნოლოგიებზე აგებული სრული Full-Stack გადაწყვეტა.',
    description_en: 'Digital platform for the paragliding industry in Georgia. The goal is complete digital transformation of the sector - from online booking to global integration. The platform includes: flight location information (Gudauri, Mestia, Tbilisi, Ananuri, Rustavi), multilingual support (6 languages: KA, EN, RU, DE, TR, AR), promo code system, SuperAdmin panel for content management, digital profiles for pilots, companies and operators, automated booking management, real-time availability tracking and analytics. Complete Full-Stack solution built on Next.js 15, React, TypeScript and PostgreSQL technologies.',
    stack: ['Next.js 15','React','TypeScript','SQL','i18n','Auth','CI/CD','Analytics'],
    live: 'https://xparagliding.com/',
    repo: '#',
    screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fxparagliding.com?w=900&h=560'
  },
  {
    title: 'Plan My Trip (pmt.ge)',
    year: 2025,
    type: 'Platform',
    status: 'დასრულებულია',
    status_en: 'Completed',
    description: 'მრავალენოვანი პლატფორმა მოგზაურობის დასაგეგმად, რომელიც მომხმარებელს სთავაზობს: აქტივობებისა და ტურების ძიებას, „საოჯახო" პროფილებს, ავთენტიკაციას, ტურების დეტალურ აღწერასა და სიახლეების გამოწერას. პროექტი ფოკუსირებულია მომხმარებლისთვის მარტივ ნავიგაციასა და SEO-ზე.',
    description_en: 'Multilingual travel planning platform: activity & tour discovery, "family" profiles, authentication, tour detail pages and newsletter. Focused on intuitive navigation and SEO structure.',
    stack: ['i18n','Auth','Trip Planner','Tours','Profiles','Newsletter','SEO'],
    live: 'https://pmt.ge/',
    repo: '#',
    screenshot: 'assets/screenshots/pmt.png'
  },
  {
    title: 'xcaucasus (xcaucasus.ge)',
    year: 2025,
    type: 'Production',
    status: 'დასრულებულია',
    status_en: 'Completed',
    description: 'ჩემ მიერ შექმნილი WordPress საიტი პარაგლაიდინგის კლუბისთვის, რომელიც მოიცავს: ფრენის ლოკაციებს, სწავლებას, ბლოგს, გალერეასა და მრავალენოვან მხარდაჭერას (KA/EN). ამ პროექტმა მომცა მცირე, მაგრამ პრაქტიკული გამოცდილება WordPress-ის მიმართულებით: თემების კონფიგურაცია, SEO სტრუქტურის გაუმჯობესება და საიტის წარმადობის ოპტიმიზაცია (სურათების კომპრესია, ქეშირება).',
    description_en: 'WordPress website I built for a paragliding club: flight locations, training, blog, gallery and multilingual support (KA/EN). Gave me hands-on WordPress practice: theme configuration, SEO structure improvements, performance optimization (image compression, caching).',
    stack: ['WordPress','PHP','SEO','Optimization','Multilingual'],
    live: 'https://xcaucasus.ge/',
    repo: '#',
    screenshot: 'assets/screenshots/xcaucasus.png'
  },
  {
    title: 'photo video booth (video360photo.ge)',
    year: 2025,
    type: 'Production',
    status: 'დასრულებულია',
    status_en: 'Completed',
    description: 'სტატიკური, მაღალი წარმადობის მრავალენოვანი (KA/EN/RU) Next.js ვებსაიტი, რომელიც შექმნილია 360° ტურებისა და პროფესიონალური ფოტო/ვიდეო სერვისებისთვის. საიტი სრულად ოპტიმიზირებულია SEO-სთვის (სემანტიკური სტრუქტურა, Meta/OG თეგები, სწრაფი LCP). მთავარი აქცენტებია: სიჩქარე, საძიებო სისტემებში კარგი ინდექსაცია და კონვერსიაზე ორიენტირებული დიზაინი.',
    description_en: 'Static, high-performance multilingual (KA/EN/RU) Next.js website for 360 tours and professional photo/video services. Fully SEO-optimized (semantic structure, Meta/OG tags, fast LCP). Emphasis on speed, search index quality and conversion-oriented layout.',
    stack: ['Next.js','React','TypeScript','Static Export','SEO','Image Optimization'],
    live: 'https://video360photo.ge/',
    repo: '#',
    screenshot: 'assets/screenshots/video360photo.png'
  },
  {
    title: 'projextx',
    year: null,
    type: 'E-Commerce',
    status: 'ბექენდის ინტეგრაციის მოლოდინში',
    status_en: 'Awaiting Backend Integration',
    description: 'React/Next.js-ზე შექმნილი e-commerce ფრონტენდი, რომელიც მოიცავს: პროდუქტების კატალოგს, დეტალურ გვერდებს, კალათას, ავთენტიკაციის UI-სა და შეკვეთის გაფორმების პროცესს. ფრონტენდის ნაწილი დასრულებულია და მზადაა API ინტეგრაციისთვის (REST ან GraphQL).',
    description_en: 'React/Next.js e-commerce frontend: product catalog, detail pages, cart, authentication UI and checkout flow. Frontend layer is ready, awaiting API integration (REST or GraphQL).',
    stack: ['Next.js','React','TypeScript','State Mgmt','UI Components'],
    live: 'https://projextx.vercel.app/',
    repo: '#',
    screenshot: 'assets/screenshots/ecomerce.png'
  }
];

const els = {
  themeToggle: document.getElementById('themeToggle'),
  projectsGrid: document.getElementById('projectsGrid'),
  year: document.getElementById('year'),
};

function renderYear() { els.year.textContent = new Date().getFullYear(); }

const DESC_CHAR_LIMIT = 150;

function createProjectCard(p) {
  const card = document.createElement('article');
  card.className = 'project-card';
  const statusText = currentLang === 'en' ? (p.status_en || p.status || '') : (p.status || '');
  const statusBadge = statusText ? `<span class="status-badge" data-status="${statusText}">${statusText}</span>` : '';
  const fullDesc = currentLang === 'en' ? (p.description_en || p.description) : p.description;
  const needsTruncate = fullDesc.length > DESC_CHAR_LIMIT;
  const truncatedDesc = needsTruncate ? fullDesc.slice(0, DESC_CHAR_LIMIT) + '...' : fullDesc;
  const readMoreText = currentLang === 'en' ? 'Read more' : 'წაიკითხე მეტი';
  const collapseText = currentLang === 'en' ? 'Collapse' : 'დამალვა';
  const yearDisplay = p.year ? `${p.year} · ` : '';
  
  card.innerHTML = `
    ${p.screenshot ? `
    <div class="project-thumb">
      <div class="thumb-skeleton" aria-hidden="true"></div>
      <img class="thumb-img lazy-img" data-src="${p.screenshot}" alt="${p.title} screenshot" decoding="async" loading="lazy" />
    </div>` : ''}
    <div class="project-meta">${yearDisplay}${p.type} ${statusBadge}</div>
    <h3>${p.title}</h3>
    <div class="project-desc-wrapper">
      <p class="project-desc" data-full="${encodeURIComponent(fullDesc)}" data-truncated="${encodeURIComponent(truncatedDesc)}">${truncatedDesc}</p>
      ${needsTruncate ? `<button class="read-more-btn" data-expanded="false" data-read-more="${readMoreText}" data-collapse="${collapseText}">${readMoreText}</button>` : ''}
    </div>
    <ul class="project-tags">${p.stack.map(t => `<li>${t}</li>`).join('')}</ul>
    <div class="project-links">
      ${p.live && p.live !== '#' ? `<a href="${p.live}" class="live" target="_blank" rel="noopener" aria-label="Live demo: ${p.title}">Live</a>` : ''}
      ${p.repo && p.repo !== '#' ? `<a href="${p.repo}" class="repo" target="_blank" rel="noopener" aria-label="Source code: ${p.title}">Code</a>` : ''}
    </div>
  `;
  
  // Add read more/collapse functionality
  const readMoreBtn = card.querySelector('.read-more-btn');
  if (readMoreBtn) {
    readMoreBtn.addEventListener('click', () => {
      const descEl = card.querySelector('.project-desc');
      const isExpanded = readMoreBtn.getAttribute('data-expanded') === 'true';
      if (isExpanded) {
        descEl.textContent = decodeURIComponent(descEl.getAttribute('data-truncated'));
        readMoreBtn.textContent = readMoreBtn.getAttribute('data-read-more');
        readMoreBtn.setAttribute('data-expanded', 'false');
      } else {
        descEl.textContent = decodeURIComponent(descEl.getAttribute('data-full'));
        readMoreBtn.textContent = readMoreBtn.getAttribute('data-collapse');
        readMoreBtn.setAttribute('data-expanded', 'true');
      }
    });
  }
  
  return card;
}

function renderProjects() {
  if (!els.projectsGrid) return;
  els.projectsGrid.innerHTML = '';
  PROJECTS.forEach(p => els.projectsGrid.appendChild(createProjectCard(p)));
  // Re-initialize lazy loader & attach fallback after DOM injection
  initThumbLazyLoad();
}

// Theme handling
const THEME_KEY = 'preferred-theme';
function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.classList.add('light-theme');
  } else {
    document.documentElement.classList.remove('light-theme');
  }
}
function loadTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored) return stored;
  // fallback to system
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}
function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light-theme');
  localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
  if(els.themeToggle){
    els.themeToggle.textContent = isLight ? '🌞' : '🌓';
  }
}

function initTheme() {
  applyTheme(loadTheme());
  els.themeToggle?.addEventListener('click', toggleTheme);
}

// Mobile nav
(function mobileNav(){
  const toggleBtn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('navMenu');
  if(!toggleBtn || !menu) return;
  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }));
})();

// Smooth scroll focus management
(function enhanceInternalLinks(){
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth'});
        setTimeout(() => target.focus({preventScroll:true}), 600);
      }
    });
  });
})();

// Init
function applyStaticTranslations(){
  const dict = I18N[currentLang];
  if(!dict) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key]){
      el.innerHTML = dict[key];
    }
  });
  document.documentElement.lang = currentLang;
}

function initLangToggle(){
  const btn = document.getElementById('langToggle');
  if(!btn) return;
  btn.textContent = currentLang === 'ka' ? 'KA' : 'EN';
  btn.setAttribute('data-lang', currentLang);
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'ka' ? 'en' : 'ka';
    localStorage.setItem(LANG_KEY, currentLang);
    btn.textContent = currentLang === 'ka' ? 'KA' : 'EN';
    btn.setAttribute('data-lang', currentLang);
    applyStaticTranslations();
    renderProjects();
  });
}

(function init(){
  renderYear();
  initTheme();
  applyStaticTranslations();
  initLangToggle();
  renderProjects();
  setupReveal();
  initThumbLazyLoad();
})();

// Expose for future dynamic injection
window.__PORTFOLIO__ = { addProject: p => { PROJECTS.push(p); renderProjects(); } };

// Reveal animations using IntersectionObserver
function setupReveal(){
  const items = document.querySelectorAll('.reveal');
  if(!items.length) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced){
    items.forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const order = entry.target.getAttribute('data-reveal-order') || '0';
        entry.target.style.setProperty('--reveal-delay', `${order * 80}ms`);
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  items.forEach(el => obs.observe(el));
}

// Lazy load screenshots
function initThumbLazyLoad(){
  const imgs = document.querySelectorAll('img.lazy-img');
  if(!imgs.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const img = entry.target;
        const src = img.getAttribute('data-src');
        if(src){
          let settled = false;
          const clearSkeleton = () => {
            if(settled) return; settled = true;
            img.classList.add('loaded');
            const skel = img.previousElementSibling;
            if(skel && skel.classList.contains('thumb-skeleton')) skel.remove();
          };
          const applySvgFallback = () => {
            if(settled) return; settled = true;
            const fallbackSvg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='900' height='560' viewBox='0 0 900 560' role='img' aria-label='No screenshot'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%23333'/><stop offset='100%' stop-color='%23111'/></linearGradient></defs><rect width='900' height='560' fill='url(%23g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='30' fill='%23aaa'>No Preview</text></svg>`);
            img.src = `data:image/svg+xml,${fallbackSvg}`;
            img.style.objectFit = 'contain';
            img.style.background = 'var(--surface-2)';
            clearSkeleton();
          };
          const altSrc = img.getAttribute('data-alt-src');
          const timeoutId = setTimeout(() => {
            // If still not loaded after 6s, try alt provider then fallback
            if(settled) return;
            if(altSrc){
              const testImg = new Image();
              testImg.onload = () => { if(!settled){ img.src = altSrc; clearSkeleton(); } };
              testImg.onerror = applySvgFallback;
              testImg.src = altSrc;
            } else {
              applySvgFallback();
            }
          }, 6000);
          img.addEventListener('load', () => { clearTimeout(timeoutId); clearSkeleton(); }, { once: true });
          img.addEventListener('error', () => {
            clearTimeout(timeoutId);
            if(altSrc && !settled){
              const testImg = new Image();
              testImg.onload = () => { if(!settled){ img.src = altSrc; clearSkeleton(); } };
              testImg.onerror = applySvgFallback;
              testImg.src = altSrc;
            } else {
              applySvgFallback();
            }
          }, { once: true });
          // Kick off primary load last
          img.src = src;
          img.removeAttribute('data-src');
        }
        obs.unobserve(img);
      }
    });
  }, { rootMargin: '120px 0px' });
  imgs.forEach(i => obs.observe(i));
}
