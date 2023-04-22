import "./lib/lib";

$("#first").on("click", () => {
    $("div").eq(1).fadeOut(800);
});

$("[data-count='second']").on("click", () => {
    $("div").eq(2).fadeOut(800);
});

$("button").eq(2).on("click", () => {
    $(".container > div").fadeOut(800);
});

$(".dropdown-toggle").dropdown();

$('[data-toggle="modal"]').modal();

$("#trigger").click(() => $("#trigger").createModal({
    text: {
        title: "Modal title",
        text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae cumque eaque in ipsa
                labore quo quod reprehenderit? Aperiam aut doloremque ea inventore vitae voluptatum? Adipisci
                aliquid dolor error quod!`,
    },
    btn: {
        settings: [
            [
                "Close",
                ["btn", "btn-danger"],
                true,
            ],
            [
                "Save changes",
                ["btn", "btn-success", "ml-10"],
                false,
                () => {
                    alert("Save changes")
                }
            ],
            [
                "Another BTN",
                ["btn", "btn-warning", "ml-10"],
                false,
                () => {
                    alert("Stop");
                }
            ],
        ]
    }
}));

$("[data-tab-panel] .tab__item").tab();

$(".accordion__head").accordion();