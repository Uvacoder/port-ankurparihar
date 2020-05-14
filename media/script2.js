// ======================== Elements and Data Structures ========================

var overlay = document.getElementById('overlay')
var sidenav = document.getElementById('side-navigation')
var btnNavToggle = document.querySelector('button.nav_drawer_toggle')
var btnSignIn = document.querySelector('.user-options button.log-in-text')
var btnBackToTop = document.getElementById('back-to-top-btn')
var toolbar = document.getElementById('toolbar')
var toolbarSearch = toolbar.querySelector('#toolbar-search')
var toolbarSearchBar = toolbarSearch.querySelector('.toolbar-search__bar')
var toolbarSearchInput = toolbarSearch.querySelector('input')
var toolbarSearchLabel = toolbarSearch.querySelector('label')
var siteDescriptionContainer = document.getElementById('sd-container')

overlayData = {
	elements: []
}

// ================================= Common Data ================================
// It will be injected into html template, thus reducing copy-pasting across html templates

/**
 * Site Description content
 */
var siteDescriptionContent = `<p>site-description site-description site-description site-descriptionsite-description site-description site-description site-description site-descriptionsite-description site-description site-description site-description site-descriptionsite-description</p><p>site-description site-description site-description site-descriptionsite-description site-description site-description site-description site-description site-descriptionsite-description site-description site-description</p>`

// Set up data
siteDescriptionContainer.innerHTML = siteDescriptionContent


// ================================ Overlay Logic ===============================

overlay.addEventListener('click', deactivateOverlay)
overlay.addEventListener('touchstart', deactivateOverlay)

/**
 * Cover entire application area with transparent layer  
 * - Above application content
 * - Below navigation and toolbar  
 * 
 * _Note_: Register elements with `registerOverlayElement`
 */
function activateOverlay() {
	overlay.classList.add('overlay--active')
}

/**
 * Remove overlay  
 * Also deactivate registered elements that caused overlay
 */
function deactivateOverlay() {
	overlay.classList.remove('overlay--active')
	overlayData.elements.forEach(element => {
		element.f()
	});
	overlayData.elements.splice(0, overlayData.elements.length)
}

/**
 * Register elements that will cause overlay activation  
 * If user does not interact with element, event propogates to overlay  
 * In this case overlay will deactivate itself and registered element  
 * function paramenter decides how it will be deactivated
 * @param {HTMLElement} e 
 * @param {Function} f 
 */
function registerOverlayElement(ele, fun) {
	overlayData.elements.push({
		e: ele,
		f: fun
	})
}

// ============================== Navigation Logic ==============================

btnNavToggle.addEventListener('click', toggleNav)

/**
 * Show navigation panel
 */
function showNav() {
	sidenav.classList.replace('navigation-drawer--close', 'navigation-drawer--open')
	sidenav.style.setProperty('transform', 'translateX(0px)')
}

/**
 * Hide navigation panel
 */
function hideNav() {
	sidenav.classList.replace('navigation-drawer--open', 'navigation-drawer--close')
	sidenav.style.setProperty('transform', 'translateX(-250px)')
}

/**
 * Toggle navigation  
 * Show hidden navigation or Hide visible navigation
 */
function toggleNav() {
	if (sidenav.getBoundingClientRect().left < 0) {
		// navigation currently closed
		registerOverlayElement(sidenav, hideNav)
		showNav()
		activateOverlay()
	} else {
		// navigation currently active
		hideNav()
		deactivateOverlay()
	}
}

// ============================ Toolbar Search Logic ============================

toolbarSearchInput.onfocus = () => {
	toolbarSearch.classList.add('focused')
	toolbarSearchBar.classList.add('input-group--focused', 'input-group--tab-focused')
}

toolbarSearchInput.onblur = () => {
	toolbarSearch.classList.remove('focused')
	toolbarSearchBar.classList.remove('input-group--focused', 'input-group--tab-focused')
}

/**
 * Remove `Search` label from search bar if input has some value
 */
function alterSearchLabel() {
	if (toolbarSearchInput.value != '') {
		toolbarSearchLabel.style.display = 'none'
	} else {
		toolbarSearchLabel.style.display = 'block'
	}
}

// ================= Onscroll Events: Toolbar, back-to-top button =================

/**
 * @type {Number}
 */
var newScrollTop, prevScrollTop = document.documentElement.scrollTop
/**
 * @type {Boolean}
 */
var toolbarBlack = toolbar.classList.contains('semi-transparent')

