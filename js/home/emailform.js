const formDataElements = {};

const inputs = document.querySelectorAll('.form-data');

inputs.forEach((el) => {
  formDataElements[el.getAttribute('name')] = el;
});

const recaptcha = document.querySelector('.g-recaptcha');

const customErrors = {
  tooShort: (fieldName, min) => 'Pole ' + fieldName + ' musi zawierać co najmniej ' + min + ' znaki!',
  tooLong: (fieldName, max) => 'Pole ' + fieldName + ' może zawierać co najwyżej ' + max + ' znaków!',
  empty: fieldName => 'Pole ' + fieldName + ' nie może być puste!',
  type: fieldName => 'Pole ' + fieldName + ' jest niepoprawne!',
  errorsInForm: 'W formularzu występują błędy!',
  recaptcha: 'Potwierdź, że nie jesteś robotem!',
};

const contactForm = $('#formularz-kontaktowy');
const formAlert = document.querySelector('.emailFormAlert');

function toggleContactForm(state) {
  if (typeof state !== 'boolean') throw new TypeError('State must be a boolean');

  if (state === true) {
    contactForm.fadeIn();
    contactForm.attr('aria-hidden', 'false');
    firstInput.focus();
  } else {
    contactForm.fadeOut();
    contactForm.attr('aria-hidden', 'true');

    for (const input in formDataElements) {
      formDataElements[input].value = '';
    }

    grecaptcha.reset();
    openContactBtn.focus();
  }
}

const closeContactBtn = $('#close-contact-btn');
const openContactBtn = $('#open-contact-btn');

openContactBtn.click(() => {
  toggleContactForm(true);
});

closeContactBtn.click(() => {
  toggleContactForm(false);
});

const firstInput = $('.form-data:first');

if (document.location.hash === '#formularz-kontaktowy') {
  openContactBtn.focus();
  openContactBtn.click();
}

closeContactBtn.on('keydown', (e) => {
  if ((e.which === 9 && !e.shiftKey)) { // tab
    e.preventDefault();
    firstInput.focus();
  }
});

firstInput.on('keydown', (e) => {
  if ((e.which === 9 && e.shiftKey)) { // tab
    e.preventDefault();
    closeContactBtn.focus();
  }
});

contactForm.on('keydown', (e) => {
  if ((e.which === 27)) { // esc
    toggleContactForm(false);
  }
});


$('.emailFormSubmit').click((event) => {
  formAlert.innerHTML = '<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>';
  event.preventDefault();

  const isValid = validateEmailForm();

  if (isValid === true) {
    const formData = {
      'g-recaptcha-response': grecaptcha.getResponse(),
    };

    grecaptcha.reset();

    for (const el in formDataElements) {
      formData[el] = formDataElements[el].value;
    }

    const sendEmail = $.ajax({
      type: 'POST',
      url: '//formspree.io/lasota.marcinm@gmail.com',
      dataType: 'json',
      data: formData,
    });

    sendEmail.fail((error) => {
      console.log(error);
      formAlert.innerHTML = customErrors.errorsInForm;
    });

    sendEmail.done((response) => {
      console.log(response);
      formAlert.innerHTML = 'Wysłano! Dzięki za wiadomość!';
    });
  } else {
    formAlert.innerHTML = customErrors.errorsInForm;
  }
});

function validateEmailForm() {
  let valid = true;
  for (const el in formDataElements) {
    const fieldName = formDataElements[el].parentElement.innerText;

    if (formDataElements[el].validity.valueMissing === true) {
      markWrongInput(formDataElements[el], customErrors.empty(fieldName));
    } else if (formDataElements[el].validity.tooShort === true) {
      const min = formDataElements[el].getAttribute('minlength');
      markWrongInput(formDataElements[el], customErrors.tooShort(fieldName, min));
    } else if (formDataElements[el].validity.tooLong === true) {
      const max = formDataElements[el].getAttribute('maxlength');
      markWrongInput(formDataElements[el], customErrors.tooLong(fieldName, max));
    } else if (formDataElements[el].validity.typeMismatch === true) {
      markWrongInput(formDataElements[el], customErrors.type(fieldName));
    }
    if (formDataElements[el].validity.valid === false) {
      valid = false;
    }
  }
  if (grecaptcha.getResponse().length === 0) {
    markWrongInput(recaptcha, customErrors.recaptcha);
    valid = false;
  }
  return valid;
}

function markWrongInput(wrongElement, alert) {
  if (wrongElement.classList.contains('wrongInput')) {
    return;
  }

  const errorMessageEl = document.createElement('p');
  errorMessageEl.classList.add('error');
  errorMessageEl.classList.add('wrongInput');
  errorMessageEl.textContent = alert;

  wrongElement.parentElement.append(errorMessageEl);
  wrongElement.classList.add('wrongInput');
  wrongElement.addEventListener('focus', clearErrors);
}

function clearErrors() {
  this.classList.remove('wrongInput');
  this.parentElement.removeChild(this.parentElement.getElementsByClassName('error')[0]);
  formAlert.innerHTML = '';
}

window.recaptchaClearErr = () => {
  document.querySelector('.g-recaptcha').focus();
};
