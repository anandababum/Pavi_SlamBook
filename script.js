// =============================================
// BLOOM — JavaScript
// =============================================

// ---- HAMBURGER MENU ----
function toggleNav() {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}
// Close menu when a nav link is clicked
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('main-nav').classList.remove('open');
      document.getElementById('hamburger').classList.remove('open');
    });
  });
});

// ---- TABS ----
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    // Update button states
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Update content visibility
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById('tab-' + target).classList.add('active');
  });
});

// ---- NEWSLETTER ----
function subscribeNewsletter(e) {
  e.preventDefault();
  const input  = e.target.querySelector('input');
  const button = e.target.querySelector('button');
  const email  = input.value;

  button.textContent = '🎉 You\'re in!';
  button.style.background = 'linear-gradient(135deg,#4ade80,#22c55e)';
  input.value = '';
  input.placeholder = 'Welcome to the Bloom Club!';
  input.disabled = true;

  setTimeout(() => {
    button.textContent = 'Subscribe ✨';
    button.style.background = '';
    input.disabled = false;
    input.placeholder = 'your@email.com';
  }, 4000);
}

// ---- HEADER SCROLL EFFECT ----
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = '0 4px 24px rgba(164,60,140,.12)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ---- CARD HOVER RIPPLE ----
document.querySelectorAll('.card, .journal-card, .link-tile').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'transform .25s, box-shadow .25s';
  });
});

// ---- SCROLL REVEAL (lightweight) ----
const revealEls = document.querySelectorAll('.card, .journal-card, .link-tile, .feature-text');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

// ---- ACTIVE NAV LINK ----
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.main-nav a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = '#f472b6';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
