var input_email = document.querySelector(".input-group__input input#email");
var input_email_detail = document.querySelector(".input-group__details .input_email_message");
var GithubOAuthWindow;

function checkEmailValidity(){
	input_email_detail.innerHTML = (input_email.validity.valid) ? "At least 6 characters" : "Invalid email";
}

function openSignInPopUp() {
	var url = "https://github.com/login/oauth/authorize?client_id=ac8e2ed8d62d346e1595&scope=repo";
	var features = "width=400,toolbar=1,resizable=1,scrollbars=yes,height=400,top=100,left=100";
	var windowName = "GithubOAuth";
	if(typeof(GithubOAuthWindow) == 'undefined' || GithubOAuthWindow.closed) {
		GithubOAuthWindow = window.open(url, windowName, features);
	} else {
		try {
			GithubOAuthWindow.document;
		} catch (e) {
			GithubOAuthWindow = window.open(url, windowName, features);
		}
		 //IE doesn't allow focus, so I close it and open a new one
		if (navigator.appName == 'Microsoft Internet Explorer') {
			GithubOAuthWindow.close();
			GithubOAuthWindow = window.open(url, windowName, features);
		}
		else {
			//give it focus for a better user experience
			GithubOAuthWindow.focus();
		}
	}
}

function signIn() {
	console.log('AUTH_INFO: Initiating sign in');
	openSignInPopUp();
	console.log('AUTH_INFO: Launched OAuth window');
	try {
		var sign_btn = document.querySelector(".btn_sign_github");
		var spinner = document.createElement("span");
		sign_btn.innerHTML = "Waiting for input";
	} catch (error) {
		console.log(error);
	}
	
	var looper = setInterval(function() {
		if(GithubOAuthWindow.closed) {
			clearInterval(looper);
			console.log('AUTH_INFO: Closed OAuth window');
			try {
				sign_btn.style.opacity = 0;
				spinner.classList.add("btn__loading");
				spinner.innerHTML = `<span class="spins"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"></path></svg></span>`;
				sign_btn.parentElement.appendChild(spinner);
				sign_btn.parentElement.classList.add("btn--disabled");
			} catch (error) {
				console.log(error);
			}

			if(checkAccessToken()) {
				console.log('AUTH_INFO: Access token saved to cookie');
			} else {
				console.log('AUTH_ERR : Access token count not be saved to cookie');
				showSignOutcome('error', 'Could not fetch access token');
				return;
			}

			getUser();

			var signInLoop = setInterval(function(){
				if(successfull_sign_in === true){
					clearInterval(signInLoop);
					showSignOutcome('success', 'Successfully logged in');
					loadDoc('/index.html','nav-home-icon','home');
				} else if (successfull_sign_in === false){
					showSignOutcome('error', 'Something went wrong');
					clearInterval(signInLoop);
				}
			}, 1000);
		}
	}, 1000);
}

function resetSignPanel() {
	try {
		var sign_btn = document.querySelector(".btn_sign_github").parentElement;
		// sign_btn.innerHTML = `<div class="btn__content btn_sign_github">Sign in with Github</div>`;
		// sign_btn.classList.remove("btn--disabled");
		var msg = sign_btn.parentElement.querySelector('.msg');
		msg.innerHTML = "";
		msg.classList.remove('danger-color');
		msg.classList.remove('success-color');
	} catch (error) {
		console.log(error);
	}
}

function showSignOutcome(type, message) {
	resetSignPanel();
	var sign_btn = document.querySelector(".btn_sign_github").parentElement;
	var msg = sign_btn.parentElement.querySelector('.msg');
	msg.innerHTML = message;
	if(type==='error'){
		msg.classList.add('danger-color');
		setSignOutStatus();
	}
	else if(type==='success'){
		msg.classList.add('success-color');
		setSignInStatus();
	}
}
