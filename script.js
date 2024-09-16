const typingEffect = document.getElementById('typing-effect');
let textToType = 'Welcome to our terminal!';
let charIndex = 0;

function typeChar() {
  typingEffect.textContent += textToType[charIndex];
  charIndex++;
  if (charIndex < textToType.length) {
    setTimeout(typeChar, 50); // adjust the typing speed here
  }
}

typeChar();

// Add blinking cursor effect
const cursor = document.createElement('span');
cursor.textContent = '_';
cursor.className = 'blinking-cursor';
typingEffect.appendChild(cursor);
