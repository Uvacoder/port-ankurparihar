// ======================== Elements and Data Structures ========================

const overlay = document.getElementById('overlay')
const dialog = document.getElementById('dialog')
const sidenav = document.getElementById('side-navigation')
const btnNavToggle = document.querySelector('button.nav_drawer_toggle')
const btnSignIn = document.querySelector('.user-options a.log-in-text')
const btnBackToTop = document.getElementById('back-to-top-btn')
const toolbar = document.getElementById('toolbar')
const toolbarSearch = toolbar.querySelector('#toolbar-search')
const toolbarSearchBar = toolbarSearch.querySelector('.toolbar-search__bar')
const toolbarSearchInput = toolbarSearch.querySelector('input')
const toolbarSearchLabel = toolbarSearch.querySelector('label')
const footerContainer = document.getElementById('footer-container')
const siteDescriptionContainer = document.getElementById('sd-container')
const contentRoot = document.querySelector('main .content--wrap .container')
const pageLocationElem = document.getElementById('page-location-text')
const pageStyleElem = document.getElementById('pageStyle')


// ================================ Overlay Logic ===============================

var overlayData = {
	elements: []
}

overlay.addEventListener('click', deactivateOverlay)
overlay.addEventListener('touchstart', deactivateOverlay, { passive: true })

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

// ================================ Dialog Logic ===============================

dialog.parentElement.addEventListener('click', (e) => {
	if (e.target != dialog.parentElement) return
	hideDialog()
})
dialog.parentElement.addEventListener('touchstart', (e) => {
	if (e.target != dialog.parentElement) return
	hideDialog()
}, { passive: true })

/**
 * Show dialog with html content  
 * - Above application content
 * - Below navigation and toolbar  
 * - Below overlay  
 * 
 * @param {String} innerHTML
 */
function showDialog(innerHTML) {
	dialog.innerHTML = innerHTML
	dialog.parentElement.classList.add('dialog__content__active')
	dialog.classList.add('dialog--active')
}

/**
 * Remove dialog  
 */
