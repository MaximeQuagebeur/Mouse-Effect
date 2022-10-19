let souris1 = document.querySelector('.rond-1');
let souris2 = document.querySelector('.rond-2');
let souris3 = document.querySelector('.rond-3');

window.addEventListener('mousemove', (e) => {

    souris1.style.top = e.pageY + 'px';
    souris1.style.left = e.pageX + 'px';

    souris2.style.top = e.pageY + 'px';
    souris2.style.left = e.pageX + 'px';

    souris3.style.top = e.pageY + 'px';
    souris3.style.left = e.pageX + 'px';

})