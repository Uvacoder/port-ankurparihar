var cur_sem = 7;
var Semesters = {
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
				Code: "CSE-Exam",
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
				Code: "CSE-Exam",
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
				Code: "CSE-Exam",
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
					"Assignments": "https://drive.google.com/drive/folders/1gC4piTUVFQdWrNa4m3EW-msbKn4OjMrj"
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
				Code: "CSE-Exam",
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
				Code: "CSE-Exam",
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
					"Project": "/demo?origin=IES-301"
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
					"Photos": "https://photos.app.goo.gl/NZswYc12LE583sCW9"
				}
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
				Code: "CSE-Exam",
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
			}
		]
	},
	8: {
		Name: "Spring 2020",
		Session: "2019-20",
		Semester: "Fourth Year - 2nd Sem (Spring)",
		Courses: [
			{
				Code: "CSN-400B",
				Title: "B.Tech. Project",
				Credits: 4
			}
		]
	}
};

// variables
var iitr_sem_exp = document.getElementById("iitr_sem_exp");
var iitr_title = document.querySelector('.iitr_title');
var all_sems = document.getElementById("all_sems");
var cur_subs = document.getElementById("cur_subs");
var req_subs = document.getElementById("req_subs");
var iitr_sem_curr = document.getElementById('iitr_sem_curr');
var iitr_sem_all = document.getElementById('iitr_sem_all');
var course_content = document.getElementById("course_content");
var iitr_sem_pxe_1 = document.getElementById('iitr_sem_pxe-1');
var iitr_sem_pxe_2 = document.getElementById('iitr_sem_pxe-2');
var iitr_ast_timetable = document.getElementById('iitr_ast_timetable');
var timetable_holder = document.getElementById('timetable_holder');

function toggleSem(id) {
	// console.log(id);
	var n, m;
	// CSS
	n = document.getElementById(id);
	if (n.classList.contains('active_sem')) return;
	if (id == 'iitr_sem_all') {
		m = iitr_sem_curr;
	} else {
		m = iitr_sem_all;
	}
	document.querySelectorAll(".iitr_side-options .active-option").forEach(elem => {elem.classList.remove("active-option");});
	n.classList.add('active-option');
	iitr_title.innerHTML = (n.innerHTML == "All") ? "All" : Semesters[cur_sem].Name;
	if (id == "iitr_sem_all") {
		cur_subs.style.display = "none";
		all_sems.style.display = "block";
	}
	else {
		all_sems.style.display = "none";
		cur_subs.style.display = "block";
	}
	req_subs.style.display = iitr_sem_exp.style.display = iitr_sem_pxe_1.style.display = iitr_sem_pxe_2.style.display = "none";
	course_content.style.display = timetable_holder.style.display = "none";
}

function toggleReqSem(semester) {
	if (semester == cur_sem) {
		toggleSem("iitr_sem_curr");
		return;
	}
	document.querySelectorAll(".iitr_side-options .active-option").forEach(elem => {elem.classList.remove("active-option");});
	iitr_title.innerHTML = iitr_sem_exp.innerHTML = Semesters[semester].Name; /* '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,15L13,21L11.58,19.58L15.17,16H4V4H6V14H15.17L11.58,10.42L13,9L19,15Z" /></svg>' + */
	iitr_sem_exp.setAttribute("onclick", "showSubjects(" + semester + "); toggleReqSem(" + semester + ")");
	all_sems.style.display = cur_subs.style.display = "none";
	req_subs.style.display = iitr_sem_exp.style.display = "block";
	iitr_sem_exp.classList.add('active-option');
	course_content.style.display = timetable_holder.style.display = "none";
}

function showSubjects(semester) {
	// console.log("clicked...");
	var sub_elem = req_subs;
	if (!sub_elem) return;
	// Clean sub_elem
	sub_elem.innerHTML = "";
	var subjects = Semesters[semester].Courses;
	var id = 0;
	subjects.forEach(function (subject) {
		// console.log(subject.Title);
		var child = document.createElement("div");
		var buttn = document.createElement("button");
		buttn.setAttribute("onclick", "showSubject(" + semester + "," + id + ")"); id++;
		var btndiv = document.createElement("div");
		btndiv.innerHTML = subject.Title;
		buttn.appendChild(btndiv);
		child.appendChild(buttn);
		child.classList.add("sub_box", "responsive", "center_flex");
		sub_elem.appendChild(child);
	});
	sub_elem.style.display = "block";
	iitr_sem_exp.classList.add("active-option");
	iitr_sem_pxe_1.style.display = iitr_sem_pxe_2.style.display = course_content.style.display = timetable_holder.style.display = "none";
}

function showSubject(sem, id) {
	var sub = Semesters[sem].Courses[id];
	if (!sub) return;
	var iitr_sem_pxe;
	if (sem == cur_sem) {
		iitr_sem_pxe = iitr_sem_pxe_1;
	} else {
		iitr_sem_pxe = iitr_sem_pxe_2;
	}
	document.querySelectorAll(".iitr_side-options .active-option").forEach(elem => {elem.classList.remove("active-option");});
	iitr_sem_pxe.classList.add('active-option');
	iitr_sem_pxe.innerHTML = sub.Code;
	iitr_title.innerHTML = sub.Title;
	iitr_sem_pxe.style.display = "block";
	req_subs.style.display = cur_subs.style.display = timetable_holder.style.display = "none";
	// Show course content
	course_content.style.display = "flex";
	var contents = sub.Content;
	var string = "";
	for (cont in contents) {
		string +=
			'<div class="course_content_box elevation-3">\
			<a href="'+ contents[cont] + '" target="_blank" rel="noopener">\
				<div class="course_content_box-svg">\
					<div>\
						'+ svg_data[cont] + '\
					</div>\
				</div>\
				<div class="course_content_box-txt">'+ cont + '</div>\
			</a>\
		</div>';
	}
	course_content.innerHTML = string;
}

function initResIITR() {
	var i = 0;
	var sem_str = '';
	var subs = Semesters[cur_sem].Courses;
	for (sub in subs) {
		sem_str = sem_str + '<div class="sub_box responsive center_flex"><button onclick="showSubject(' + cur_sem + ',' + i + ')"><div>' + subs[sub].Title + '</div></button></div>';
		++i;
	}
	cur_subs.innerHTML = sem_str;
	i = 1;
	sem_str = '';
	for (sem in Semesters) {
		sem_str = sem_str + '<div class="sem_box responsive center_flex"><button onclick="showSubjects(' + i + '); toggleReqSem(' + i + ')"><div>' + Semesters[sem].Name + '</div></button></div>';
		++i;
	}
	all_sems.innerHTML = sem_str;
}

function showIITRTimeTable() {
	toggleSem('iitr_sem_curr');
	cur_subs.style.display = "none";
	timetable_holder.style.display = "block";
	iitr_title.innerHTML = "Time-Table";
	document.querySelectorAll(".iitr_side-options .active-option").forEach(elem => {elem.classList.remove("active-option");});
	iitr_ast_timetable.classList.add("active-option");
}

function scanIITRPage() {
	var params, key, value, proj_obj;
	var split = decodeURI(window.location.href).split('?')[1];
	if (!split) {
		return;
	}
	params = split.split('&');
	// console.log(params);
	params.forEach(p => {
		[key, value] = [p.split('=')[0], p.split('=')[1]];
		// Format
		// tab=5_3
		if(key=='tab'){
			if(value=='timetable'){
				showIITRTimeTable();
			}
			else {
				value = value.split('-');
				showSubject(value[0], value[1]-1);
			}
			return;
		}
	});
}

initResIITR();
scanIITRPage();