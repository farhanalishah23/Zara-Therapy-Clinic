
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

  if (!name.value.trim()) {
    document.getElementById('nameError').style.display = 'block';
    isValid = false;
  }

  if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
  }

  if (!subject.value.trim()) {
    document.getElementById('subjectError').style.display = 'block';
    isValid = false;
  }

  if (!message.value.trim()) {
    document.getElementById('messageError').style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    alert('Your message has been sent successfully!');
    form.reset();
  }
});

