const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');
let siScale = 1;

btnSi.addEventListener('click', () => {
  document.body.innerHTML = `
    <div style="text-align:center; font-family:Arial; margin-top:10vh;">
      <img src="lm.jpeg" style="width:300px; border-radius:20px;">
      <h1 style="color:#ff4d8d;">😉</h1>
    </div>
  `;
});

btnNo.addEventListener('click', () => {
  siScale += 0.3;
  btnSi.style.transform = `scale(${siScale})`;
  const margen = 80;
  const randX = Math.random() * (window.innerWidth - margen * 2) + margen;
  const randY = Math.random() * (window.innerHeight - margen * 2) + margen;
  btnNo.style.position = 'fixed';
  btnNo.style.left = randX + 'px';
  btnNo.style.top = randY + 'px';
});
