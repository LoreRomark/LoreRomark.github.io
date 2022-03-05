"use strict";

const filter_category_container = document.querySelector('.filter-categorias-container');
const filter_tallas_container = document.querySelector('.filter-tallas-container')
const filter_category = document.querySelector('.filter-categorias')
const filter_tallas = document.querySelector('.filter-tallas')
const filter_title = document.querySelector('.filter-title')
const filter_option = document.querySelectorAll('.filter-option')

filter_category.addEventListener('click', ()=>{
    filter_category_container.classList.toggle('show-filter')
})

filter_tallas.addEventListener('click', ()=>{
    filter_tallas_container.classList.toggle('show-filter')
})

filter_title.addEventListener('click', ()=>{
    filter_option.forEach( (element, i) => {
        filter_option[i].classList.toggle('show-filter')
    });
})