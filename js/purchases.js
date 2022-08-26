const price = document.querySelector('.price');
if(typeof(Storage)!="undefined") {
  console.log("WebStorage Suported :)");
  if(localStorage.visits) {
    localStorage.visits = Number(localStorage.visits) + 1;
  } else {
    localStorage.visits = 1;
    localStorage.mathPurchases = 1;
  }
  console.log("Visitas no site: " + localStorage.visits);
} else {
  console.log("WebStorage not suported :(");
}
setInterval( () => {
  localStorage.mathPurchases = Number(localStorage.mathPurchases) + 0.11;
  money = Number(localStorage.mathPurchases);
  price.innerHTML = `${money.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}`;
}, 10);