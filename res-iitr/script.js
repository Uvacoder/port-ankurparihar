var cur_sem = 6;
var Semesters = {
	1: {
		Name: "Autumn 2016",
		Session: "2016-17",
		Semester: "First Year - 1st Sem (Autumn)",
		Courses: [
			{
				Code: "CEN-105",
				Title: "Introduction to Environmental Studies",
				Credits: 3
			},
			{
				Code: "CSN-101",
				Title: "Introduction to Computer Science and Engineering",
				Credits: 2
			},
			{
				Code: "CSN-103",
				Title: "Fundamentals of Objects Oriented Programming",
				Credits: 4
			},
			{
				Code: "HSN-001A",
				Title: "Communication Skills (BASIC)",
				Credits: 2
			},
			{
				Code: "HSN-002",
				Title: "Ethics and Self Awareness",
				Credits: 2
			},
			{
				Code: "MAN-001",
				Title: "Mathematics-I",
				Credits: 4
			},
			{
				Code: "PHN-005",
				Title: "Electrodynamics and Optics",
				Credits: 3
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
				Credits: 4
			},
			{
				Code: "CSN-106",
				Title: "Discrete Structures",
				Credits: 4
			},
			{
				Code: "ECN-102",
				Title: "Fundamental of Electronics",
				Credits: 4
			},
			{
				Code: "ECN-104",
				Title: "Digital Logic Design",
				Credits: 4
			},
			{
				Code: "MAN-010",
				Title: "Optimization Techniques",
				Credits: 4
			},
			{
				Code: "PHN-006",
				Title: "Quantum Mechanics and Statistical Mechanics",
				Credits: 4
			},
			{
				Code: "PR-501",
				Title: "N.C.C.",
				Credits: 2
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
				Credits: 4
			},
			{
				Code: "CSN-261",
				Title: "Data Structure Laboratory",
				Credits: 2
			},
			{
				Code: "CSN-291",
				Title: "Object Oriented Analysis and Design",
				Credits: 4
			},
			{
				Code: "ECN-203",
				Title: "Signals and Systems",
				Credits: 4
			},
			{
				Code: "HSS-01",
				Title: "Economics",
				Credits: 3
			},
			{
				Code: "MIN-106",
				Title: "Engineering Thermodynamics",
				Credits: 4
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
				Credits: 4
			},
			{
				Code: "CSN-252",
				Title: "System Software",
				Credits: 3
			},
			{
				Code: "CSN-254",
				Title: "Software Engineering",
				Credits: 4
			},
			{
				Code: "ECN-252",
				Title: "Digital Electronic Circuits Laboratory",
				Credits: 2
			},
			{
				Code: "MTN-105",
				Title: "Electrical and Electronic Materials",
				Credits: 4
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
				Credits: 4
			},
			{
				Code: "CSN-351",
				Title: "Data Base Management Systems",
				Credits: 4
			},
			{
				Code: "CSN-353",
				Title: "Theory of Computation",
				Credits: 4
			},
			{
				Code: "CSN-361",
				Title: "Computer Network Laboratory",
				Credits: 2
			},
			{
				Code: "CSN-373",
				Title: "Probability Theory for Computer Engineering",
				Credits: 4
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
					"Notes": "https://drive.google.com/drive/folders/126q9B-ldG29IRZ8Pg48GaVStMX_PAEoI?usp=sharing",
					"Slides": "https://drive.google.com/open?id=10V-oWqc5ijYhIip_79NpAfoEHEwAWnGP",
					"Assignment": "https://drive.google.com/drive/folders/1VlobDAV6XXRsdMSfPjkuD8NMaDmT9EqL?usp=sharing",
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
					"Notes": "https://drive.google.com/drive/folders/1T6G1razV6y2LUCzKbzPIrYNLBfyR-Y5n?usp=sharing",
					"Books": "https://drive.google.com/open?id=1clsuPdwSMIvzy5MmreznYjHWVYM2p6pw"
				}
			},
			{
				Code: "CSN-362",
				Title: "Compiler Laboratory",
				Credits: 3,
				Content: {
					"Codes": "https://drive.google.com/drive/folders/1mT5rnAF_xTLdbW3OD_cL3kZQGVgWzRz-?usp=sharing"
				}
			},
			{
				Code: "CSN-399",
				Title: "Educational Tour",
				Credits: 0
			},
			{
				Code: "CSN-382",
				Title: "Machine Learning",
				Credits: 4,
				Content: {
					"Slides": "https://drive.google.com/open?id=1EkYpiGZQ1-tIBVcNmHOXiiXogx83GzwS",
					"Assignment": "https://drive.google.com/drive/folders/177LouXpprDZc127I-N2zEt5V3kISNKrE?usp=sharing"
				}
			},
			{
				Code: "CSE-Exam",
				Title: "Exam Portal",
				Credits: 0,
				Content: {
					"Papers": "https://drive.google.com/drive/folders/1TPLvWNp7iKw2yTjvQlhBKiJhg0H1yYV6?usp=sharing"
				}
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
	n.classList.add('active_sem');
	m.classList.remove('active_sem');
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
	course_content.style.display = "none";
}

function toggleReqSem(semester) {
	if (semester == cur_sem) {
		toggleSem("iitr_sem_curr");
		return;
	}
	iitr_sem_all.classList.remove("active_sem");
	iitr_title.innerHTML = iitr_sem_exp.innerHTML = Semesters[semester].Name; /* '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,15L13,21L11.58,19.58L15.17,16H4V4H6V14H15.17L11.58,10.42L13,9L19,15Z" /></svg>' + */
	iitr_sem_exp.setAttribute("onclick", "showSubjects(" + semester + "); toggleReqSem(" + semester + ")");
	all_sems.style.display = cur_subs.style.display = "none";
	req_subs.style.display = iitr_sem_exp.style.display = "block";
	iitr_sem_exp.style.backgroundColor = "#f3c669";
	course_content.style.display = "none";
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
	iitr_sem_exp.style.backgroundColor = "#f3c669";
	iitr_sem_pxe_1.style.display = iitr_sem_pxe_2.style.display = "none";
	course_content.style.display = "none";
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
	iitr_sem_exp.style.backgroundColor = "#303030";
	iitr_sem_all.classList.remove("active_sem");
	iitr_sem_curr.classList.remove("active_sem");
	iitr_sem_pxe.innerHTML = sub.Code;
	iitr_title.innerHTML = sub.Title;
	iitr_sem_pxe.style.display = "block";
	req_subs.style.display = cur_subs.style.display = "none";
	// Show course content
	course_content.style.display = "flex";
	var contents = sub.Content;
	var string = "";
	for (cont in contents) {
		string +=
			'<div class="course_content_box elevation-3">\
			<a href="'+ contents[cont] + '" target="_blank">\
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
