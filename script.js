const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');

let siScale = 1;

btnNo.addEventListener('click', () => {
  // El botón Sí crece
  siScale += 0.3;
  btnSi.style.transform = `scale(${siScale})`;

  // El botón No se mueve a un lugar aleatorio
  const margen = 80;
  const randX = Math.random() * (window.innerWidth - margen * 2) + margen;
  const randY = Math.random() * (window.innerHeight - margen * 2) + margen;

  btnNo.style.position = 'fixed';
  btnNo.style.left = randX + 'px';
  btnNo.style.top = randY + 'px';
});