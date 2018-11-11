function start() {
	console.log("Loaded Page");
	window.location = document.getElementById('wp').href;
}

function loadSpecific(tag) {
	document.getElementById(tag).innerHTML = 'Hello this javascript is working fine';
}
