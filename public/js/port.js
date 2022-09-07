const abrirModal = () => {

   document.querySelector('.porModal').style.opacity = 0;
   document.querySelector('.porModal').style.display = 'flex';
   setTimeout(() => {
      document.querySelector('.porModal').style.opacity = 1;
   }, 150);
}

const fecharModal = () => {
   document.querySelector('.porModal').style.opacity = 0;
   setTimeout(() => {
      document.querySelector('.porModal').style.display = 'none'
   }, 500);
}

const botoesFechar = () => {
   //btn fechar modal
   document.querySelector('.closeModal').addEventListener('click', () => {
      document.querySelector('.porModal').style.display = 'none';
   })

   //  seleciona('.pizzaInfo--cancelMobileButton').addEventListener('click', () => {
   //      seleciona('.pizzaWindowArea').style.display = 'none';
   //  })
}


//preencher os dados dos card do portfolio start
const preencherDados = (cardItem, item) => {
   cardItem.querySelector('div').setAttribute('data-category', item.category);
   cardItem.querySelector('.box img').src = item.img;
   cardItem.querySelector('.box .tituloItem').innerHTML = item.name;
   cardItem.querySelector('.box a').href = item.link;
}

//preencher os dados dos card do portfolio end
const preencherDadosModal = (item) => {
   document.querySelector('.porModal .titleModal').innerHTML = item.name;
   document.querySelector('.bannerItem img').src = item.img;
   document.querySelector('.porModal .descriptionModal').innerHTML = item.description;

   document.querySelector('.modalList .html img').src = item.tools.html;
   document.querySelector('.modalList .css img').src = item.tools.css;
   document.querySelector('.modalList .js img').src = item.tools.js;
   document.querySelector('.modalList .php img').src = item.tools.php;
   document.querySelector('.modalList .react img').src = item.tools.react;
   document.querySelector('.modalList .node img').src = item.tools.node;
   document.querySelector('.modalList .sass img').src = item.tools.sass;
   document.querySelector('.modalList .tailwind img').src = item.tools.tailwind;
   document.querySelector('.modalList .mongodb img').src = item.tools.mongodb;
   document.querySelector('.modalList .mysql img').src = item.tools.mysql;
}

const preencherDadosModal2 = (item) => {
   document.querySelector('.porModal .titleModal').innerHTML = item.name;
   document.querySelector('.bannerItem img').src = item.img;
   document.querySelector('.porModal .descriptionModal').innerHTML = item.description;
}


//clone do data do Portfolio start
portDataWeb.map(item => {
   let cardItem = document.querySelector('.porbox_models .category').cloneNode(true);

   document.querySelector('.portBox').append(cardItem)
   // console.log(boxItem)
   preencherDados(cardItem, item)

   cardItem.querySelector('.openModal').addEventListener('click', (e) => {
      e.preventDefault();

      //abrir modal
      abrirModal();

      //preencher os dados da modal
      preencherDadosModal(item);
      console.log(item)
   })

   //fechar a modal no cancel e no voltar
   botoesFechar()
});
//clone do data do Portfolio end

//clone do data Figma start
portDataFigma.map(item => {
   let cardItem = document.querySelector('.porbox_models .category').cloneNode(true);

   document.querySelector('.portBox').append(cardItem)
   // console.log(boxItem)
   preencherDados(cardItem, item);

   cardItem.querySelector('.openModal').addEventListener('click', (e) => {
      e.preventDefault();

      //abrir modal
      abrirModal();

      //preencher os dados da modal
      preencherDadosModal2(item)
      console.log(item)
   })

   //fechar a modal no cancel e no voltar
   botoesFechar()
});
//clone do data Figma end

//clone do data Mobile App start
portDataMobileApp.map(item => {
   let cardItem = document.querySelector('.porbox_models .category').cloneNode(true);

   document.querySelector('.portBox').append(cardItem)
   // console.log(boxItem)
   preencherDados(cardItem, item);

   cardItem.querySelector('.openModal').addEventListener('click', (e) => {
      e.preventDefault();

      //abrir modal
      abrirModal();

      //preencher os dados da modal
      preencherDadosModal2(item)
      console.log(item)
   })

   //fechar a modal no cancel e no voltar
   botoesFechar()
});
//clone do data Mobile App end

//clone do data Ecommerce start
portDataEcommerce.map(item => {
   let cardItem = document.querySelector('.porbox_models .category').cloneNode(true);

   document.querySelector('.portBox').append(cardItem)
   // console.log(boxItem)
   preencherDados(cardItem, item);

   cardItem.querySelector('.openModal').addEventListener('click', (e) => {
      e.preventDefault();

      //abrir modal
      abrirModal();

      //preencher os dados da modal
      preencherDadosModal(item);
      console.log(item)
   })

   //fechar a modal no cancel e no voltar
   botoesFechar()
});
//clone do data Ecommerce end