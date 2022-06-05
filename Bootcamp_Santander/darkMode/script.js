const h1 = document.getElementById("title");
const button = document.getElementById("dark-theme");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];
button.addEventListener('click', changeMode);



function changeMode() {
	changeClass();
	changeText();
}


function changeClass(){
	button.classList.toggle('dark-mode')
	h1.classList.toggle('dark-mode')
	body.classList.toggle('dark-mode')
	footer.classList.toggle('dark-mode')
}

function changeText() {
	if(button.classList.contains('dark-mode')){
		button.innerHTML = 'Light Mode';
		h1.innerHTML = 'Dark Mode' + ' ON';
		return;
	}else{
	button.innerHTML = 'Dark Mode';
	h1.innerHTML = 'Light Mode' + ' ON';
	}
}
