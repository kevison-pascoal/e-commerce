const containerProducts = document.getElementById('products');
initStore = () => {
  dataBase.map((val) => {
    containerProducts.innerHTML += `
      <div class="product-single">
        <img src="${val.image}"/>
        <div>
          <h3>${val.title}</h3>
          <p>
            por <strong>${(val.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}</strong></br>
            ou em ${val.discount}x de ${(val.price / val.discount).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}
          </p>
        </div>
        <button type="submit" key="${val.id}" type="${val.type}" class="link_product">
          Add To Cart  
        </button>
      </div>
    `;
  })
}
initStore();

let count = 0;
const cart = document.getElementById('cart');
const cartList = document.getElementById('cartList');
const cartListId = document.getElementById('cartList');
updateCart = () => {
  console.clear();
  cartList.innerHTML = '';
  if(count == 0 ){count = 1;};
  cart.innerHTML = `
    <img src="./image/mockups.png" alt="icon"/>
    <p>${count++}</p>
  `;
  dataBase.map((val) => {
    if (val.amount > 0) {
      console.log(val.title+" && "+val.amount+" * "+val.price+" == "+(val.price*val.amount).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}));
      
      cartList.innerHTML += `
        <div>
          <img src="${val.image}" alt="image" class="context"><img>
          <p>
            ${val.title} ${val.amount}
          </p>
        </div>        
      `;
    }
  })
  return false;
};

function toggle(event) {
  console.log(event);
  if (cartList.classList.contains('cartList')) {
    cartList.classList.remove('cartList');
    console.log('true');
    cartList.style.display = "none";
  } else {
    cartList.classList.add('cartList');
    console.log('false');
    cartList.style.display = "block";
  }
}
cart.addEventListener("click", toggle, false); 

let links = document.getElementsByClassName('link_product');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(){
    let key = this.getAttribute('key');
    dataBase[key].amount++;
    updateCart();
    return false;
  })
}