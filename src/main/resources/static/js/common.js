var menuisopen = 0;

function test () {
	alert("test");
}

function goBack() {
    window.history.back;
}

function togglepopup () {
	var modal = document.getElementById("popup");
    var btn = document.getElementById("popup--open");
    var span = document.getElementsByClassName('popup--close')[0];
	btn.onclick = function () {
        modal.style.display = "block";
		loadtext();
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
}
}

function pageload () {
    var overlay = document.getElementById("open-overlay");
    var navmenu = document.getElementById("navigation__menu");
    var navlist = document.getElementById("navigation__list");
    var totop = document.getElementById("to-top");
    window.onscroll = function (event) {
//        navlist.style.display = "none";
//        navmenu.style.display = "none";
//        closesesame();
        if (window.pageYOffset > 0) {
            totop.style.display = "block";
        }
        else {
            totop.style.display = "none";
        }
    }
    if (window.pageYOffset > 0) {
            totop.style.display = "block";
        }
    window.onresize = function (event) {
        navlist.style.display = "none";
        navmenu.style.display = "none";
//        closemenu();
    }
}

function openmenu() {
    var header = document.getElementById('header');
    var overlay = document.getElementById('open-overlay');
    var navmenu = document.getElementById('navigation__menu');
    var navlist = document.getElementById('navigation__list');
    var navlist_height = document.getElementById('navigation__list').offsetHeight;
    var navburger = document.getElementById('navigation__burger');
    navmenu_height = navlist_height + 16;
    navmenu.setAttribute("style", "border-bottom: 1px solid white; height: " + navlist_height + "px; -webkit-transition: height 0.5s linear; -moz-transition: height 0.5s linear; -ms-transition: height 0.5s linear; -o-transition: height 0.5s linear; transition: height 0.5s linear;");
    navlist.setAttribute("style", "top: inherit; -webkit-transition: top 0.5s ease-out 0.1s;");
    navburger.setAttribute("style", "background-color: var(--c-home-content); -webkit-transition: background-color 0.5s linear; -moz-transition: background-color 0.5s linear; -ms-transition: background-color 0.5s linear; -o-transition: background-color 0.5s linear; transition: background-color 0.5s linear;" /*"width: 20px; -webkit-transition: width 0.5s linear; -moz-transition: width 0.5s linear; -ms-transition: width 0.5s linear; -o-transition: width 0.5s linear; transition: width 0.5s linear;"*/ );
    header.setAttribute("style", "border-bottom: 1px solid transparent;");
    overlay.style.display = "block";
}

function closemenu() {
    var header = document.getElementById('header');
    var overlay = document.getElementById('open-overlay');
    var navmenu = document.getElementById('navigation__menu');
    var navlist = document.getElementById('navigation__list');
    var navlist_height = document.getElementById('navigation__list').offsetHeight;
    var navburger = document.getElementById('navigation__burger');
    navmenu_height = navlist_height + 16;
    navmenu.setAttribute("style", "height: 0; -webkit-transitio: height 0.5s linear 1s; -moz-transition: height 0.5s linear; -ms-transition: height 0.5s linear; -o-transition: height 0.5s linear; transition: height 0.5s ease-in;");
    navlist.setAttribute("style", "top: -300px; -webkit-transition: top 0.5s ease-in;");
    navburger.setAttribute("style", "background-color: var(--c-blugry); -webkit-transition: background-color 0.5s linear; -moz-transition: background-color 0.5s linear; -ms-transition: background-color 0.5s linear; -o-transition: background-color 0.5s linear; transition: background-color 0.5s linear;" /*"width: 40px; -webkit-transition: width 0.5s linear; -moz-transition: width 0.5s linear; -ms-transition: width 0.5s linear; -o-transition: width 0.5s linear; transition: width 0.5s linear;"*/ );
    header.setAttribute("style", "border-bottom: 1px solid white; transition-delay: 0.5s");
    overlay.style.display = "none";
}


function opensesame() {
	var body = document.body;
	var page = document.getElementById("mainpage");
    var headerlogo = document.getElementById("header-logo");
    var headerburger = document.getElementById("header-burger-box");
	var navcontainer = document.getElementById("navcontainer");
	var navwidth = navcontainer.offsetWidth;
	var overlay = document.getElementById("open-overlay");
	body.style.overflowX = "hidden";
	navcontainer.setAttribute("style", "transform: translate("+navwidth+"px); transition: transform 600ms cubic-bezier(0.86, 0, 0.07, 1);");
	page.setAttribute("style", "transform: translate("+navwidth+"px); transition: transform 600ms cubic-bezier(0.86, 0, 0.07, 1);");
	overlay.setAttribute("style", "visibility: visible; opacity: 0.7; transition: opacity 400ms cubic-bezier(0.86, 0, 0.07, 1) 200ms;");
    headerlogo.setAttribute("style", "opacity: 0; transition: all 0.3s ease-in");
    headerburger.setAttribute("style", "opacity: 0; transition: all 0.3s ease-in");
    menuisopen = 1;
}

function closesesame() {
	var body = document.body;
	var page = document.getElementById("mainpage");
    var headerlogo = document.getElementById("header-logo");
    var headerburger = document.getElementById("header-burger-box");
	var navcontainer = document.getElementById("navcontainer");
	var navwidth = navcontainer.offsetWidth;
	var overlay = document.getElementById("open-overlay");
	body.style.overflowX = "visible";
	navcontainer.setAttribute("style", "transform: translate(0); transition: transform 600ms cubic-bezier(0.86, 0, 0.07, 1);");
	page.setAttribute("style", "transform: translate(0); transition: transform 600ms cubic-bezier(0.86, 0, 0.07, 1);");
	overlay.setAttribute("style", "visibility: hidden; opacity: 0; transition: all 400ms cubic-bezier(0.86, 0, 0.07, 1) 200ms;");
    headerlogo.setAttribute("style", "opacity: 1; transition: all 0.3s ease-out");
    headerburger.setAttribute("style", "opacity: 1; transition: all 0.3s ease-out");
    menuisopen = 0;
}


function togglemenu() {
//    var navmenu = document.getElementById('navcontainer');
    if (menuisopen == 1) {
        closesesame();
//        alert('closed');
    } else {
        opensesame();
//        alert('open');
    }
}

function gototop() {
    window.scrollTo(0,0);
	var totop = document.getElementById("to-top");
	totop.style.display = "none";
}

function loadtext() {
$("#popup__text").load("faq.html  #privacy_text");
    };

document.onscroll = function () {
	pageload();
}
