// Village Tenders proposal — page behavior

(function () {
  // ---------- Inject illustrations ----------
  const I = window.VTIllus || {};
  const set = (id, svg) => { const el = document.getElementById(id); if (el && svg) el.innerHTML = svg; };

  set('coverIllus', I.hearth);
  set('coverSprig', I.sprig);
  set('ico-flame', I.flame);
  set('ico-house', I.house);
  set('ico-spiral', I.spiral);
  set('ico-const', I.constellation);
  set('sproutIllus', I.candle);
  set('keyIllus', I.key);
  set('candleIllus', I.candle);
  set('searchIllus', I.search);
  set('closingIllus', I.hearth);

  // checkmarks on deliverable tiles
  document.querySelectorAll('.deliv-tile .check').forEach(el => {
    el.innerHTML = I.check || '';
  });

  // customer-side list (block 01) — generate via JS
  const custItems = [
    { ico: 'home',     title: 'A homepage that breathes.', body: 'Soft, unhurried, intentional.' },
    { ico: 'quiz',     title: 'A short quiz that meets them where they are.', body: 'Five gentle questions, a personalized answer, an invitation to your circle.' },
    { ico: 'walk',     title: 'A walk through the village.', body: 'Pages designed to be read slowly, on a phone.' },
    { ico: 'retreat',  title: 'A retreat page that holds the magic.', body: 'Live "spots remaining" counter and all.' },
    { ico: 'letter',   title: 'An application that feels like a letter.', body: 'A small deposit to hold their place.' },
    { ico: 'series',   title: 'A pre-retreat experience that starts the moment they pay.', body: 'A six-week series of warm emails.' },
    { ico: 'book',     title: 'A booking page for 1:1 sessions.', body: 'Reads your real availability.' },
    { ico: 'chat',     title: 'A friendly chat helper for late-night questions.', body: 'Sounds like you.' },
    { ico: 'journal',  title: 'A blog that feels like a journal.', body: 'Ten launch posts, generously designed.' },
    { ico: 'download', title: 'A downloadable lead magnet.', body: 'Available right from the homepage.' },
    { ico: 'welcome',  title: 'A post-retreat welcome that doesn\u2019t end.', body: 'Integration, testimonials, gentle invitations to return.' },
    { ico: 'circle',   title: 'A circle they can return to.', body: 'A weekly note from the hearth.' }
  ];
  const custEl = document.getElementById('custList');
  if (custEl) {
    custEl.innerHTML = custItems.map((it, idx) => `
      <div class="cust-item">
        <div class="ico">${(I.ico && I.ico[it.ico]) || ''}</div>
        <div class="body">
          <span class="num">${romanize(idx+1)}.</span>
          <h4>${it.title}</h4>
          <p>${it.body}</p>
        </div>
      </div>
    `).join('');
  }

  function romanize(n) {
    const r = ['i','ii','iii','iv','v','vi','vii','viii','ix','x','xi','xii'];
    return r[n-1] || n;
  }

  // ---------- Image grid (AI image system examples) ----------
  // Build watercolor-style placeholder tiles using gradients on-palette
  const imagePalettes = [
    { a: '#E8C8B8', b: '#C97D60' }, // terracotta
    { a: '#DCE3D2', b: '#7A8B6F' }, // sage
    { a: '#E5D3A8', b: '#B8924C' }, // gold
    { a: '#F0DDD0', b: '#A65A3D' }, // rust
    { a: '#E8DBC2', b: '#9A8862' }, // ochre
    { a: '#E6D2CB', b: '#A87B70' }  // dusty rose
  ];
  const imageGrid = document.getElementById('imageGrid');
  if (imageGrid) {
    imageGrid.innerHTML = imagePalettes.map((p, i) => imageTileSVG(p, i)).join('');
  }

  function imageTileSVG(p, seed) {
    // organic watercolor blobs + sprig
    const blobs = [
      `<circle cx="${30+seed*8}" cy="${28+seed*4}" r="${18+seed%4*3}" fill="${p.b}" opacity="0.35"/>`,
      `<circle cx="${72-seed*5}" cy="${65-seed*3}" r="${14+seed%5*2}" fill="${p.b}" opacity="0.25"/>`,
      `<circle cx="${50}" cy="${50}" r="${24+seed%3*4}" fill="${p.b}" opacity="0.15"/>`
    ].join('');
    const motifs = [
      `<g stroke="${p.b}" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.8" transform="translate(50 60)"><path d="M-10 0 Q 0 -8 10 0"/><path d="M-6 0 Q -6 -5 -3 -4"/><path d="M0 0 Q 0 -6 4 -5"/><path d="M6 0 Q 6 -5 9 -4"/><circle cx="0" cy="0" r="1"/></g>`,
      `<g stroke="${p.b}" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.85" transform="translate(50 55)"><path d="M0 -16 L0 12"/><path d="M0 -8 Q -8 -10 -10 -2"/><path d="M0 -2 Q 8 -4 10 4"/><path d="M0 6 Q -7 6 -8 12"/></g>`,
      `<g stroke="${p.b}" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.85" transform="translate(50 55)"><circle cx="0" cy="0" r="6" fill="${p.b}" fill-opacity="0.3"/><path d="M0 -14 L0 -10 M0 10 L0 14 M-14 0 L-10 0 M10 0 L14 0 M-10 -10 L-7 -7 M7 7 L10 10 M-10 10 L-7 7 M7 -7 L10 -10"/></g>`,
      `<g stroke="${p.b}" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.85" transform="translate(50 60)"><path d="M-12 6 L0 -10 L12 6 L12 12 L-12 12 Z"/><path d="M-4 12 L-4 4 L4 4 L4 12"/></g>`,
      `<g stroke="${p.b}" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.85" transform="translate(50 50)"><path d="M-14 0 Q -7 -14 0 -14 Q 7 -14 14 0 Q 7 14 0 14 Q -7 14 -14 0 Z" fill="${p.b}" fill-opacity="0.18"/><circle cx="0" cy="0" r="3" fill="${p.b}" fill-opacity="0.4"/></g>`,
      `<g stroke="${p.b}" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.85" transform="translate(50 55)"><path d="M0 -14 Q -10 -8 -10 0 Q -10 8 0 14 Q 10 8 10 0 Q 10 -8 0 -14 Z" fill="${p.b}" fill-opacity="0.2"/><path d="M0 -14 L0 14"/></g>`
    ];
    return `
      <div class="image-tile">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;background:linear-gradient(135deg, ${p.a} 0%, ${shade(p.a,-6)} 100%);">
          ${blobs}
          ${motifs[seed % motifs.length]}
        </svg>
      </div>`;
  }

  function shade(hex, pct) {
    const h = hex.replace('#','');
    const r = parseInt(h.substr(0,2),16), g = parseInt(h.substr(2,2),16), b = parseInt(h.substr(4,2),16);
    const adj = c => Math.max(0, Math.min(255, Math.round(c + (pct/100)*255)));
    return '#' + [adj(r),adj(g),adj(b)].map(c => c.toString(16).padStart(2,'0')).join('');
  }

  // ---------- Blog grid ----------
  const blogPosts = [
    { tag: 'Introducing', title: 'Who I am, what Village Tenders is becoming', pal: 0 },
    { tag: 'Reflection',  title: 'Why your nervous system is louder in the fall', pal: 5 },
    { tag: 'Practice',    title: 'Five morning rituals for women who give too much', pal: 1 },
    { tag: 'Retreat',     title: 'What actually happens at a healing retreat', pal: 2 },
    { tag: 'Question',    title: 'Burnout, or something quieter?', pal: 3 },
    { tag: 'Voices',      title: 'A letter to the woman who can\u2019t rest', pal: 4 },
    { tag: 'Reflection',  title: 'On thresholds, and the work of crossing them', pal: 1 },
    { tag: 'Practice',    title: 'A simple evening practice for tender weeks', pal: 5 },
    { tag: 'Story',       title: 'How one client found her way back', pal: 0 },
    { tag: 'Invitation',  title: 'What it looks like to sit at the hearth', pal: 2 }
  ];
  const blogEl = document.getElementById('blogGrid');
  if (blogEl) {
    blogEl.innerHTML = blogPosts.map(p => `
      <article class="blog-card">
        <div class="blog-thumb">${imageTileSVG(imagePalettes[p.pal], p.pal+2).replace('image-tile','').replace('<div class="">','<div>')}</div>
        <div class="blog-meta">
          <span class="tag">${p.tag}</span>
          <h5>${p.title}</h5>
        </div>
      </article>
    `).join('');
  }

  // ---------- Sticky nav state ----------
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 8) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ---------- Active section in nav ----------
  const linkMap = {};
  document.querySelectorAll('.nav-links a').forEach(a => {
    const id = a.getAttribute('href').slice(1);
    if (id) linkMap[id] = a;
  });
  const sectionsToTrack = Object.keys(linkMap)
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const setActive = (id) => {
    Object.values(linkMap).forEach(a => a.classList.remove('active'));
    if (linkMap[id]) linkMap[id].classList.add('active');
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) setActive(en.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sectionsToTrack.forEach(s => io.observe(s));
  }

  // ---------- Scroll reveal ----------
  if ('IntersectionObserver' in window) {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          reveal.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  // ---------- Form ----------
  const form = document.getElementById('kickoffForm');
  const success = document.getElementById('qSuccess');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      try {
        // Try Formspree-style endpoint if configured. Fallback: open mailto.
        const action = form.getAttribute('action') || '';
        if (action && /formspree\.io/.test(action) && !/joshua@untold\.works$/.test(action)) {
          await fetch(action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        } else {
          // Build mailto fallback
          const subject = encodeURIComponent('Village Tenders \u2014 Kickoff answers');
          const body = [];
          for (const [k, v] of data.entries()) {
            body.push(`\n## ${k}\n${v}`);
          }
          window.location.href = `mailto:joshua@untold.works?subject=${subject}&body=${encodeURIComponent(body.join('\n'))}`;
          return; // don't show success — let the email client open
        }
      } catch (err) { /* swallow */ }
      form.style.display = 'none';
      success.classList.add('visible');
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
})();
