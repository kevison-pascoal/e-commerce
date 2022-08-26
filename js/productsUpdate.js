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
