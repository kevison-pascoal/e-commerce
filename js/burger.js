document.getElementById('burger').addEventListener('click', () => {
  console.log('click');
  if(document.getElementById('App').classList[1]) {
    document.getElementById('App').classList.remove('show-menu');
    console.log('Remove show-menu');
    console.log(document.getElementById('App').classList[1]);
  } else {
    document.getElementById('App').classList.add('show-menu');
    console.log('Add show-menu')
    console.log(document.getElementById('App').classList[1]);
  }
})
let click = 0;
document.getElementById('area').addEventListener('click', () => {
  click++;
  if(click == 2) {
    document.getElementById('App').classList.remove('show-menu');
    click = 0;
  }
})