// ------------------ Navbar Toogle ------------------

const navOptions = document.querySelector('#nav-opc');
const dropdownIcon = document.querySelector('#dropdown-icon');
const navbar = document.querySelector('.navbar');

dropdownIcon.addEventListener('click', () => {
	
	if(navOptions.classList.contains('wrapper-options')) {
		navOptions.classList.toggle('show');
		
	} 
	
});

// ------------------ skills ------------------

const html = document.querySelector('#html');
const htmlSkill = document.querySelector('#html-skills');
const js = document.querySelector('#javascript');
const jsSkill = document.querySelector('#javascript-skills');
const python = document.querySelector('#python');
const pythonSkill = document.querySelector('#python-skills');
const sql = document.querySelector('#sql');
const sqlSkill = document.querySelector('#sql-skills');
const certificate = document.querySelector('#certificates');
const certificateImg = document.querySelector('#certificates-images');
let modal = document.querySelectorAll('.modal');
let slide = document.querySelectorAll('.splide__slide');
let cerrar = document.querySelectorAll('.close');


html.onclick = () => {
	html.classList.add('add-white');
	js.classList.remove('add-white');
	python.classList.remove('add-white');
	sql.classList.remove('add-white');
	certificate.classList.remove('add-white');
	htmlSkill.classList.remove('hide');
	htmlSkill.classList.add('skill-content', 'animated');
	jsSkill.classList.remove('skill-content');
	jsSkill.classList.add('hide');
	pythonSkill.classList.remove('skill-content');
	pythonSkill.classList.add('hide');
	sqlSkill.classList.remove('skill-content');
	sqlSkill.classList.add('hide');
	certificateImg.classList.remove('skill-content');
	certificateImg.classList.add('hide');
}

js.onclick = () => {
	js.classList.add('add-white');
	html.classList.remove('add-white');
	python.classList.remove('add-white');
	sql.classList.remove('add-white');
	certificate.classList.remove('add-white');
	jsSkill.classList.remove('hide');
	jsSkill.classList.add('skill-content', 'animated');
	htmlSkill.classList.remove('skill-content');
	htmlSkill.classList.add('hide');
	pythonSkill.classList.remove('skill-content');
	pythonSkill.classList.add('hide');
	sqlSkill.classList.remove('skill-content');
	sqlSkill.classList.add('hide');
	certificateImg.classList.remove('skill-content');
	certificateImg.classList.add('hide');
}

python.onclick = () => {
	python.classList.add('add-white');
	html.classList.remove('add-white');
	js.classList.remove('add-white');
	sql.classList.remove('add-white');
	certificate.classList.remove('add-white');
	pythonSkill.classList.remove('hide');
	pythonSkill.classList.add('skill-content', 'animated');
	htmlSkill.classList.remove('skill-content');
	htmlSkill.classList.add('hide');
	jsSkill.classList.remove('skill-content');
	jsSkill.classList.add('hide');
	sqlSkill.classList.remove('skill-content');
	sqlSkill.classList.add('hide');
	certificateImg.classList.remove('skill-content');
	certificateImg.classList.add('hide');
}

sql.onclick = () => {
	sql.classList.add('add-white');
	html.classList.remove('add-white');
	python.classList.remove('add-white');
	html.classList.remove('add-white');
	certificate.classList.remove('add-white');
	sqlSkill.classList.remove('hide');
	sqlSkill.classList.add('skill-content', 'animated');
	htmlSkill.classList.remove('skill-content');
	htmlSkill.classList.add('hide');
	pythonSkill.classList.remove('skill-content');
	pythonSkill.classList.add('hide');
	jsSkill.classList.remove('skill-content');
	jsSkill.classList.add('hide');
	certificateImg.classList.remove('skill-content');
	certificateImg.classList.add('hide');
}

certificate.onclick = () => {
	certificate.classList.add('add-white');
	html.classList.remove('add-white');
	js.classList.remove('add-white');
	python.classList.remove('add-white');
	sql.classList.remove('add-white');
	certificateImg.classList.remove('hide');
	certificateImg.classList.add('skill-content', 'animated');
	htmlSkill.classList.remove('skill-content');
	htmlSkill.classList.add('hide');
	jsSkill.classList.remove('skill-content');
	jsSkill.classList.add('hide');
	pythonSkill.classList.remove('skill-content');
	pythonSkill.classList.add('hide');
	sqlSkill.classList.remove('skill-content');
	sqlSkill.classList.add('hide');		
}

/****************  Modal Certificates ****************/
	
for(let i = 0; i < modal.length; i++) {
	slide[i].onclick = function() {
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

const experience = document.querySelector('#play');
const releaseAnimation = document.querySelectorAll('[data-animation]');

experience.onclick = () => {
	let property = getComputedStyle(experience).getPropertyValue('animation-play-state');
	if(property === 'running, paused') {
		experience.style.webkitAnimationPlayState = 'paused, running';
	}
	releaseAnimation.forEach((val,i,arr) => {
		property = getComputedStyle(arr[i]).getPropertyValue('animation-play-state');
		if(property === 'paused') {
			arr[i].style.webkitAnimationPlayState = 'running';
		
		}
	});
}






// html.onclick = () => {
// 	htmlSkill.innerHTML = `
// 				<p>- Strong Knowledges structuring and organizing HTML content.</p>
// 				<p>- Knowledges about file organization, specificity, selectors, custom properties, media queries, box model, positioning and stacking elements.</p>
// 				<p>- Flexbox and Grid understanding.</p>
// 				<p>- Basic transitions and animations.</p>
// 				<p>- Fundamentals about CSS Frameworks like Bootstrap, Tailwind and Bulma.</p>
// 				<p>- Create Accordion, Carousel, Card, Modal, Progress Bar, Navbar, Container, icons, images, and other components with pure CSS and Bootstrap.</p>`;
// }

// js.onclick = () => {
// 	htmlSkill.innerHTML = `
// 				<p>- Understanding about identifiers: variables, keywords, properties and functions. Types, values and variables.</p>
// 				<p>- ES6 Fundamentals (Arrow function, promise, const and let, template String and spread operator).</p>
// 				<p>- Web Browser: scripting document, scripting CSS, events handlers, Web Storage and Networking.</p>
// 				<p>- Fundamentals about NodeJS and Express.</p>`;
// }

// python.onclick = () => {
// 	htmlSkill.innerHTML = `
// 				<p>- Understanding about identifiers: variables, keywords, properties and functions. Types, values and variables.</p>
// 				<p>- Regular expression, HTTP and BeautifulSoup for web scrapping.</p>
// 				<p>- Connecting, creating, inserting, modifying and deleting tables in a DB.</p>
// 				<p>- Experimental knowledges with flask a Django.</p>`;
// }

// sql.onclick = () => {
// 	htmlSkill.innerHTML = `
// 				<p>- Create Relational DB with SQLite.</p>
// 				<p>- Understanding SQL Schema means.</p>
// 				<p>- Connecting, creating, inserting, modifying and deleting tables in a DB.</p>
// 				<p>- Fundamentals Statements like CREATE,INSERT, UPDATE, DELETE or ALTER.</p>`;
// }