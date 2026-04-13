// Shared navigation and footer components for Tawa Indian Cuisine

const UBEREATS_URL = "https://www.ubereats.com/store/tabla-indian-cuisine/idH05N0DTfKN-yvEp8jOig?utm_campaign=place-action-link&utm_medium=organic&utm_source=google";
const TOAST_URL = "https://order.toasttab.com/online/tabla-38245-w-10-mile-rd?diningOption=takeout&rwg_token=AJKvS9XH-1E7e6IHM9ULqvAFi1CPc2z5CSVW5KKXBs9JovYGp-uL6OmmyFe4-Jib-EXMSx4NTZmR6baBYHzwuT6WM8vhbdTRqy84oMEuJjrDiqxVRpIRlhU%3D";
const DOORDASH_URL = "https://www.doordash.com/store/tabla-llc-farmington-hills-29708756/?utm_campaign=gpa";
const GRUBHUB_URL = "http://menus.fyi/8977496";

function renderHeader(activePage = 'home') {
  const pages = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'about', label: 'About Us', href: 'about.html' },
    { id: 'menu', label: 'Menu', href: 'menu.html' },
    { id: 'services', label: 'Our Services', href: 'services.html' },
    { id: 'catering', label: 'Catering', href: 'catering.html' },
    { id: 'contact', label: 'Contact Us', href: 'contact.html' },
  ];

  const navLinks = pages.map(p => `
    <li>
      <a href="${p.href}" ${p.external ? 'target="_blank" rel="noopener"' : ''} 
         class="nav-link ${activePage === p.id ? 'active' : ''}">${p.label}</a>
    </li>
  `).join('');

  document.getElementById('header-placeholder').innerHTML = `
    <header class="site-header" id="siteHeader">
    <!-- Top bar (clip + slide-up when compact) -->
    <div class="top-bar-clip">
    <div class="top-bar">
      <div class="top-bar-inner">
        <div class="top-bar-left">
          <span class="top-bar-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg> 38245, 38249 W 10 Mile Rd, Farmington Hills, MI 48335</span>
          <span class="top-bar-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg> <a href="tel:248-536-2650">248-536-2650</a></span>
          <span class="top-bar-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg> <a href="mailto:tabladetroit@gmail.com">tabladetroit@gmail.com</a></span>
        </div>
        <div class="top-bar-right">
          <a href="https://www.facebook.com/" target="_blank" class="social-icon" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
          </a>
          <a href="https://www.twitter.com/" target="_blank" class="social-icon" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" class="social-icon" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
          </a>
        </div>
      </div>
    </div>
    </div>
    <!-- Main Navbar -->
    <nav class="navbar" id="mainNav">
      <div class="nav-container">
        <a href="index.html" class="nav-logo">
          <img src="https://tawaindiancuisine.com/assets/img/tawalog.jpeg" alt="Tawa Indian Cuisine Logo">
          <span class="logo-text">Tawa Indian Cuisine</span>
        </a>
        <ul class="nav-links" id="navLinks">
          ${navLinks}
          <li class="order-dropdown">
            <a href="#" class="nav-link order-btn">Order Online <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg></a>
            <ul class="dropdown-menu">
              <li><a href="${UBEREATS_URL}" target="_blank" rel="noopener">UberEats</a></li>
              <li><a href="${TOAST_URL}" target="_blank" rel="noopener">Toast</a></li>
              <li><a href="${DOORDASH_URL}" target="_blank" rel="noopener">DoorDash</a></li>
              <li><a href="${GRUBHUB_URL}" target="_blank" rel="noopener">Grubhub</a></li>
            </ul>
          </li>
        </ul>
        <button class="hamburger" id="hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    </header>
    <div class="header-scroll-spacer" id="headerScrollSpacer" aria-hidden="true"></div>
  `;

  // Hamburger toggle
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('active');
  });

  initHeaderScroll();
}

