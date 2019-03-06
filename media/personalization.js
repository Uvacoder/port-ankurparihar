var user;
var repos;
var status;
var gitddb = false;
var config_file_path = '/git-ddb-ankurparihar.json';
var config_data = {};
var config_file_sha = '';

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
			[name, value] = [p.split('=')[0].trim(), p.split('=')[1].trim()];
			if (name == cname) {
				flag = true;
				return value;
			}
		}
	});
	return (flag) ? value : '';
}

function deleteCookie(cname) {
	setCookie(cname, '', -1);
}

function getUser() {
	if(!getCookie('access_token')){
		console.log('Unauthorized');
		return;
	}
	fetch('https://api.github.com/user', {
		headers: {
			"Authorization": "token " + getCookie('access_token')
		}
	}).then(response => {
		return response.json();
	}).then(myJson => {
		// console.log(JSON.stringify(myJson));
		user = myJson;
	});
}

function getReposList() {
	if (!user) {
		console.log('Unauthorized');
		return;
	}
	fetch('https://api.github.com/user/repos' + '?type=private', {
		headers: {
			"Authorization": "token " + getCookie('access_token')
		}
	}).then(response => {
		return response.json();
	}).then(myJson => {
		repos = myJson;
	});
}

function checkGDDBRepo() {
	if (!user) {
		console.log('Unauthorized');
		return;
	}
	fetch('https://api.github.com/repos/' + user['login'] + '/git-ddb', {
		headers: {
			"Authorization": "token " + getCookie('access_token')
		}
	}).then(response => {
		return response.json();
	}).then(status => {
		if (status['message'] != 'Not Found') {
			console.log('git-ddb repository found');
			gitddb = true;
		} else {
			console.log('Can\'t access git-ddb repository');
		}
	});
}

function CreateGDDBRepo() {
	if (!user) {
		console.log('Unauthorized');
		return;
	}
	fetch('https://api.github.com/user/repos', {
		method: 'POST',
		headers: {
			"Authorization": "token " + getCookie('access_token')
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
		console.log('Creating git-ddb repository');
		console.log(status);
	});
}

function getConfig(){
	if(!user){
		console.log('Unauthorized');
		return;
	}
	fetch('https://api.github.com/repos/' + user['login'] + '/git-ddb/contents' + config_file_path,{
		headers:{
			"Authorization": "token " + getCookie('access_token')
		}
	}).then(response => {
		return response.json();
	}).then(data => {
		if(data['message']=='Not Found'){
			console.log('Settings file not found');
		}else{
			console.log('Found setting file');
			config_data = JSON.parse(atob(data['content']));
			config_file_sha = data['sha'];
		}
	});
}

function createConfig(){
	if(!user){
		console.log('Unauthorized');
		return;
	}
	fetch('https://api.github.com/repos/' + user['login'] + '/git-ddb/contents' + config_file_path, {
		method: 'PUT',
		headers:{
			"Authorization": "token " + getCookie('access_token')
		},
		body: JSON.stringify({
			"message": "set by @ankurparihar",
			"content": btoa(JSON.stringify(config_data))
		})
	}).then(response => {
		return response.json();
	}).then(status => {
		console.log(status);
		if(status['message']){
			console.log('File creationg failed')
		}
		else{
			config_file_sha = status['content']['sha'];
		}
	});
}

function updateConfig(){
	if(!user){
		console.log('Unauthorized');
		return;
	}
	if(!config_file_sha){
		console.log('Unknown config file');
		return;
	}
	fetch('https://api.github.com/repos/' + user['login'] + '/git-ddb/contents' + config_file_path, {
		method: 'PUT',
		headers:{
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
		console.log(status)
		if(status['message']){
			console.log('Something went wrong updateing settings')
		}else{
			console.log('Successfully updated settings');
		}
	});
}