function hideDialog() {
	dialog.classList.remove('dialog--active')
	dialog.parentElement.classList.remove('dialog__content__active')
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

toolbarSearch.oninput = alterSearchLabel

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
window.addEventListener('scroll', scrollTopUpdate, { passive: true })

/**
 * Update elements based on scrolling position   
 * Mostly useful upon browser refresh
 */
function scrollTopUpdate() {
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
	// btnSignIn,		// sign in button on toolbar
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
async function showRippleEffect(t, e) {
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

// ================================= SPA Logic =================================
/**
 * The heart of this application
 */
var spa = {
	init: async () => {
		// Set click event listeners on toolbar, navigation and footer
		document.querySelectorAll('nav a, aside#side-navigation a, footer a').forEach(toolAnchor => {
			toolAnchor.addEventListener('click', (e) => {
				if (e.ctrlKey) window.open(toolAnchor.href)
				else {
					spa.navigate(toolAnchor.href)
				}
				e.preventDefault()
			})
		})
		document.querySelectorAll('aside#side-navigation a').forEach(asideAnchor => {
			asideAnchor.addEventListener('mouseup', deactivateOverlay)
		})
		if (curr_page === undefined) {
			return
		}
		const urlInfo = URLDissect(window.location.href)
		await import(urlInfo.protocol + '://' + urlInfo.domain + (urlInfo.path == '/' ? '/script.js' : (urlInfo.path + '/script.js'))).then(response => { })
		spa.data[curr_page].onStaticLoad(contentRoot, urlInfo)
		scrollTopUpdate()
	},
	loadPage: async (url) => {
		hideDialog()
		deactivateOverlay()
		const urlInfo = URLDissect(url)
		const page = urlInfo.path
		try {
			// Load script
			if (spa.data[page] == undefined) {
				await import(urlInfo.protocol + '://' + urlInfo.domain + (urlInfo.path == '/' ? '/script.js' : (urlInfo.path + '/script.js'))).then(response => { })
			}
			contentRoot.innerHTML = ''
			// remove existing pageStyle
			let injectedCSS = document.getElementById('injectedCSS')
			if (injectedCSS) {
				injectedCSS.parentElement.removeChild(injectedCSS)
			}
			// Apply style
			pageStyleElem.innerHTML = spa.data[page].style
			// Apply content
			spa.data[page].apply(contentRoot, urlInfo)
			// Scroll back to top
			backToTop()
			if (page != curr_page) {
				// Update navigation panel
				var nav = document.getElementById(spa.data[curr_page].navID)
				nav.classList.remove('primary--text', 'list__tile--active')
				nav = document.getElementById(spa.data[page].navID)
				nav.classList.add('primary--text', 'list__tile--active')
				// Update page location text
				pageLocationElem.innerHTML = spa.data[page].page_loc_text
				// Update curr_page
				curr_page = page
				// Update address bar URL
				if (spa.state.updateWindowHistory) {
					split = url.split('?')
					url = split[0]
					if (url[url.length - 1] != '/') url += '/'
					if (split.length == 2) url = url + '?' + split[1]
					window.history.pushState({ title: null, url: urlInfo.url }, null, url)
				}
			}
		} catch (error) {
			console.log(error)
		}
	},
	navigate: async (url, target) => {
		var URLInfo = URLDissect(url)
		if (target != undefined) {
			window.open(url, target)
		} else {
			var originInfo = URLDissect(window.location.href)
			if (URLInfo.domain === originInfo.domain && URLInfo.protocol === originInfo.protocol) {
				spa.loadPage(url)
			} else {
				window.open(url, "_blank")
			}
		}
	},
	register: (page, data) => {
		spa.data[page] = data
	},
	windowPop: (e) => {
		url = e.target.location.href
		targetInfo = URLDissect(url)
		sourceInfo = URLDissect(spa.state.window__url)
		if (targetInfo.protocol === sourceInfo.protocol && targetInfo.domain === sourceInfo.domain) {
			spa.state.updateWindowHistory = false
			spa.loadPage(url)
			spa.state.updateWindowHistory = true
			spa.state.window__url = url
		}
	},
	data: {},
	state: {
		updateWindowHistory: true,
		window__url: ''
	}
}

// ================================ URL utilities ===============================

/**
 * Return useful into from url namely - protocol, domain name, path, params
 * @param {String} url 
 */
function URLDissect(url) {
	var result = {
		url: url,               // https://ankurparihar.github.io/res-iitr?tab=6-3&theme=light
		protocol: undefined,    // https
		domain: undefined,      // ankurparihar.github.io
		path: undefined,        // /res-iitr
		param: {}               // {tab: '6-3', theme: 'light'}
	}
	url = url.split('://')
	result.protocol = url[0]
	url = url[1]
	result.domain = url.split('?')[0].split('/', 1)[0]
	url = url.replace(result.domain, '').split('?')
	result.path = url[0]
	if (result.path.length === 0 || result.path[0] != '/') result.path = '/' + result.path
	if (result.path.length > 1 && result.path[result.path.length - 1] == '/') result.path = result.path.slice(0, -1)
	if (url.length < 2) return result
	url = url[1].split('&')
	result.param = {}
	url.forEach(param => {
		param = param.split('=')
		result.param[param[0]] = param.length > 1 ? param[1] : ''
	})
	return result
}

// ======================== Download and Injection Logic ========================

/**
 * Download content from url
 * @param {String} url 
 * @returns response or `null`
 */
function download(url) {
	var xhttp;
	if (window.XMLHttpRequest) {
		// code for modern browsers
		xhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			return this.responseText;
		}
		else if (this.readyState == 4) {
			return null
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

/**
 * Inject Javascript in DOM
 * @param {String} url
 * @param {String} id default `injectedJS`
 * @param {Boolean} removePrevious default `true`
 */
function injectJS(url, id, removePrevious) {
	if (url === undefined || url == '') return
	if (id === undefined) id = 'injectedJS'
	if (removePrevious === undefined) removePrevious = true

	var JSelem
	// remove previous if exists
	if (removePrevious) {
		JSelem = document.getElementById(id);
		if (JSelem) {
			JSelem.parentElement.removeChild(JSelem);
		}
	}

	jsELem = document.createElement("script");
	jsELem.id = "injectedJS";
	jsELem.type = "text/javascript";
	jsELem.src = url;
	document.body.appendChild(jsELem);
}

function injectCSS(url, id, removePrevious) {
	if (url === undefined || url == '') return
	if (id === undefined) id = 'injectedCSS'
	if (removePrevious === undefined) removePrevious = false

	var CSSelem = document.getElementById(id)
	if (CSSelem && removePrevious) {
		CSSelem.parentElement.removeChild(CSSelem)
		CSSelem = null
	}

	if (CSSelem) {
		CSSelem.href = url
	} else {
		CSSelem = document.createElement('link')
		CSSelem.id = id
		CSSelem.type = 'text/css'
		CSSelem.rel = 'stylesheet'
		CSSelem.href = url
		document.head.appendChild(CSSelem)
	}
}

// ================================ Miscellaneous ===============================

/** Remove focus from active element after click*/
document.addEventListener('click', function (e) {
	if (document.activeElement.toString() == '[object HTMLButtonElement]') document.activeElement.blur();
})

/** When user navigates between history entries of window */
spa.state.window__url = window.location.href
window.onpopstate = spa.windowPop

/** Initialize SPA process */
window.onload = () => {
	spa.init()
}