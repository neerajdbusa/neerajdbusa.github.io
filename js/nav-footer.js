/**
 * Shared Navigation and Footer Template Module
 * Reduces code duplication across all pages
 */

const NAV_FOOTER_TEMPLATE = {
  topBar: `
    <div class="top-bar">
      <div class="top-bar-inner">
        <span>📍 Available for Enterprise SAP Commerce Engagements</span>
        <div>
          <a href="mailto:neerajdbusa@gmail.com">neerajdbusa@gmail.com</a>
          <a href="tel:+14846862704">+1-484-686-2704</a>
        </div>
      </div>
    </div>
  `,

  nav: `
    <nav>
      <div class="nav-inner">
        <div class="logo">
          <span class="logo-name">Neeraj Dube</span>
          <span class="logo-tagline">SAP Commerce Architect</span>
        </div>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links" id="navLinks">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="experience.html">Experience</a></li>
          <li><a href="skills.html">Skills</a></li>
          <li><a href="ai-commerce.html">AI Commerce</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </nav>
    <div class="menu-overlay" id="menuOverlay"></div>
  `,

  footer: `
    <footer>
      <div class="container">
        <p>© 2025 Neeraj Dube · SAP Commerce Cloud Architect · Hybris Certified Professional</p>
        <p>📧 <a href="mailto:neerajdbusa@gmail.com">neerajdbusa@gmail.com</a> · 📱 +1-484-686-2704</p>
      </div>
    </footer>
  `,

  mobileMenuScript: `
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        const menuOverlay = document.getElementById('menuOverlay');

        function toggleMenu() {
          menuToggle.classList.toggle('active');
          navLinks.classList.toggle('active');
          menuOverlay.classList.toggle('active');
          document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        }

        if (menuToggle && navLinks && menuOverlay) {
          menuToggle.addEventListener('click', toggleMenu);
          menuOverlay.addEventListener('click', toggleMenu);
          navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', toggleMenu);
          });
        }

        // Set active nav link based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.querySelectorAll('a').forEach(link => {
          const href = link.getAttribute('href');
          if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      });
    </script>
  `
};

// Auto-inject templates if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    initializeNavFooter();
  });
} else {
  initializeNavFooter();
}

function initializeNavFooter() {
  // Optionally auto-inject if placeholders exist
  const topBarPlaceholder = document.querySelector('[data-template="top-bar"]');
  const navPlaceholder = document.querySelector('[data-template="nav"]');
  const footerPlaceholder = document.querySelector('[data-template="footer"]');

  if (topBarPlaceholder) {
    topBarPlaceholder.innerHTML = NAV_FOOTER_TEMPLATE.topBar;
  }
  if (navPlaceholder) {
    navPlaceholder.innerHTML = NAV_FOOTER_TEMPLATE.nav;
  }
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = NAV_FOOTER_TEMPLATE.footer;
  }
}
