import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('form');
const emailInput = document.querySelector('input');
const messageText = document.querySelector('textarea');
let formData = {
    email: '',
    message: ''
};

populateMessage()

formRef.addEventListener('input', throttle(onFormHandler), 500)
formRef.addEventListener('submit', onSubmitForm)

function onFormHandler (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(event) {
    onCheckInputMessage();
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY)
    event.currentTarget.reset()
    console.log(formData)
}

function onCheckInputMessage() {
    if (emailInput.value === '' || messageText.value === '') {
return alert('Fill all fields, please!')
    }
}

function populateMessage () {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if(savedMessage) {
        formData = savedMessage;
        emailInput.value = savedMessage.email || '';
        messageText.value = savedMessage.message || '';
        formData.email = savedMessage.email ||'';
        formData.message = savedMessage.message || '';
    }
}


