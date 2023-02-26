const burger = document.querySelector('.burger');
const line = document.querySelectorAll('.line');
const popUp = document.querySelector('.hide');
const inner = document.querySelector('.inner');
const list = document.querySelector('.header__list');
const nav = document.querySelectorAll('.header__link');
const lang = document.querySelector('.lang');
const ruEng = document.querySelector('.ru-eng');
const hideBox = document.querySelector('.hide__lang');


burger.addEventListener('click', (e) => {
    line.forEach((item) => item.classList.toggle('turned')); 
    
    for(let i = 0; i < line.length; i++) {
        if(line[i].classList.contains('turned')) {
           renderPopup();
        }else {
            closeNav();
        }
    }
});

function renderPopup() {
    lang.style.display = 'block';
    nav.forEach((item) =>
     inner.appendChild(item));
     hideBox.appendChild(ruEng);
     popUp.classList.toggle('visible');
}

function closeNav() {
    popUp.classList.remove('visible');
    nav.forEach((item) => list.appendChild(item));
    line.forEach((item) => item.classList.remove('turned'));
    lang.append(ruEng);

}
nav.forEach((elem) => elem.addEventListener('click', closeNav));