function initHeaderScroll() {
  const siteHeader = document.getElementById('siteHeader');
  const nav = document.getElementById('mainNav');
  const spacer = document.getElementById('headerScrollSpacer');
  const topBar = siteHeader?.querySelector('.top-bar');
  if (!siteHeader || !nav || !spacer) return;

  const SCROLL_COMPACT = 40;
  const SCROLL_NAV_SHADOW = 72;
  const topBarClip = siteHeader.querySelector('.top-bar-clip');

  function syncSpacerHeight() {
    const h = siteHeader.offsetHeight;
    spacer.style.height = `${h}px`;
    document.documentElement.style.setProperty('--site-header-height', `${h}px`);
  }

  /** Pixel height of the top bar strip (for slide + negative margin so the nav moves together). */
  function syncClipHeightVar() {
    if (!topBarClip) return;
    if (!siteHeader.classList.contains('site-header--compact')) {
      topBarClip.style.setProperty('--clip-h', `${topBarClip.offsetHeight}px`);
    }
  }

  const apply = () => {
    const y = window.scrollY;
    const compact = y > SCROLL_COMPACT;
    const wasCompact = siteHeader.classList.contains('site-header--compact');

    if (topBarClip && compact && !wasCompact) {
      topBarClip.style.setProperty('--clip-h', `${topBarClip.offsetHeight}px`);
    }

    siteHeader.classList.toggle('site-header--compact', compact);
    if (topBar) topBar.setAttribute('aria-hidden', compact ? 'true' : 'false');
    nav.classList.toggle('scrolled', y > SCROLL_NAV_SHADOW);

    syncSpacerHeight();
    syncClipHeightVar();
  };

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        apply();
        ticking = false;
      });
    },
    { passive: true }
  );

  window.addEventListener('resize', () => {
    syncClipHeightVar();
    syncSpacerHeight();
  });

  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => {
      syncClipHeightVar();
      syncSpacerHeight();
    });
    ro.observe(siteHeader);
  }

  apply();
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-col footer-brand">
            <a href="index.html">
              <img src="https://tawaindiancuisine.com/assets/img/tawalog.jpeg" alt="Tawa Indian Cuisine" class="footer-logo">
            </a>
            <p class="footer-tagline">If you are craving authentic, exquisite Indian cuisine, look no further than Tawa Indian Cuisine. Our talented chefs prepare each dish with the finest ingredients, ensuring a symphony of flavors in every bite.</p>
            <div class="footer-socials">
              <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook" class="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
              </a>
              <a href="https://www.twitter.com/" target="_blank" aria-label="Twitter" class="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn" class="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
              </a>
            </div>
          </div>
          <!-- Quick Links -->
          <div class="footer-col">
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="menu.html">Menu</a></li>
              <li><a href="services.html">Our Services</a></li>
              <li><a href="catering.html">Catering</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <!-- Opening Hours -->
          <div class="footer-col">
            <h4 class="footer-heading">Opening Hours</h4>
            <ul class="hours-list">
              <li><span class="day">Monday</span><span class="time">05:00 PM – 10:00 PM</span></li>
              <li><span class="day">Tuesday</span><span class="time">11 AM–3 PM & 5–10 PM</span></li>
              <li><span class="day">Wednesday</span><span class="time">11 AM–3 PM & 5–10 PM</span></li>
              <li><span class="day">Thursday</span><span class="time">11 AM–3 PM & 5–10 PM</span></li>
              <li><span class="day">Friday</span><span class="time">11 AM–3 PM & 5–12 AM</span></li>
              <li><span class="day">Saturday</span><span class="time">11 AM–3 PM & 5–12 AM</span></li>
              <li><span class="day">Sunday</span><span class="time">11 AM–3 PM & 5–10 PM</span></li>
            </ul>
          </div>
          <!-- Contact & Order -->
          <div class="footer-col">
            <h4 class="footer-heading">Get In Touch</h4>
            <div class="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
              <span>38245, 38249 W 10 Mile Rd,<br>Farmington Hills, MI 48335</span>
            </div>
            <div class="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
              <a href="tel:248-536-2650">248-536-2650</a>
            </div>
            <div class="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
              <a href="mailto:tabladetroit@gmail.com">tabladetroit@gmail.com</a>
            </div>
            <h4 class="footer-heading" style="margin-top:1.5rem;">Order Online</h4>
            <div class="order-logos">
              <a href="${DOORDASH_URL}" target="_blank" rel="noopener"><img src="https://tawaindiancuisine.com/assets/dd.png" alt="DoorDash"></a>
              <a href="${UBEREATS_URL}" target="_blank" rel="noopener"><img src="https://tawaindiancuisine.com/assets/uber.png" alt="UberEats"></a>
              <a href="${TOAST_URL}" target="_blank" rel="noopener"><img src="https://tawaindiancuisine.com/assets/toast.png" alt="Toast"></a>
              <a href="${GRUBHUB_URL}" target="_blank" rel="noopener"><img src="https://tawaindiancuisine.com/assets/grubhubimg.png" alt="Grubhub"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <p>&copy; 2024 <a href="index.html">Tawa Indian Cuisine</a>. All Rights Reserved.</p>
          <div class="footer-legal">
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}