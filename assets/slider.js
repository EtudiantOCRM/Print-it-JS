let slideIndex = 1;//on est sur la 1ere image
showslides(slideIndex);//permet d'afficher une certaine image

function images(n){
    showslides(slideIndex += n);
}
function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showslides(n){
    let i;
    let slides = document.getElementsByClassName('slides');//cette variable reprends toutes les images
    let dots = document.getElementsByClassName('dot');//cette variable reprends tous les points

    if(n > slides.length) {slideIndex = 1} //reinitialiser le tous a zero
    if(n < 1) {slideIndex = slides.length}//emmene a la toute derniere image

    //cacher toutes les images
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";

    }
    //retirer "active de tous les points"
    for(let i =0; i < dots.length; i++){
        dots[i].classList.remove('active');

    }
    //Afficher le slide demande
slides[slideIndex - 1].style.display = 'block';

    //Ajouter "active" sur le point cliqué
    dots[slideIndex - 1].classList.add('active');
}