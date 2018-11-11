function loadSpecific(tag) {
	document.getElementById(tag).innerHTML = 'Hello this javascript is working fine';
}

function toggleTopBar(ref) {
	ref.classList.toggle('active');
	document.getElementById('pagelinks').classList.toggle('active');
}