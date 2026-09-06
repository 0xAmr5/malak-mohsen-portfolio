// Header blur & border effect
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.borderBottomColor = 'rgba(232, 165, 152, 0.25)';
    header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
  } else {
    header.style.borderBottomColor = 'rgba(240, 246, 252, 0.08)';
    header.style.boxShadow = 'none';
  }
});

// Mobile Navbar Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

// 3D Tilt Effect on Photo Card & Certifications
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

  // Tilt on Training & Experience Cards
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotX = -(y / (rect.height / 2)) * 7;
      const rotY = (x / (rect.width / 2)) * 7;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// Dynamic Data Constellation (Network Graph)
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