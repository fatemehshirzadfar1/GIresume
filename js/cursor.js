document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('custom-cursor');
  const interactables = document.querySelectorAll('button, a, input, [data-filter], .group');

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
  });

  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-on-link'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-on-link'));
  });
});
