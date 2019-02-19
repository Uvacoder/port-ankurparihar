function toggleSem(id) {
	var iitr_title = document.querySelector('.iitr_title');
	var all_sems = document.getElementById("all_sems");
	var cur_subs = document.getElementById("cur_subs");
	var req_subs = document.getElementById("req_subs");
	// console.log(id);
	var n, m;
	// CSS
	n = document.getElementById(id);
	if (n.classList.contains('active_sem')) return;
	if (id == 'iitr_sem_all') {
		m = document.getElementById('iitr_sem_curr');
	} else {
		m = document.getElementById('iitr_sem_all');
	}
	n.classList.add('active_sem');
	m.classList.remove('active_sem');
	iitr_title.innerHTML = (n.innerHTML == "All") ? "All" : "Spring 2019";
	if (id == "iitr_sem_all") {
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

function toggleReqSem(semester) {
	if (semester == cur_sem) {
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
	iitr_sem_exp.setAttribute("onclick", "showSubjects(" + semester + "); toggleReqSem(" + semester + ")");
	all_sems.style.display = cur_subs.style.display = "none";
	req_subs.style.display = iitr_sem_exp.style.display = "block";
	iitr_sem_exp.style.backgroundColor = "#f3c669";
	document.getElementById("course_content").style.display = "none";
}

function showSubjects(semester) {
	// console.log("clicked...");
	var sub_elem = document.getElementById('req_subs');
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
	document.getElementById("iitr_sem_exp").style.backgroundColor = "#f3c669";
	document.getElementById('iitr_sem_pxe-1').style.display = document.getElementById('iitr_sem_pxe-2').style.display = "none";
	document.getElementById("course_content").style.display = "none";
}

function showSubject(sem, id) {
	var sub = Semesters[sem].Courses[id];
	if (!sub) return;
	var iitr_sem_pxe;
	if (sem == cur_sem) {
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