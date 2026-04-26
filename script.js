document.addEventListener('DOMContentLoaded', function () {

  // Init Lucide icons
  lucide.createIcons();

  // Set current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- MOBILE MENU ----
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var menuIcon = hamburgerBtn ? hamburgerBtn.querySelector('svg') : null;
  var menuOpen = false;

  function closeMobileMenu() {
    menuOpen = false;
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (hamburgerBtn) {
      hamburgerBtn.innerHTML = '<i data-lucide="menu"></i>';
      lucide.createIcons();
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function () {
      menuOpen = !menuOpen;
      if (mobileMenu) mobileMenu.classList.toggle('open', menuOpen);
      hamburgerBtn.innerHTML = menuOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';
      lucide.createIcons();
    });
  }

  // Close mobile menu when a link is clicked
  var mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');
  for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', closeMobileMenu);
  }

  // ---- STICKY NAV shadow ----
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 20px -4px rgba(59,91,219,0.12)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    }
  });

  // ---- TOAST ----
  var toastEl = document.getElementById('toast');
  var toastTimer = null;

  function showToast(message, type) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.className = 'toast ' + (type || 'success') + ' show';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
    }, 3500);
  }

  // ---- CONTACT FORM ----
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var phone = document.getElementById('phone').value.trim();
      if (!name || !phone) {
        showToast('Please add your name and phone number.', 'error');
        return;
      }
      showToast("Thanks! We\u2019ll get back to you within 24 hours.", 'success');
      contactForm.reset();
    });
  }

});
