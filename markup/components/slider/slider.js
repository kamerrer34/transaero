var sliderList = document.querySelectorAll('.js-slider-list'),
    prev = document.querySelectorAll('.js-slider-prev'),
    next = document.querySelectorAll('.js-slider-next');

Array.prototype.forEach.call(sliderList, function (el) {
    el.firstElementChild.classList.add('active');
    el.lastElementChild.classList.add('second');
    el.lastElementChild.previousElementSibling.classList.add('third');
});

Array.prototype.forEach.call(prev, function (el) {
    el.addEventListener('click', function(event) {
        var slider = event.target.closest('.js-slider'),
            sliderList = slider.querySelector('.js-slider-list'),
            curSlide = sliderList.querySelector('.active');

        curSlide.classList.remove('active');
        sliderList.querySelector('.second').classList.remove('second');
        sliderList.querySelector('.third').classList.remove('third');

        if (curSlide.previousElementSibling) {
            curSlide.previousElementSibling.classList.add('active');

            if (curSlide.previousElementSibling.previousElementSibling) {
                curSlide.previousElementSibling.previousElementSibling.classList.add('second');

                if (curSlide.previousElementSibling.previousElementSibling.previousElementSibling) {
                    curSlide.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('third');
                } else {
                    sliderList.lastElementChild.classList.add('third');
                }

            } else {
                sliderList.lastElementChild.classList.add('second');
                sliderList.lastElementChild.previousElementSibling.classList.add('third');
            }

        } else {
            sliderList.lastElementChild.classList.add('active');
            sliderList.lastElementChild.previousElementSibling.classList.add('second');
            sliderList.lastElementChild.previousElementSibling.previousElementSibling.classList.add('third');
        }
    });
});

Array.prototype.forEach.call(next, function (el) {
    el.addEventListener('click', function(event) {
        var slider = event.target.closest('.js-slider'),
            sliderList = slider.querySelector('.js-slider-list'),
            curSlide = sliderList.querySelector('.active');

        curSlide.classList.remove('active');
        sliderList.querySelector('.second').classList.remove('second');
        sliderList.querySelector('.third').classList.remove('third');

        if (curSlide.nextElementSibling) {
            curSlide.nextElementSibling.classList.add('active');
            curSlide.classList.add('second');

            if (curSlide.previousElementSibling) {
                curSlide.previousElementSibling.classList.add('third');
            } else {
                sliderList.lastElementChild.classList.add('third');
            }

        } else {
            sliderList.firstElementChild.classList.add('active');
            sliderList.lastElementChild.classList.add('second');
            sliderList.lastElementChild.previousElementSibling.classList.add('third');
        }
    });
});