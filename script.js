//Phone Image

let imgTracker = 'First';
let image = document.getElementById('screen');
let srcImage = '';

function changeImage(srcImage) {      
    image.src = srcImage;
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

setInterval(changeScreen,3000);

//Enable Button

let button = document.getElementById('login-button');
let username = document.getElementById('username');
let password = document.getElementById('password');

button.disabled = true;
username.addEventListener('keyup', enableButton);
password.addEventListener('keyup', enableButton);

function enableButton() { 
    if (username.value.length >= 1 && password.value.length >= 4) {
        button.disabled = false;
        button.setAttribute("style","background-color: #0095f6",
            "color: #ffffff");
    } 
}

//Change Content

button.addEventListener('click', changeContent);
let changeBox = document.getElementById('user-change-box');
let storeBox = document.getElementById('get-app');
let userLogin = document.getElementById('user-login');

function setCustomAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
}

function changeContent() {
    const userLogged1 = "<img src='./img/perfil-instagram.jpg' id='profile-photo' alt='foto de perfil'>"
    const userLogged2 = "<input class='button' type='button' id='logged-button' value='Continuar como teddybear'></input>"
    const userLogged3 = "<div class='user-switch'><p>Não é teddybear?</p><a href='https://instagram.com/' class='link-blue'>Trocar de conta</a></div>"

    const userLoginAttr = {
        style: 'display: flex; flex-direction: column; align-itens: center'
    };

    const profileImageAttr = {
        style: 'width: 10rem; border-radius: 50%;'
    };

    const loggedButtonAttr = {
        style: 'background-color: #0095f6; color: #ffffff; border: none; height: 2rem; width: 18rem;'
    };

    const userSwitchAttr = {
        style: 'align-itens: center; flex-wrap: nowrap;'
    }

    changeBox.remove();
    storeBox.remove();

    userLogin.innerHTML = userLogged1 + userLogged2 + userLogged3;
    setCustomAttributes(userLogin, userLoginAttr);
    
    let profileImage = document.getElementById('profile-photo');
    setCustomAttributes(profileImage, profileImageAttr);
    
    let loggedButton = document.getElementById('logged-button');
    setCustomAttributes(loggedButton, loggedButtonAttr);
    loggedButton.addEventListener('click', resetContent);

    let userSwitch = document.getElementById('user-switch');
    setCustomAttributes(userSwitch, userSwitchAttr);
}

function resetContent() {
    window.location.reload();
}