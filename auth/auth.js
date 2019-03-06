function scanAuthBody() {
	var params, key;
	params = JSON.parse(document.body.innerText);
	if (params['access_token']) {
		// document.body.innerHTML = 'Access Token: ' + params['access_token'];
		window.location.href = 'https://ankurparihar.github.io/auth/index.html?access_token=' + params['access_token'];
	}
	else if (params['error']) {
		document.body.innerHTML = '<a id="auth" href="https://github.com/login/oauth/authorize?client_id=ac8e2ed8d62d346e1595&scope=repo">Authorise with Github</a>';
	}
}
scanAuthBody();