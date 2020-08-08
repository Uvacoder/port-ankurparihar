const iitr__data = {
	navID: "nav-iitr",
	page_loc_text: "IITR",
	template: `<div class="iitr-page full-page-height"><div id="iitr-image-container"><img loading="lazy" src="/media/img/mainbuilding.webp" width="100%" height="auto" style="vertical-align:bottom" alt="IITR Image"><span class="dot-gradient"></span></div><div class="iitr-main"><nav class="iitr-toolbar toolbar toolbar--dense"><div class="toolbar__content justify-center"><button type="button" class="nav_drawer_toggle btn btn--icon" aria-label="IITR menu"><div class="btn__content"><svg style="width:32px;height:32px" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg></div></button><div class="title">Spring 2020 (Sem 8)</div></div></nav><aside class="navigation-drawer navigation-drawer--mini-variant left elevation-10" data-booted="true"><div class="list nav-drawer-list"><div class="subheader subheading grey--text text--darken-1">Academic</div><div><a id="iitr-latestSem" class="list__tile primary--text" tabindex="-1"><div class="list__tile__action"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M5 12C5 13.11 4.11 14 3 14C1.9 14 1 13.11 1 12C1 10.9 1.9 10 3 10C4.11 10 5 10.9 5 12M4 2V8H2V2H4M2 22V16H4V22H2M24 6V18C24 19.11 23.11 20 22 20H10C8.9 20 8 19.11 8 18V14L6 12L8 10V6C8 4.89 8.9 4 10 4H22C23.11 4 24 4.89 24 6M22 6H10V10.83L8.83 12L10 13.17V18H22V6M12 9H20V11H12V9M12 13H18V15H12V13Z"></path></svg></div><div class="list__tile__content"><div class="list__tile__title" title="Show latest semester">Latest Semester (8)</div></div></a></div><div><a id="iitr-allSem" class="list__tile list__tile--link" tabindex="-1"><div class="list__tile__action"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M16,15H9V13H16V15M19,11H9V9H19V11M19,7H9V5H19V7M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17C23,18.11 22.11,19 21,19H7A2,2 0 0,1 5,17V3C5,1.89 5.89,1 7,1H21M7,3V17H21V3H7Z"></path></svg></div><div class="list__tile__content"><div class="list__tile__title" title="Show all semesters">All Semesters</div></div></a></div><div style="display:none"><a id="iitr-specificSem" class="list__tile list__tile--link" tabindex="-1"><div class="list__tile__action"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z"></path></svg></div><div class="list__tile__content"><div class="list__tile__title"></div></div></a></div></div><div class="divider mb-48"></div><div class="list nav-drawer-list"><div class="subheader subheading grey--text text--darken-1">Assets</div><div><a id="iitr-timetable" class="list__tile list__tile--link list__tile--disabled" tabindex="-1"><div class="list__tile__action"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z"></path></svg></div><div class="list__tile__content"><div class="list__tile__title">Time Table</div></div></a></div></div></aside><div class="iitr-content"><div class="flex row wrap" style="position:absolute"></div></div></div></div>`,
	style: `#iitr-image-container{position:relative}.iitr-main{background-color:#3a3c3f;height:100%}.iitr-main aside{height:100%;min-height:700px;margin-top:0;width:250px;z-index:20;position:relative}.iitr-main aside .list__tile{border-radius:2px}.iitr-main aside .primary--text{cursor:default;background:#f3c669;color:inherit!important}.iitr-main aside.navigation-drawer--mini-variant{width:80px}.iitr-content{height:100%;min-height:700px;margin-left:80px;padding:10px}.iitr-main nav.toolbar{background-color:rgba(33,33,33,.3)}.iitr-main nav.toolbar .toolbar__content{height:48px!important}.iitr-main nav.toolbar .title{min-width:calc(100vw - 80px);font-weight:300;margin:0!important;text-align:center;font-size:16px!important}.iitr-main nav.toolbar button{float:left}@media (min-width:960px){.iitr-main nav.toolbar button{display:none}.iitr-main aside.navigation-drawer--mini-variant{width:250px}.iitr-main aside.navigation-drawer--mini-variant .subheader{display:block!important}.iitr-main aside.navigation-drawer--mini-variant .list__tile__content{opacity:1!important}.iitr-content{margin-left:250px}}.navigation-drawer--mini-variant{overflow:hidden}.navigation-drawer--mini-variant .list__tile__action{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:48px}.navigation-drawer--mini-variant .list__tile:after,.navigation-drawer--mini-variant .list__tile__content{opacity:0}.navigation-drawer--mini-variant .divider,.navigation-drawer--mini-variant .subheader{display:none!important}.iitr-main nav.toolbar button.btn-close{transform:rotateY(180deg)}.card-hori{height:75px;width:200px;background:#17181a;margin:5px;border-radius:2px}.card-hori button{width:100%;min-height:100%;border-radius:2px;border:none;font-size:16px;color:#fff;background-color:#202020;cursor:pointer;padding:6px}.card-hori button:hover{background:#f3c669}.card-hori button:focus{outline:0}.card-vert{width:120px;height:160px;background:#424242;color:#fff;cursor:pointer;margin:15px}.card-vert:hover{color:#f3c669}.card-vert .course-svg{width:120px;height:120px;background-color:#17181a;display:flex;justify-content:center;align-items:center}.card-vert .course-svg div{width:50%;height:50%;margin:auto;display:flex;justify-content:center;align-items:center;background-color:#3a3c3f;border-radius:50%}.card-vert .course-item{width:100%;height:40px;display:flex;justify-content:center;align-items:center}@media (min-width:600px){.iitr-content,.iitr-main aside{min-height:600px}.card-hori{width:240px;height:100px}.iitr-main nav.toolbar .title{font-size:20px!important}}@media (min-width:960px){.card-hori{width:300px;margin:15px}.card-hori button{font-size:18px}}`,
	data: {
		Semesters: {
			1: {
				Name: "Autumn 2016",
				Session: "2016-17",
				Semester: "First Year - 1st Sem (Autumn)",
				Courses: [
					{
						Code: "CEN-105",
						Title: "Introduction to Environmental Studies",
						Credits: 3,
						Content: {
							"Slides": "https://drive.google.com/open?id=1gi0SebVVeuk5zb0i6mZoSta8i2JHoHOk",
							"Assignments": "https://drive.google.com/drive/folders/1TcvG4hScPHubBEqCMY3O3bg4E9dYHmRz",
							"Quizzes": "https://drive.google.com/drive/folders/1wX6WbRnunjLF3799w_L7YZ1zQ45SLll-"
						}
					},
					{
						Code: "CSN-101",
						Title: "Introduction to Computer Science and Engineering",
						Credits: 2
					},
					{
						Code: "CSN-103",
						Title: "Fundamentals of Objects Oriented Programming",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/drive/folders/1dekKMLRtRdlXv8cyjodVzrZ_mMwLjCNe",
							"Books": "https://drive.google.com/open?id=1M3rKPzvtNNe6eufi1C_KZLsWwqXrLZrN",
							"Assignments": "https://drive.google.com/drive/folders/16Mm_jI4_7WvXoGxWVZJhCmQvHIFAPLlH",
							"Quizzes": "https://drive.google.com/drive/folders/1N94jRv5AipvFP7rkkHso6RneQOAGrgEC"
						}
					},
					{
						Code: "HSN-001A",
						Title: "Communication Skills (BASIC)",
						Credits: 2,
						Content: {
							"Slides": "https://drive.google.com/open?id=1rJh143XPYtXoyPhC1S5ccZNbCntk2tWP",
							"Assignments": "https://drive.google.com/drive/folders/1DfnJN-k0wp0dWdIxMTrz8lT6D-2qsntx"
						}
					},
					{
						Code: "HSN-002",
						Title: "Ethics and Self Awareness",
						Credits: 2,
						Content: {
							"Slides": "https://drive.google.com/open?id=1o5XtDL-usOQGuNNeTdvFfwZE4dL7LNft",
							"Quizzes": "https://drive.google.com/drive/folders/1ntHk4b5zt8LRACYZzlgWp1KkxEaU3Ayr"
						}
					},
					{
						Code: "MAN-001",
						Title: "Mathematics-I",
						Credits: 4
					},
					{
						Code: "PHN-005",
						Title: "Electrodynamics and Optics",
						Credits: 3,
						Content: {
							"Slides": "https://drive.google.com/open?id=1e7X7Nxg-YX1086u-3ftBP8RgxsEZtdzy",
							"Books": "https://drive.google.com/open?id=1rZKtDx9ix8CEYdd7GUYQL-_GjmsMZCbf"
						}
					},
					{
						Code: "Exam Papers",
						Title: "Exam Portal",
						Credits: 0,
						Content: {
							"Papers": "https://drive.google.com/drive/folders/1HNVkbT-QvSO5AVH0IkV8209ozgfa1US4"
						}
					}
				]
			},
			2: {
				Name: "Spring 2017",
				Session: "2016-17",
				Semester: "First Year - 2nd Sem (Spring)",
				Courses: [
					{
						Code: "CSN-102",
						Title: "Data Structures",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=1KRzQ4ScKZ9oHOFURz4X-5nRu11i-iK50",
							"Books": "https://drive.google.com/open?id=1eUiM1E5F-DM21l5Q2GkKQ3NJEYQVyU-0",
							"Assignments": "https://drive.google.com/drive/folders/1ax9DPtBbSvHCMaRo7WWgnMGBv2rsLR19"
						}
					},
					{
						Code: "CSN-106",
						Title: "Discrete Structures",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=175IO8bGbaWl8nAl7xgsKCT2nyTqhxbMF",
							"Books": "https://drive.google.com/open?id=1Xv3s7XMywrCyZfzgVlaOUDSFyD3zwQLb",
							"Assignments": "https://drive.google.com/drive/folders/1qMZ4GT5Levcrl0EX47M7mW6Uls1UBB1f",
							"Quizzes": "https://drive.google.com/drive/folders/1qlNyqlQMz2Diocf03gyQIADYKtEvDKl8"
						}
					},
					{
						Code: "ECN-102",
						Title: "Fundamental of Electronics",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=1RO1BLLm_sHm8WDHvJUGm8zsnQ5XwAO1R",
							"Books": "https://drive.google.com/open?id=1_vavxGh2yS_RfaFQwZFWlltD5QjxKSt6",
							"Assignments": "https://drive.google.com/drive/folders/1fVm33WUz1kq1LEjwvWn7ndlYrmLRpGs1"
						}
					},
					{
						Code: "ECN-104",
						Title: "Digital Logic Design",
						Credits: 4,
						Content: {
							"Notes": "https://drive.google.com/drive/folders/1Q9gkcCoU_TlI6M99JQuPKe4FYPQeHOFa",
							"Books": "https://drive.google.com/open?id=1jSSBkV5SY1kWrBMswQsXNfwRHUIAOAv1",
							"Assignments": "https://drive.google.com/drive/folders/1FJEvbmAwWo-OFeFBYyNgdlgJR5yDMN9y"
						}
					},
					{
						Code: "MAN-010",
						Title: "Optimization Techniques",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=1y-2uNp8E2hvVXyvYFlzgXeTd0UsyHIVp",
							"Assignments": "https://drive.google.com/open?id=1NeaQrHtWZG898rc1k6UKNJEIJ1aFOlgI"
						}
					},
					{
						Code: "PHN-006",
						Title: "Quantum Mechanics and Statistical Mechanics",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=1AY6QaCW2MPyfAjWX4k4bxTjtvTRmzUvd",
							"Assignments": "https://drive.google.com/drive/folders/1_xCPK0jX2yufd7_5TqQDMLFUTj4iaJQq",
							"Books": "https://drive.google.com/open?id=1Ettk9FfCBAquRz_sfEWDBJ2WFLylxpgV",
							"Lab": "https://drive.google.com/drive/folders/1v5f0PN8Mia0DomlWuhxMNkzeBDBZnGXF"
						}
					},
					{
						Code: "PR-501",
						Title: "N.C.C.",
						Credits: 2
					},
					{
						Code: "Exam Papers",
						Title: "Exam Portal",
						Credits: 0,
						Content: {
							"Papers": "https://drive.google.com/drive/folders/1LmHGJjdU-GqzNDGnCWYUSXvBnVoGJ9o_"
						}
					}
				]
			},
			3: {
				Name: "Autumn 2017",
				Session: "2017-18",
				Semester: "Second Year -1st Sem (Autumn)",
				Courses: [
					{
						Code: "CSN-221",
						Title: "Computer Architecture and Microprocessor",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=17_J8Ou0ixpDSHLaZwo2gRNPij7U7ygLJ",
							"Books": "https://drive.google.com/open?id=12L1Ju4P8sh8QkqlDGEqXzk5zEoFpGwXF",
							"Assignments": "https://drive.google.com/drive/folders/1ot_6Y1CGWDn1OTicuBgMpY1h4BvtulYJ",
							"Quizzes": "https://drive.google.com/drive/folders/1jx8JV-KKK9H5Pd6eHuetmEAJRWIYaPTb",
							"Project": "https://drive.google.com/drive/folders/1f9Bl9gKDb4o8E4e6pxiDFhaGOfo-7-Xo"
						}
					},
					{
						Code: "CSN-261",
						Title: "Data Structure Laboratory",
						Credits: 2
					},
					{
						Code: "CSN-291",
						Title: "Object Oriented Analysis and Design",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=1mHBHkuwfcBQFmFgb58VrbrmUlkxtVtjN"
						}
					},
					{
						Code: "ECN-203",
						Title: "Signals and Systems",
						Credits: 4,
						Content: {
							"Notes": "https://drive.google.com/drive/folders/1arF-WstekE9pC8EaCKKJIFtxPDG92iai",
							"Slides": "https://drive.google.com/open?id=1J3InrIzOy9IVuNy6czM4qohHFf6lWMpx",
							"Assignments": "https://drive.google.com/drive/folders/185OJ7_T4CBaQJHt4vu8pz5CPNRbHw1Yc",
							"Books": "https://drive.google.com/open?id=16zCZq8A13HeyloXzcGKtf6PRMAm8Pbvp"
						}
					},
					{
						Code: "HSS-01",
						Title: "Economics",
						Credits: 3,
						Content: {
							"Slides": "https://drive.google.com/drive/folders/1XO9ozJEEfNJ4OcgdK7l79IkZBAf6PSgZ"
						}
					},
					{
						Code: "MIN-106",
						Title: "Engineering Thermodynamics",
						Credits: 4,
						Content: {
							"Books": "https://drive.google.com/open?id=1laxxc9LXe7iNQ3bhnWsyMn3tjcfzfKTN",
							"Assignments": "https://drive.google.com/drive/folders/1pK7l6GYYdUh5a3IAN-3G4m2OAZWLC5mX",
							"Lab": "https://drive.google.com/drive/folders/14Yj__hwrVhe_77jebdvqZp-Qw1hQa5n7"
						}
					},
					{
						Code: "Exam Papers",
						Title: "Exam Portal",
						Credits: 0,
						Content: {
							"Papers": "https://drive.google.com/drive/folders/1XrkbkNFONG4abBCad6iHbdNWZIOjT8lG"
						}
					}
				]
			},
			4: {
				Name: "Spring 2018",
				Session: "2017-18",
				Semester: "Second Year -2nd Sem (Spring)",
				Courses: [
					{
						Code: "CSN-212",
						Title: "Design and Analysis of Algorithms",
						Credits: 4
					},
					{
						Code: "CSN-232",
						Title: "Operating Systems",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=1jth2XSoC4mxDNu_fku6yQcZj4EOqUJhM",
							"Books": "https://drive.google.com/open?id=1WWflQmheKYinWGtrxv5obp6gTuwbvQ8v",
							"Assignments": "https://drive.google.com/drive/folders/1gC4piTUVFQdWrNa4m3EW-msbKn4OjMrj",
							"Project": "/projects/DME-raymond"
						}
					},
					{
						Code: "CSN-252",
						Title: "System Software",
						Credits: 3,
						Content: {
							"Slides": "https://drive.google.com/drive/folders/1nNmQlVX3cHAd8vASf-LCOF-a1XluUCuy",
							"Books": "https://drive.google.com/open?id=1TGvrONdNqkUmmXzDWQlsaTmREbRjSPOL"
						}
					},
					{
						Code: "CSN-254",
						Title: "Software Engineering",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=1yrb_Y7UOFXb2WKRKqi_cKFkA_gHmob2u",
							"Additional": "https://drive.google.com/open?id=11pJ7OqBNhXo6mZ4-OnQAT9IjHC_gaOnE"
						}
					},
					{
						Code: "ECN-252",
						Title: "Digital Electronic Circuits Laboratory",
						Credits: 2
					},
					{
						Code: "MTN-105",
						Title: "Electrical and Electronic Materials",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=1elZerN0XRRHINIgsBakGw-fNG4zK51h6",
							"Assignments": "https://drive.google.com/drive/folders/1uQgOl54Pyh3yWW1BawmxYZCae4vp41cA"
						}
					},
					{
						Code: "Exam Papers",
						Title: "Exam Portal",
						Credits: 0,
						Content: {
							"Papers": "https://drive.google.com/drive/folders/1w7AtpAEpJqAn2eoERgK6WYCiqX5WSMGO"
						}
					}
				]
			},
			5: {
				Name: "Autumn 2018",
				Session: "2018-19",
				Semester: "Third Year - 1st Sem (Autumn)",
				Courses: [
					{
						Code: "CSN-341",
						Title: "Computer Network",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/drive/folders/1SwjyZqUu-abyOBgMFVwlI_MgvhUKh0e0",
							"Assignments": "https://drive.google.com/drive/folders/1CoqoAyNZi6X1bzSMK64hoc0wXgwJVmQa",
							"Books": "https://drive.google.com/open?id=1bx_2r7rLwh-KmbZONRoLa2xEsxkc4g-Q"
						}
					},
					{
						Code: "CSN-351",
						Title: "Data Base Management Systems",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=1Q7Yz-LKfHUuRqlGl0M3e9ACfH9lYuzvN",
							"Books": "https://drive.google.com/open?id=1mzg4-1Ugz6KeNjoxH0L7bHRE18fQDrQ_",
							"Previous": "https://drive.google.com/open?id=18p2JX7UB1TIQehdPj6_BG5OndvqSdpqb"
						}
					},
					{
						Code: "CSN-353",
						Title: "Theory of Computation",
						Credits: 4,
						Content: {
							"Books": "https://drive.google.com/drive/folders/1fJa1Et23dxhqEqMEhKjqOW_sbpneOzO1"
						}
					},
					{
						Code: "CSN-361",
						Title: "Computer Network Laboratory",
						Credits: 2,
						Content: {
							"Assignments": "https://drive.google.com/drive/folders/10sjTDFjWLLJhPrsFrQQY-9_kJCtHmVMT"
						}
					},
					{
						Code: "CSN-373",
						Title: "Probability Theory for Computer Engineering",
						Credits: 4,
						Content: {
							"Books": "https://drive.google.com/open?id=1Dfh95P5PP2k5ycARSHMvywr6P41r9yRM"
						}
					},
					{
						Code: "CSN-391",
						Title: "Technical Communication",
						Credits: 2
					},
					{
						Code: "IBM-306",
						Title: "Marketing Research",
						Credits: 4
					},
					{
						Code: "Exam Papers",
						Title: "Exam Portal",
						Credits: 0,
						Content: {
							"Papers": "https://drive.google.com/drive/folders/1sj26OWVOuXj4zf5eSaNNtwOLb33ERiJD"
						}
					}
				]
			},
			6: {
				Name: "Spring 2019",
				Session: "2018-19",
				Semester: "Third Year - 2nd Sem (Spring)",
				Courses: [
					{
						Code: "IES-301",
						Title: "Fractals and Applications",
						Credits: 3,
						Content: {
							"Notes": "https://drive.google.com/drive/folders/126q9B-ldG29IRZ8Pg48GaVStMX_PAEoI",
							"Slides": "https://drive.google.com/open?id=10V-oWqc5ijYhIip_79NpAfoEHEwAWnGP",
							"Assignments": "https://drive.google.com/drive/folders/1VlobDAV6XXRsdMSfPjkuD8NMaDmT9EqL",
							"Project": "/projects/fractal-generator",
						}
					},
					{
						Code: "CSN-300",
						Title: "Lab Based Project",
						Credits: 4
					},
					{
						Code: "CSN-312",
						Title: "Principles of Programming Languages",
						Credits: 3,
						Content: {
							"Notes": "https://drive.google.com/open?id=1KxCMVy9OlDBC4XLLgyP4ZImtG-uQhwAw"
						}
					},
					{
						Code: "CSN-352",
						Title: "Compiler Design",
						Credits: 4,
						Content: {
							"Notes": "https://drive.google.com/drive/folders/1T6G1razV6y2LUCzKbzPIrYNLBfyR-Y5n",
							"Books": "https://drive.google.com/open?id=1clsuPdwSMIvzy5MmreznYjHWVYM2p6pw"
						}
					},
					{
						Code: "CSN-362",
						Title: "Compiler Laboratory",
						Credits: 3,
						Content: {
							"Codes": "https://github.com/ankurparihar/Compiler-Lab-Codes"
						}
					},
					{
						Code: "CSN-399",
						Title: "Educational Tour",
						Credits: 0,
						Content: {
							"Photos": "#"
						},
						disabled: true
					},
					{
						Code: "CSN-382",
						Title: "Machine Learning",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=1EkYpiGZQ1-tIBVcNmHOXiiXogx83GzwS",
							"Assignments": "https://drive.google.com/drive/folders/177LouXpprDZc127I-N2zEt5V3kISNKrE",
							"Project": "https://github.com/ankurparihar/Epileptic-Seizure-Classification/"
						}
					},
					{
						Code: "Exam Papers",
						Title: "Exam Portal",
						Credits: 0,
						Content: {
							"Papers": "https://drive.google.com/drive/folders/1TPLvWNp7iKw2yTjvQlhBKiJhg0H1yYV6"
						}
					}
				]
			},
			7: {
				Name: "Autumn 2019",
				Session: "2019-20",
				Semester: "Fourth Year - 1st Sem (Autumn)",
				Courses: [
					{
						Code: "CSN-501",
						Title: "Advanced Algorithms",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/drive/folders/1-U8ePY9XTFDhrB9KQD05OhOVmJWiKUUw",
							"Books": "https://drive.google.com/open?id=1ca1GjaBIZoCDJcQbJtbnEJSyk0gjNHh6"
						}
					},
					{
						Code: "CSN-503",
						Title: "Advanced Computer Networks",
						Credits: 4,
						Content: {
							"Slides": "https://drive.google.com/open?id=1caN6UUOkWx4ZTJYlWrkLDTZivaFmdGO_",
							"Books": "https://drive.google.com/open?id=12Pp4KN7C_0s9M57lTBBTwYoYqYIx3TlG"
						}
					},
					{
						Code: "CSN-400A",
						Title: "B.Tech. Project",
						Credits: 4
					},
					{
						Code: "CSN-499",
						Title: "Training Seminar",
						Credits: 2
					},
					{
						Code: "Exam Papers",
						Title: "Exam Portal",
						Credits: 0,
						Content: {
							"Papers": "https://drive.google.com/drive/folders/18xxg0rBJKxPFOkMl5KDr3YkISDE5vx_N"
						}
					}
				]
			},
			8: {
				Name: "Spring 2020",
				Session: "2019-20",
				Semester: "Fourth Year - 2nd Sem (Spring)",
				Courses: [
					{
						Code: "CSN-513",
						Title: "Information and Network Security",
						Credits: 4
					},
					{
						Code: "CSN-521",
						Title: "Mobile and Pervasive Computing",
						Credits: 4
					},
					{
						Code: "PR-208",
						Title: "Web Designing and Development",
						Credits: 1
					},
					{
						Code: "CSN-400B",
						Title: "B.Tech. Project",
						Credits: 4
					},
				]
			}
		}
	},
	apply: (root, urlInfo) => {
		root.innerHTML = iitr__data.template
		iitr__data.onStaticLoad(root, urlInfo)
	},
	onStaticLoad: (root, urlInfo) => {
		var iitr_main = root.querySelector('.iitr-main')
		var iitr_content = root.querySelector('.iitr-content')
		var aside = iitr_main.querySelector('aside')
		var menuBtn = iitr_main.querySelector('nav button')
		var latestSemBtn = document.getElementById('iitr-latestSem')
		var allSemBtn = document.getElementById('iitr-allSem')
		menuBtn.addEventListener('click', iitr__data.toggleMenu)
		latestSemBtn.addEventListener('click', () => { iitr__data.showSemester(iitr__data.state.curr_sem) })
		latestSemBtn.querySelector('.list__tile__title').innerHTML = 'Latest Semester (' + iitr__data.state.curr_sem + ')'
		allSemBtn.addEventListener('click', iitr__data.showAcademic)

		if (urlInfo.param === undefined) {
			iitr__data.showSemester(iitr__data.state.curr_sem)
		} else {
			var tab = urlInfo.param.tab
			if (tab === undefined) {
				iitr__data.showSemester(iitr__data.state.curr_sem)
			} else {
				tab = tab.split('-')
				if (tab.length == 1 && parseInt(tab[0]) != NaN) {
					iitr__data.showSemester(tab)
				} else if (tab.length == 2 && parseInt(tab[0]) != NaN && parseInt(tab[1]) != NaN) {
					iitr__data.showCourse(tab[0], tab[1])
				}
			}
		}

		// Ripple effect
		menuBtn.addEventListener('click', (e) => {
			showRippleEffect(e, menuBtn)
		})
		aside.querySelectorAll('a').forEach(a => {
			a.addEventListener('click', e => {
				showRippleEffect(e, a)
			})
		})
	},
	toggleMenu: () => {
		var iitr_main = document.querySelector('.iitr-main')
		var aside = iitr_main.querySelector('aside')
		var menuBtn = iitr_main.querySelector('nav button')
		if (aside.classList.contains('navigation-drawer--mini-variant')) {
			// open menu
			aside.classList.remove('navigation-drawer--mini-variant')
			menuBtn.classList.add('btn-close')
		}
		else {
			// close menu
			aside.classList.add('navigation-drawer--mini-variant')
			menuBtn.classList.remove('btn-close')
		}
	},
	showAcademic: () => {
		var iitr_content_div = document.querySelector('.iitr-content div')
		iitr_content_div.innerHTML = ''
		document.querySelector('.iitr-main nav .title').innerHTML = 'Academics'
		for (var key in iitr__data.data.Semesters) {
			var div = document.createElement('div')
			div.setAttribute('class', 'card-hori elevation-4')
			var button = document.createElement('button')
			button.innerHTML = iitr__data.data.Semesters[key].Name
			button.semester = key
			button.addEventListener('click', iitr__data.showSemester)
			div.appendChild(button)
			iitr_content_div.appendChild(div)
		}
		iitr__data.updateNavigation(0)
	},
	showSemester: (sem) => {
		if (sem.target) {
			sem = sem.target.semester
		}
		if (iitr__data.data.Semesters[sem] === undefined) return
		var iitr_content_div = document.querySelector('.iitr-content div')
		iitr_content_div.innerHTML = ''
		document.querySelector('.iitr-main nav .title').innerHTML = iitr__data.data.Semesters[sem].Name + ' (Sem ' + sem + ')'
		iitr__data.data.Semesters[sem].Courses.forEach((course, index) => {
			var div = document.createElement('div')
			div.setAttribute('class', 'card-hori elevation-4')
			if (course.disabled) div.classList.add('list__tile--disabled')
			var button = document.createElement('button')
			button.innerHTML = course.Title
			button.semester = sem
			button.index = index
			button.title = course.Code
			if (!course.disabled) button.addEventListener('click', () => {
				iitr__data.showCourse(button.semester, button.index)
			})
			div.appendChild(button)
			iitr_content_div.appendChild(div)
		})
		iitr__data.updateNavigation(sem)
	},
	showCourse: (sem, index) => {
		if (iitr__data.data.Semesters[sem] === undefined || iitr__data.data.Semesters[sem].Courses[index] === undefined) return
		var course = iitr__data.data.Semesters[sem].Courses[index]
		var iitr_content_div = document.querySelector('.iitr-content div')
		iitr_content_div.innerHTML = ''
		document.querySelector('.iitr-main nav .title').innerHTML = '[' + course.Code + '] ' + course.Title
		for (var item in course.Content) {
			var div = document.createElement('div')
			div.setAttribute('class', 'card-vert elevation-4')
			var anchor = document.createElement('a')
			anchor.setAttribute('rel', 'noopener')
			anchor.setAttribute('href', course.Content[item])
			anchor.addEventListener('click', (e) => {
				if (e.ctrlKey) window.open(e.currentTarget.href)
				else {
					spa.navigate(e.currentTarget.href)
				}
				e.preventDefault()
			})
			anchor.innerHTML = `<div class="course-svg"><div>` + iitr__data.svg_map[item] + `</div></div><div class="course-item">` + item + `</div>`
			div.appendChild(anchor)
			iitr_content_div.appendChild(div)
		}
		iitr__data.updateNavigation(sem)
	},
	updateNavigation: (sem) => {
		var activeElem = document.querySelector('.iitr-main aside .primary--text')
		var latestSemElem = document.getElementById('iitr-latestSem')
		var allSemElem = document.getElementById('iitr-allSem')
		var otherSemElem = document.getElementById('iitr-specificSem')
		activeElem.classList.replace('primary--text', 'list__tile--link')
		if (sem == 0) {
			allSemElem.classList.remove('list__tile--link')
			allSemElem.classList.add('primary--text')
			otherSemElem.parentElement.style.display = 'none'
		}
		else if (sem == iitr__data.state.curr_sem) {
			latestSemElem.classList.add('primary--text')
			latestSemElem.classList.remove('list__tile--link')
			otherSemElem.parentElement.style.display = 'none'
		} else {
			otherSemElem.classList.add('primary--text')
			otherSemElem.classList.remove('list__tile--link')
			otherSemElem.querySelector('.list__tile__title').innerHTML = iitr__data.data.Semesters[sem].Name + ' (' + sem + ')'
			otherSemElem.parentElement.style.display = 'block'
		}
	},
	state: {
		curr_sem: 8
	},
	svg_map: {
		"Notes": '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M15,20A1,1 0 0,0 16,19V4H8A1,1 0 0,0 7,5V16H5V5A3,3 0 0,1 8,2H19A3,3 0 0,1 22,5V6H20V5A1,1 0 0,0 19,4A1,1 0 0,0 18,5V9L18,19A3,3 0 0,1 15,22H5A3,3 0 0,1 2,19V18H13A2,2 0 0,0 15,20M9,6H14V8H9V6M9,10H14V12H9V10M9,14H14V16H9V14Z"/></svg>',
		"Photos": '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6"/></svg>',
		"Videos": '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M17,10.5L21,6.5V17.5L17,13.5V17A1,1 0 0,1 16,18H4A1,1 0 0,1 3,17V7A1,1 0 0,1 4,6H16A1,1 0 0,1 17,7V10.5M10.91,9.55L9.2,11.82L10.5,13.55L9.77,14.09L7.73,11.36L5,15H15L10.91,9.55Z"/></svg>',
		// "Slides": '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M2,3H10A2,2 0 0,1 12,1A2,2 0 0,1 14,3H22V5H21V16H15.25L17,22H15L13.25,16H10.75L9,22H7L8.75,16H3V5H2V3M5,5V14H19V5H5M11.85,11.85C11.76,11.94 11.64,12 11.5,12A0.5,0.5 0 0,1 11,11.5V7.5A0.5,0.5 0 0,1 11.5,7C11.64,7 11.76,7.06 11.85,7.15L13.25,8.54C13.57,8.86 13.89,9.18 13.89,9.5C13.89,9.82 13.57,10.14 13.25,10.46L11.85,11.85Z"/></svg>'
		"Slides": '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50" style=" fill:currentColor;"><g id="surface1"><path style=" " d="M 28.875 0 C 28.855469 0.0078125 28.832031 0.0195313 28.8125 0.03125 L 0.8125 5.34375 C 0.335938 5.433594 -0.0078125 5.855469 0 6.34375 L 0 43.65625 C -0.0078125 44.144531 0.335938 44.566406 0.8125 44.65625 L 28.8125 49.96875 C 29.101563 50.023438 29.402344 49.949219 29.632813 49.761719 C 29.859375 49.574219 29.996094 49.296875 30 49 L 30 44 L 47 44 C 48.09375 44 49 43.09375 49 42 L 49 8 C 49 6.90625 48.09375 6 47 6 L 30 6 L 30 1 C 30.003906 0.710938 29.878906 0.4375 29.664063 0.246094 C 29.449219 0.0546875 29.160156 -0.0351563 28.875 0 Z M 28 2.1875 L 28 6.6875 C 27.941406 6.882813 27.941406 7.085938 28 7.28125 L 28 42.8125 C 27.972656 42.945313 27.972656 43.085938 28 43.21875 L 28 47.8125 L 2 42.84375 L 2 7.15625 Z M 30 8 L 47 8 L 47 42 L 30 42 L 30 37 L 40 37 L 40 35 L 30 35 L 30 29.4375 C 30.921875 29.804688 31.949219 30 33 30 C 37.40625 30 41 26.40625 41 22 L 41 21 L 34 21 L 34 14 L 33 14 C 31.941406 14 30.929688 14.191406 30 14.5625 Z M 35 11 L 35 20 L 44 20 L 44 19 C 44 14.59375 40.40625 11 36 11 Z M 37 13.1875 C 39.492188 13.617188 41.382813 15.507813 41.8125 18 L 37 18 Z M 8.15625 15.65625 L 8.15625 34.375 L 12.375 34.375 L 12.375 27.9375 L 14.375 27.9375 C 16.636719 27.9375 18.460938 27.347656 19.8125 26.1875 C 21.164063 25.027344 21.84375 23.503906 21.84375 21.625 C 21.84375 17.648438 19.464844 15.65625 14.75 15.65625 Z M 32 16.25 L 32 23 L 38.8125 23 C 38.324219 25.828125 35.972656 28 33 28 C 31.953125 28 30.980469 27.71875 30.125 27.25 C 30.085938 27.226563 30.042969 27.207031 30 27.1875 L 30 16.8125 C 30.03125 16.792969 30.0625 16.773438 30.09375 16.75 C 30.660156 16.433594 31.339844 16.367188 32 16.25 Z M 12.375 18.90625 L 14.03125 18.90625 C 16.273438 18.90625 17.40625 19.859375 17.40625 21.78125 C 17.40625 23.746094 16.273438 24.71875 14.03125 24.71875 L 12.375 24.71875 Z"></path></g></svg>',
		"Assignments": '<svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M17,9H7V7H17M17,13H7V11H17M14,17H7V15H14M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"/></svg>',
		"Project": '<svg style="width:24px;height:24px" viewBox="0 0 24 24">	<path fill="currentColor" d="M4,2A1,1 0 0,0 3,3V4A1,1 0 0,0 4,5H5V14H11V16.59L6.79,20.79L8.21,22.21L11,19.41V22H13V19.41L15.79,22.21L17.21,20.79L13,16.59V14H19V5H20A1,1 0 0,0 21,4V3A1,1 0 0,0 20,2H4Z"/></svg>',
		"Books": '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M13,12H20V13.5H13M13,9.5H20V11H13M13,14.5H20V16H13M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M21,19H12V6H21"/></svg>',
		"Codes": '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"/></svg>',
		"Papers": '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/></svg>',
		"Lab": '<svg style="width:36px;height:36px" viewBox="0 0 24 24"><path fill="currentColor" d="M11,7.83C9.83,7.42 9,6.3 9,5A3,3 0 0,1 12,2A3,3 0 0,1 15,5C15,6.31 14.16,7.42 13,7.83V10.64C12.68,10.55 12.35,10.5 12,10.5C11.65,10.5 11.32,10.55 11,10.64V7.83M18.3,21.1C17.16,20.45 16.62,19.18 16.84,17.96L14.4,16.55C14.88,16.09 15.24,15.5 15.4,14.82L17.84,16.23C18.78,15.42 20.16,15.26 21.29,15.91C22.73,16.74 23.22,18.57 22.39,20C21.56,21.44 19.73,21.93 18.3,21.1M2.7,15.9C3.83,15.25 5.21,15.42 6.15,16.22L8.6,14.81C8.76,15.5 9.11,16.08 9.6,16.54L7.15,17.95C7.38,19.17 6.83,20.45 5.7,21.1C4.26,21.93 2.43,21.44 1.6,20C0.77,18.57 1.26,16.73 2.7,15.9M14,14A2,2 0 0,1 12,16C10.89,16 10,15.1 10,14A2,2 0 0,1 12,12C13.11,12 14,12.9 14,14M17,14L16.97,14.57L15.5,13.71C15.4,12.64 14.83,11.71 14,11.12V9.41C15.77,10.19 17,11.95 17,14M14.97,18.03C14.14,18.64 13.11,19 12,19C10.89,19 9.86,18.64 9.03,18L10.5,17.17C10.96,17.38 11.47,17.5 12,17.5C12.53,17.5 13.03,17.38 13.5,17.17L14.97,18.03M7.03,14.56L7,14C7,11.95 8.23,10.19 10,9.42V11.13C9.17,11.71 8.6,12.64 8.5,13.7L7.03,14.56Z"/></svg>',
		"Quizzes": '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z"/></svg>'
	}
}

spa.register('/res-iitr', iitr__data)