let eu=document.querySelector('li#EU');
eu.remove()
let ul = document.querySelector('ul');
let li;
li = document.createElement('li');
li.textContent = 'アジア大陸';
ul.insertAdjacentElement('beforeend', li);
li = document.createElement('li');
li.textContent = 'ヨーロッパ大陸';
ul.insertAdjacentElement('beforeend', li);

let h2sevenOcean = document.querySelector('h2#sevenOcean');
let oceans = [
    '北極海',
    '北大西洋',
    '南大西洋',
    'インド洋',
    '北太平洋',
    '南太平洋',
    '南極海'
  ]
  ul=document.createElement('ul');
  h2sevenOcean.insertAdjacentElement('beforeend', ul);
  for (let o of oceans) {
    li = document.createElement('li');
      li.textContent=oceans;
      ul.insertAdjacentElement('beforeend', li);
  }
let h2s=document.querySelectorAll('h2');
for(let h2 of h2s){
    h2.style.backgroundColor='palegreen';
}