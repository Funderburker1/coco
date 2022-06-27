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


//menu modal start
const openMenu = document.querySelector('.header i').addEventListener('click', function () {
   document.querySelector('.menu-burguer').style.display = 'flex';
   document.querySelector('.menu-burguer').style.overflowX = 'hidden';
})

const closeMenu = document.querySelector('.menu-burguer i').addEventListener('click', function () {
   document.querySelector('.menu-burguer').style.display = 'none';
})
//menu modal send


//paginação
function openPag(e, pag) {
   let i, tabcontent, tablinks;

   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
   }

   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
   }

   document.getElementById(pag).style.display = "grid";
   e.currentTarget.className += "active";
   document.querySelector('.menu-burguer').style.display = 'none';
}

//Obtenha o elemento com id="defaultOpen" e clique nele
document.getElementById("defaultOpen").click();


/*---------------------about section tabs start-----------------------*/
const aboutSection = document.querySelector(".about")
const tabsContainer = document.querySelector(".skills-container")

tabsContainer.addEventListener("click", (event) => {
   if (event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")) {
      const target = event.target.getAttribute("data-target");
      //desativar 'tab-item' q esta ativo
      tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
      //ativar novo 'tab-item'
      event.target.classList.add("active", "outer-shadow");
      //desativar 'tab-content' q esta ativo
      aboutSection.querySelector(".tab-content.active").classList.remove("active");
      //ativar novo 'tab-item'
      aboutSection.querySelector(target).classList.add("active");
   }
})
/*---------------------about section tabs end-----------------------*/


//deixar com display none todas as classes com o nome section
const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
   if (!section.classList.contains("active")) {
      section.classList.add("hide");
   }
})
