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

let counter = 0

//console.log(slides)
//console.log(slides[0].tagLine)
const arrow_left = document.querySelector(`.arrow_left`)
arrow_left.addEventListener(`click`, () => {
	console.log("j'ai cliqué sur la flèche gauche")
	counter = counter - 1
	console.log(counter, slides[counter])
	if (counter < 0) {
		counter = slides.length - 1
	}
	//let htmlImage = `<img src="images/slideshow/${slides[counter]}" alt="">`
	//element.innerHTML = htmlImage
	const baliseImage = document.querySelector(".banner-img");

	console.log(counter)
	console.log("image dans le slide[counter]", slides[counter].image)


	baliseImage.src = `./assets/images/slideshow/${slides[counter].image}`;

	//baliseImage.setAttribute("src", "./assets/images/slideshow/"+ element.image)
	//element.innerHTML=tagLine;
	//const baliseTexte = document.querySelector("p");

	tagLine = slides[counter].tagLine;
	document.querySelector(`p`).innerHTML = tagLine;

})

console.log(arrow_left)

const arrow_right = document.querySelector(`.arrow_right`)
arrow_right.addEventListener(`click`, () => {
	console.log("j'ai cliqué sur la flèche droite")
	counter = counter + 1
	console.log(counter, slides[counter])
	if (counter > slides.length){
		counter = 0
	}
	let baliseImage = document.querySelector(".banner-img")


	baliseImage.src = `./assets/images/slideshow/${slides[counter].image}`;

	tagLine = slides[counter].tagLine;
	document.querySelector(`p`).innerHTML = tagLine;

	

})
console.log(arrow_right)





let dots = document.querySelector(`.dots`)
let dot = ""

for (let i = 0; i < slides.length; i++) {
	if (i == 0) {
		dot = `<div class="dot dot_selected"></div>`
	}
	else {
		dot = `<div class="dot" id="dot-${i}"></div>`
	}
	dots.innerHTML = dots.innerHTML + dot
}
