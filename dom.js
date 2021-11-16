
// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// // console.log(document.title);
// // document.title = "123";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GetElementById
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000' ;

// var items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// items[3].textContent = 'Labuuuukas';
// items[3].style.fontWeight = 'bold';
// items[3].style.backgroundColor = 'yellow';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'pink'
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'pirmas listo elementas';


// var mygtukas = document.getElementById('button').addEventListener
// ('click', paspaustasMygtukas);

// function paspaustasMygtukas(mouseEvent){
    // console.log('Paspaustass mygtukas');
    // document.getElementById('header-title').textContent = 'Naujai pakeistas tekstas';
    // document.querySelector('#main').style.backgroundColor = 'blue';
    // console.log(mouseEvent);
    // console.log(mouseEvent.target);
    // console.log(mouseEvent.target.id);
    // console.log(mouseEvent.target.className);
    // console.log(mouseEvent.target.classList);
// }


var mygtukas = document.getElementById('button');
var box = document.getElementById('box');

// mygtukas.addEventListener('click', pradetiEventaFunkcija);
// mygtukas.addEventListener('dblclick', pradetiEventaFunkcija);
// mygtukas.addEventListener('mousedown', pradetiEventaFunkcija);
// mygtukas.addEventListener('mouseup', pradetiEventaFunkcija);

// box.addEventListener('mouseenter', paleistiEventą);
// box.addEventListener('mouseleave', paleistiEventą);
// box.addEventListener('mouseover', paleistiEventą);
// box.addEventListener('mousemove', paleistiEventą);
// box.addEventListener('mouseout', paleistiEventą);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', paleistiEventą);
// itemInput.addEventListener('keyup', paleistiEventą);
// itemInput.addEventListener('keypress', paleistiEventą);
// itemInput.addEventListener('focus', paleistiEventą);
// itemInput.addEventListener('blur', paleistiEventą);

// itemInput.addEventListener('cut', paleistiEventą);
// itemInput.addEventListener('paste', paleistiEventą);
// itemInput.addEventListener('input', paleistiEventą);

// select.addEventListener('change', paleistiEventą);
// select.addEventListener('input', paleistiEventą);

form.addEventListener('submit', paleistiEventą);

function paleistiEventą(event){
    event.preventDefault();
    console.log('EVENT TYPE: ' + event.type);

    // console.log(event.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+event.target.value+'<h3>'; 

//    document.body.style.backgroundColor = "rgb("+event.offsetX+", "+event.offsetX+", 40)";
}
