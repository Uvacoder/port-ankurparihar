var sidenav = document.getElementsByClassName('side-nav')[0];
var sidescroll_content = document.querySelector('.scroll-content');
var sidenav_scroll_container = document.querySelector('.side-nav-scroll-container');
var sidescroll = document.getElementById('custom-scroll');
var application = document.querySelector('.application');
// var toolbar = document.getElementsByTagName('nav')[0];
var sidenav_top = 0;
var last_scroll = 0;
// var scrollable_height = document.querySelector('.scroll-track.verticle').scrollHeight;
var scroll_content_height = sidescroll_content.scrollHeight;
var max_scroll = 0;
// var min_scroll = scrollable_height - sidescroll_content.scrollHeight - document.querySelector('.blank-nav-box').scrollHeight;
// var scroller_scale = min_scroll/(sidescroll.scrollHeight - scrollable_height);
var overlay = document.querySelector('.overlay');
var back_to_top_btn = document.querySelector('.back_to_top-btn');
// var hero_image_0 = document.getElementById("hero_image-0");
var isMobile = false;
var hero_image_1 = document.getElementById("hero_image-1");
var hero_image_scale = (application.scrollHeight-window.innerHeight)/(hero_image_1.height-window.innerHeight);
hero_image_scale = (hero_image_scale<0) ? 0 : hero_image_scale;

document.onload = function(){
	calculateHeroScale();
};

function calculateHeroScale(){
	hero_image_scale = (application.scrollHeight-window.innerHeight)/(hero_image_1.height-window.innerHeight);
	hero_image_scale = (hero_image_scale<0) ? 0 : hero_image_scale;
	if(hero_image_scale==0){
		hero_image_1.style.transform = "translateY(0px)";
	}
}

// Simplebar
// new SimpleBar(document.getElementById('simple_scrollbar'));

// sidenav.addEventListener("mouseover", function(){
// 	// application.classList.add("noscroll");
// 	sidescroll.style.opacity = 0.5;
// 	disableScroll();
// 	// console.log("hi");
// });
// sidenav.addEventListener("mouseout", function(){
// 	// application.classList.remove("noscroll");
// 	sidescroll.style.opacity = 0;
// 	enableScroll();
// 	// console.log("bye");
// });

// var wheelDistance = function(evt){
// 	if (!evt) evt = event;
// 	var w=evt.wheelDelta, d=evt.detail;
// 	if (d){
// 		if (w) return w/d/40*d>0?1:-1; // Opera
// 		else return -d/3;              // Firefox;         TODO: do not /3 for OS X
// 	} else return w/120;             // IE/Safari/Chrome TODO: /3 for Chrome OS X
// };

// var wheelDirection = function(evt){
// 	if (!evt) evt = event;
// 	return (evt.detail<0) ? 1 : (evt.wheelDelta>0) ? 1 : -1;
// };

// sidenav_scroll_container.addEventListener("wheel", function(e){
// 	// console.log(e);
// 	last_scroll -= e.deltaY;
// 	last_scroll = (last_scroll<min_scroll) ? min_scroll : last_scroll;
// 	last_scroll = (last_scroll>max_scroll) ? max_scroll : last_scroll;
// 	sidescroll_content.style.transform = 'translate3d(0px, '+(last_scroll)+'px, 0px)';
// 	sidescroll.style.transform = 'translate3d(0px, '+(-last_scroll/scroller_scale)+'px, 0px)';
// }, {passive:true});


// Temporarily disable scroll https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e){
	e = e || window.event;
	if(e.preventDefault)
	e.preventDefault();
	e.returnValue = false;
}

function preventDefaultForScrollKeys(e){
	if(keys[e.keyCode]){
		preventDefault(e);
		return false;
	}
}

function disableScroll(){
	if(window.addEventListener) // older FF
	window.addEventListener('DOMMouseScroll', preventDefault, false);
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
	window.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll(){
	if(window.removeEventListener)
	window.removeEventListener('DOMMouseScroll', preventDefault, false);
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	window.onkeydown = null;
}

var toolbar = document.querySelector('nav');
// console.log(toolbar);
window.onscroll = function(){
	// console.log("scrolling...");
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		// console.log("remove...")
		toolbar.classList.add("semi-transparent");
		toolbar.classList.remove("transparent");
		toolbar.classList.remove("elevation-0");
		back_to_top_btn.classList.add("back_to_top-btn-activ");
		
	}
	else{
		// console.log("add...")
		toolbar.classList.add("transparent");
		toolbar.classList.add("elevation-0");
		toolbar.classList.remove("semi-transparent");
		back_to_top_btn.classList.remove("back_to_top-btn-activ");
	}
	if(hero_image_scale!=0){
		hero_image_1.style.transform = "translateY("+(-(document.body.scrollTop||document.documentElement.scrollTop)/hero_image_scale)+"px)";
		// console.log(hero_image_1.style.transform);
	}
}

