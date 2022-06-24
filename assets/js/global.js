//animação maquina de escrever
function typeWriter(elemento) {
   const textoArray = elemento.innerHTML.split('');
   elemento.innerHTML = '';
   textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 80 * i);
   });
}
const titulo = document.querySelector('.title h2');
typeWriter(titulo);

//menu modal
const openMenu = document.querySelector('.header i').addEventListener('click', function () {
   document.querySelector('.menu-burguer').style.display = 'flex';
})

const closeMenu = document.querySelector('.menu-burguer i').addEventListener('click', function () {
   document.querySelector('.menu-burguer').style.display = 'none';
})


