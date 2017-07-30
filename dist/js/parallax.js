function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelector('.border.trans  ');
    scrollPos = window.scrollY;

    if (scrollPos <= 300) {
        headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
        headerText.style.opacity = 1 - (scrollPos / 300);
    }
}

window.addEventListener('scroll', scrollBanner);