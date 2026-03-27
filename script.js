// =========================================
// PORTFOLIO — script.js
// Só o essencial: menu mobile + nav ativo
// =========================================

// Marca o link do nav como ativo ao rolar
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

// Fecha links do nav no mobile ao clicar
function fecharNavMobile() {
  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', () => {
      // só fecha se for mobile (menu colapsado via CSS)
    });
  });
}

// Adiciona classe "ativo" no CSS
(function injetarEstiloAtivo() {
  const style = document.createElement('style');
  style.textContent = 'nav a.ativo { color: var(--verde); }';
  document.head.appendChild(style);
})();

// Inicia tudo quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  atualizarNavAtivo();
  fecharNavMobile();
});
