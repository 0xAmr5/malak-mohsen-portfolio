// ==========================================
// 1. Translations (EN / AR)
// ==========================================
const translations = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_certs: "Certifications",
    nav_edu: "Education",
    nav_resume: "Resume",
    lang_btn: "عربي",

    hero_title: 'Turning raw data into <em>meaningful</em> narratives.',
    hero_desc: "Hi, I'm <strong>Malak Mohsen</strong>. I combine rigorous algorithmic foundations with practical software design, exploring database architecture, modern AI models, and scalable systems.",
    btn_resume: "View Resume",
    btn_wa: "WhatsApp",

    about_badge: "Core Narrative",
    about_lede: "A CS student combining analytical precision with modern computational design.",
    about_p1: "My coursework at the Arab Open University and industry training programs have grounded me in structured problem solving, database systems, and exploratory data analysis.",
    about_p2: "From designing efficient algorithms and structuring robust data representations to uncovering hidden insights and applying modern AI models, I focus on turning complex requirements into clean, impactful solutions.",

    skills_badge: "Toolkit",
    skills_title: "Technical Skills",
    cat_cs: "Computer Science Fundamentals",
    skill_ds: "Data Structures",
    skill_algo: "Algorithms",
    skill_ps: "Problem Solving",
    skill_sd: "Software Design",
    cat_lang: "Programming Languages",
    cat_db: "Databases & Cloud",
    cat_tools: "Web & Intelligence Tools",
    skill_responsive: "Responsive UI",
    skill_analytics: "Data Analytics",
    skill_ai: "Modern AI",

    certs_badge: "Credentials",
    certs_title: "Verified Training & Industry Programs",
    domain_ds: "Data Science",
    cert_cisco_desc: "Exploratory analysis workflows, statistical hygiene, data wrangling pipelines, and structured relational queries.",
    domain_ai: "Artificial Intelligence",
    cert_ai_desc: "Architecture and real-world deployment of modern AI systems, prompt frameworks, and open-ended design problems.",
    domain_fintech: "FinTech & AI Systems",
    cert_cib_desc: "Intensive financial-technology program focusing on enterprise digital banking architecture and LLM applications.",
    domain_banking: "Banking Controls",
    cert_ttl_desc: "Foundational compliance pipelines, internal security protocols, and operational workflows across contemporary institutions.",

    edu_badge: "Academics",
    edu_time: "2023 — Present",
    edu_degree: "B.Sc. in Computer Science",
    edu_school: "Arab Open University — Egypt",
    edu_desc: "Rigorous curriculum encompassing Data Structures, Algorithm Analysis, Software Engineering, Object-Oriented Design, and Database Architecture.",

    contact_title: "Let's build something together",
    contact_desc: "Open for discussions, software projects, or data analytics opportunities.",
    form_name_lbl: "Your Name",
    form_email_lbl: "Your Email",
    form_msg_lbl: "Project Details / Message",
    form_btn: "Send Message",
    ph_name: "e.g. John Doe",
    ph_email: "e.g. john@example.com",
    ph_msg: "Tell me about your project or opportunity...",
    contact_or: "or reach out directly",
    btn_download_cv: "Resume",
    footer_copy: "Designed with care for Malak Mohsen © 2026",

    msg_sending: "Sending message...",
    msg_success: "Thank you! Your message has been sent successfully.",
    msg_err: "Oops! Something went wrong. Please try again."
  },
  ar: {
    nav_about: "عن ملك",
    nav_skills: "المهارات",
    nav_certs: "الشهادات والتدريب",
    nav_edu: "التعليم",
    nav_resume: "السيرة الذاتية",
    lang_btn: "English",

    hero_title: 'تحويل البيانات المجردة إلى <em>رؤى وإنجازات</em> ملموسة.',
    hero_desc: "أهلاً، أنا <strong>ملك محسن</strong>. أجمع بين دراسة الخوارزميات وتحليل البيانات وهندسة البرمجيات، مع اهتمام بالذكاء الاصطناعي وتصميم قواعد البيانات وبناء الأنظمة القابلة للتوسع.",
    btn_resume: "عرض الـ CV",
    btn_wa: "تواصل واتساب",

    about_badge: "نبذة عني",
    about_lede: "طالبة علوم حاسب تجمع بين الدقة التحليلية والتفكير البرمجي المنظم.",
    about_p1: "من خلال دراستي في الجامعة العربية المفتوحة والتدريبات التقنية المكثفة، اكتسبت أساساً متيناً في حل المشكلات البرمجية، تصميم قواعد البيانات، والتحليل الاستكشافي للبيانات.",
    about_p2: "أسعى دائماً لتحويل المسائل المعقدة إلى حلول برمجية بسيطة، وبناء نماذج تحليلية ذكية تخدم أهداف العمل وتصنع فارقاً حقيقياً.",

    skills_badge: "المهارات والتقنيات",
    skills_title: "المهارات التقنية",
    cat_cs: "أساسيات علوم الحاسب",
    skill_ds: "هياكل البيانات (Data Structures)",
    skill_algo: "الخوارزميات (Algorithms)",
    skill_ps: "حل المشكلات (Problem Solving)",
    skill_sd: "تصميم البرمجيات (Software Design)",
    cat_lang: "لغات البرمجة",
    cat_db: "قواعد البيانات والسحابة",
    cat_tools: "أدوات الويب والذكاء الاصطناعي",
    skill_responsive: "واجهات متجاوبة (Responsive UI)",
    skill_analytics: "تحليل البيانات",
    skill_ai: "الذكاء الاصطناعي الحديث",

    certs_badge: "الشهادات والاعتمادات",
    certs_title: "التدريبات والشهادات المعتمدة",
    domain_ds: "علوم البيانات",
    cert_cisco_desc: "إتقان التحليل الاستكشافي للبيانات، الإحصاء التطبيقي، واستعلامات SQL الاحترافية.",
    domain_ai: "الذكاء الاصطناعي",
    cert_ai_desc: "دراسة معماريات الذكاء الاصطناعي الحديث، هندسة الأوامر (Prompting)، والمشاريع المفتوحة.",
    domain_fintech: "التكنولوجيا المالية والذكاء الاصطناعي",
    cert_cib_desc: "تدريب صيفي مكثف يركز على تطبيقات الذكاء الاصطناعي التوليدي في العمل المصرفي الرقمي.",
    domain_banking: "الرقابة المصرفية",
    cert_ttl_desc: "دراسة شاملة للبنية الرقمية للبنوك وإدارة المخاطر والرقابة الداخلية وأنظمة الامتثال.",

    edu_badge: "المسار الأكاديمي",
    edu_time: "2023 — حتى الآن",
    edu_degree: "بكالوريوس علوم الحاسب (Computer Science)",
    edu_school: "الجامعة العربية المفتوحة — مصر",
    edu_desc: "دراسة متعمقة تشمل هياكل البيانات، تحليل الخوارزميات، البرمجة كائنية التوجه (OOP)، وهندسة البرمجيات.",

    contact_title: "لنصنع شيئاً مميزاً معاً",
    contact_desc: "مستعدة دائماً لمناقشة المشاريع البرمجية وفرص تحليل البيانات والتعاون التقني.",
    form_name_lbl: "الاسم",
    form_email_lbl: "البريد الإلكتروني",
    form_msg_lbl: "تفاصيل العمل أو الرسالة",
    form_btn: "إرسال الرسالة",
    ph_name: "مثال: أحمد محمد",
    ph_email: "مثال: name@example.com",
    ph_msg: "اكتب تفاصيل المشروع أو فرصة العمل هنا...",
    contact_or: "أو تواصل مباشرة عبر",
    btn_download_cv: "تحميل السيرة الذاتية",
    footer_copy: "صُمم بكل تقدير لـ ملك محسن © 2026",

    msg_sending: "جاري الإرسال...",
    msg_success: "شكراً لك! تم إرسال رسالتك بنجاح.",
    msg_err: "حدث خطأ أثناء الإرسال، برجاء المحاولة مرة أخرى."
  }
};

