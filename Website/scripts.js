

const selectElement = (x) => document.querySelector(x);

selectElement( '.open').addEventListener('click', () => {
	selectElement( '.nav-list').classList.add('active');

});

selectElement( '.close').addEventListener('click', () => {
	selectElement( '.nav-list').classList.remove('active');

});