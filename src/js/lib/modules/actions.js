import $ from "../core";

$.prototype.html = function (content) {
    if (!content) {
        return this[0].innerHTML;
    } else {
        for (let i = 0; i < this.length; i++) {
            this[i].innerHTML = content;
        }
    }
    return this;
}