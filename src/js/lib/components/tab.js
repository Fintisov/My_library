import $ from "../core";

$.prototype.tab = function () {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on("click", () => {
            $(this[i]).addClass("tab__item--active")
                .sibling()
                .removeClass("tab__item--active")
                .closest(".tab")
                .find(".tab__content")
                .removeClass("tab__content--active")
                .eq($(this[i]).index())
                .addClass("tab__content--active");
        })
    }
}