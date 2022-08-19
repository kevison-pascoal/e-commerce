const shirts = document.getElementById('shirt');
const pants = document.getElementById('pants');
const shoes = document.getElementById('shoes');
const shorts = document.getElementById('short');
const hats = document.getElementById('hat');
const all = document.getElementById('all');

const element = document.querySelectorAll('.product-single');

all.addEventListener('click', () => {
  element.forEach((event) => {
    console.log(event.getAttribute('dataset'));
    event.setAttribute('style', 'display: flex');
  })
})

shirts.addEventListener('click', () => {
  element.forEach((event) => {
    console.log(event.getAttribute('dataset'));
    if(event.getAttribute('dataset') != 'shirt') {
      console.log(event.getAttribute('dataset')+' == '+"shirt");
      event.setAttribute('style', 'display: none');
    } else {
      event.setAttribute('style', 'display: flex');
    }
  })
})
pants.addEventListener('click', () => {
  element.forEach((event) => {
    console.log(event.getAttribute('dataset'));
    if(event.getAttribute('dataset') != 'pants') {
      console.log(event.getAttribute('dataset')+' == '+"pants");
      event.setAttribute('style', 'display: none');
    } else {
      event.setAttribute('style', 'display: flex');
    }
  })
})
shoes.addEventListener('click', () => {
  element.forEach((event) => {
    console.log(event.getAttribute('dataset'));
    if(event.getAttribute('dataset') != 'shoes') {
      console.log(event.getAttribute('dataset')+' == '+"shoes");
      event.setAttribute('style', 'display: none');
    } else {
      event.setAttribute('style', 'display: flex');
    }
  })
})
shorts.addEventListener('click', () => {
  element.forEach((event) => {
    console.log(event.getAttribute('dataset'));
    if(event.getAttribute('dataset') != 'shorts') {
      console.log(event.getAttribute('dataset')+' == '+"shorts");
      event.setAttribute('style', 'display: none');
    } else {
      event.setAttribute('style', 'display: flex');
    }
  });
})
hats.addEventListener('click', () => {
  element.forEach((event) => {
    console.log(event.getAttribute('dataset'));
    if(event.getAttribute('dataset') != 'hats') {
      console.log(event.getAttribute('dataset')+' == '+"hats");
      event.setAttribute('style', 'display: none');
    } else {
      event.setAttribute('style', 'display: flex');
    }
  })})

/*
initShirts = () => {
  containerProducts.innerHTML = ``;
  dataBase.map((val) => {
    if(val.type == 'shirt') {
      console.log(val.id);
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
          <a href="product.html">
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
  })
}
shirts.addEventListener('click', () => {
  initShirts();
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
*/