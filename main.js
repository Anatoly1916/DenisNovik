const burger = document.querySelector('.burger');
const line = document.querySelectorAll('.line');
const popUp = document.querySelector('.hide');
const inner = document.querySelector('.inner');
const list = document.querySelectorAll('.header__list');
const lang = document.querySelector('.lang');

burger.addEventListener('click', (e) => {
    line.forEach(item => 
        item.classList.toggle('turned'));
        popUp.classList.toggle('visible');
        renderPopup();
});

function renderPopup() {
    lang.style.display = 'block';
    list.forEach((item) =>
     inner.appendChild(item));
     inner.after(lang);
     
}

function closeNav() {
    popUp.classList.remove('visible');
    line.forEach((item) => item.classList.remove('turned'));

}
list.forEach((elem) => elem.addEventListener('click', closeNav));