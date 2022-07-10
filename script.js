let imgTracker = 'First';
let image = document.getElementById('screen');
let srcImage = '';
let opacQuant = 0.01;

function opac() {   
    image.style.opacity -= opacQuant;
}

function opacRev() {
    image.style.opacity += opacQuant;
}

function changeImage(srcImage) {
    image.style.opacity = 1;
    let vanish = setInterval(opac,25);
    if (image.style.opacity >= 0.5) {        
        clearInterval(vanish);     
        image.src = srcImage;    
    }   
    image.style.opacity == 0;
    let appear = setInterval(opacRev,250);
    if (image.style.opacity == 1) {
        clearInterval(appear);
    }       
}

function changeScreen() {
    switch (true) {
        case imgTracker == 'First':
            srcImage ='./img/screenshot-1.png'
            changeImage(srcImage);
            imgTracker = 'Second'
            break;
        case imgTracker == 'Second':
            srcImage = './img/screenshot-2.png'
            changeImage(srcImage);
            imgTracker = 'Third'
            break;
        case imgTracker == 'Third':
            srcImage = './img/screenshot-3.png'
            changeImage(srcImage);
            imgTracker = 'Fourth'
            break;
        case imgTracker == 'Fourth':
            srcImage = './img/screenshot-4.png'
            changeImage(srcImage);
            imgTracker = 'First'
            break;
        default:           
            break;
    }
}

changeScreen();

