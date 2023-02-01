const burger = document.querySelector('.burger');
const line = document.querySelectorAll('.line');
const popUp = document.querySelector('.hide');

burger.addEventListener('click', (e) => {
    line.forEach(item => 
        item.classList.toggle('turned'));
        popUp.classList.toggle('visible');
});