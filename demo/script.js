const demo_help_div = document.querySelector(".demo_help-div");
const demo_help_popup = document.getElementById("demo_help-popup");
const demo_index_list = document.getElementById("demo_index_list");

function showInfoPop(demo_name){
	demo_help_popup.innerHTML = Projects[demo_name].Description;
	demo_help_div.style.display = "flex";
	setTimeout(function(){
		demo_help_popup.style.transform = "scale(1)";
	}, 100);
}

function hideInfoPop(){
	demo_help_popup.style.transform = "scale(0)";
	setTimeout(function(){
		demo_help_div.style.display = "none";
	}, 100);
}

function scanDemoPage() {
	var params, key, value, proj_obj;
	var split = decodeURI(window.location.href).split('?')[1];
	if (!split) {
		loadDemo(null);
		return;
	}
	params = split.split('&');
	// console.log(params);
	params.forEach(p => {
		[key, value] = [p.split('=')[0], p.split('=')[1]];
		// console.log(key ,'=', value);
		if(key=='origin'){
			loadDemo(value);
			document.getElementById("demo_back").style.visibility = "visible";
			return;
		}
		if (key == 'name') {
			proj_obj = Projects[value];
			if(!proj_obj || proj_obj.isDemoAvailabe===false){
				loadDemo(null);
				return;
			}
			window.location.href = proj_obj.File;
		}
	});
}

function loadDemo(origin){
	if(window.location.href.split('/').length!=5){
		return;
	}
	var demo_list = "";
	if(!origin){
		for(project in Projects){
			// console.log(Projects[project].Title);
			demo_list +=
			'<div class="demo_index">\
				<a href="'+Projects[project].File+'" target="_blank" tabindex="-1">\
					<img src="'+Projects[project].Img+'" width="100%" height="auto" alt="'+Projects[project].Title+'_img"></img>\
					<div class="demo_index-overlay" style="display:flex;flex-direction:column-reverse;flex-wrap: wrap-reverse">\
						<h4>'+Projects[project].Title+'</h4>\
						<span class="demo_index-shade"></span>\
					</div>\
				</a>\
			</div>';
		}
		demo_index_list.innerHTML = demo_list;
	}
	else{
		for(project in Projects){
			// console.log(Projects[project].Title);
			if(Projects[project].Origin==origin){
				demo_list +=
				'<div class="demo_index">\
					<a href="'+Projects[project].File+'" target="_blank" tabindex="-1">\
						<img src="'+Projects[project].Img+'" width="100%" height="auto" alt="'+Projects[project].Title+'_img"></img>\
						<div class="demo_index-overlay" style="display:flex;flex-direction:column-reverse;flex-wrap: wrap-reverse">\
							<h4>'+Projects[project].Title+'</h4>\
							<span class="demo_index-shade"></span>\
						</div>\
					</a>\
				</div>';
			}
		}
		demo_index_list.innerHTML = demo_list;
		document.getElementById("demo_title").innerText = "Demo " + origin;
	}
}
scanDemoPage();