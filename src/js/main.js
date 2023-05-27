$(function () {
    $("#included__header").load("./modules/header/index.html");
});

// Preloader
function preloader() {
    document.body.classList.add('loaded-active');
    window.setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded-active');
    }, 3000);
}

preloader();

// <1024px - start adaptivity
const adaptiveBreakpoint = window.innerWidth > 1024;

// =====================================================
// Custom cursor

if (adaptiveBreakpoint) {
    window.addEventListener('mousemove', function(e) {
        const cursor = document.querySelector('.cursor');
        const cursorAura = document.querySelector('.aura');
        
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        cursorAura.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });
}

window.addEventListener('load', function() {
    const headerInner = document.querySelector('.header__inner');
    const headerInfo = document.querySelector('.header__info');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 150) {
            headerInner.classList.add('scrolled');
            headerInfo.style.display = 'none';
        } else {
            headerInner.classList.remove('scrolled');
            headerInfo.style.display = 'flex';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectsTitle = document.querySelectorAll('.projects__title');
    const cursor = document.querySelector('.cursor');

    projectsTitle.forEach(function(title) {
        title.addEventListener('mouseenter', function() {
            cursor.classList.add('is-active');
        });

        title.addEventListener('mouseleave', function() {
            cursor.classList.remove('is-active');
        });
    });
});