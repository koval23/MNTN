const button = document.querySelector('.nav-button');
const mobilNav = document.querySelector('.mobile-nav');
const body = document.querySelector('body')

function toggleMobileNav() {
	mobilNav.classList.toggle('mobile-nav-active');
	button.classList.toggle('nav-button-close');
	body.classList.toggle('no-scroll')
}


button.addEventListener('click', function (event) {
	event.stopPropagation();
	toggleMobileNav()
});

window.addEventListener('click', function () {
	if (body.classList.contains('no-scroll')) {
		toggleMobileNav()
	}
})

mobilNav.addEventListener('click', function (event) {
	event.stopPropagation();
})

