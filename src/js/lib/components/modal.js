import $ from "../core"

$.prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(e => {
            e.preventDefault();
            const id = $(this[i]).attr("data-target");

            document.body.style.overflow = "hidden";
            $(`${id}`).fadeIn(300);


            $(`${id} [data-close]`).click(() => {
                $(`${id}`).fadeOut(500);
                document.body.style.overflow = "";
            })

            $(".modal").click((e) => {
                if (e.target.classList.contains("modal")) {
                    $(`${id}`).fadeOut(500);
                    document.body.style.overflow = "";
                }
            })
        })
    }
}

