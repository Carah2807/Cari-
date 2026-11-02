document.addEventListener('DOMContentLoaded', () => {
  // ===== DATA =====
  const scrapbookItems = [
    { emoji: '🎀', title: 'Your pink world', text: 'I don’t know why, but knowing your favourite little things makes me want to learn even more about you.' },
    { emoji: '🍵', title: 'Your matcha obsession', text: 'The way you talk about matcha somehow makes even ordinary days feel a little cozier.' },
    { emoji: '🐱', title: 'Shon Shon', text: 'Your cute cat already has a soft spot in my heart just because he belongs to your world.' },
    { emoji: '🍬', title: 'Your love for candies', text: 'Something about that sweet tooth of yours feels so endearing.' },
    { emoji: '🍲', title: 'Sinigang & Adobo', text: 'I love that you have favourite comfort foods. It makes you feel real and close.' },
    { emoji: '📺', title: 'True Beauty & K-dramas', text: 'Knowing the stories that move you makes me want to understand your heart more.' },
    { emoji: '✏️', title: 'Your doodles', text: 'Little drawings that somehow carry your personality in every line.' },
    { emoji: '🌸', title: 'Your digital flowers', text: 'You create beauty even in small, digital ways. It’s quietly lovely.' },
    { emoji: '🎮', title: 'Mobile Legends & Roblox', text: 'I love that you have your own little adventures and playful corners of the internet.' },
    { emoji: '😂', title: 'Your dramatic side', text: 'Please never lose that chaotic little personality of yours.' },
    { emoji: '💌', title: 'Your endless reels', text: 'Sometimes it’s not about the reel itself. It’s about knowing that something reminded you of me.' },
    { emoji: '🤭', title: 'Your adorable hihi', text: 'A tiny word, but somehow it makes conversations feel warmer.' },
    { emoji: '💕', title: 'The way you say “jaiii”', text: 'It somehow feels soft and teasing at the same time. I like it a lot.' },
    { emoji: '😜', title: 'Your playful teasing', text: 'You make ordinary chats feel alive and full of personality.' },
    { emoji: '🫶🏻', title: 'Your love for Andrea', text: 'The way you care for the people close to you says so much about your heart.' }
  ];

  const timelineItems = [
    { title: 'When we first exchanged IDs on Litmatch', text: 'A simple swap that somehow started something I still think about.' },
    { title: 'When we started talking again', text: 'I’m grateful we found our way back to conversations.' },
    { title: 'Sharing reels', text: 'Little digital gifts that felt like quiet “I thought of you” moments.' },
    { title: 'Getting to know each other', text: 'Every new detail about you felt like opening another page of a book I want to keep reading.' },
    { title: 'Our video call', text: 'Seeing your shy smile and hearing your voice made everything feel more real.' },
    { title: 'Your shyness', text: 'It was soft and genuine. It made me feel protective and happy at the same time.' },
    { title: 'Andrea joking with you', text: 'That moment made me smile. It showed a side of you that felt light and free.' },
    { title: 'Your affectionate goodnight messages', text: 'They made the end of the day feel warmer than it should.' },
    { title: 'Your questions about my fears', text: 'You didn’t brush them aside. You cared enough to ask. That meant a lot.' },
    { title: 'The little moments you included me in your day', text: 'Those small inclusions made me feel seen and wanted in the quietest, sweetest way.' }
  ];

  const promises = [
    'I promise to communicate instead of making assumptions.',
    'I promise to listen when something is bothering you.',
    'I promise not to make you feel guilty for having boundaries.',
    'I promise to respect your pace and never rush you.',
    'I promise to be honest about my feelings and intentions.',
    'I promise to appreciate your little efforts.',
    'I promise to never intentionally use your insecurities against you.',
    'I promise to work on my overthinking instead of making it your responsibility.',
    'I promise to celebrate your achievements and encourage your dreams.',
    'I promise that my actions should match my words.'
  ];

  const starMessages = [
    'You’re someone whose little messages can turn an ordinary day into something special.',
    'I hope you never feel that you have to hide your feelings around me.',
    'I want to know a thousand little things about you, even the ones you think nobody would care about.',
    'Your happiness matters to me, and I hope I can add a little more of it to your days.',
    'Even though we’re miles apart, I love discovering little pieces of your world.',
    'I hope we get to create many beautiful memories together, one little moment at a time.'
  ];

  // ===== ELEMENTS =====
  const opening = document.getElementById('opening-screen');
  const main = document.getElementById('main-experience');
  const startBtn = document.getElementById('start-btn');
  const progressBar = document.getElementById('progress-bar');
  const musicToggle = document.getElementById('music-toggle');
  const musicIcon = document.getElementById('music-icon');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  let currentSlide = 1;
  let musicOn = false;
  let audio = null;

  // ===== OPENING =====
  startBtn.addEventListener('click', () => {
    opening.classList.add('fade-out');
    setTimeout(() => {
      opening.style.display = 'none';
      main.classList.remove('hidden');
      showSlide(1);
      createPetals();
    }, 1100);
  });

  // ===== NAVIGATION =====
  function showSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    const target = document.querySelector(`.slide[data-slide="${n}"]`);
    if (target) {
      target.classList.add('active');
      currentSlide = n;
      updateProgress();
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Trigger specific animations
      if (n === 3) animateScrapbook();
      if (n === 4) animateTimeline();
      if (n === 6) animatePromises();
      if (n === 7) createStars();
      if (n === 9) runFinale();
    }
  }

  function updateProgress() {
    const pct = ((currentSlide - 1) / (totalSlides - 1)) * 100;
    progressBar.style.width = pct + '%';
  }

  // Event delegation for nav buttons
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-next]')) {
      const next = parseInt(e.target.getAttribute('data-next'));
      showSlide(next);
    }
    if (e.target.matches('[data-prev]')) {
      const prev = parseInt(e.target.getAttribute('data-prev'));
      showSlide(prev);
    }
  });

  // ===== SCRAPBOOK =====
  function animateScrapbook() {
    const grid = document.getElementById('scrapbook');
    if (grid.children.length > 0) return;
    scrapbookItems.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'scrap-card';
      card.innerHTML = `
        <div class="scrap-emoji">${item.emoji}</div>
        <div class="scrap-title">${item.title}</div>
        <div class="scrap-text">${item.text}</div>
      `;
      grid.appendChild(card);
      setTimeout(() => card.classList.add('visible'), 80 * i);
    });
  }

  // ===== TIMELINE =====
  function animateTimeline() {
    const container = document.getElementById('timeline');
    if (container.children.length > 0) return;
    timelineItems.forEach((item, i) => {
      const pol = document.createElement('div');
      pol.className = 'polaroid';
      pol.innerHTML = `
        <div class="polaroid-title">${item.title}</div>
        <div class="polaroid-text">${item.text}</div>
      `;
      container.appendChild(pol);
      setTimeout(() => pol.classList.add('visible'), 100 * i);
    });
  }

  // ===== PROMISES =====
  function animatePromises() {
    const grid = document.getElementById('promises');
    if (grid.children.length > 0) return;
    promises.forEach((text, i) => {
      const card = document.createElement('div');
      card.className = 'promise-card';
      card.textContent = `${i + 1}. ${text}`;
      grid.appendChild(card);
      setTimeout(() => card.classList.add('visible'), 90 * i);
    });
  }

  // ===== NIGHT SKY =====
  function createStars() {
    const container = document.getElementById('stars-container');
    if (container.children.length > 0) return;

    const positions = [
      { top: '18%', left: '15%' },
      { top: '28%', left: '72%' },
      { top: '45%', left: '30%' },
      { top: '55%', left: '65%' },
      { top: '70%', left: '20%' },
      { top: '38%', left: '48%' }
    ];

    positions.forEach((pos, i) => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = pos.top;
      star.style.left = pos.left;
      star.style.animationDelay = (i * 0.4) + 's';

      const msg = document.createElement('div');
      msg.className = 'star-message';
      msg.textContent = starMessages[i];
      msg.style.top = `calc(${pos.top} + 18px)`;
      msg.style.left = pos.left;

      star.addEventListener('click', () => {
        document.querySelectorAll('.star-message').forEach(m => m.classList.remove('show'));
        msg.classList.add('show');
        star.classList.add('revealed');
        setTimeout(() => msg.classList.remove('show'), 4500);
      });

      container.appendChild(star);
      container.appendChild(msg);
    });
  }

  // ===== FINALE =====
  function runFinale() {
    const lines = document.querySelectorAll('.finale-line');
    const bigLove = document.getElementById('big-love');

    lines.forEach(line => {
      const delay = parseInt(line.getAttribute('data-delay'));
      setTimeout(() => line.classList.add('show'), delay);
    });

    setTimeout(() => {
      bigLove.classList.remove('hidden');
      bigLove.style.animation = 'fadeInSlide 1s ease';
    }, 7200);
  }

  // Final surprise button
  document.getElementById('final-surprise').addEventListener('click', () => {
    showSlide(10);
  });

  // ===== MUSIC (optional – user can replace src) =====
  musicToggle.addEventListener('click', () => {
    if (!audio) {
      // Placeholder – replace with your own romantic track URL if desired
      // audio = new Audio('your-romantic-song.mp3');
      // audio.loop = true;
      musicIcon.textContent = '🎵';
      musicOn = true;
      // For now just toggle icon as visual feedback
      return;
    }
    if (musicOn) {
      audio.pause();
      musicIcon.textContent = '🔇';
    } else {
      audio.play().catch(() => {});
      musicIcon.textContent = '🎵';
    }
    musicOn = !musicOn;
  });

  // ===== FLOATING PETALS =====
  function createPetals() {
    const container = document.getElementById('global-petals');
    for (let i = 0; i < 18; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.animationDuration = (8 + Math.random() * 12) + 's';
      petal.style.animationDelay = Math.random() * 8 + 's';
      petal.style.width = (8 + Math.random() * 10) + 'px';
      petal.style.height = petal.style.width;
      container.appendChild(petal);
    }
  }
});