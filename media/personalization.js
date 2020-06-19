var user;
var repos;
var status;
var access_token;
var gitddb = false;
var config_file_path = '/git-ddb-ankurparihar.json';
var default_config = {"--theme-color":"#f3c669","--theme-color-rgb":[243,198,105]};
var config_file_sha = null;
var successfull_sign_in = null;
var config_data = JSON.parse(JSON.stringify(default_config));
var getUserStatus = null;
var menu_visible = false;

function resetConfig() {
	deleteCookie('theme');
	user = null;
	repos = null;
	status = null;
	gitddb = false;
	access_token = null;
	config_file_sha = null;
	config_data = JSON.parse(JSON.stringify(default_config));
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 86400000));
	var expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
	var name, value, flag = false;
	var ca = document.cookie.split(';');
	ca.forEach(p => {
		if (!flag) {
			var pa = p.split('=');
			if(pa.length==2){
				[name, value] = [pa[0].trim(), pa[1].trim()];
				if (name == cname) {
					flag = true;
					return value;
				}
			}
		}
	});
	return (flag) ? value : '';
}

function deleteCookie(cname) {
	setCookie(cname, '', -1);
}

function getUser() {
	fetch('https://api.github.com/user', {
		headers: {
			"Authorization": "token " + access_token
		}
	}).then(response => {
		return response.json();
	}).then(myJson => {
		if(myJson['message']){
			getUserStatus = false;
			successfull_sign_in = false;
			return false;
		}
		user = myJson;
		if(user['login'] && user['login']!=''){
			console.log('AUTH_INFO: User info fetched');
			checkGDDBRepo();
			getUserStatus = true;
			return true;
		} else {
			console.log('AUTH_ERR : Could not fetch user info');
			user = null;
			getUserStatus = false;
			successfull_sign_in = false;
			return false;
		}
	});
}

function getReposList() {
	fetch('https://api.github.com/user/repos' + '?type=private', {
		headers: {
			"Authorization": "token " + access_token
		}
	}).then(response => {
		return response.json();
	}).then(myJson => {
		repos = myJson;
	});
	return true;
}

function checkGDDBRepo() {
	fetch('https://api.github.com/repos/' + user['login'] + '/git-ddb', {
		headers: {
			"Authorization": "token " + access_token
		}
	}).then(response => {
		return response.json();
	}).then(status => {
		if (status['message'] != 'Not Found') {
			gitddb = true;
			console.log('AUTH_INFO: git-ddb repository found');
			getConfig();
		} else {
			gitddb = false;
			console.log('AUTH_WARN: git-ddb repository not found');
			console.log('AUTH_INFO: creating git-ddb repository');
			createGDDBRepo();
			successfull_sign_in = false;
			return false;
		}
	});
}

function createGDDBRepo() {
	fetch('https://api.github.com/user/repos', {
		method: 'POST',
		headers: {
			"Authorization": "token " + access_token
		},
		body: JSON.stringify({
			"name": "git-ddb",
			"description": "Github Distrubuted Database Global Repository",
			"private": true,
			"has_issues": false,
			"has_projects": false,
			"has_wiki": false,
			"auto_init": true
		})
	}).then(response => {
		return response.json();
	}).then(status => {
		if(status['errors']){
			if(status['errors'][0]['message']=='name already exists on this account'){
				gitddb = true;
				console.log('AUTH_INFO: Already exists git-ddb repository');
				getConfig();
				return true;
			}
			gitddb = false;
			console.log('AUTH_ERR : Could not create git-ddb repository');
			successfull_sign_in = false;
			return false;
		}
		else if(status['id']){
			gitddb = true;
			console.log('AUTH_INFO: Created git-ddb repository');
			getConfig();
			return true;
		}
	});
}

function getConfig() {
	fetch('https://api.github.com/repos/' + user['login'] + '/git-ddb/contents' + config_file_path, {
		headers: {
			"Authorization": "token " + access_token
		}
	}).then(response => {
		return response.json();
	}).then(data => {
		if (data['message'] == 'Not Found') {
			console.log('AUTH_WARN: could not find setting file on remote');
			config_file_sha = '';
			successfull_sign_in = false;
			return false;
		} else {
			config_data = JSON.parse(atob(data['content']));
			console.log('AUTH_INFO: found settings file on remote');
			config_file_sha = data['sha'];
			cookiefieConfig();
			applyConfig();
			successfull_sign_in = true;
			return true;
		}
	});
}

