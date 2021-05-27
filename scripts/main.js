// Этот блок отвечает за смену картинок и названия браузеров
var myImage = document.querySelector('img');
var browserName = document.getElementById('browser-name');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/google-icon.png') {
        myImage.setAttribute ('src', 'images/firefox-icon.png');
        browserName.textContent = ('Firefox');
    }
    else {
        myImage.setAttribute ('src', 'images/google-icon.png');
        browserName.textContent = ('Chrome');
    }
};
//Блок окончен

//Создаем персонализованное приветствие

var myButton = document.querySelector('button');
// Выбираем элемент button и помещаем его в переменную myButton
var myHeading = document.getElementById('title-header');
// Выбираем надпись "это круто" и помещаем ее в переменную myHeading

// Создаем функцию setUserName, которая выводит окно "Введите имя пользователя"
function setUserName() {
    var myName = prompt('Пожалуйста, введите свое имя');
    // Спрашиваем имя и помещаем его в переменную "myName"
    localStorage.setItem('name', myName);
    // Создаем в хранилище браузера ячейку "name" и помещаем в него переменную
    // myName, в которой хранится введенное ранее имя
    myHeading.textContent = 'это круто, ' + myName;

};

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    var browserName = document.getElementById('browser-name')
    var mainHeading = myHeading.textContent;
    myHeading.textContent = browserName + mainHeading + ', ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}