const product = document.getElementById('product_selected');
const masks = new Masks();
const dataProduct = fetchProduct();

let qtd_itens_aux = 1;

function fetchProduct() {
  const idProduct = localStorage.getItem("id");
  const [ dataProduct ] = dataBase.filter(item => item.id === Number(idProduct));

  return dataProduct;
}

function resetInTimer({ miliseconds, callback }) {
  let timeout;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    if (!!callback) {
      callback();
    }
  }, miliseconds);
}

function initProduct() {

  let money = masks.set(dataProduct.price).money();
  let money_parce = masks.set(dataProduct.price / 4).money();
  
  product.innerHTML = `
    <div class="wrapper-selected">
      <img src="${dataProduct.image}">
    </div>
    <div class="about-product">
      <div class="info">
        <h2>${dataProduct.title}</h2>
        <h4>Categoria: ${dataProduct.type}</h4>
        <span class="avaliar">Seja o primeiro a avaliar!</span>
        
        <div class="size-item">
          <h3>TAMANHO</h3>
          <nav class="sizes">
            <ul>
              <li>P</li>
              <li>M</li>
              <li>G</li>
              <li>GG</li>
              <li>XG</li>
            </ul>
          </nav>
        </div>

        <div class="area_button">
          <button type="reset" onclick="cressQtd()">+</button>
          <div id="qtd_itens">1</div>
          <button type="reset" onclick="decressQtd()">-</button>
        </div>

        <div class="buy-area">
          <div>
            <span id="value_item" class="money">por ${money}</span>
            <p id="parce_item">ou em 4x de ${money_parce}</p>
            <div class="parce_list" id="parce_view" onmouseout="parce_exit()" onclick="parce_view()">Ver parcelas possíveis</div>
          </div>

          <div>
            <button class="button-purchase-product">
              <span>Comprar</span>
              <img 
                class="cart-icon" 
                src="./assets/svgs/cart-icon.svg"
              />
            </button>
          </div>
        </div>

      </div>
    </div>
  `;

  const buttonPurchaseProduct = document.querySelector(".button-purchase-product");
  const [ title ] = buttonPurchaseProduct.children;
  title.innerText = title.innerText.toUpperCase();

  buttonPurchaseProduct.addEventListener("click", () => {
    buttonPurchaseProduct.classList.add("animation-click");
    
    const newDataProduct = {
      ...dataProduct,
      isPurchase: true,
    };

    const index = dataBase.findIndex(item => item.id === Number(newDataProduct.id));

    dataBase[index] = newDataProduct;

    console.log(dataBase[index]);

    resetInTimer({
      miliseconds: 260,
      callback() {
        buttonPurchaseProduct.classList.remove("animation-click");
      }
    })
  })
}

initProduct();


const qtd_itens = document.getElementById('qtd_itens');
const parce = document.getElementById('parce_item');
const value = document.getElementById('value_item');

function cressQtd() {
  qtd_itens_aux++;
  let money = masks.set(dataProduct.price * qtd_itens_aux).money();
  let money_parce = masks.set(dataProduct.price * qtd_itens_aux / 4).money();

  qtd_itens.innerHTML = qtd_itens_aux;
  value.innerHTML = `por ${money}`;
  parce.innerHTML = `ou em 4x de ${money_parce}`;
}
function decressQtd() {
  if(qtd_itens_aux > 1) {
    qtd_itens_aux--;
    let money = masks.set(dataProduct.price * qtd_itens_aux).money();
    let money_parce = masks.set(dataProduct.price * qtd_itens_aux / 4).money();

    qtd_itens.innerHTML = qtd_itens_aux;
    value.innerHTML = `por ${money}`;
    parce.innerHTML = `ou em 4x de ${money_parce}`;
  }
}

const parce_action = document.getElementById('parce_view');
function parce_view() {
  parce_action.innerHTML = `Ver parcelas possíveis: <br>`; 
  for(let i = 1; i < 5; i++) {
    let money = masks.set(dataProduct.price).money();
    let money_parce = masks.set(dataProduct.price / i).money();
    parce_action.innerHTML += `<li>${i}x de ${money_parce} Sem Juros Total: ${money}</li>`;
  }
}
function parce_exit() {
  parce_action.innerHTML = `Ver parcelas possíveis`;
}