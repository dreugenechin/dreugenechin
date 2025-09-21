// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');
if (toggle) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
}

// Basic contact form handler (mailto fallback)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const phone = data.get('phone');
    const email = data.get('email');
    const subject = data.get('subject');
    const message = data.get('message');

    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`
    );
    // TODO: replace with Formspree or serverless function endpoint if desired
    window.location.href = `mailto:you@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
}

// Smooth scroll for 'back to top' anchors (already enabled via CSS, but ensure focus)
document.querySelectorAll('a[href="#top"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
  });
});
