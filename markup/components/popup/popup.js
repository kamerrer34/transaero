document.querySelector('.js-open-popup').addEventListener('click', function(event) {
    event.preventDefault();
    var target = event.target.getAttribute('href');
    document.querySelector(target).classList.add('active');
});

document.querySelector('.js-close-popup').addEventListener('click', function(event) {
    event.target.closest('.js-popup').classList.remove('active');
});