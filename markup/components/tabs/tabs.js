var link = document.querySelectorAll('.js-tabs-head a');

Array.prototype.forEach.call(link, function (el) {
    el.addEventListener('click', function(event) {
        event.preventDefault();
        var target = event.target,
            href = target.getAttribute('href');

        target.closest('.js-tabs-head').querySelector('.active').classList.remove('active');
        target.classList.add('active');

        target.closest('.js-tabs').querySelector('.js-tabs-content > .active').classList.remove('active');
        target.closest('.js-tabs').querySelector('.js-tabs-content ' + href).classList.add('active');
    });
});