function createConfig() {
	fetch('https://api.github.com/repos/' + user['login'] + '/git-ddb/contents' + config_file_path, {
		method: 'PUT',
		headers: {
			"Authorization": "token " + access_token
		},
		body: JSON.stringify({
			"message": "set by @ankurparihar",
			"content": btoa(JSON.stringify(config_data))
		})
	}).then(response => {
		return response.json();
	}).then(status => {
		console.log(status);
		if (status['message']) {
			console.log('AUTH_ERR : could not create setting file on remote');
			config_file_sha = null;
			successfull_sign_in = false;
			return false;
		}
		else {
			console.log('AUTH_INFO: created setting file on remote');
			config_file_sha = status['content']['sha'];
			cookiefieConfig();
			applyConfig();
			successfull_sign_in = true;
			return true;
		}
	});
}

function updateConfig() {
	fetch('https://api.github.com/repos/' + user['login'] + '/git-ddb/contents' + config_file_path, {
		method: 'PUT',
		headers: {
			"Authorization": "token " + getCookie('access_token')
		},
		body: JSON.stringify({
			"message": "set by @ankurparihar",
			"content": btoa(JSON.stringify(config_data)),
			"sha": config_file_sha
		})
	}).then(response => {
		return response.json();
	}).then(status => {
		if (status['message']) {
			return false;
		} else {
			console.log(status);
			return true;
		}
	});
}

function applyConfig() {
	var root = document.documentElement;
	if(config_data['--theme-color']){
		root.style.setProperty('--theme-color', config_data['--theme-color']);
	}
	if(config_data['--theme-color-rgb']){
		root.style.setProperty('--theme-color-r', config_data['--theme-color-rgb'][0]);
		root.style.setProperty('--theme-color-g', config_data['--theme-color-rgb'][1]);
		root.style.setProperty('--theme-color-b', config_data['--theme-color-rgb'][2]);
	}
	console.log('AUTH_INFO: configuration applied');
}

function cookiefieConfig(){
	if(config_data['--theme-color-rgb']){
		setCookie('theme',JSON.stringify({
			'--theme-color-rgb': config_data['--theme-color-rgb'],
			'--theme-color':config_data['--theme-color']
		}), 30);
	}
	console.log('AUTH_INFO: Settings saved in cookies');
}

function decookiefieConfig(){
	var getCook = getCookie('theme');
	if(getCook!=undefined && getCook!=''){
		getCook = JSON.parse(getCook);
		config_data['--theme-color-rgb'] = getCook['--theme-color-rgb'];
		config_data['--theme-color'] = getCook['--theme-color'];
		return true;
	} else {
		return false;
	}
}

function checkAccessToken() {
	access_token = getCookie('access_token');
	if (!access_token) {
		return false;
	}
	return true;
}

function signOut() {
	deleteCookie('access_token');
	deleteCookie('theme');
	console.log('AUTH_INFO: Deleted all settings and access token');
	successfull_sign_in = null;
	resetConfig();
	applyConfig();
	console.log('AUTH_INFO: Applied default config');
	setSignOutStatus();
}

function applyAuth() {
	console.log('AUTH_INFO: checking sign info');
	
	if(checkAccessToken()) {
		console.log('AUTH_INFO: Access token found');
	} else {
		console.log('AUTH_ERR : Access token not found');
		setSignOutStatus();
		return;
	}
	
	if(decookiefieConfig()) {
		console.log("AUTH_INFO: Found saved settings in cookies");
	} else {
		console.log("AUTH_ERR : No cookies found for settings");
		setSignOutStatus();
		return;
	}

	applyConfig();
	getUser();
	var getUserLoop = setInterval(function(){
		if(getUserStatus===false || getUserStatus===true) {
			clearInterval(getUserLoop);
			if(getUserStatus===false || (!user)) {
				setSignOutStatus();
			}
			else if(user['avatar_url']){
				setSignInStatus();
			}
			getUserStatus = null;
		}
	}, 1000);
}

function toggleAccountMenu(action) {
	var menu_div = document.querySelector(".application .menu__content.user_options");
	if(action=='close') menu_visible = true;
	else if (action=='open') menu_visible = false;
	if(menu_visible===false){
		menu_div.style.display = "block";
	} else {
		menu_div.style.display = "none";
	}
	menu_visible = !menu_visible;
}

