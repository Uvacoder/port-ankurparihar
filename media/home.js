var ribbon_items = [
	{
		parent: "display_ribbon__slider_recent",
		timeID: "ribbon_time__recent",
		lastUpdate: 1564412606459,
		items: [
			{
				href: "/demo/Time-Table",
				title: "Time-Table Generator",
				imgsrc: "/media/demo/time-table-card.png",
				imgalt: "Time-Table Generator",
				subtitle: "Live Demo"
			},
			{
				href: "/res-iitr?tab=6-3",
				title: "Principles of Programming Languages Notes",
				imgsrc: "/media/iitr/princi of prog lang.png",
				imgalt: "Principles of programming languages",
				subtitle: "IITR Resources"
			},
			{
				href: "/res-iitr?tab=6-7",
				title: "Machine Learning Slides",
				imgsrc: "/media/iitr/machine learning.jpg",
				imgalt: "Machine Learning",
				subtitle: "IITR Resources"
			},
			{
				href: "/res-iitr?tab=6-7",
				title: "Image Captioning Assignment",
				imgsrc: "/media/iitr/machine learning.jpg",
				imgalt: "Image Captioning",
				subtitle: "IITR Resources"
			},
			{
				href: "/res-iitr?tab=6-6",
				title: "Goa Trip Photos",
				imgsrc: "/media/iitr/goa.jpg",
				imgalt: "Goa trip image",
				subtitle: "IITR Resources"
			},
			{
				href: "/res-iitr?tab=6-5",
				title: "Compiler Lab Codes",
				imgsrc: "/media/iitr/compiler lab.jpg",
				imgalt: "Compiler lab",
				subtitle: "IITR Resources"
			},
			{
				href: "/res-iitr?tab=6-4",
				title: "Compiler Design Notes",
				imgsrc: "/media/iitr/compiler design.jpg",
				imgalt: "Compiler Design",
				subtitle: "IITR Resources"
			},
			{
				href: "/res-iitr?tab=6-1",
				title: "Fractal Notes",
				imgsrc: "/media/iitr/fractals.jpg",
				imgalt: "fractals and applications",
				subtitle: "IITR Resources"
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
		lastUpdate: 1552035606222,
		items: [
			{
				href: "/demo/fractal-generator/",
				title: "Fractal generator",
				imgsrc: "/media/demo/Sierpinski_triangle-card.png",
				imgalt: "fractal image",
				subtitle: "Live Demo"
			},
			{
				href: "https://github.com/ankurparihar/git-ddb-docs",
				title: "Git-DDB",
				imgsrc: "/media/demo/oauth.png",
				imgalt: "oauth image",
				subtitle: "WebD Project"
			}
		]
	}
];

var maxListLimit = 12;

function getDayHourString(delta_time) {
	var day = Math.floor(delta_time / 86400000);
	// if (day > 365) {
	// 	var year = Math.floor(day * 4 / 1461);
	// 	var month = Math.floor((day - year * 1461 / 4) * 48 / 1461);
	// 	if (month == 0) {
	// 		return year + ((year > 1) ? " years" : " year") + " ago";
	// 	}
	// 	return year + ((year > 1) ? " years " : " year ") + month + ((month > 1) ? " months" : " month") + " ago";
	// }
	if (day > 365) {
		var year = Math.floor(day * 4 / 1461);
		return year + ((year > 1) ? " years" : " year") + " ago";
	}
	if (day > 30) {
		var month = Math.floor(day * 2 / 61);
		day = Math.floor(day - month * 61 / 2);
		return month + ((month > 1) ? " months " : " month ") + ((day == 0) ? "ago" : (day + ((day > 1) ? " days" : " day") + " ago"));
	}
	if (day > 6) {
		var week = Math.floor(day / 7);
		day = day - week * 7;
		return week + ((week > 1) ? " weeks " : " week ") + ((day == 0) ? "ago" : (day + ((day > 1) ? " days" : " day") + " ago"));
	}
	var hour = Math.floor((delta_time - day * 86400000) / 3600000);
	if (day == 0) {
		if (hour == 0) {
			return "Less than an hour ago";
		}
		return hour + ((hour > 1) ? " hours" : " hour") + " ago";
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
				<a href="`+ ribbon.items[i].href + `" draggable="false" title="` + ribbon.items[i].title + `" ondragstart="return false;">
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

// Home screen horizontal slider
var display_ribbon__slider, desktop_ribbon_btn_r, desktop_ribbon_btn_l;
var lastRibbonPos = 0;
var display_ribbon_width = null;

function moveRibbonSlider(elem, direction) {
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

function updateRibbonButtons(l, r) {
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

// hero image
var hero_image_1 = document.getElementById("hero_image-1");
var application = document.querySelector('.application');
var hero_image_scale = (application.scrollHeight - window.innerHeight) / (hero_image_1.height - window.innerHeight);
hero_image_scale = (hero_image_scale < 0) ? 0 : hero_image_scale;

function calculateHeroScale() {
	hero_image_scale = (application.scrollHeight - window.innerHeight) / (hero_image_1.height - window.innerHeight);
	hero_image_scale = (hero_image_scale < 0) ? 0 : hero_image_scale;
	if (hero_image_scale == 0) {
		hero_image_1.style.transform = "translateY(0px)";
	}
}

hero_image_1.onload = calculateHeroScale;

display_ribbons();
calculateHeroScale();
