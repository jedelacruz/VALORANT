let nav = document.querySelector('nav');
let navToggle = nav.querySelector("[data-action='nav-toggle']");

navToggle.addEventListener('click', () => {
	if (nav.classList.contains('opened')) {
		nav.classList.remove('opened');
	} else {
		nav.classList.add('opened');
	}
})