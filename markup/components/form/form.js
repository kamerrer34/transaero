Array.prototype.forEach.call(document.querySelectorAll('.js-validation-form button[type="submit"]'), function (el) {
    el.disabled = true;
});

function validForm(form, button) {
    button.disabled = !form.checkValidity();
}

var input = document.querySelectorAll('.js-validation-form input');

Array.prototype.forEach.call(input, function (el) {
    el.addEventListener('input', function (event) {
        var input = event.target;
        var form = event.target.closest('.js-validation-form');
        var button = form.querySelector('button[type="submit"]');
        var nextElem = input.nextElementSibling;

        Array.prototype.forEach.call(nextElem.children, function (el) {
            el.classList.remove('visible');
            input.classList.remove('error');
        });

        if (!input.validity.valid) {
            for (var errType in input.validity) {
                if (errType != 'valid' && input.validity[errType]) {
                    nextElem.querySelector('.js-' + errType).classList.add('visible');
                    input.classList.add('error');
                }
            }
        }

        validForm(form, button);
    });
});