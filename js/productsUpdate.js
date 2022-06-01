const shirts = document.getElementById('shirt');
const pants = document.getElementById('pants');
const shoes = document.getElementById('shoe');
const shorts = document.getElementById('short');
const hats = document.getElementById('hat');

shirts.addEventListener('click', () => {
  containerProducts.innerHTML = ``;
  dataBase.map((val) => {
    if(val.type == 'shirt') {
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
    }
  })
})
pants.addEventListener('click', () => {
  containerProducts.innerHTML = ``;
  dataBase.map((val) => {
    if(val.type == 'pants') {
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
    }
  })
})
shoes.addEventListener('click', () => {
  containerProducts.innerHTML = ``;
  dataBase.map((val) => {
    if(val.type == 'shoes') {
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
    }
  })
})
shorts.addEventListener('click', () => {
  containerProducts.innerHTML = ``;
  dataBase.map((val) => {
    if(val.type == 'shorts') {
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
    }
  })
})
hats.addEventListener('click', () => {
  containerProducts.innerHTML = ``;
  dataBase.map((val) => {
    if(val.type == 'hats') {
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
    }
  })
})