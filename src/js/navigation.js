
//HTML elements
var mainNavigationS = "#main-navigation";
var navbarCollapseButtonS = "#navbar-collapse-button"
var headerS = "#home"

//CSS classes
var navbarFilledHeader = "navbar-filled-header";
var navbarFilledSkills = "navbar-filled-skills";

var navbarFilled = navbarFilledHeader;

$(document).ready(function () {
    subscribeToEvents();
})

function subscribeToEvents() {
    $(window).scroll(onWindowScrolled);
    $(document).on('click', 'a[href^="#"]', smoothScrolling);
}

function onWindowScrolled() {
    var scroll = $(window).scrollTop();
    var mainNavigation = $(mainNavigationS);

    mainNavigation.removeClass(navbarFilled);
    navbarFilled = getNavbarFill(scroll);
    mainNavigation.addClass(navbarFilled);
}

function getNavbarFill(scroll) {
    var homeHeaderHeight = $(headerS).height();
    if (scroll >= 0 && scroll < homeHeaderHeight) {
        return navbarFilledHeader;
    }

    return navbarFilledSkills;
}

function smoothScrolling(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
}