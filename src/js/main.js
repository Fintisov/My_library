import "./lib/lib";

$("p.active").hide();
$("p.active").toggleDisplay();
$("p.active").show();

// ________________

$("p").addClass("hello", "world");
$("p.active").removeClass("class-1");
$("p").toggleClass("active").addClass("active-1");
$("p").containsClass("hello");

// ________________
 
