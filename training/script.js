/* =========================================================
   ParentGenius — shared behavior
   Include on all three pages, after the DOM (or with `defer`)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Animated circular progress ring ----
     Add data-progress="65" to any .progress-ring element */
  document.querySelectorAll('.progress-ring').forEach((ring) => {
    const pct = parseInt(ring.dataset.progress, 10) || 0;
    const circle = ring.querySelector('.ring-fill');
    const label = ring.querySelector('.ring-label');
    if (!circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    if (label) label.textContent = '0%';

    // animate in after paint
    requestAnimationFrame(() => {
      setTimeout(() => {
        const offset = circumference - (pct / 100) * circumference;
        circle.style.strokeDashoffset = `${offset}`;
      }, 150);
    });

    // count-up label
    if (label) {
      let current = 0;
      const step = Math.max(1, Math.round(pct / 40));
      const timer = setInterval(() => {
        current = Math.min(pct, current + step);
        label.textContent = `${current}%`;
        if (current >= pct) clearInterval(timer);
      }, 25);
    }
  });

  /* ---- Hero "what do you want to fix today" search ---- */
  const heroForm = document.querySelector('.hero-search');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = heroForm.querySelector('input');
      const query = input.value.trim();
      if (!query) return;
      // Hook point: wire this up to your real search / routing logic.
      console.log('ParentGenius search submitted:', query);
      input.value = '';
      input.placeholder = 'Got it — pulling up resources…';
      setTimeout(() => { input.placeholder = 'What do you want to fix today?'; }, 2200);
    });
  }

  /* ---- Newsletter subscribe form ---- */
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const msg = document.querySelector('.form-msg');
      const email = input.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!valid) {
        if (msg) { msg.textContent = 'Please enter a valid email address.'; msg.style.color = '#ffb4b4'; }
        return;
      }
      // Hook point: send `email` to your backend / ESP here.
      console.log('Newsletter signup:', email);
      if (msg) { msg.textContent = "You're in! Check your inbox to confirm."; msg.style.color = '#a9e6c4'; }
      input.value = '';
    });
  }

  /* ---- "Add to cart" buttons on resource cards ---- */
  document.querySelectorAll('.add-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const original = btn.textContent;
      btn.textContent = 'Added ✓';
      btn.style.background = 'var(--green-500)';
      btn.style.color = '#fff';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.color = '';
      }, 1400);
    });
  });

  /* ---- Video play button (Tutorials Guidance page) ---- */
  const playBtn = document.querySelector('.play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      // Hook point: replace with real video embed / modal player.
      console.log('Play tutorial video');
      playBtn.style.transform = 'scale(0.92)';
      setTimeout(() => { playBtn.style.transform = ''; }, 150);
    });
  }

});
