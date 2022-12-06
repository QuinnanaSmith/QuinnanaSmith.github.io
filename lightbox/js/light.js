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
//image
let coffeeImage = document.getElementById
('coffeeImage');

coffeeImage.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove
    ('display');
    lightbox.src = "";
}
lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;


//image1
let coffeeImage1 = document.getElementById
('coffeeImage1');

coffeeImage1.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove
    ('display');
    lightbox.src = "";
}
lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

//image2
let coffeeImage2 = document.getElementById
('coffeeImage2');

coffeeImage2.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove
    ('display');
    lightbox.src = "";
}
lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

//image3
let coffeeImage3 = document.getElementById
('coffeeImage3');

coffeeImage3.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove
    ('display');
    lightbox.src = "";
}
lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

//image4
let coffeeImage4 = document.getElementById
('coffeeImage4');

coffeeImage4.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove
    ('display');
    lightbox.src = "";
}
lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

//image5
let coffeeImage5 = document.getElementById
('coffeeImage5');

coffeeImage5.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove
    ('display');
    lightbox.src = "";
}
lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

//image6
let coffeeImage6 = document.getElementById
('coffeeImage6');

coffeeImage6.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove
    ('display');
    lightbox.src = "";
}
lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;


