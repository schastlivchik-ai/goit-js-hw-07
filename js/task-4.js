const form = document.querySelector('.login-form');
const inputFields = document.querySelectorAll(`input`)
const userForm = {}
form.addEventListener('submit', (event) => {
  event.preventDefault();
    if (Array.from(inputFields).some(input => input.value.trim() === '')) {
    event.preventDefault();
    alert('All form fields must be filled in');
  } else {
    inputFields.forEach((input) => {
        userForm[input.name] = input.value.trim()
    })
  }
  console.log(userForm)
  form.reset()
});

