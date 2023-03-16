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

$.prototype.eq = function (i = 0) {
    const swap = this[i];
    const objLength = Object.keys(this);

    for (let i = 0; i < objLength.length; i++) {
        delete this[objLength[i]];
    }

    this[0] = swap;
    this.length = 1;

    return this;
}