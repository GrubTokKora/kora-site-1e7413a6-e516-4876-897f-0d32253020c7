// Shared scroll animations & utilities

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      observer.observe(el);
    });
  }
  
  // Smooth counter animation
  function animateCounter(el, target, duration = 2000) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { el.textContent = target; clearInterval(timer); }
      else el.textContent = Math.floor(start);
    }, 16);
  }
  
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target, parseInt(e.target.dataset.count));
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
  }
  
  // Parallax on hero
  function initParallax() {
    const hero = document.querySelector('.hero-parallax');
    if (!hero) return;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      hero.style.transform = `translateY(${y * 0.4}px)`;
    }, { passive: true });
  }
  
  // Menu tab switching
  function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => { p.style.display = 'none'; });
        tab.classList.add('active');
        const target = document.getElementById(tab.dataset.tab);
        if (target) {
          target.style.display = 'grid';
          // Re-trigger animations
          target.querySelectorAll('.reveal').forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 50);
          });
        }
        // Menu page: align first card under fixed header + sticky tabs.
        // Use instant scroll only: smooth scroll fires many scroll events, which toggles the compact
        // header and changes its height mid-animation, so the first frame lands under the tabs.
        if (tab.closest('.menu-tab-sticky') && target) {
          const alignFirstCard = () => {
            const firstCard = target.querySelector('.food-card');
            const siteHeader = document.getElementById('siteHeader');
            const sticky = document.querySelector('.menu-tab-sticky');
            if (!firstCard || !siteHeader) return null;
            void firstCard.offsetHeight;
            const headerH = siteHeader.getBoundingClientRect().height;
            const stickyH = sticky ? sticky.getBoundingClientRect().height : 0;
            const gap = 16;
            const y =
              firstCard.getBoundingClientRect().top + window.scrollY - headerH - stickyH - gap;
            return Math.max(0, y);
          };

          const run = () => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                const top = alignFirstCard();
                if (top == null) return;
                window.scrollTo({ top, left: 0, behavior: 'auto' });
                // One extra instant pass: header height may update after scrollY changes.
                requestAnimationFrame(() => {
                  const top2 = alignFirstCard();
                  if (top2 != null && Math.abs(top2 - window.scrollY) > 2) {
                    window.scrollTo({ top: top2, left: 0, behavior: 'auto' });
                  }
                });
              });
            });
          };

          setTimeout(run, 180);
        }
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initCounters();
    initParallax();
    initTabs();
  });

// Hero Slider
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.getElementById('heroDots');
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    if (!slides.length) return;

    let current = 0;
    let autoTimer;

    // Build dots
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    function goTo(idx) {
      slides[current].classList.remove('active');
      dotsContainer.children[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      dotsContainer.children[current].classList.add('active');
      // Trigger reveal on new slide content
      slides[current].querySelectorAll('.reveal, .reveal-right').forEach(el => {
        el.classList.remove('visible');
        setTimeout(() => el.classList.add('visible'), 100);
      });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    prevBtn.addEventListener('click', () => { clearInterval(autoTimer); prev(); startAuto(); });
    nextBtn.addEventListener('click', () => { clearInterval(autoTimer); next(); startAuto(); });

    function startAuto() { autoTimer = setInterval(next, 5500); }
    startAuto();

    // Trigger initial reveal
    slides[0].querySelectorAll('.reveal, .reveal-right').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 300);
    });
  });
})();