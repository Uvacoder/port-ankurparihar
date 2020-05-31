const change__data = {
	navID: "nav-change",
	page_loc_text: "What's New",
	template: `<div class="whats_new general page full-page-height"><h2>Website Changelogs</h2></div>`,
	data: {
		logs: [
			{
				Date:"18/05/2020",
				changes:[
					"Converted to Single Page Application",
				]
			},
			{
				Date:"05/08/2019",
				changes:[
					"Sign In front-end",
					"Improved styling",
					"Updated social links"
				]
			},
			{
				Date:"07/03/2019",
				changes:[
					"Sign In with Git Oauth",
					"Git-DDB integration",
					"Personalized themes"
				]
			},
			{
				Date:"26/02/2019",
				changes:[
					"Added manifest.json",
					"Improved user navigation",
					"Performance improvement"
				]
			},
			{
				Date:"23/02/2019",
				changes:[
					"Added sitemap.xml",
					"Added robots.txt"
				]
			},
			{
				Date:"19/02/2019",
				changes:[
					"Date of last update on home ribbons",
					"Improved modular structure of website",
					"Scripts are now more distributed and localized"
				]
			},
			{
				Date:"11/02/2019",
				changes:[
					"Site published on github"
				]
			},
			{
				Date:"09/02/2019",
				changes:[
					"Navigation scrolling smooth and stabilized",
					"Added LinkedIn connect option"
				]
			},
			{
				Date:"04/02/2019",
				changes:[
					"Programmed course content mechanism"
				]
			},
			{
				Date:"03/02/2019",
				changes:[
					"Added site favicon",
					"Added recent upload ribbon on homepage"
				]
			},
			{
				Date:"02/02/2019",
				changes:[
					"Live demo section programmed",
					"First live demo fractal-generator is up and running",
					"Added footer"
				]
			},
			{
				Date:"28/01/2019",
				changes:[
					"Added Live Demo Section",
					"Resolved minor scrolling issue"
				]
			},
			{
				Date:"27/01/2019",
				changes:[
					"Resolved scroll to top button issue"
				]
			},
			{
				Date:"26/01/2019",
				changes:[
					"Added avatar",
					"IITR Resources gets subjects and semesters display [Content to be added]",
					"Fixed minor bug in footer causing extra margin for smartphone devices",
					"Improved layout for smartphone devices"
				]
			},
			{
				Date:"24/01/2019",
				changes:[
					"Added error handling. Website shows error when content is not found",
					"Mobile optimization (css) for homepage",
					"Added site description"
				]
			},
			{
				Date:"22/01/2019",
				changes:[
					"Minor bug fixes in toolbar",
					"Minor bug fixes in directory change mechanism"
				]
			},
			{
				Date:"21/01/2019",
				changes:[
					"Designed dynamic refresh mechanism",
					"Added directory structure"
				]
			},
			{
				Date:"18/01/2019",
				changes:[
					"Site's basic template developed. For desktop (chrome browser) only.",
					"Added Changelog section"
				]
			}
		]
	},
	apply: (root) => {
		if(!root) {
			console.log('Erro: missing argument - root')
			return
		}
		root.innerHTML = change__data.template
		const logElem = root.querySelector('.whats_new')
		change__data.data.logs.forEach(log => {
			const div = document.createElement('div')
			div.setAttribute('class', 'change')
			const divH = document.createElement('div')
			divH.setAttribute('class', 'change__header primary-color')
			divH.innerHTML = log.Date
			const divB = document.createElement('ol')
			log.changes.forEach(change => {
				const li = document.createElement('li')
				li.innerHTML = change
				divB.appendChild(li)
			})
			div.appendChild(divH)
			div.appendChild(divB)
			logElem.appendChild(div)
		})
		const div = document.createElement('div')
		div.setAttribute('class', 'divider')
		logElem.appendChild(div)
	},
	onStaticLoad: (root) => {
		
	}
}

spa.register('/changelog', change__data)