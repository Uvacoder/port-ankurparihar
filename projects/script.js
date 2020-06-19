const projects__data = {
	navID: "nav-projects",
	page_loc_text: "Projects",
	template: `
		<div id="project_page" class="page full-page-height">
			<div class="proj_page-head flex">
				<div class="proj_page-title">Projects</div>
			</div>
			<div class="proj_page-body">
				<div class="proj_page-cont flex row wrap justify-center"></div>
			</div>
		</div>
	`,
	data: {
		projects: {
			1: {
				title: "Fractal Generator",
				author: "Ankur Parihar",
				url: "/projects/fractal-generator",
				img: "/media/projects/Sierpinski_triangle.png",
				description: "The project was assigned during the course 'Fractals and Applications'. This is a program to generate fractal from given IFS (Iterated Function System) rules.",
				tags: ["IES-301"],
				created: "2 Feb 2019",
				updated: "2 Feb 2019",
				explorable: true
			},
			2: {
				title: "Git DDB",
				author: "Ankur Parihar",
				url: "https://github.com/ankurparihar/git-ddb-docs",
				img: "/media/projects/git-ddb.jpg",
				description: "Github based distributed database",
				tags: ["Web, WebD"],
				created: "8 March 2019",
				updated: "8 March 2019",
				explorable: true
			},
			3: {
				title: "Time-Table Generator",
				author: "Ankur Parihar",
				url: "/projects/time-table",
				img: "/media/projects/time-table.png",
				description: "This is a fun project I created during spare time. Time-Table generator creates dynamic time-tables with options like copy-paste, spanning etc.",
				tags: ["Github"],
				created: "29 July 2019",
				updated: "29 July 2019",
				explorable: true
			}
		}
	},
	apply: (root, URLInfo) => {
		root.innerHTML = projects__data.template
		var proj_body = root.querySelector('.proj_page-cont')
		for (var key in projects__data.data.projects) {
			var data = projects__data.data.projects[key]
			var elem = document.createElement('div')
			elem.setAttribute('class', 'proj_card card elevation-5')
			elem.innerHTML = `
				<div class="card__media">
					<div class="card__media__background" style="background: url(`+ data.img + `) center center / cover no-repeat"></div>
				</div>
				<div class="card__title">
					<div>
						<div class="proj_card-head">`+ data.title + `</div>
						<div class="proj_card-date">`+ data.created + `</div>
					</div>
				</div>
				<div class="card__actions">
					<a href="`+ data.url + `" target="_blank" class="btn btn--flat ` + (data.explorable ? '' : 'btn--disabled') + `">
						<div class="btn__content btn-explore">Explore</div>
					</a>
					<a class="btn btn--flat">
						<div class="btn__content btn-share">Share</div>
					</a>
				</div>
			`
			proj_body.appendChild(elem)
		}
		projects__data.onStaticLoad(root, URLInfo)
	},
	onStaticLoad: (root, URLInfo) => {
		// Add ripple effect on buttons
		root.querySelectorAll('a').forEach(button => {
			button.addEventListener('click', (e) => {
				showRippleEffect(e, button)
			})
		})
	}
}

spa.register('/projects', projects__data)