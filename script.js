const home__data = {
	page_loc_text: "Home",
	template: `
		<div class="landing full-page-height">
			<div class="parallax-container fixed" style="height:100%">
				<div class="parallax">
					<img id="parallax-container-img" alt="parallax image" src="/media/walls/16.jpg" class="hero_image">
				</div>
			</div>
			<div class="parallax-container">
				<div class="parallax">
					<div class="parallax-content">
						<h1>Ankur's Little Playground</h1>
						<span class="subtext">I use this portal to display my work although not all and provide various resources like projects, notes, codes, course contents etc. that are availabe to public.</span>
						<!-- <div class="gradient"></div> -->
					</div>
				</div>
			</div>
			<div class="landing__content">
			</div>
		</div>
	`,
	data: {
		ribbon_items: [
			{
				name: "Recent Uploads",
				timeID: "home--recent-time",
				lastUpdate: 1567616993081,
				items: [
					{
						href: "/res-iitr",
						title: "Previous Years' content uploaded",
						imgsrc: "/media/iitr/sh.jpg",
						imgalt: "IITR Resources",
						subtitle: "IITR Resources"
					},
					{
						href: "/res-iitr?tab=timetable",
						title: "IITR Time-Table",
						imgsrc: "/media/iitr/iitr.jpg",
						imgalt: "IITR Time-Table",
						subtitle: "IITR Resources"
					},
					{
						href: "/res-iitr?tab=6-3",
						title: "Principles of Programming Languages Notes",
						imgsrc: "/media/iitr/princi_of_prog_lang.jpg",
						imgalt: "Principles of programming languages",
						subtitle: "IITR Resources"
					},
					{
						href: "/res-iitr?tab=6-7",
						title: "Machine Learning Slides",
						imgsrc: "/media/iitr/machine_learning.jpg",
						imgalt: "Machine Learning",
						subtitle: "IITR Resources"
					},
					{
						href: "/res-iitr?tab=6-7",
						title: "Image Captioning Assignment",
						imgsrc: "/media/iitr/machine_learning.jpg",
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
						imgsrc: "/media/iitr/compiler_lab.jpg",
						imgalt: "Compiler lab",
						subtitle: "IITR Resources"
					},
					{
						href: "/res-iitr?tab=6-4",
						title: "Compiler Design Notes",
						imgsrc: "/media/iitr/compiler_design.jpg",
						imgalt: "Compiler Design",
						subtitle: "IITR Resources"
					},
					{
						href: "/res-iitr?tab=6-1",
						title: "Fractal Notes",
						imgsrc: "/media/iitr/fractals.jpg",
						imgalt: "fractals and applications",
						subtitle: "IITR Resources"
					}
				]
			},
			{
				name: "Showcase",
				timeID: "home--showcase-time",
				lastUpdate: 1564440492137,
				items: [
					{
						href: "/demo/Time-Table",
						title: "Time-Table Generator",
						imgsrc: "/media/demo/time-table-card.png",
						imgalt: "Time-Table Generator",
						subtitle: "Live Demo"
					},
					{
						href: "https://github.com/ankurparihar/git-ddb-docs",
						title: "Git-DDB",
						imgsrc: "/media/demo/oauth.png",
						imgalt: "oauth image",
						subtitle: "WebD Project"
					},
					{
						href: "/demo/fractal-generator",
						title: "Fractal generator",
						imgsrc: "/media/demo/Sierpinski_triangle-card.png",
						imgalt: "fractal image",
						subtitle: "Live Demo"
					},
				]
			}
		]
	},
	apply: (root) => {
		if(!root) {
			console.log('Error: missing argument - root')
			return
		}
		root.innerHTML = home__data.template
		const landing = root.querySelector('.landing__content')
		home__data.data.ribbon_items.forEach(ribbon => {
			const ribbonRoot = document.createElement('div')
			ribbonRoot.setAttribute('class', 'htv-carousel noselect mb-5')
			ribbonRoot.innerHTML = `
			<div class="htv-carousel__header flex row justify-left align-center wrap mb-3">
				<div class="htv-carousel__header__title flex column">
					<span>`+ ribbon.name +`</span>
					<span id="`+ ribbon.timeID +`" class="htv-carousel__header__title__subtitle">`+ home__getDayHourString((new Date()).getTime() - ribbon.lastUpdate) +`</span>
				</div>
				<button type="button" class="htv-carousel__header__all btn btn--large btn--outline btn--depressed">
					<div class="btn__content">ALL</div>
				</button>
				<div class="htv-carousel__header__nav_container">
					<button type="button" class="htv-carousel__header__nav-arrow htv-carousel__header__nav-arrow-left btn btn--large btn--outline btn--depressed">
						<div class="btn__content">
							<svg style="width:32px;height:32px" viewBox="0 0 24 24">
								<path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
							</svg>
						</div>
					</button>
					<button type="button" class="htv-carousel__header__nav-arrow htv-carousel__header__nav-arrow-right btn btn--large btn--outline btn--depressed">
						<div class="btn__content">
							<svg style="width:32px;height:32px" viewBox="0 0 24 24">
								<path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
							</svg>
						</div>
					</button>
				</div>
			</div>
			<div class="htv-carousel__scrolls htv-carousel__desktop">
				<div class="htv-carousel__slider" style="transition: all 0.3s ease 0s">
				</div>
			</div>
			`
			const sliderRoot = ribbonRoot.querySelector('.htv-carousel__slider')
			ribbon.items.forEach(item => {
				var divElement = document.createElement('div')
				divElement.setAttribute('class', 'elevation-3 mb-3 hvc item card')
				divElement.setAttribute('style', 'height:auto')
				divElement.innerHTML = `
				<a href="` + item.href + `" draggable="false" title="`+ item.title +`" ondragstart="return false" class="no-touch">
					<div>
						<div class="hvc__media card__media" style="height:auto">
							<div class="card__media__content">
								<div class="hvc__media__cover-container">
									<div class="hvc__media__cover-aspect-ratio">
										<div class="lazy hvc__media__cover">
											<div>
												<img src="`+ item.imgsrc +`" alt="`+ item.imgalt +`" title="`+ item.title +`" draggable="false" class="hvc__media__cover__image">
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
								<div class="hv-title">`+ item.title +`</div>
								<div class="hv-subtitle">`+ item.subtitle +`</div>
								<div class="spacer"></div>
							</div>
						</div>
					</div>
				</a>
				`
				sliderRoot.appendChild(divElement)
			})
			landing.appendChild(ribbonRoot)
		})
		home__data.onStaticLoad(root)
	},
	onStaticLoad: (root) => {
		if(!root) {
			console.log('Error: missing argument - root')
			return
		}
		// Update last update time value on ribbons
		home__data.data.ribbon_items.forEach(ribbon => {
			root.querySelector('#' + ribbon.timeID).innerHTML = home__getDayHourString((new Date()).getTime() - ribbon.lastUpdate)
		})
		// attach ripple effect to buttons
		root.querySelectorAll('.landing__content button').forEach(node => {
			node.addEventListener('click', (e) => {
				showRippleEffect(e, node)
			})
		})
		// left button on ribbons
		root.querySelectorAll('.landing__content button.htv-carousel__header__nav-arrow-left').forEach(button => {
			// disable all left buttons initially
			button.disabled = true
			button.classList.add('btn--disabled')
			// Add functionality to move ribbon on each button
			button.addEventListener('click', (e) => {
				var btnL = button
				const btnR = btnL.parentElement.querySelector('.htv-carousel__header__nav-arrow-right')
				const header = btnR.parentElement.parentElement
				const bound_l = header.getBoundingClientRect().left + parseInt(window.getComputedStyle(header, null).getPropertyValue('padding-left')) - 1
				var translate = window.innerWidth / 1.5
				const slider = header.parentElement.querySelector('.htv-carousel__slider')
				const lastElem = slider.lastElementChild
				const firstElem = slider.firstElementChild
				const l = firstElem.getBoundingClientRect().left
				const r = lastElem.getBoundingClientRect().right
				if( l >= bound_l ) {
					btnL.disabled = true
					btnL.classList.add('btn--disabled')
					return
				}
				if(l + translate >= bound_l) {
					btnL.disabled = true
					btnL.classList.add('btn--disabled')
					translate = bound_l - l
				}
				slider.style.transform = 'translateX(' + (l - parseInt(window.getComputedStyle(firstElem, null).getPropertyValue('margin-left')) + translate) + 'px)'
				btnR.disabled = false
				btnR.classList.remove('btn--disabled')

			})
		})
		// right button on ribbons
		root.querySelectorAll('.landing__content button.htv-carousel__header__nav-arrow-right').forEach(button => {
			// disable buttons if we don't have much cards on ribbon
			const header = button.parentElement.parentElement
			const bound_r = header.getBoundingClientRect().right - parseInt(window.getComputedStyle(header, null).getPropertyValue('padding-right')) + 1
			const slider = header.parentElement.querySelector('.htv-carousel__slider')
			const lastElem = slider.lastElementChild
			const r = lastElem.getBoundingClientRect().right
			if( r <= bound_r ) {
				button.disabled = true
				button.classList.add('btn--disabled')
			}
			
			// Add functionality to move ribbon on each button
			button.addEventListener('click', (e) => {
				var btnR = button
				const btnL = btnR.parentElement.querySelector('.htv-carousel__header__nav-arrow-left')
				const header = btnR.parentElement.parentElement
				const bound_r = header.getBoundingClientRect().right - parseInt(window.getComputedStyle(header, null).getPropertyValue('padding-right')) + 1
				var translate = window.innerWidth / 1.5
				const slider = header.parentElement.querySelector('.htv-carousel__slider')
				const lastElem = slider.lastElementChild
				const firstElem = slider.firstElementChild
				const l = firstElem.getBoundingClientRect().left
				const r = lastElem.getBoundingClientRect().right
				if( r <= bound_r ) {
					btnR.disabled = true
					btnR.classList.add('btn--disabled')
					return
				}
				if(r - translate <= bound_r) {
					btnR.disabled = true
					btnR.classList.add('btn--disabled')
					translate = r - bound_r
				}
				slider.style.transform = 'translateX(' + (l - parseInt(window.getComputedStyle(firstElem, null).getPropertyValue('margin-left')) - translate) + 'px)'
				btnL.disabled = false
				btnL.classList.remove('btn--disabled')
			})
		})
	}
}

/**
 * Return string representation of time 
 * @param {Number} delta_time 
 * @returns {String}
 */
function home__getDayHourString(delta_time) {
	var day = Math.floor(delta_time / 86400000);
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

spa.register('home', home__data)