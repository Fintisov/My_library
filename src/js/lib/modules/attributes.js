import $ from "../core";

$.prototype.attr = function (attributeName, value) {
    if (!attributeName) return this;

    for (let i = 0; i < this.length; i++) {
        if (!value) {
            if (!this[i].getAttribute || !this[i].getAttribute(attributeName)) {
                continue;
            }

            return this[i].getAttribute(attributeName);
        } else {
            if (!this[i].setAttribute) continue;

            this[i].setAttribute(attributeName, value);
        }
    }
    return this;
};

$.prototype.attrRemove = function (attributeName) {
    if (!attributeName) return this;

    for (let i = 0; i < this.length; i++) {
        if (this[i].removeAttribute) {
            continue;
        }
        this[i].removeAttribute(attributeName);
    }
    return this;
};

$.prototype.attrToggle = function (attributeName, valueFirst = "", valueSecond = "") {
    if (!attributeName || !valueFirst) return this;

    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) continue;

        if (this[i].hasAttribute(attributeName)) {
            if (this[i].getAttribute(attributeName) === valueFirst) {
                this[i].setAttribute(attributeName, valueSecond);
            } else {
                this[i].setAttribute(attributeName, valueFirst);
            }
        }
    }

    return this;
};