/**	Toggle visibility of back-to-top button and transparency of toolbar */
window.onscroll = function (e) {
	newScrollTop = document.documentElement.scrollTop
	if (!toolbarBlack && (newScrollTop > 20)) {
		// show back-to-top, semi-trans toolbar
		toolbar.classList.add('semi-transparent')
		toolbar.classList.remove('transparent', 'elevation-0')
		toolbarBlack = true
		btnBackToTop.classList.add('fab-transition-enter', 'fab-transition-enter-active')
		btnBackToTop.style.display = 'block'
		setTimeout(() => { btnBackToTop.classList.remove('fab-transition-enter', 'fab-transition-enter-active') }, 100)
	}
	else if (toolbarBlack && newScrollTop <= 20) {
		// hide back-to-top, transparent toolbar
		toolbar.classList.remove('semi-transparent')
		toolbar.classList.add('transparent', 'elevation-0')
		toolbarBlack = false
		btnBackToTop.classList.add('fab-transition-enter', 'fab-transition-enter-active')
	}
}

// ================================= Back To Top =================================

/**
 * Scroll to top
 */
function backToTop() {
	var id;
	if (document.documentElement.scrollTop > 0) {
		id = setInterval(function () {
			document.documentElement.scrollBy(0, -20);
			if (document.documentElement.scrollTop <= 0) {
				clearInterval(id);
			}
		}, 10);
	}
	if (document.body.scrollTop > 0) {
		id = setInterval(function () {
			document.body.scrollBy(0, -20);
			if (document.body.scrollTop <= 0) {
				clearInterval(id);
			}
		}, 10);
	}
}
btnBackToTop.onclick = backToTop

// ================================ Ripple Effect ================================

var rippleEnabledElements = [
	btnNavToggle,	// navigation toggle button
	btnSignIn,		// sign in button on toolbar
	btnBackToTop,	// back to top button
]

rippleEnabledElements.forEach(element => {
	element.addEventListener('click', (event) => {
		showRippleEffect(event, element)
	})
})

sidenav.querySelectorAll('a').forEach(node => {
	node.addEventListener('click', (event) => {
		showRippleEffect(event, node)
	})
})


/**
 * Display ripple effect
 * @param {Event} t 
 * @param {HTMLElement} e 
 */
function showRippleEffect(t, e) {
	var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
	var n = document.createElement("span")
	var s = document.createElement("span")
	n.appendChild(s)
	n.className = "ripple__container"
	i.class && (n.className += " " + i.class)
	var r = e.clientWidth > e.clientHeight ? e.clientWidth : e.clientHeight
	s.className = "ripple__animation"
	s.style.width = r * (i.center ? 1 : 2) + "px"
	s.style.height = s.style.width
	e.appendChild(n)
	var o = window.getComputedStyle(e)
	"absolute" !== o.position && "fixed" !== o.position && (e.style.position = "relative");
	var a = e.getBoundingClientRect()
	l = i.center ? "50%" : t.clientX - a.left + "px"
	u = i.center ? "50%" : t.clientY - a.top + "px"
	s.classList.add("ripple__animation--enter", "ripple__animation--visible")
	st(s, "translate(-50%, -50%) translate(" + l + ", " + u + ") scale3d(0.01,0.01,0.01)")
	s.dataset.activated = Date.now()
	setTimeout((function () {
		s.classList.remove("ripple__animation--enter")
		st(s, "translate(-50%, -50%) translate(" + l + ", " + u + ")  scale3d(0.99,0.99,0.99)")
	}
	), 0)
	t = e
	e = t.getElementsByClassName("ripple__animation")
	if (0 !== e.length) {
		i = e[e.length - 1]
		n = Date.now() - Number(i.dataset.activated)
		r = 400 - n
		r = r < 0 ? 0 : r
		setTimeout((function () {
			i.classList.remove("ripple__animation--visible"),
				setTimeout((function () {
					try {
						e.length < 1 && (t.style.position = null)
						i.parentNode && t.removeChild(i.parentNode)
					} catch (t) { }
				}
				), 300)
		}
		), r)
	}
}

/**
 * style transform an element
 * @param {HTMLElement} t 
 * @param {any} e 
 */
function st(t, e) {
	t.style.transform = e
	t.style.webkitTransform = e
}

// ================================ Miscellaneous ===============================

/** Remove focus from active element after click*/
document.addEventListener('click', function (e) {
	if (document.activeElement.toString() == '[object HTMLButtonElement]') document.activeElement.blur();
})