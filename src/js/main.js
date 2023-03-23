import "./lib/lib";

/*
$("p.active").hide();
$("p.active").toggleDisplay();
$("p.active").show();

// ________________

$("p").addClass("hello", "world");
$("p.active").removeClass("class-1");
$("p").toggleClass("active").addClass("active-1");
$("p").containsClass("hello");

// ________________


function sayHi() {
    console.log("Hello world");
}

$("button").on("click", sayHi);

$("button").off("click", sayHi);

$("p").click(function () {
    $(this).toggleClass("current");
});

// ________________


console.log($("p").attr("data-close"));
// $("p").attr("data-close", "1");
// $("p").attrRemove("data-close");
$("p").attrToggle("data-close", "x");

$("button").on("click", ()=> {
    $("p").attrToggle("data-close", "value-1", "value-2");
})

// ________________

console.log($("p").html("con"));
// ________________

console.log($("p").eq(0));
// ________________

$("p").click(function () {
    console.log($(this).index())
})


console.log($("div").find(".more"));
// ________________


// console.log($(".some").closest(".content"));
// ________________

console.log($(".content").sibling());

*/

// $("div").fadeIn(2000);
//
// $("div").fadeOut(2000);

$("button").eq(1).on("click", function () {
    $("div").eq(2).fadeToggle("1000");
})
































