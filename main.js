///Element selector function

const selectElement = function (elm) {
    return document.querySelector(elm);
};

let menuToggle = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggle.addEventListener('click', function () {
    body.classList.toggle('open');
})

///Scroll reveal 
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 400
});

sr.reveal('.animate-right', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 400
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 400
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 400
});