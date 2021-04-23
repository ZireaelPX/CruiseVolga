const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

const onMenuClick = () => {
	menuIcon.addEventListener('click', () => {
		menuIcon.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}
onMenuClick();