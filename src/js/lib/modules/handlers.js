import $ from "../core";

$.prototype.on = function (handler, callback) {
    if (!handler || !callback) return this;

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(handler, callback);
    }

    return this
}


$.prototype.off = function (handler, callback) {
    if (!handler || !callback) return this;

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(handler, callback);
    }

    return this
}

$.prototype.click = function (callback) {
    if (!callback) {
        this[0].click()
    } else {
        for (let i = 0; i < this.length; i++) {
            this[i].addEventListener("click", callback);
        }
    }

    console.log(this)
    return this;
}













