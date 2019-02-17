var ribbon_items = [
	{
		parent: "display_ribbon__slider_recent",
		timeID: "ribbon_time__recent",
		lastUpdate: 1549045800000,
		items: [
			{
				href: "/demo/fractal-generator/",
				title: "Fractal generator",
				imgsrc: "/media/demo/Sierpinski_triangle-card.png",
				imgalt: "fractal image",
				subtitle: "Live Demo"
			},
			{
				href: "/demo/fractal-generator/",
				title: "Fractal generator",
				imgsrc: "/media/demo/Sierpinski_triangle-card.png",
				imgalt: "fractal image",
				subtitle: "Live Demo"
			},
			{
				href: "/demo/fractal-generator/",
				title: "Fractal generator",
				imgsrc: "/media/demo/Sierpinski_triangle-card.png",
				imgalt: "fractal image",
				subtitle: "Live Demo"
			}
		]
	},
	{
		parent: "display_ribbon__slider_mstwntd",
		timeID: "ribbon_time__mstwntd",
		lastUpdate: 1550349642763,
		items: [
			{
				href: "/demo/fractal-generator/",
				title: "Fractal generator",
				imgsrc: "/media/demo/Sierpinski_triangle-card.png",
				imgalt: "fractal image",
				subtitle: "Live Demo"
			},
			{
				href: "/demo/fractal-generator/",
				title: "Fractal generator",
				imgsrc: "/media/demo/Sierpinski_triangle-card.png",
				imgalt: "fractal image",
				subtitle: "Live Demo"
			},
			{
				href: "/demo/fractal-generator/",
				title: "Fractal generator",
				imgsrc: "/media/demo/Sierpinski_triangle-card.png",
				imgalt: "fractal image",
				subtitle: "Live Demo"
			},
			{
				href: "/demo/fractal-generator/",
				title: "Fractal generator",
				imgsrc: "/media/demo/Sierpinski_triangle-card.png",
				imgalt: "fractal image",
				subtitle: "Live Demo"
			},
			{
				href: "/demo/fractal-generator/",
				title: "Fractal generator",
				imgsrc: "/media/demo/Sierpinski_triangle-card.png",
				imgalt: "fractal image",
				subtitle: "Live Demo"
			},
			{
				href: "/demo/fractal-generator/",
				title: "Fractal generator",
				imgsrc: "/media/demo/Sierpinski_triangle-card.png",
				imgalt: "fractal image",
				subtitle: "Live Demo"
			}
		]
	}
];

var maxListLimit = 12;

function getDayHourString(delta_time) {
	var day = Math.floor(delta_time / 86400000);
	var hour = Math.floor((delta_time - day * 86400000) / 3600000);
	if (day == 0) {
		if (hour == 0) {
			return "Less than an hour ago";
		}
		return hour + ((hour > 1) ? " hours " : " hour ") + "ago";
	}
	return day + ((day > 1) ? " days " : " day ") + ((hour == 0) ? "ago" : hour + ((hour > 1) ? " hours " : " hour ") + "ago");
}

function display_ribbons() {
	for (var k = 0; k < ribbon_items.length; ++k) {
		ribbon = ribbon_items[k];
		ribbonElem = document.getElementById(ribbon.parent);
		document.getElementById(ribbon.timeID).innerHTML = getDayHourString((new Date()).getTime() - ribbon.lastUpdate);
		for (var i = 0; i < maxListLimit && i < ribbon.items.length; ++i) {
			var divElem = document.createElement("div");
			divElem.classList.add("elevation-3", "mb-16", "hvc", "item", "card");
			divElem.setAttribute("style", "height:auto");
			divElem.innerHTML = `
				<a href="`+ [i].href + `" draggable="false" title="` + ribbon.items[i].title + `" ondragstart="return false;">
					<div>
						<div class="hvc__media card__media" style="height:auto">
							<div class="card__media__content">
								<div class="hvc__media__cover-container">
									<div class="hvc__media__cover-aspect-ratio">
										<div class="hvc__media__cover">
											<div>
												<img src="`+ ribbon.items[i].imgsrc + `" alt="` + ribbon.items[i].imgalt + `" title="` + ribbon.items[i].title + `" draggable="false" class="hvc__media__cover__image" width="auto" height="auto">
											</div>
										</div>
										<div class="hvc__media__cover-glass"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="card__title">
							<div class="hvc__content flex column justify-center align-center">
								<div class="spacer"></div>
								<div class="hv-title">`+ ribbon.items[i].title + `</div>
								<div class="hv-subtitle">`+ ribbon.items[i].subtitle + `</div>
								<div class="spacer"></div>
							</div>
						</div>
					</div>
				</a>
			`;
			ribbonElem.appendChild(divElem);
		}
	}
}

display_ribbons();

// Home screen horizontal slider
var display_ribbon__slider, desktop_ribbon_btn_r, desktop_ribbon_btn_l;
var lastRibbonPos = 0;
var display_ribbon_width = null;

function moveRibbonSlider(elem, direction) {
	/**@type {HTMLElement} */
	var ribParElem = elem.parentElement.parentElement.parentElement;
	display_ribbon__slider = ribParElem.childNodes[3].childNodes[1];
	lastRibbonPos = display_ribbon__slider.getBoundingClientRect().left;
	display_ribbon_width = display_ribbon__slider.getBoundingClientRect().width;
	lastRibbonPos += direction * window.innerWidth / 1.5;
	if (direction === 1) {
		lastRibbonPos = (lastRibbonPos >= 0) ? 0 : lastRibbonPos;
	}
	if (direction === -1) {
		if (display_ribbon_width > window.innerWidth) {
			lastRibbonPos = (lastRibbonPos <= window.innerWidth - display_ribbon_width) ? window.innerWidth - display_ribbon_width : lastRibbonPos;
		} else {
			lastRibbonPos = 0;
		}
	}
	display_ribbon__slider.style.transform = "translate3d(" + lastRibbonPos + "px, 0px, 0px)";
	ribParElem = ribParElem.childNodes[1].childNodes[5];
	updateRibbonButtons(ribParElem.childNodes[1], ribParElem.childNodes[3]);
}

function updateRibbonButtons(l,r) {
	desktop_ribbon_btn_l = l;
	desktop_ribbon_btn_r = r;
	if (lastRibbonPos < 0) {
		desktop_ribbon_btn_l.disabled = false;
		desktop_ribbon_btn_l.classList.remove("btn_htv--disabled");
	} else {
		desktop_ribbon_btn_l.disabled = "disabled";
		desktop_ribbon_btn_l.classList.add("btn_htv--disabled");
	}
	if (lastRibbonPos <= window.innerWidth - display_ribbon_width) {
		desktop_ribbon_btn_r.disabled = "disabled";
		desktop_ribbon_btn_r.classList.add("btn_htv--disabled");
	} else {
		desktop_ribbon_btn_r.disabled = false;
		desktop_ribbon_btn_r.classList.remove("btn_htv--disabled");
	}
}