function toggleNav(){
	if(sidenav.getBoundingClientRect().left < 0){
		// console.log("showing nav...");
		overlay.style.display = "block";
		overlay.classList.add("overlay-active");
		sidenav.style.setProperty("transform","translateX(0px)");
	}
	else{
		// console.log("hiding nav...");
		overlay.style.display = "none";
		overlay.classList.remove("overlay-active");
		sidenav.style.setProperty("transform","translateX(-250px)");
		enableScroll();
	}
}

overlay.addEventListener("click",function(){
	if(overlay.classList.contains('overlay-active')) toggleNav();
});
overlay.addEventListener('touchstart', function(){
	if(overlay.classList.contains('overlay-active')) toggleNav();
});

var toolbar_search_input = document.querySelector('.input-group_input input');
var toolbar_search_label = document.querySelector('.toolbar-search-box label');
var input_group_detail = document.querySelector(".input-group_details");

function alterSearchLabel(){
	// console.log("keydown...");
	if(toolbar_search_input.value!=''){
		toolbar_search_label.style.display = "none";
	}
	else{
		toolbar_search_label.style.display = "block";
	}
}

function backToTop(){
	var id;
	if(document.documentElement.scrollTop>0){
		id = setInterval(function(){
			document.documentElement.scrollBy(0,-10);
			// window.scrollBy(0, -10);
			// console.log("scrolling...");
			if(document.documentElement.scrollTop<=0){
				clearInterval(id);
			}
		}, 10);
	}
	if(document.body.scrollTop>0){
		id = setInterval(function(){
			// window.scrollBy(0, -10);
			document.body.scrollBy(0,-10);
			if(document.body.scrollTop<=0){
				clearInterval(id);
			}
		}, 10);
	}
}


function toggleSem(id){
	var iitr_title = document.querySelector('.iitr_title');
	var all_sems = document.getElementById("all_sems");
	var cur_subs = document.getElementById("cur_subs");
	var req_subs = document.getElementById("req_subs");
	// console.log(id);
	var n,m;
	// CSS
	n = document.getElementById(id);
	if(n.classList.contains('active_sem')) return;
	if(id=='iitr_sem_all'){
		m = document.getElementById('iitr_sem_curr');
	} else {
		m = document.getElementById('iitr_sem_all');
	}
	n.classList.add('active_sem');
	m.classList.remove('active_sem');
	iitr_title.innerHTML = (n.innerHTML=="All") ? "All" : "Spring 2019";
	if(id=="iitr_sem_all") {
		cur_subs.style.display = "none";
		all_sems.style.display = "block";
	}
	else {
		all_sems.style.display = "none";
		cur_subs.style.display = "block";
	}
	req_subs.style.display = document.getElementById("iitr_sem_exp").style.display = document.getElementById('iitr_sem_pxe-1').style.display = document.getElementById('iitr_sem_pxe-2').style.display = "none";
	document.getElementById("course_content").style.display = "none";
}

function toggleReqSem(semester){
	if(semester==cur_sem){
		toggleSem("iitr_sem_curr");
		return;
	}
	var iitr_title = document.querySelector('.iitr_title');
	var iitr_sem_exp = document.getElementById("iitr_sem_exp");
	var all_sems = document.getElementById("all_sems");
	var cur_subs = document.getElementById("cur_subs");
	var req_subs = document.getElementById("req_subs");
	document.getElementById('iitr_sem_all').classList.remove("active_sem");
	iitr_title.innerHTML = iitr_sem_exp.innerHTML = Semesters[semester].Name; /* '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,15L13,21L11.58,19.58L15.17,16H4V4H6V14H15.17L11.58,10.42L13,9L19,15Z" /></svg>' + */
	iitr_sem_exp.setAttribute("onclick", "showSubjects("+semester+"); toggleReqSem("+semester+")");
	all_sems.style.display = cur_subs.style.display = "none";
	req_subs.style.display = iitr_sem_exp.style.display = "block";
	iitr_sem_exp.style.backgroundColor = "#f3c669";
	document.getElementById("course_content").style.display = "none";
}

