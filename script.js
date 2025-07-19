const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const navClass = entry.target.classList.contains('light-section')
          ? 'light-nav'
          : entry.target.classList.contains('dark-section')
            ? 'dark-nav'
            : '';
        header.className = navClass;
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('section').forEach(section => observer.observe(section));

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
