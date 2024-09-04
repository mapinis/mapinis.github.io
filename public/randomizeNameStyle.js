// script to change the font, boldness, underline, and italics of my name every few seconds

// first freeze the height of the header
window.onload = function() {
  const containerElement = document.getElementById('header')
  containerElement.style.maxHeight = containerElement.offsetHeight + 'px'
}

const interval = 4000; // ms
const nameElement = document.getElementById('name');

const fonts = [
  'Georgia, "Times New Roman", Times, serif',
  '"Courier New", Courier, monospace',
  'Arial, Helvetica, sans-serif',
  'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
]

function randomizeNameStyle() {
  nameElement.style.fontWeight = Math.random() > 0.5 ? "bold" : "normal";
  nameElement.style.fontStyle = Math.random() > 0.5 ? "italic" : "normal";
  nameElement.style.textDecoration = Math.random() > 0.5 ? "underline" : "none";
  nameElement.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)]
}

setInterval(randomizeNameStyle, interval)