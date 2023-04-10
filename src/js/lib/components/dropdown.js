import $ from "../core";

$.prototype.dropdown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = $(this[i]).attr("id");

        $(this[i]).click(() => {
            $(`[data-drop-id = ${id}]`).fadeToggle(100);
        })
    }
}