function showSubjects(semester){
	// console.log("clicked...");
	var sub_elem = document.getElementById('req_subs');
	if(!sub_elem) return;
	// Clean sub_elem
	sub_elem.innerHTML = "";
	var subjects = Semesters[semester].Courses;
	var id = 0;
	subjects.forEach(function(subject) {
		// console.log(subject.Title);
		var child = document.createElement("div");
		var buttn = document.createElement("button");
		buttn.setAttribute("onclick", "showSubject("+semester+","+id+")"); id++;
		var btndiv = document.createElement("div");
		btndiv.innerHTML = subject.Title;
		buttn.appendChild(btndiv);
		child.appendChild(buttn);
		child.classList.add("sub_box", "responsive", "center_flex");
		sub_elem.appendChild(child);
	});
	sub_elem.style.display = "block";
	document.getElementById("iitr_sem_exp").style.backgroundColor = "#f3c669";
	document.getElementById('iitr_sem_pxe-1').style.display = document.getElementById('iitr_sem_pxe-2').style.display = "none";
	document.getElementById("course_content").style.display = "none";
}

function showSubject(sem, id){
	var sub = Semesters[sem].Courses[id];
	if(!sub) return;
	var iitr_sem_pxe;
	if(sem==cur_sem){
		iitr_sem_pxe = document.getElementById('iitr_sem_pxe-1');
	} else {
		iitr_sem_pxe = document.getElementById('iitr_sem_pxe-2');
	}
	document.getElementById('iitr_sem_exp').style.backgroundColor = "#303030";
	document.getElementById('iitr_sem_all').classList.remove("active_sem");
	document.getElementById('iitr_sem_curr').classList.remove("active_sem");
	iitr_sem_pxe.innerHTML = sub.Code;
	document.querySelector('.iitr_title').innerHTML = sub.Title;
	iitr_sem_pxe.style.display = "block";
	document.getElementById('req_subs').style.display = document.getElementById('cur_subs').style.display = "none";
	// Show course content
	var course_content = document.getElementById("course_content");
	course_content.style.display = "flex";
	var contents = sub.Content;
	var string = "";
	for(cont in contents){
		string +=
		'<div class="course_content_box elevation-3">\
			<a href="'+contents[cont]+'" target="_blank">\
				<div class="course_content_box-svg">\
					<div>\
						'+svg_data[cont]+'\
					</div>\
				</div>\
				<div class="course_content_box-txt">'+cont+'</div>\
			</a>\
		</div>';
	}
	course_content.innerHTML = string;
}

// var touch_start;
// var touch_now;
// sidenav_scroll_container.addEventListener('touchstart', function (event) {
// 	// document.getElementById("cur_subs").style.display = "none";
// 	console.log("hello");
// 	touch_start = event.clientX;
// });

// var wheelDistance = function(evt){
// 	if (!evt) evt = event;
// 	var w=evt.wheelDelta, d=evt.detail;
// 	if (d){
// 		if (w) return w/d/40*d>0?1:-1; // Opera
// 		else return -d/3;              // Firefox;         TODO: do not /3 for OS X
// 	} else return w/120;             // IE/Safari/Chrome TODO: /3 for Chrome OS X
// };

// var wheelDirection = function(evt){
// 	if (!evt) evt = event;
// 	return (evt.detail<0) ? 1 : (evt.wheelDelta>0) ? 1 : -1;
// };

// var x1,y1,x2,y2,dx,dy;

// function handleTouchStart(evt){
// 	x1 = evt.touches[0].clientX;
// 	y1 = evt.touches[0].clientY;
// }

// function handleTouchMove(evt){
// 	if(!x1 || !y1) return;
	
// 	x2 = evt.touches[0].clientX;
// 	y2 = evt.touches[0].clientY;

// 	dx = x2 - x1;
// 	dy = y2 - y1;

// 	x1 = x2;
// 	y1 = y2;
// 	// x1 = y1 = null;
// }

// sidenav_scroll_container.addEventListener("wheel", function(e){
// 	// console.log(e);
// 	last_scroll -= e.deltaY;
// 	last_scroll = (last_scroll<min_scroll) ? min_scroll : last_scroll;
// 	last_scroll = (last_scroll>max_scroll) ? max_scroll : last_scroll;
// 	sidescroll_content.style.transform = 'translate3d(0px, '+(last_scroll)+'px, 0px)';
// 	sidescroll.style.transform = 'translate3d(0px, '+(-last_scroll/scroller_scale)+'px, 0px)';
// 	// e.stopPropagation();
// }, {passive:true});

