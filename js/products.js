const containerProducts = document.getElementById('products');
const menu_products = document.getElementById('menu-products');

let count = 0;

sessionStorage.removeItem('id');
if(localStorage.visits < 2) {
  sessionStorage.setItem('amount', JSON.stringify(dataBase));
}

window.localStorage.removeItem('id');

initStore = (content) => {
  containerProducts.innerHTML = '';
  menu_products.innerHTML = `
    <ul>
      <li id="shirt">shirt</li>
      <li id="pants">pants</li>
      <li id="shoes">shoes</li>
      <li id="short">shorts</li>
      <li id="hat">hats</li>
      <li id="all">All</li>
    </ul>
  `
  console.log(content);
  dataBase.map((val) => {
    if(content === undefined || content == '') {
      containerProducts.innerHTML += `
        <div class="product-single" dataset="${val.type}" style="display: flex">
          <img src="${val.image}"/>
          <div>
            <h3>${val.title}</h3>
            <p>
              por <strong>${(val.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}</strong></br>
              ou em ${val.discount}x de ${(val.price / val.discount).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}
            </p>
          </div>
          <div class="buttonsProducts">
            <a href="product.html" onclick="sendProduct(${val.id})">
              <button type="submit" key="${val.id}" type="${val.type}" class="link_product env_product">
                Buy Item  
              </button>
            <a/>
            <button type="submit" key="${val.id}" type="${val.type}" class="link_product">
              Add To Cart  
            </button>
          </div>
        </div>
      `;
    } else {
      if(content == val.type) {
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
          <div class="buttonsProducts">
            <a href="product.html" onclick="sendProduct(${val.id})">
              <button type="submit" key="${val.id}" type="${val.type}" class="link_product env_product">
                Buy Item  
              </button>
            <a/>
            <button type="submit" key="${val.id}" type="${val.type}" class="link_product">
              Add To Cart  
            </button>
          </div>
        </div>
      `;
      }
    }
  })
}
initStore();

function sendProduct(message) {
  window.localStorage.setItem('id', message);
}

const cart = document.getElementById('cart');
const cartList = document.getElementById('cartList');
const cartListId = document.getElementById('cartList');

function setCar() {
  count = 0;
  JSON.parse(sessionStorage.amount).forEach((val, index) => {
    if (val.amount > 0) {
      //console.log(val.title+" && "+val.amount+" * "+val.price+" == "+(val.price*val.amount).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}));
      dataBase[index].amount = val.amount;
      console.log(dataBase[index].amount+' '+val.amount);
      cartList.innerHTML += `
        <div>
          <img src="${val.image}" alt="image" class="context"><img>
          <p>
            ${val.title} ${val.amount}
          </p>
        </div>        
      `;
    }
    count = count + val.amount;
    cart.innerHTML = `
      <img src="./image/mockups.png" alt="icon"/>
      <p>${count}</p>
    `;
  })
}
setCar();

updateCart = (data) => {
  sessionStorage.setItem('amount', JSON.stringify(data));
  console.clear();
  cartList.innerHTML = ``;
  if(count == 0 ){count = 1;};
  cart.innerHTML = `
    <img src="./image/mockups.png" alt="icon"/>
    <p>${count++}</p>
  `;
  dataBase.map((val) => {
    if (val.amount > 0) {
      //console.log(val.title+" && "+val.amount+" * "+val.price+" == "+(val.price*val.amount).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}));
      
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
    if(i == links.length - 1) {
      console.log('ok');
    }
    updateCart(dataBase);
    return false;
  })
}