$(function () {
    $("#included__header").load("./modules/header/index.html");
});

// <1024px - start adaptivity
const adaptiveBreakpoint = $(window).width() > 1024;

// =====================================================
// Custom cursor

const cursor = $(".cursor");

if (adaptiveBreakpoint) {
    onmousemove = function (e){
        cursor.css({
            'left': e.clientX,
            'top': e.clientY,
        });
    };
};