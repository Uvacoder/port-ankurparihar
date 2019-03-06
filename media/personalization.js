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
		if(!flag){
			[name, value] = [p.split('=')[0].trim(), p.split('=')[1].trim()];
			if (name == cname) {
				flag = true;
				return value;
			}
		}
	});
	return (flag) ? value : '';
}