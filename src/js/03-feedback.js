import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const KEY_LOCAL_STORAGE = 'feedback-form-state';

form.addEventListener('input', throttle(onSaveValue, 500));

function onSaveValue() {
  const valueLocalStorage = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(valueLocalStorage));
}

function stateLocalStorage() {
  const stateValueLocalStorage = JSON.parse(
    localStorage.getItem(KEY_LOCAL_STORAGE)
  );

  if (stateValueLocalStorage) {
    email.value = stateValueLocalStorage.email || '';
    message.value = stateValueLocalStorage.message || '';
  }
}
stateLocalStorage();

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (!email.value || !message.value) {
    alert('Please fill in all the fields!');
    return;
  }

  feedbackObject();

  removeLocalStorage();
}

function removeLocalStorage() {
  localStorage.removeItem(KEY_LOCAL_STORAGE);
  email.value = '';
  message.value = '';
}

function feedbackObject() {
  const feedback = {
    email: email.value,
    message: message.value,
  };

  console.log(feedback);
}
