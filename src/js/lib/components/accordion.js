import $ from "../core";

$.prototype.accordion = function ({
                                      headActive = "accordion__head--active",
                                      contentActive = "accordion__content--active",
                                  } = {}) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on("click", () => {
            this[i].classList.toggle(headActive);
            this[i].nextElementSibling.classList.toggle(contentActive);

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = `${this[i].nextElementSibling.scrollHeight + 40}px`
            } else {
                this[i].nextElementSibling.style.maxHeight = "0px";

            }
        })
    }
}