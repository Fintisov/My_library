import $ from "../core"

$.prototype.modal = function (target) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(e => {
            e.preventDefault();
            const id = $(this[i]).attr("data-target");

            document.body.style.overflow = "hidden";
            $(`${id}`).fadeIn(300);


            $(`${id} [data-close]`).click(() => {
                $(id).fadeOut(500);
                document.body.style.overflow = "";
                if (target) {
                    document.querySelector(id).remove();
                }
            })

            $(".modal").click((e) => {
                if (e.target.classList.contains("modal")) {
                    $(id).fadeOut(500);
                    document.body.style.overflow = "";
                    if (target) {
                        setTimeout(() => {
                            document.querySelector(id).remove();
                        }, 500)
                    }
                }
            })
        })
    }
}

$.prototype.createModal = function ({text, btn} = {}) {
    for (let i = 0; i < this.length; i++) {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.setAttribute(
            "id",
            this[i].getAttribute("data-target").slice(1)
        );

        modal.innerHTML = `
             <div class="modal__dialog">
                <div class="modal__content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal__header">
                        <h4 class="modal__title">${text.title}</h4>
                    </div>
    
                    <div class="modal__body">
                        ${text.body};
                    </div>
                    <div class="modal__footer"></div>
                </div>
            </div>
        `;

        const buttons = [];

        for (let j = 0; j < btn.settings.length; j++) {
            const [btnText, btnClassName, btnClose, btnCallBackFun] = [...btn.settings[j]];

            const button = document.createElement("button");


            button.textContent = btnText;
            button.classList.add("btn", ...btnClassName);

            if (btnClose) {
                button.setAttribute("data-close", "");
            }

            if (btnCallBackFun && typeof (btnCallBackFun) === "function") {
                button.addEventListener("click", btnCallBackFun);
            }

            buttons.push(button);
        }

        modal.querySelector(".modal__footer").append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute("data-targer")).fadeIn(500);
    }
}