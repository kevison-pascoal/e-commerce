const dataBase = [
  { 
    id: 0,
    image: 'image/foto.jpg',
    title: 'Beautiful View',
    price: 458.83,
    discount: 2,
    amount: 0,
  },
  {
    id: 1,
    image: 'image/foto-1.jpg',
    title: 'Back To You',
    price: 1587.25,
    discount: 3,
    amount: 0,
  },
  {
    id: 2,
    image: 'image/foto.jpg',
    title: 'Power Of Thought',
    price: 648.84,
    discount: 8,
    amount: 0,
  },
  {
    id: 3,
    image: 'image/foto-1.jpg',
    title: 'The Depth Of The Sea',
    price: 549.58,
    discount: 5,
    amount: 0,
  },
  {
    id: 4,
    image: 'image/foto.jpg',
    title: 'The Sky Is Full',
    price: 348.54,
    discount: 4,
    amount: 0,
  }
]

initStore = () => {
  let containerProducts = document.getElementById('products');
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
        <button type="submit" key="${val.id}" class="link_product">
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


