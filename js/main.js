import datasetMain from "./model/dadosImgMain.js";
import datasetOthers from "./model/dadosCatalogos.js";

const dadosMain = datasetMain;
const dadosOthers = datasetOthers;
const catalogoVazio = document.querySelector(".catalogo")
let listaCarrinho = []
let soma = 0

const CatalogoMain = () => {
  for (let i = 0; i < dadosMain.length; i++) {
    const show = `
    <div class="bolo${dadosMain[i].id}">
      <img src="${dadosMain[i].image}" alt="${dadosMain[i].title}" type="button" data-bs-toggle="offcanvas" 
      data-bs-target="#offcanvasBottom${dadosMain[i].id}" aria-controls="offcanvasBottom"/></a>
      <h3>${dadosMain[i].title}</h3>
      <p>${dadosMain[i].description}</p>
      <button id="irCarrinho" class="btn btn-secondary">Adicionar ao carrinho</button>
    </div>
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom${dadosMain[i].id}" aria-labelledby="offcanvasBottomLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">${dadosMain[i].title}</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body small">
        <img class="w-25 h-100" src="${dadosMain[i].image1}" alt="${dadosMain[i].title}">
        <img class="w-25 h-100" src="${dadosMain[i].image2}" alt="${dadosMain[i].title}">
      </div>
    </div>`

    catalogoVazio.insertAdjacentHTML('beforeend', show)
  };
};

CatalogoMain()

const buttons = document.querySelectorAll('#irCarrinho')
const carrinho = document.querySelector('#dentroCarrinho')
const totalDiv = document.querySelector('#total')

const ColocarNoCarrinho = () => {

  for (let i = 0; i < dadosMain.length; i++) {
    buttons[i].addEventListener('click', function () {

      console.log(`Você clicou no ${dadosMain[i].title}`)

      const bolo = `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img class="w-100" src="${dadosMain[i].image}" alt="${dadosMain[i].title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${dadosMain[i].title}</h5>
              <p class="card-text">${dadosMain[i].description}</p>
              <button id="fechar" class="btn btn-danger">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>`
  
      carrinho.insertAdjacentHTML('afterbegin', bolo)
  
      listaCarrinho.push(dadosMain[i].price)

      soma = listaCarrinho.reduce((addition, value) => addition + value)

      const total = `
      <button id="total" class="btn btn-danger mb-2 text-center">
        Total R$ ${soma}
      </button>`

      totalDiv.innerHTML =  total

    });
  }

}

ColocarNoCarrinho()
