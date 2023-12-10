// nameForm
const firstNameForm = document.getElementById('firstNameForm');
const lastNameForm = document.getElementById('lastNameForm');

const emailForm = document.getElementById('emailForm');
const passwordForm = document.getElementById('passwordForm');


function validateForm() {
    const submitForm = document.getElementById('submitForm');

    submitForm.addEventListener('click', (e) => {
        e.preventDefault();

        const email = emailForm.value;
        const password = passwordForm.value;
        const firstName = firstNameForm.value;
        const lastName = lastNameForm.value;

        if (!firstName) {
            alert('Please enter your first name');
            return;
        }
        if (!lastName) {
            alert('Please enter your last name');
            return;
        }
        if (!email.value) {
            alert('Pleas fill in Email!');
            return;
        }
        if (!validateEmail(emailValue)) {
            alert("Email is not valid.");
            return;
          }

          if (passwordInput.value.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }

        if (!passwordInput.value) {
            alert('Please fill in fjalekalimin!')
            return;
          }

        alert('Login successful!');
    });
}
