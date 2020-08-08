const projects__data = {
	navID: "nav-projects",
	page_loc_text: "Projects",
	template: `<div id="project_page" class="page full-page-height"><div class="proj_page-head flex"><div class="proj_page-title">Projects</div></div><div class="proj_page-body"><div class="proj_page-cont flex row wrap justify-center"></div></div></div>`,
	style: `#project_page .proj_page-head{padding-top:16px;padding-bottom:16px;width:100%;border-bottom:3px double;height:80px}#project_page .proj_page-title{width:100%;font-size:28px;text-align:center}.proj_page-body .proj_page-cont{margin-top:30px;padding-bottom:20px}.proj_card{margin:30px auto;width:320px}.proj_card .card__media{height:160px;width:100%}@media (min-width:960px){.proj_card{width:400px;min-width:300px}.proj_card .card__media{height:200px;width:100%}}.proj_card .proj_card-head{font-size:24px;font-weight:400;line-height:32px}.proj_card .card__title{padding-bottom:0}.proj_card .proj_card-date{color:#9e9e9e!important;margin-bottom:4px}.proj_card a{color:#f3c669!important}.proj_card .card__media .card__media__background{transition:all .2s ease 0s;transform:none;transform-origin:50% 50% 0;zoom:1}.proj_card .card__media:hover .card__media__background{transition:all 6s ease 0s;transform:scale(1.5) rotate(-9deg)}`,
	data: {
		projects: {
			1: {
				title: "Fractal Generator",
				author: "Ankur Parihar",
				url: "/projects/fractal-generator",
				img: "/media/projects/Sierpinski_triangle.webp",
				description: "The project was assigned during the course 'Fractals and Applications'. This is a program to generate fractal from given IFS (Iterated Function System) rules.",
				tags: ["ies-301", "fractal", "generator"],
				created: "Feb 2019",
				updated: "2 Feb 2019",
				explorable: true
			},
			2: {
				title: "Raymond's Algorithm",
				author: "Ankur Parihar",
				url: "/projects/DME-raymond",
				img: "/media/projects/raymond.webp",
				description: "The project was assigned during the course 'Operating Systems (CSN-232)'. It is an implementation of raymond's algorihm. Raymond's algorithm is a tree based message passing algorithm for mutual exclusion of critical section among concurrent processes.",
				tags: ["csn-232", "kerry", "raymond", "algorithm", "implementation", "simulation"],
				created: "12 April 2018",
				updated: "4 August 2020",
				explorable: true
			},
			3: {
				title: "Git DDB",
				author: "Ankur Parihar",
				url: "https://github.com/ankurparihar/git-ddb-docs",
				img: "/media/projects/git-ddb.webp",
				description: "Github based distributed database",
				tags: ["web, webd", "github", "distributed", "database"],
				created: "March 2019",
				updated: "8 March 2019",
				explorable: true
			},
			4: {
				title: "Alpino",
				author: "Ankur Parihar",
				url: "/projects/Alpino",
				img: "/media/projects/alpino.webp",
				description: "A 3-D web media player made for Microsoft Code.Fun.Do. This is primarily a 3D interactive media player but we can place any html content.",
				tags: ["alpino", "3d", "webd", "web"],
				created: "Feb 2017",
				updated: "7 Feb 2017",
				explorable: true
			},
			5: {
				title: "BicastR",
				author: "Ankur Parihar",
				url: "/projects/BicastR",
				img: "/media/projects/bicastr.webp",
				description: "BicastR can displays large image or video which doesn't fit on display on multiple displays which put together re-creates the entire media and provides a rich viewing experience. It creates the effect of a larger display using smaller displays.",
				tags: ["bicastr", "split", "multi", "display", "web"],
				created: "Oct 2018",
				updated: "9 July 2020",
				explorable: true
			},
			6: {
				title: "Time-Table Generator",
				author: "Ankur Parihar",
				url: "/projects/time-table",
				img: "/media/projects/time-table.webp",
				description: "This is a fun project I created during spare time. Time-Table generator creates dynamic time-tables with options like copy-paste, spanning etc.",
				tags: ["time", "table", "time-table", "generator", "web", "webd"],
				created: "July 2019",
				updated: "29 July 2019",
				explorable: true
			}
		}
	},
	apply: (root, URLInfo) => {
		if (root === undefined) {
			console.warn('Error: contentRoot not specified')
			return
		}
		root.innerHTML = projects__data.template
		projects__data.onStaticLoad(root, URLInfo)
	},
	onStaticLoad: (root, URLInfo) => {
		if (root === undefined) {
			console.warn('Error: contentRoot not specified')
			return
		}
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
		// Add ripple effect on buttons
		root.querySelectorAll('a').forEach(button => {
			button.addEventListener('click', (e) => {
				showRippleEffect(e, button)
			})
		})
	}
}

spa.register('/projects', projects__data)