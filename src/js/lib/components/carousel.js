import $ from "../core";

$.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector(".carousel__inner")).width;
        const slides = this[i].querySelectorAll(".carousel__item");
        const slidesField = this[i].querySelector(".carousel__slides");
        const dots = this[i].querySelectorAll(".carousel__indicator li");

        slidesField.style.width = `${100 * slides.length}%`;
        slides.forEach(elem => elem.style.width = width);

        let offset = 0;
        let slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).on("click", (e) => {
            e.preventDefault();

            if (offset === (+width.replace(/\D/g, "") * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, "");
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex === slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }

            dots.forEach(elem => elem.classList.remove("active"));
            dots[slideIndex].classList = "active";
        })

        $(this[i].querySelector('[data-slide="prev"]')).on("click", (e) => {
            e.preventDefault();

            if (offset === 0) {
                offset = +width.replace(/\D/g, "") * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, "");
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex === 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }

            dots.forEach(elem => elem.classList.remove("active"));
            dots[slideIndex].classList = "active";
        })

        const indicators = this[i].querySelectorAll(".carousel__indicator > li");



        indicators.forEach(elem => {
            elem.addEventListener("click", (event) => {
               let currentSlideNum = Array.from(indicators).findIndex(item => item === event.target);

                offset = +width.replace(/\D/g, "") * currentSlideNum;
                slideIndex = currentSlideNum;

                slidesField.style.transform = `translateX(-${offset}px)`;
                dots.forEach(elem => elem.classList.remove("active"));
                dots[currentSlideNum].classList = "active";
            })
        })
    }
}

