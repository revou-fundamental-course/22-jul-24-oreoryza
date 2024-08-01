// form validation
const form = document.getElementById('form');
const nama = document.getElementById('name');
const email = document.getElementById('email');
const interest = document.getElementById('interest');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = nama.value.trim();
    const emailValue = email.value.trim();
    const interestValue = interest.value.trim();
  
    if(nameValue == "") {
        setError(nama, 'Silahkan isi nama anda terlebih dahulu.');
    } else {
        setSuccess(nama);
    }

    if(emailValue == "") {
        setError(email, 'Silahkan isi email anda terebih dahulu.');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email tidak valid.');
    } else {
        setSuccess(email);
    }

    if(interestValue == "") {
      setError(interest, 'Silahkan isi preferensi anda terlebih dahulu.');
    } else {
      setSuccess(interest);
    }

    if (nameValue !== "" && emailValue !== "" && isValidEmail(emailValue) && interestValue !== "") {
        alert("Terima Kasih sudah menghubungi kami. Silahkan cek email anda untuk informasi lebih lanjut.");
    }

};

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('slider');
    console.log(listImage);

    if (n > listImage.length) indexSlide = 1;

let index = 0;
while (index < listImage.length){
    listImage[index].style.display = 'none';
    index++;
}

listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 3000);

// NAVBAR RESPONSIVE
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("nav-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

document.querySelectorAll("#nav-list").forEach(n => n.addEventListener("click", () => {
    menuList.classList.remove("hidden");
}))