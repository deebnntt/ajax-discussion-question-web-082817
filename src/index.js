const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const postcode = document.getElementById('postcode');
const phone = document.getElementById('phone');
const cell = document.getElementById('cell');
const dateOfBirth = document.getElementById('date_of_birth');
const profPic = document.getElementById('profile_picture');
const button = document.getElementsByClassName('btn btn-primary')[0];

button.addEventListener('click', function(e) {
  e.preventDefault();
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => json.results[0])
    .then(json => assigner(json));
});

function assigner(json) {
  fullname.innerText = `${json.name.first} ${json.name.last}`;
  email.innerText = json.email;
  street.innerText = json.location.street;
  city.innerText = json.location.city;
  state.innerText = json.location.state;
  postcode.innerText = json.location.postcode;
  phone.innerText = json.phone;
  cell.innerText = json.cell;
  dateOfBirth.innerText = json.dob;
  profPic.src = json.picture.thumbnail;
}
