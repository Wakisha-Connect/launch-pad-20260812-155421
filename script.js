const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
toggle?.addEventListener('click', () => header?.classList.toggle('is-open'));
document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) =>
    link.addEventListener('click', () => header?.classList.remove('is-open')),
  );
document.querySelectorAll('.current-year').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
