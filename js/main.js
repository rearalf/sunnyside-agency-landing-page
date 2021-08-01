const toggle__button = document.getElementById('toggle__button');

toggle__button.addEventListener('click', () => {
	const navbar__nav = document.getElementById('navbar__nav');
	navbar__nav.classList.toggle('show');
});