function setSignInStatus() {
	var user_options = document.querySelector('.toolbar .user-options');
	user_options.innerHTML = `<div class="menu" style="display:inline-block;"><div class="menu__activator"><button type="button" class="avatar-container btn btn--icon btn--large" style="position: relative" onclick="toggleAccountMenu()"><div class="btn__content"><div class="avatar" style="background:transparent url('`+ user['avatar_url'].split('?')[0] + `?s=48` +`') center center / cover;"></div></div></button></div></div>`;
	var parent_nav = document.querySelector("#nav-sign-in").parentElement.parentElement.parentElement;
	parent_nav.querySelector("#nav-sign-in").parentElement.parentElement.style.display = 'none';
	parent_nav.querySelector("#nav-acc-setting").parentElement.parentElement.style.display = 'block';
	parent_nav.querySelector("#nav-switch-acc").parentElement.parentElement.style.display = 'block';
	parent_nav.querySelector("#nav-sign-out").parentElement.parentElement.style.display = 'block';
	var menu_div = document.querySelector(".application .menu__content.user_options");
	menu_div.style.display = "none";
	menu_div.innerHTML = `<div class="user_options__top_wrapper"><div class="user_options__top flex row align-center"><button type="button" class="btn btn--icon btn--large avatar-container" style="position:relative"><div class="btn__content"><div class="avatar" style="background: transparent url(` + user['avatar_url'].split('?')[0] + `?s=44` + `) center center / cover"></div></div></button><div class="user_options__top__nameemail flex column justify-center align-left"><div class="nameemail__name cut_text">` + user['name'] + `</div><div class="nameemail__email cut_text">` + user['login'] + `</div></div></div></div><div class="list user_options__list"><a class="list__tile list__tile--link" href="javascript:{toggleAccountMenu();loadDoc('/account', 'nav-acc-setting')}"><div class="list__tile__action"><svg style="width:24px;height:24px" fill="currentColor" viewBox="0 0 24 24"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></svg></div><div class="list__tile__content"><div class="list__tile__title">My account</div></div></a><a class="list__tile list__tile--link" href="javascript:{toggleAccountMenu();loadDoc('/sign-in/index.html', 'nav-switch-acc')}"><div class="list__tile__action"><svg style="width:24px;height:24px" fill="currentColor" viewBox="0 0 24 24"><path d="M16,9C18.33,9 23,10.17 23,12.5V15H17V12.5C17,11 16.19,9.89 15.04,9.05L16,9M8,9C10.33,9 15,10.17 15,12.5V15H1V12.5C1,10.17 5.67,9 8,9M8,7A3,3 0 0,1 5,4A3,3 0 0,1 8,1A3,3 0 0,1 11,4A3,3 0 0,1 8,7M16,7A3,3 0 0,1 13,4A3,3 0 0,1 16,1A3,3 0 0,1 19,4A3,3 0 0,1 16,7M9,16.75V19H15V16.75L18.25,20L15,23.25V21H9V23.25L5.75,20L9,16.75Z" /></svg></div><div class="list__tile__content"><div class="list__tile__title">Switch account</div></div></a><a class="list__tile list__tile--link" href="javascript:{toggleAccountMenu();signOut();}"><div class="list__tile__action"><svg style="width:24px;height:24px" fill="currentColor" viewBox="0 0 24 24"><path d="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13" /></svg></div><div class="list__tile__content"><div class="list__tile__title">Sign out</div></div></a></div>`;
}

function setSignOutStatus() {
	var user_options = document.querySelector('.toolbar .user-options');
	user_options.innerHTML = `<button type="button" class="transparent logo-text-btn log-in-text btn btn-large" style="position: relative;" onclick="javascript:loadDoc('/sign-in/index.html', 'nav-sign-in')"><div class="btn-content"><span>SIGN IN</span></div></button>`;
	var parent_nav = document.querySelector("#nav-sign-in").parentElement.parentElement.parentElement;
	parent_nav.querySelector("#nav-sign-in").parentElement.parentElement.style.display = 'block';
	parent_nav.querySelector("#nav-acc-setting").parentElement.parentElement.style.display = 'none';
	parent_nav.querySelector("#nav-switch-acc").parentElement.parentElement.style.display = 'none';
	parent_nav.querySelector("#nav-sign-out").parentElement.parentElement.style.display = 'none';
	toggleAccountMenu('close');
}

applyAuth();