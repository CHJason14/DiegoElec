const slides = [
	{
		"image":"slide-1.jpg",
		"tagLine":"Entrepeneur Qualifié et Rigoureux"
	},
	{
		"image":"slide-2.jpg",
		"tagLine":"Tous types d'interventions"
	},
	{
		"image":"slide-3.jpg",
		"tagLine":"Contactez-moi pour votre devis"
	}
]

const buttons = document.querySelectorAll(".arrow");
let slide = document.querySelector(".banner-img");
let comments = document.querySelector(".tagline");

let slideActive = 0;
const dots = [...document.querySelectorAll(".dot")];

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        slideActive += (e.target.id === "next" ? 1 : -1);
        slideActive = (slideActive + slides.length) % slides.length;
        slide.src = `./images/${slides[slideActive].image}`;
        slide.alt = slides[slideActive].tagLine;
		comments.textContent = slides[slideActive].tagLine;
        dots.forEach(dot => dot.classList.remove("dot_selected"));
        dots[slideActive].classList.add("dot_selected");
    });
});