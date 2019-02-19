var sidenav = document.getElementsByClassName('side-nav')[0];
var sidescroll_content = document.querySelector('.scroll-content');
var sidenav_scroll_container = document.querySelector('.side-nav-scroll-container');
var sidescroll = document.getElementById('custom-scroll');
var application = document.querySelector('.application');
var overlay = document.querySelector('.overlay');
var back_to_top_btn = document.querySelector('.back_to_top-btn');
var isMobile = false;

// Temporarily disable scroll https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
	window.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	window.onkeydown = null;
}

var toolbar = document.querySelector('nav');
// console.log(toolbar);
window.onscroll = function () {
	// console.log("scrolling...");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		// console.log("remove...")
		toolbar.classList.add("semi-transparent");
		toolbar.classList.remove("transparent");
		toolbar.classList.remove("elevation-0");
		back_to_top_btn.classList.add("back_to_top-btn-activ");

	}
	else {
		// console.log("add...")
		toolbar.classList.add("transparent");
		toolbar.classList.add("elevation-0");
		toolbar.classList.remove("semi-transparent");
		back_to_top_btn.classList.remove("back_to_top-btn-activ");
	}
	try {
		if (hero_image_scale != 0) {
			hero_image_1.style.transform = "translateY(" + (-(document.body.scrollTop || document.documentElement.scrollTop) / hero_image_scale) + "px)";
			// console.log(hero_image_1.style.transform);
		}
	} catch (error) {
		// console.log("Hero image error...");
	}
}

function toggleNav() {
	if (sidenav.getBoundingClientRect().left < 0) {
		// console.log("showing nav...");
		overlay.style.display = "block";
		overlay.classList.add("overlay-active");
		sidenav.style.setProperty("transform", "translateX(0px)");
	}
	else {
		// console.log("hiding nav...");
		overlay.style.display = "none";
		overlay.classList.remove("overlay-active");
		sidenav.style.setProperty("transform", "translateX(-250px)");
		enableScroll();
	}
}

overlay.addEventListener("click", function () {
	if (overlay.classList.contains('overlay-active')) toggleNav();
});
overlay.addEventListener('touchstart', function () {
	if (overlay.classList.contains('overlay-active')) toggleNav();
});

var toolbar_search_input = document.querySelector('.input-group_input input');
var toolbar_search_label = document.querySelector('.toolbar-search-box label');
var input_group_detail = document.querySelector(".input-group_details");

function alterSearchLabel() {
	// console.log("keydown...");
	if (toolbar_search_input.value != '') {
		toolbar_search_label.style.display = "none";
	}
	else {
		toolbar_search_label.style.display = "block";
	}
}

function backToTop() {
	var id;
	if (document.documentElement.scrollTop > 0) {
		id = setInterval(function () {
			document.documentElement.scrollBy(0, -20);
			// window.scrollBy(0, -10);
			// console.log("scrolling...");
			if (document.documentElement.scrollTop <= 0) {
				clearInterval(id);
			}
		}, 10);
	}
	if (document.body.scrollTop > 0) {
		id = setInterval(function () {
			// window.scrollBy(0, -10);
			document.body.scrollBy(0, -20);
			if (document.body.scrollTop <= 0) {
				clearInterval(id);
			}
		}, 10);
	}
}