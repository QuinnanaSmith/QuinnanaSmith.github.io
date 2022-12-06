let lightboxContainer = document.getElementById
('lightboxContainer');
let lightboxBackground = document.getElementById
('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

function openLightbox(){
    //turn on display class from display none
    lightboxContainer.classList.add
    ('display');

    //display images src inside of lightbox
    lightbox.src = this.src;
}

let coffeeImage = document.getElementById
('coffeeImage');

coffeeImage.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove
    ('display');
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;


