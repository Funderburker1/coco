//animação maquina de escrever start
function typeWriter(elemento) {
   const textoArray = elemento.innerHTML.split('');
   elemento.innerHTML = '';
   textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 80 * i);
   });
}
const titulo = document.querySelector('.title h2');
typeWriter(titulo);
//animação maquina de escrever end


//preencher os dados dos card do portfolio start
const preencherDados = (cardItem, item) => {
   cardItem.querySelector('div').setAttribute('data-category', item.category);
   cardItem.querySelector('.box img').src = item.img;
   cardItem.querySelector('.box .tituloItem').innerHTML = item.name;
   cardItem.querySelector('.box a').href = item.link;
}
//preencher os dados dos card do portfolio end

//clone do data do Portfolio start
portDataWeb.map(item => {
   let cardItem = document.querySelector('.porbox_models .category').cloneNode(true);

   document.querySelector('.portBox').append(cardItem)
   // console.log(boxItem)
   preencherDados(cardItem, item)
});
//clone do data do Portfolio end

//clone do data Figma start
portDataFigma.map(item => {
   let cardItem = document.querySelector('.porbox_models .category').cloneNode(true);

   document.querySelector('.portBox').append(cardItem)
   // console.log(boxItem)
   preencherDados(cardItem, item)
});
//clone do data Figma end

//clone do data Mobile App start
portDataMobileApp.map(item => {
   let cardItem = document.querySelector('.porbox_models .category').cloneNode(true);

   document.querySelector('.portBox').append(cardItem)
   // console.log(boxItem)
   preencherDados(cardItem, item)
});
//clone do data Mobile App end

//clone do data Ecommerce start
portDataEcommerce.map(item => {
   let cardItem = document.querySelector('.porbox_models .category').cloneNode(true);

   document.querySelector('.portBox').append(cardItem)
   // console.log(boxItem)
   preencherDados(cardItem, item)
});
//clone do data Ecommerce end


/*----------------menu modal start-------------*/
const openMenu = document.querySelector('.header i').addEventListener('click', function () {
   document.querySelector('.menu-burguer').style.display = 'flex';
   document.querySelector('.menu-burguer').style.overflowX = 'hidden';
})

const closeMenu = document.querySelector('.menu-burguer i').addEventListener('click', function () {
   document.querySelector('.menu-burguer').style.display = 'none';
})
/*----------------menu modal end-------------*/


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


/*------------------------portfolio section start-------------------------*/
const portTabs = document.querySelector('.port-tabs'),
   portfolioItemsBox = document.querySelector('.portBox'),
   portfolioItems = document.querySelectorAll('.box');


portTabs.addEventListener("click", (event) => {
   if (event.target.classList.contains("filter-item") &&
      !event.target.classList.contains("active")) {

      // desativar o que ja esta ativo 'filter-item'
      portTabs.querySelector(".active").classList.remove("outer-shadow", "active");

      // ativar um novo 'filter-item'
      event.target.classList.add("active", "outer-shadow");
      const target = event.target.getAttribute("data-target");
      portfolioItems.forEach((item) => {
         if (target === item.getAttribute("data-category") || target === 'all') {
            item.classList.remove("hide");
            item.classList.add("show");
         }
         else {
            item.classList.remove("show");
            item.classList.add("hide");
         }
      })
   }
})
/*------------------------portfolio section end-------------------------*/


//deixar com display none todas as classes com o nome section
const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
   if (!section.classList.contains("active")) {
      section.classList.add("hide");
   }
})


