const reveal = () => {
	const reveal = document.querySelectorAll('.scroll-eff');
	reveal.forEach((element) => {
		let windowHeight = window.innerHeight;
		let elementTop = element.getBoundingClientRect().top;
		let elementVisible = 100;

		return elementTop < windowHeight - elementVisible
			? element.classList.add('active')
			: element.classList.remove('active');
	});
};

window.addEventListener('scroll', reveal);
