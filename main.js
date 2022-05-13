/****************  Dark Mode ****************/
let darkMode = localStorage.getItem('darkMode');
const darkModeBtn = document.querySelector('.btn-mode');

//Check if darkMode is enable, if it's enabled turning off and if not, turning on.

const enabledarkMode = () => {
	//Adding the class darkMode to the body
	document.body.classList.add('darkMode');
	//update ligthMode in the local Storage
	localStorage.setItem('darkMode', 'enabled');
};

const disabledarkMode = () => {
	//Removing the class darkMode to the body
	document.body.classList.remove('darkMode');
	//update darkMode in the local Storage
	localStorage.setItem('darkMode', null);
}

if(darkMode === 'enabled') {
	enabledarkMode();
}

darkModeBtn.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if(darkMode !== 'enabled') {
		enabledarkMode();
	}

	else {
		disabledarkMode();
	}
});
/****************  Modal Certificates ****************/
let modal = document.querySelectorAll('.modal');
let product = document.querySelectorAll('.splide__slide');
let cerrar = document.querySelectorAll('.close');

for(let i = 0; i < modal.length; i++) {
	product[i].onclick = function() {
		modal[i].style.display = 'block';
	}
	cerrar[i].onclick = function() {
		modal[i].style.display = 'none';
	}
}
window.onclick = function (e) {
	if(e.target.style.display == 'block') {
		e.target.style.display = 'none';
	}
}
/****************  animation ****************/
const btnAnimation = document.querySelector('.btn-animation');
let animationExp = document.querySelectorAll('[data-animation]');

btnAnimation.onclick = () => {
	animationExp.forEach((val,i,arr) => {
		let property = getComputedStyle(arr[i]).getPropertyValue('animation-play-state');
		if(property === 'paused') {
			arr[i].style.webkitAnimationPlayState = 'running';
			property = 'running';
		}
		else {
			arr[i].style.webkitAnimationPlayState = 'paused';
			property = 'paused';
		}
	});
}

/****************  Drag and Drop Navbar ****************/
const icon = document.querySelector('.navbar');
const anchor = icon.querySelectorAll('a');
const section = document.querySelector('#skills');

// circle.addEventListener('dragstart', dragStart);
icon.addEventListener('mousedown', mouseDown);

function mouseDown(e) {
	e.preventDefault();
	icon.style.opacity = '1';
	icon.style.animation = 'none';
	if(e.target.classList.contains('navbar')){
		let shiftX = e.clientX - icon.getBoundingClientRect().left;
		let shiftY = e.clientY - icon.getBoundingClientRect().top;

		icon.style.position = 'sticky';
		icon.style.zIndex = 20000;
		document.body.append(icon);

		moveAt(e.pageX, e.pageY);

		function moveAt(pageX, pageY) {
			icon.style.left = pageX - shiftX + 'px';
			icon.style.top = pageY - shiftY + 'px';
		}

		function mouseMove(e) {
			// e.preventDefault();
			moveAt(e.pageX , e.pageY);
		}

		document.addEventListener('mousemove', mouseMove);
		icon.addEventListener('mouseup', mouseUp);
		
		function mouseUp(e) {
			e.preventDefault();
			document.removeEventListener('mousemove', mouseMove);
			icon.mousemove = null;
		}
	}

}