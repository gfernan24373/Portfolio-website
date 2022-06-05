const navOptions = document.querySelector('#nav-opc');
const dropdownIcon = document.querySelector('#dropdown-icon');
const navbar = document.querySelector('.navbar');

dropdownIcon.addEventListener('click', () => {
	
	if(navOptions.classList.contains('wrapper-options')) {
		navOptions.classList.toggle('show');
		
	} 
	
});