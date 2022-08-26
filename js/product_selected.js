const product = document.getElementById('product_selected');

function initProduct() {
  dataBase.forEach((event) => {
    if(sessionStorage.getItem('id') == event.id) {
      product.innerHTML = `
        <div class="wrapper-selected">
          <img src="${event.image}">
        </div>
      `
    }
  })
}

initProduct();