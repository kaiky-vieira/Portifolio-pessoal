function atualizarNavAtivo() {
  const secoes = document.querySelectorAll('section[id]');
  const links  = document.querySelectorAll('nav a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('ativo'));
          const link = document.querySelector(`nav a[href="#${entry.target.id}"]`);
          if (link) link.classList.add('ativo');
        }
      });
    },
    { rootMargin: '-40% 0px -40% 0px' }
  );

  secoes.forEach((s) => observer.observe(s));
}

function fecharNavMobile() {
  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', () => {
    });
  });
}

(function injetarEstiloAtivo() {
  const style = document.createElement('style');
  style.textContent = 'nav a.ativo { color: var(--verde); }';
  document.head.appendChild(style);
})();

document.addEventListener('DOMContentLoaded', () => {
  atualizarNavAtivo();
  fecharNavMobile();
});
