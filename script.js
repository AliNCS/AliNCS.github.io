const typingEffect = document.getElementById('typing-effect');
const messages = [
  'Welcome to our terminal!',
  'Type "help" for a list of commands.',
  'You can also try "about" for more information.',
  'Have fun exploring!'
];
let messageIndex = 0;
let charIndex = 0;

function typeChar() {
  const message = messages[messageIndex];
  if (charIndex < message.length) {
    typingEffect.textContent += message[charIndex];
    charIndex++;
    setTimeout(typeChar, 50); // adjust the typing speed here
  } else {
    // Wait for a short delay before moving to the next message
    setTimeout(() => {
      messageIndex = (messageIndex + 1) % messages.length;
      charIndex = 0;
      typingEffect.textContent = '';
      typeChar();
    }, 2000);
  }
}

typeChar();

// Add blinking cursor effect
const cursor = document.createElement('span');
cursor.textContent = '_';
cursor.className = 'blinking-cursor';
typingEffect.appendChild(cursor);
