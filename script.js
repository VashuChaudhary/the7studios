// Intersection Observer for scroll animations
const observerOptions = {
	threshold: 0.2,
};

const scrollObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("in-view");
		}
	});
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll("section").forEach((section) => {
	scrollObserver.observe(section);
});

document.querySelectorAll(".card").forEach((card, index) => {
	card.style.animationDelay = `${index * 0.2}s`;
});
