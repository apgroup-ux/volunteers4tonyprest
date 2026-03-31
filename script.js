document.addEventListener('DOMContentLoaded', () => {

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Mobile menu ----
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const closeMenu = document.getElementById('close-menu');

  function openMenu() {
    if (!mobileOverlay) return;
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenuFn() {
    if (!mobileOverlay) return;
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (mobileOverlay && mobileOverlay.classList.contains('open')) {
        closeMenuFn();
      } else {
        openMenu();
      }
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', closeMenuFn);
  }

  if (mobileOverlay) {
    mobileOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenuFn);
    });
  }

  // ---- Volunteer Sign-Up Form ----
  const signupForm = document.getElementById('signup-form');
  const signupSuccess = document.getElementById('signup-success');

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation
      const required = signupForm.querySelectorAll('[required]');
      let valid = true;
      required.forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#D62828';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      if (!valid) return;

      // Show loading state
      const btn = signupForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Submitting...';
      btn.disabled = true;

      // Simulate async submission
      setTimeout(() => {
        signupForm.style.display = 'none';
        if (signupSuccess) signupSuccess.classList.add('show');
        window.scrollTo({ top: signupSuccess.offsetTop - 100, behavior: 'smooth' });
      }, 1200);
    });
  }

  // ---- Contact Form ----
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        contactForm.style.display = 'none';
        if (contactSuccess) contactSuccess.classList.add('show');
      }, 1000);
    });
  }

  // ---- Scroll reveal ----
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  // ---- Counter animation ----
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          let current = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current.toLocaleString() + suffix;
            if (current >= target) clearInterval(timer);
          }, 25);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => countObserver.observe(c));
  }

});
