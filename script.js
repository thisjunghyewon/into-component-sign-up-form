const form = document.getElementById('form');

form.addEventListener ('submit', e=> {
  e.preventDefault();

  const firstname = form['firstname'].value;
  const lastname = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  const placeholder1 = document.getElementById('firstname');
  const placeholder2 = document.getElementById('lastname');
  const placeholder3 = document.getElementById('email');
  const placeholder4 = document.getElementById('password');

  if(firstname === '') {
    addError('firstname', 'First Name cannot be empty')
    placeholder1.setAttribute('placeholder','');
  }else {
    removeError ('firstname')
  }

  if(lastname === '') {
    addError('lastname', 'Last Name cannot be empty')
    placeholder2.setAttribute('placeholder','');
  }else {
    removeError ('Lastname')
  }

  if(email === '') {
    addError('email', 'Email Address cannot be empty')
    placeholder3.setAttribute('placeholder','email@example/com','red');
  }else if(!isValid(email)) {
    addError('email', 'Looks like this is not an email')
  }else {
    removeError ('email')
  }

  if(password === '') {
    addError('password', 'Password cannot be empty')
    placeholder4.setAttribute('placeholder','');
  }else {
    removeError ('password') 
  }
  
})

function addError(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add('error');
  const small = form[field].parentNode.querySelector('small');
  small.innerText = message;
}

function removeError(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove('error');
}

function isValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
