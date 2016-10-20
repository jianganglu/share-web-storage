var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');

var bgcolorForm = $('bgcolor');
var fontForm = $('font');
var imageForm = $('image');

if(!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('bgcolor', $('bgcolor').value);
  localStorage.setItem('font', $('font').value);
  localStorage.setItem('image', $('image').value);

  setStyles();
}

function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  $('bgcolor').value = currentColor;
  $('font').value = currentFont;
  $('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}

function $(id) {
  return document.getElementById(id);
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;