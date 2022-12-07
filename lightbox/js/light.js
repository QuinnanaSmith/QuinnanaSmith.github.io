let lightboxContainer = document.getElementById
('lightboxContainer');
let lightboxBackground = document.getElementById
('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById
('lightboxCloser');

function openLightbox(){
    //turn on display class from display none
    lightboxContainer.classList.add('display');

    //display images src inside of lightbox
    lightbox.src = this.src;
}


let galleryImages = document.getElementsByClassName
("galleryImage");
//Create loop

for (let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages [i];
    galleryImage.onclick = openLightbox;
}


//make function close clickable
function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

let closers = document.getElementsByClassName('closer');


for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
 closer.onclick = closeLightbox;
}


