const mainPage = 'pages/main.html';
ej1 = 'pages/1/1.html';
ej2 = 'pages/2/2.html';

function mainPageCall(){
    document.getElementById('contentFrame').src = mainPage;
}

function ej1Call(){
    document.getElementById('contentFrame').src = ej1;
}

function ej2Call(){
    document.getElementById('contentFrame').src = ej2;
}