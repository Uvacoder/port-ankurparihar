var client_id = 'ac8e2ed8d62d346e1595';
var code = 0;
var accept = 'json';

var statusElem = document.getElementById('status');
var a_auth = document.getElementById("auth");
function scanAuthPage() {
	var params, key;
	var split = decodeURI(window.location.href).split('?')[1];
	if (!split) {
		return;
	}
	params = split.split('&');
	params.forEach(p => {
		[key, code] = [p.split('=')[0], p.split('=')[1]];
		// console.log(key ,'=', value);
		if(key=='code'){
			statusElem.innerHTML = 'Code:' + code;
			a_auth.style.display = 'none';
			var request = new Request('https://github.com/login/oauth/access_token?code='+code+'&client_id='+client_id+'&client_secret='+client_secret, {
				method: 'POST',
				mode: 'no-cors',
				// headers: new Headers({
					// 	'Accept': 'application/json'
					// })
				});
				statusElem.innerHTML = 'fetching access_token from: https://github.com/login/oauth/access_token?code='+code+'&client_id='+client_id+'&client_secret='+client_secret;
				fetch(request).then(response => {
					console.log(response);
				});
			// .then(data => {
			// 	console.log(data);
			// });
			// var xhttp;
			// if (window.XMLHttpRequest) {
			// 	// code for modern browsers
			// 	xhttp = new XMLHttpRequest();
			// } else {
			// 	// code for IE6, IE5
			// 	xhttp = new ActiveXObject("Microsoft.XMLHTTP");
			// }
			// xhttp.onreadystatechange = function () {
			// 	if (this.readyState == 4 && this.status == 200) {
			// 		// Small tasks first
			// 		console.log(this.responseText);
			// 	}
			// 	else if (this.readyState == 4) {
			// 		displayError(this.status, this.statusText);
			// 	}
			// };
			// xhttp.open("POST", 'https://github.com/login/oauth/access_token?code='+code+'&client_id='+client_id+'&client_secret='+client_secret, true);
			// xhttp.send();
			return;
		}
	});
	if(!code) statusElem.innerHTML = "Auth failed";
}

scanAuthPage();