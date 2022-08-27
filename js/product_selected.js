const product = document.getElementById('product_selected');
const masks = new Masks();
const dataProduct = fetchProduct();

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

  const money = masks.set(dataProduct.price).money();

  product.innerHTML = `
    <div class="wrapper-selected">
      <img src="${dataProduct.image}">
    </div>
    <div class="about-product">
      <div class="info">
        <h2>${dataProduct.title}</h2>
        <span class="money">${money}</span>
      </div>
      <button class="button-purchase-product">
        <span>Comprar</span>
        <img 
          class="cart-icon" 
          src="./assets/svgs/cart-icon.svg"
        />
      </button>
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