const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Gestion de la flèche gauche


let counter = 0

const arrow_left = document.querySelector(`.arrow_left`)
arrow_left.addEventListener(`click`, () => {
	
	counter = counter - 1
	if (counter < 0) {
		counter = slides.length - 1
	}
	const baliseImage = document.querySelector(".banner-img");
	baliseImage.src = `./assets/images/slideshow/${slides[counter].image}`;
	tagLine = slides[counter].tagLine;
	document.querySelector(`p`).innerHTML = tagLine;
	gererPoint(counter)
})



//Gestion de la flèche droite

const arrow_right = document.querySelector(`.arrow_right`)
arrow_right.addEventListener(`click`, () => {
	
	counter = counter + 1
	if (counter >= slides.length) {
		counter = 0
	}
	let baliseImage = document.querySelector(".banner-img")
	baliseImage.src = `./assets/images/slideshow/${slides[counter].image}`;
	tagLine = slides[counter].tagLine;
	document.querySelector(`p`).innerHTML = tagLine;
	gererPoint(counter)
})



//gestion des bullets points

let dots = document.querySelector(`.dots`)
let dot = ""

function gererPoint(numeroPointAallumer) {
	
	let listePoints = document.querySelectorAll(".dot")
	
	for (let i = 0; i < listePoints.length; i++) {
		if (i == numeroPointAallumer) {
			//console.log("j'allume le point ", i)
			listePoints[i].classList.add("dot_selected")
		} else {
			//console.log("j'éteins le point", i)
			listePoints[i].classList.remove("dot_selected")
		}
	}
}

for (let i = 0; i < slides.length; i++) {
	if (i == 0) {
		dot = `<div class="dot dot_selected"></div>`
	}
	else {
		dot = `<div class="dot"></div>`
	}
	dots.innerHTML = dots.innerHTML + dot
}

