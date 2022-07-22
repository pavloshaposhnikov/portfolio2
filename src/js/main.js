$(function () {
    $("#included__header").load("./modules/header/index.html");
});

// <1024px - start adaptivity
const adaptiveBreakpoint = $(window).width() > 1024;

// =====================================================
// Custom cursor

    const cursor = $(".cursor");
    const cursorAura = $(".aura");
    const backgroundImg = $('.projects__preview');
    const projectItem = $('.projects__item');

if (adaptiveBreakpoint) {
    onmousemove = function (e){
        cursor.css({
            'left': e.clientX,
            'top': e.clientY,
        }),
            cursorAura.css({
                'left': e.clientX,
                'top': e.clientY,
            })
    };
};

function myFunction(e) {
    backgroundImg.css({
        'left': e.clientX,
        'top': e.clientY,
        'opacity': 1,
    }),
        cursor.css({
            'opacity': 0,
        }),
        cursorAura.css({
            'opacity': 0,
        })
};

function myLeaveFunction(e) {
    backgroundImg.css({
        'opacity': 0,
    }),
        cursor.css({
            'opacity': 1,
        }),
        cursorAura.css({
            'opacity': 1,
        })
};

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 450) {
            $('.header__inner').addClass('scrolled');
            $('.header__info').fadeOut(0);
        } else {
            $('.header__inner').removeClass('scrolled');
            $('.header__info').fadeIn(0);
        }
    });
});

const aboutBackground = $('.about__background-img');
function aboutHover(e) {
    aboutBackground.css({
        'left': e.clientX,
        'top': e.clientY,
    }),
        cursorAura.css({
            'opacity': 0,
        })
};

const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener(‘resize’, documentHeight)
documentHeight()