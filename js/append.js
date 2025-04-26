let placeList = document.getElementById('fruit-list');
let add = document.createElement('li');
add.innerText = 'Palm';
placeList.appendChild(add);


// ********************************************************
// where to add ?
let mainContainer = document.getElementById('main-container');

//what to be added ?
let section = document.createElement('section');
let h1 = document.createElement('h1');
h1.innerText = 'JavaScript is easy when you practice regularly';
section.appendChild(h1);

let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerText = 'Bismillahir- Rahmanir Rahim';
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.innerText = 'Allah with me';
ul.appendChild(li2);


let li3 = document.createElement('li');
li3.innerText = 'I will win inshaa allah';
ul.appendChild(li3);


section.appendChild(ul);
mainContainer.appendChild(section);