// sidenav_scroll_container.addEventListener('touchstart', function(event) {
// 	handleTouchStart(event);
// 	// event.preventDefault();
// 	event.stopPropagation();
// }, false);
// var counter = 0;
// sidenav_scroll_container.addEventListener('touchmove', function(event) {
// 	event.preventDefault();
// 	event.stopPropagation();
// 	handleTouchMove(event);
// 	// console.log(event);
// 	// console.log(last_scroll,dy);
// 	counter++;
// 	last_scroll += dy;
// 	last_scroll = (last_scroll<min_scroll) ? min_scroll : last_scroll;
// 	last_scroll = (last_scroll>max_scroll) ? max_scroll : last_scroll;
// 	sidescroll_content.style.transform = 'translate3d(0px, '+(last_scroll)+'px, 0px)';
// 	// document.getElementById('cur_subs').innerHTML = counter + " " + dy;
// });

hero_image_1.onload = calculateHeroScale;


// Home screen horizontal slider
// const display_ribbon__scroll_desktop = document.querySelector(".display_ribbon__scroll.display_ribbon__desktop");
// var isMouseDown = 0;
// var mousePosX1, mousePosX2;
// display_ribbon__slider.addEventListener("mousedown", function(e){
// 	mousePosX1 = e.clientX;
// 	isMouseDown = 1;
// });
// display_ribbon__slider.addEventListener("mouseup", function(e){
// 	isMouseDown = 0;
// });
// display_ribbon__slider.addEventListener("mousemove", function(e){
// 	if(isMouseDown===1){
// 		mousePosX2 = e.clientX;
// 		// console.log(mousePosX2-mousePosX1);
// 		display_ribbon__slider.style.transform = "translate3d("+(mousePosX2-mousePosX1)+"px, 0px, 0px)";
// 		mousePosX1 = mousePosX2;
// 	}
// });
var display_ribbon__slider, desktop_ribbon_btn_r, desktop_ribbon_btn_l;
var lastRibbonPos = 0;
var display_ribbon_width = null;
if(display_ribbon_width){
	if(display_ribbon_width < window.innerWidth) {
		desktop_ribbon_btn_r.disabled = "disabled";
		desktop_ribbon_btn_r.classList.add("btn_htv--disabled");
	}
}
function moveRibbonSlider(direction){
	if(!display_ribbon__slider){
		display_ribbon__slider = document.getElementById("display_ribbon__slider");
	}
	if(!display_ribbon_width){
		display_ribbon_width = display_ribbon__slider.getBoundingClientRect().width;
	}
	lastRibbonPos += direction*window.innerWidth/1.5;
	if(direction===1){
		lastRibbonPos = (lastRibbonPos>=0) ? 0:lastRibbonPos;
	}
	if(direction===-1){
		if(display_ribbon_width>window.innerWidth){
			lastRibbonPos = (lastRibbonPos<=window.innerWidth-display_ribbon_width) ? window.innerWidth - display_ribbon_width : lastRibbonPos;
		} else {
			lastRibbonPos = 0;
		}
	}
	display_ribbon__slider.style.transform = "translate3d("+lastRibbonPos+"px, 0px, 0px)";
	updateRibbonButtons();
}

function updateRibbonButtons(){
	if(!desktop_ribbon_btn_l || !desktop_ribbon_btn_r){
		desktop_ribbon_btn_l = document.getElementById("desktop_ribbon_btn_left");
		desktop_ribbon_btn_r = document.getElementById("desktop_ribbon_btn_right");
	}
	if(lastRibbonPos<0){
		desktop_ribbon_btn_l.disabled = false;
		desktop_ribbon_btn_l.classList.remove("btn_htv--disabled");
	}else{
		desktop_ribbon_btn_l.disabled = "disabled";
		desktop_ribbon_btn_l.classList.add("btn_htv--disabled");
	}
	if(lastRibbonPos<=window.innerWidth-display_ribbon_width){
		desktop_ribbon_btn_r.disabled = "disabled";
		desktop_ribbon_btn_r.classList.add("btn_htv--disabled");
	} else{
		desktop_ribbon_btn_r.disabled = false;
		desktop_ribbon_btn_r.classList.remove("btn_htv--disabled");
	}
}