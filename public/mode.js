var darkMode = document.querySelector('#noturnMode')
var lightMode = document.querySelector('#lightMode')

darkMode.addEventListener('click', function modeDark(){

    noturnContainer = document.querySelector('.card');
    noturnBody = document.querySelector('#body');
    noturnButtonSend = document.querySelector('.button-send');
    noturnButtonSU = document.querySelector('#button-signup');

    noturnContainer.style.boxShadow = '0px 0px 100px 20px rgba(169,169,169,0.1)';
    noturnBody.style.background = `linear-gradient(90deg, #961aa1 0%, #313866 35%, rgba(0,0,0,1) 100%)`;
    noturnBody.style.color = 'whitesmoke';
    noturnButtonSend.style.color = 'whitesmoke';
    noturnButtonSU.style.color = 'whitesmoke';
})

lightMode.addEventListener('click', function modeLight() {
    
    lightContainer = document.querySelector('.card');
    ligthBody = document.querySelector('#body');
    lightButtonSend = document.querySelector('.button-send',);
    lightButtonSU = document.querySelector('#button-signup');

    lightContainer.style.boxShadow = '10px 10px 10px 10px rgba(0,0,0,0.3)';
    ligthBody.style.background = `linear-gradient(90deg, rgb(196, 225, 167) 0%, rgb(112, 200, 235) 35%, rgb(221, 245, 216) 100%)`;
    ligthBody.style.color = 'black';
    lightButtonSend.style.color = 'black';
    lightButtonSU.style.color = 'black';
})