// Typewriter Effect
const text = "🌿 Nature-Inspired Interactive Site";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Theme Toggle
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Click Event
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button clicked!');
  const btn = document.getElementById('clickBtn');
  btn.classList.add('animate');
  setTimeout(() => btn.classList.remove('animate'), 300);
});

// Hover Event
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => hoverBox.style.backgroundColor = 'skyblue');
hoverBox.addEventListener('mouseout', () => hoverBox.style.backgroundColor = 'lightgreen');

// Keypress Detection
document.addEventListener('keydown', (e) => {
  console.log(`You pressed ${e.key}`);
});

// Double-click Secret
document.getElementById('secretBtn').addEventListener('dblclick', () => {
  alert('Secret action unlocked! 🎉');
});

// Image Gallery
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let currentImg = 0;
const gallery = document.getElementById('gallery');

document.getElementById('nextImg').addEventListener('click', () => {
  gallery.style.opacity = 0;
  setTimeout(() => {
    currentImg = (currentImg + 1) % images.length;
    gallery.src = images[currentImg];
    gallery.style.opacity = 1;
  }, 300);
});

// Form Validation
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const feedback = document.getElementById('formFeedback');

  let errors = [];

  if (!name.value.trim()) errors.push('Name is required.');
  if (!email.value.match(/^\S+@\S+\.\S+$/)) errors.push('Enter a valid email.');
  if (password.value.length < 8) errors.push('Password must be at least 8 characters.');

  if (errors.length > 0) {
    feedback.innerText = errors.join(' ');
    feedback.style.color = 'red';
  } else {
    feedback.innerText = 'Form submitted successfully!';
    feedback.style.color = 'green';
    confetti();
  }
});

// Real-time password feedback
document.getElementById('password').addEventListener('input', function () {
  const feedback = document.getElementById('formFeedback');
  if (this.value.length < 8) {
    feedback.innerText = 'Password too short.';
    feedback.style.color = 'orange';
  } else {
    feedback.innerText = 'Looks good!';
    feedback.style.color = 'green';
  }
});
