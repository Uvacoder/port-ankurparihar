var touch_dist_log = document.getElementById('touch_log-dist');

document.body.addEventListener('start',() => {
	// document.body.style.backgroundColor = "yellow";
	touch_dist_log.innerHTML = "start";
});
document.body.addEventListener('touchmove',() => {
	// document.body.style.backgroundColor = "green";
	touch_dist_log.innerHTML = "move";
});
document.body.addEventListener('end',() => {
	// document.body.style.backgroundColor = "red";
	touch_dist_log.innerHTML = "end";
});