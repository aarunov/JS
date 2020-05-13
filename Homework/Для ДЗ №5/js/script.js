'use strict'
let title = document.getElementById('title'),
    menu = document.getElementsByClassName('menu')[0],
    menuitemli = document.createElement('li'),
    menuitem = document.getElementsByClassName('menu-item'),
    adv = document.getElementsByClassName('adv')[0],
    prom = document.querySelector('#prompt');

 // поменяли пункты
    menu.insertBefore(menuitem[2],menuitem[1]);


//Add menu item
    menuitemli.className = "menu-item";
    menuitemli.innerHTML = 'Пятый пункт';
    menu.append(menuitemli);



//change title
title.innerHTML =  'Мы продаем только подлинную технику Apple';
//change background
document.body.style.backgroundImage = "url('img/apple_true.jpg')"; 
//remove adv
adv.remove();
//Answer for user

//prom.innertext = (question);

let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
prom.textContent = yourOpinion;


