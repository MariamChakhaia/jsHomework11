"use strict";

const form = document.getElementById("login");
const visIcon = document.getElementById("visibility");
let password1 = document.getElementById("passwField");
let password2 = document.getElementById("passw2Field")

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let errors = {};

  console.log(this);

  let userName = document.getElementById("userfield").value;
  if (userName === "") {
    errors.username = "Username Field cannot be Empty";
  }

  let password1 = document.getElementById("passwField").value;
  let password2 = document.getElementById("passw2Field").value;

  if (password1 === "") {
    errors.passw = "Password Field Cannot be Empty";
  }

  if (password1 != password2) {
    errors.passw2 = "Password Fields Do not match";
  }

  let gender = false;
  this.querySelectorAll(".input-radio").forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Select Gender";
  }

  let agree = document.getElementById("checkagree").checked;
  if (!agree) {
    errors.agree = "You must agree our terms and conditions";
  }

  this.querySelectorAll(".error-text").forEach((e) => {
    e.innerHTML = "";
  });

  for (let item in errors) {
    let errorElement = document.getElementById("error-" + item);
    console.log(errorElement);

    if (errorElement) {
      errorElement.innerText = errors[item];
    }
  }

  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});

visIcon.addEventListener("click", function () {
  if (this.classList.contains("fa-eye-slash")) {
    this.classList.replace("fa-eye-slash", "fa-eye");
    password1.type = "text";
    password2.type = "text";
  } else {
    this.classList.replace("fa-eye", "fa-eye-slash");
    password1.type = "password";
    password2.type = "password";
  }
  console.log(this);
});
