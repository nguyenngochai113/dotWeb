/* header sticky */
const header = document.querySelector('[data-header]');
window.addEventListener("scroll", function () {
    window.scrollY >= 400 ? header.classList.add("active") : header.classList.remove('active')
})


// toggle-menu
let mobile = document.querySelector('.mobile');
document.querySelector('#toggle-menu').onclick = () => {
    mobile.classList.toggle('active');
}
let mobileBtn = document.querySelector('#toggle-menu');
let mobileSearchBg = document.querySelector('.modal-bg');
mobileBtn.addEventListener('click', function () {
    mobileSearchBg.classList.add('bg-active');
})
// modal background
let modalBtn = document.querySelector('#search-toggle');
let modalBg = document.querySelector('.modal-bg');
modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
})

let closeClickModal = document.querySelector('.modal-bg');
closeClickModal.addEventListener('click', function () {
    mobile.classList.remove('active');
    modalBg.classList.remove('bg-active');
    search.classList.remove('search-modal-active')
})
// search toggle 
let search = document.querySelector('.search-modal');
document.querySelector('#search-toggle').onclick = () => {
    search.classList.toggle('search-modal-active');
}

let searchBtn = document.querySelector('#search-toggle');
let modalSearchBg = document.querySelector('.modal-bg');
searchBtn.addEventListener('click', function () {
    modalSearchBg.classList.add('bg-active');
})

let deleteAll = document.querySelector('#delete-toggle');
deleteAll.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
    search.classList.remove('search-modal-active')
})


// sort
const sorter = document.querySelector('.sort-list');
if(sorter){
    const sortLi = document.querySelectorAll('.bycart div li');
    sorter.querySelector('.opt-trigger').addEventListener('click', function(){
        sorter.querySelector('ul').classList.toggle('show')
    });
    
    sortLi.forEach((item) => item.addEventListener('click', function(){
        sortLi.forEach((li) => li != this ? li.classList.remove('active') : null);

        this.classList.add('active');
        sorter.querySelector('.opt-trigger span.value').textContent = this.textContent;
        sorter.querySelector('ul').classList.toggle('show');
    }))
}

// tabbed
const trigger = document.querySelectorAll('.tabbed-trigger');
    content = document.querySelectorAll('.tabbed > div');
trigger.forEach((btn) =>{
    btn.addEventListener('click', function(){
        let dataTarget = this.dataset.id,
        body = document.querySelector(`#${dataTarget}`);

        trigger.forEach((b) => b.parentNode.classList.remove('active'));
        trigger.forEach((s) => s.classList.remove('active'));
        this.parentNode.classList.add('active');
        body.classList.add('active')
    })
})