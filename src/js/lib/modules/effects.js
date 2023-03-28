import $ from "../core";

$.prototype.animateOverTime = function (duration, callback, fin) {
    let timeStart = null;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let completion = Math.min(timeElapsed / duration, 1);

        callback(completion);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === "function") {
                fin();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function (duration, display = "block", fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;

        let _fadeIn = (completion) => {
            this[i].style.opacity = completion;
        }


        const animate = this.animateOverTime(duration, _fadeIn, fin);
        requestAnimationFrame(animate);
    }
}

$.prototype.fadeOut = function (duration, fin) {
    for (let i = 0; i < this.length; i++) {
        let _fadeOut = (completion) => {
            this[i].style.opacity = 1 - completion;

            if (completion === 1) {
                this[i].style.display = "none";
            }
        }

        const animate = this.animateOverTime(duration, _fadeOut, fin);
        requestAnimationFrame(animate);
    }
}

$.prototype.fadeToggle = function (duration, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === "none") {
            this.fadeIn(duration, display, fin)
        } else {
            this.fadeOut(duration, display, fin);
        }
    }
}




























