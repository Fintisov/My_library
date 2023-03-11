import $ from "../core";

$.prototype.addClass = function (...className) {
    if (!className) return this;

    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) continue;

        this[i].classList.add(...className);
    }

    return this;
}


$.prototype.removeClass = function (...className) {
    if (!className) return this;

    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) continue;

        this[i].classList.remove(...className);
    }
    return this;
}


$.prototype.toggleClass = function (className) {
    if (!className) return this;

    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) continue;

        if(this[i].classList.contains(className)) {
            this[i].classList.remove(className);
        } else {
            this[i].classList.add(className);
        }
    }
    return this;
};

$.prototype.containsClass = function (className) {
    if (!className) return this;

    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) continue;

        return this[i].classList.contains(className);
    }

    return this;
};