// ==========================================
// 2. Language Engine
// ==========================================
let currentLang = localStorage.getItem('site_lang') || 'en';

function applyLanguage(lang) {
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-ph-key]').forEach(el => {
    const key = el.getAttribute('data-ph-key');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  const langLabel = document.querySelector('.lang-label');
  if (langLabel) {
    langLabel.textContent = translations[lang].lang_btn;
  }

  localStorage.setItem('site_lang', lang);
  currentLang = lang;
}

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'ar' : 'en');
  });
}
applyLanguage(currentLang);

// ==========================================
// 3. Theme Engine
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
let currentTheme = localStorage.getItem('site_theme') || 'dark';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('site_theme', theme);
  currentTheme = theme;

  if (themeIcon) {
    themeIcon.className = theme === 'light' ? 'fa-regular fa-moon' : 'fa-regular fa-sun';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}
applyTheme(currentTheme);

// ==========================================
// 4. Mobile Menu
// ==========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

// ==========================================
// 5. 3D Tilt Engine for Portrait & Cards
// ==========================================
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const heroWrapper = document.getElementById('hero3D');
  const heroVisual = document.getElementById('heroVisual');

  if (heroVisual && heroWrapper) {
    heroVisual.addEventListener('mousemove', (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = -(y / (rect.height / 2)) * 14;
      const rotateY = (x / (rect.width / 2)) * 14;

      heroWrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroVisual.addEventListener('mouseleave', () => {
      heroWrapper.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }

  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotX = -(y / (rect.height / 2)) * 6;
      const rotY = (x / (rect.width / 2)) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-3px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// ==========================================
// 6. Dynamic Constellation Network
// ==========================================
const svg = document.getElementById('constellation');
const nodeLayer = document.getElementById('conNodes');
const lineLayer = document.getElementById('conLines');

if (svg && nodeLayer && lineLayer) {
  const NODE_COUNT = 10;
  const W = 420, H = 460, CX = W / 2, CY = H / 2;

  const nodes = Array.from({ length: NODE_COUNT }, (_, i) => {
    const angle = (i / NODE_COUNT) * Math.PI * 2;
    const radius = 145 + (i % 3) * 25;
    return {
      baseX: CX + Math.cos(angle) * radius,
      baseY: CY + Math.sin(angle) * radius * 0.95,
      r: 3.5 + (i % 3),
      phase: Math.random() * Math.PI * 2,
    };
  });

  nodes.forEach((n, i) => {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    el.setAttribute('r', n.r);
    el.setAttribute('fill', i % 2 === 0 ? '#E8A598' : '#E2B887');
    el.setAttribute('opacity', '0.85');
    nodeLayer.appendChild(el);
    n.el = el;
  });

  const lineEls = nodes.map((n, i) => {
    const next = nodes[(i + 1) % nodes.length];
    const cross = nodes[(i + 3) % nodes.length];

    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('opacity', '0.28');
    lineLayer.appendChild(line1);

    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('opacity', '0.12');
    lineLayer.appendChild(line2);

    return [
      { line: line1, a: n, b: next },
      { line: line2, a: n, b: cross }
    ];
  }).flat();

  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  svg.parentElement.addEventListener('mousemove', (e) => {
    const rect = svg.parentElement.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  });

  svg.parentElement.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
  });

  let t = 0;
  function drawFrame() {
    t += 0.007;
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    nodes.forEach((n) => {
      const drift = reduceMotion ? 0 : Math.sin(t + n.phase) * 7;
      const parallax = reduceMotion ? 0 : (mouseX * (12 + n.r * 2));
      const parallaxY = reduceMotion ? 0 : (mouseY * (12 + n.r * 2));
      n.x = n.baseX + drift + parallax;
      n.y = n.baseY + Math.cos(t + n.phase) * 5 + parallaxY;
      n.el.setAttribute('cx', n.x);
      n.el.setAttribute('cy', n.y);
    });

    lineEls.forEach(({ line, a, b }) => {
      line.setAttribute('x1', a.x);
      line.setAttribute('y1', a.y);
      line.setAttribute('x2', b.x);
      line.setAttribute('y2', b.y);
    });

    if (!reduceMotion) requestAnimationFrame(drawFrame);
  }
  drawFrame();
}

// ==========================================
// 7. Formspree Submission
// ==========================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit-btn');
    const originalBtnHTML = btn.innerHTML;

    btn.disabled = true;
    formStatus.className = 'form-status';
    formStatus.textContent = translations[currentLang].msg_sending;

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formStatus.className = 'form-status success';
        formStatus.textContent = translations[currentLang].msg_success;
        contactForm.reset();
      } else {
        throw new Error();
      }
    } catch {
      formStatus.className = 'form-status error';
      formStatus.textContent = translations[currentLang].msg_err;
    } finally {
      btn.disabled = false;
      btn.innerHTML = originalBtnHTML;
    }
  });
}