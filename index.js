const form = document.getElementById('sign-in-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-button');
        
    form.addEventListener('submit', function(event) {

        event.preventDefault();

        if (!isValidEmail(emailInput.value)) {
        setErrorState(emailInput);
        return;
        }
        if (!isValidPassword(passwordInput.value)) {
        setErrorState(passwordInput);
        return;
        }

        alert("Successfully Signed Up");
        form.reset();

    });
        
    function isValidEmail(email) {
        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailReg.test(email);
    }
        
    function isValidPassword(password) {
        return password.length >= 6;
    }
        
    function setErrorState(inputElement) {
        inputElement.classList.add('error-input');
        inputElement.nextElementSibling.innerHTML = 'Invalid input';
        inputElement.nextElementSibling.classList.add('error-message');
        inputElement.nextElementSibling.classList.remove('success-message');
        inputElement.nextElementSibling.classList.remove('validation-icon');
    }