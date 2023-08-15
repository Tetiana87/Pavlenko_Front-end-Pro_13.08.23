const $nameError = document.getElementById("name-error");
const $ageError = document.getElementById("age-error");
const $phoneError = document.getElementById("phone-error");
const $emailError = document.getElementById("email-error");
// const messageError = document.getElementById("message-error");
const $cardError = document.getElementById("card-error");
const $psw = document.getElementById("password");
const $pswError = document.getElementById("psw-error");
const $submitError = document.getElementById("submit-error");

// const $card = document.getElementById("bank-card-input").value;

// function validateName() {
//   const $name = document.getElementById("contact-name").value;
//   if ($name == "") {
//     $nameError.innerHTML = `Name is required`;
//     return false;
//   }

// // if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
// if (!$name.match(/^.+\s.+\s?.*$/i)) {
//   $nameError.innerHTML = `Write full name`;
//   return false;
// }

//   $nameError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
//   return true;
// }

// function validateAge() {
//   const $age = document.getElementById("contact-age").value;
//   if ($age == "") {
//     $ageError.innerHTML = `Age is required`;
//     return false;
//   }

//   if (!$age.match(/^(?:100|[1-9]\d|[6-9])$/)) {
//     $ageError.innerHTML = `Only whole digits, please`;
//     return false;
//   }

//   if ($age < 18 || $age > 60) {
//     $ageError.innerHTML = `The age must be from 18 to 60`;

//     return false;
//   }

//   $ageError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
//   return true;
// }

// function validatePhone() {
//   const $phone = document.getElementById("contact-phone").value;

//   if ($phone == "") {
//     $phoneError.innerHTML = `Phone is required`;
//     return false;
//   }

//   // if (!$phone.match(/^((\+?3)?8)?0\d{9}$/) != null) {
//   //   $phoneError.innerHTML = `Start from +3, please`;
//   //   return false;
//   // }
//   // function checkNumber(AStr) {
//   //   AStr = AStr.replace(/[\s\-\(\)]/g, "");
//   //   return AStr.match(/^((\+?3)?8)?0\d{9}$/) != null;
//   // }
//   // if (!phone.match(/^[0-9]{10}+$/)) {
//   // if (!phone.match(/(.*\d.*){10}/)) {
//   // if (!phone.match(/^\d{10}$/)) {
//   // if (!phone.match(/[0-9]{10}/)) {

//   // if (!$phone.match(/^\d+$/)) {
//   //   $phoneError.innerHTML = `Only digits, please`;
//   //   return false;
//   // }

//   if (!$phone.match(/^\d{13}/)) {
//     $phoneError.innerHTML = `Only 10 digits, please`;
//     return false;
//   }

//   // if (phone.lenght !== 10) {
//   //   phoneError.innerHTML = `Phone should be 10 digits`;

//   //   return false;
//   // }

//   $phoneError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
//   return true;
// }

// function validateEmail() {
//   const $email = document.getElementById("contact-email").value;
//   if ($email == "") {
//     $emailError.innerHTML = `Email is required`;
//     return false;
//   }

//   if (!$email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//     $emailError.innerHTML = `Email Invalid`;
//     return false;
//   }

//   $emailError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
//   return true;
// }

// $psw.onfocus = function () {
//   document.getElementById("message").style.display = "block";
// };

// $psw.onblur = function () {
//   document.getElementById("message").style.display = "none";
// };

// // function validatePsw() {
// //   const pswValue = document.getElementById("psw").value;

// //   if (pswValue == "") {
// //     pswError.innerHTML = `Password no is required`;
// //     return false;
// //   }
// // }

// function validateCard() {
// const $inputCard = document.querySelector("#card");
// $inputCard.addEventListener("input", function (evt) {
//   // validateCard();
//   $inputCard.value = $inputCard.value
//     .replace(/(\d{4})(?!\s|$)/gm, `$1 `)
//     .match(/(?:\d{4} ?){0,3}(?:\d{0,4})?/);
// });
// }

// function validateCard() {
//   // let regExp = /[0-9]{4}/;
//   let regExp = /^\d+$/;

//   // const $cardInput = document.querySelector("#bank-card-input"),
//   //   numbers = /[0-9]/,
//   //   regExp = /[0-9]{4}/;

//   if ($card == "") {
//     $cardError.innerHTML = `Bank card is required`;
//     return false;
//   }
//   // else {
//   // $cardError.innerHTML = `Only 16 digits, please`;

//   // }

//   // if (!$card.match(regExp)) {
//   //   $cardError.innerHTML = `Only digits, please`;
//   //   return false;
//   // }

//   if (!$card.match(/^\d{16}/)) {
//     $cardError.innerHTML = `Only 16 digits, please`;
//     return false;
//   }
//   // console.log($card);

//   $cardError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;

//   return true;
// }

// function validateCard() {

//   const $card = document.querySelector("#bank-card-input"),
//     numbers = /[0-9]/,
//     regExp = /[0-9]{4}/;

//   // добавляем слушатель события на инпут
//   $card.addEventListener("input", (ev) => {
//     let value = $card.value;

//     if (value == "") {
//       $cardError.innerHTML = `Bank card is required`;
//       // return false;
//     }
//     // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
//     if (
//       (ev.inputType === "insertText" && !numbers.test(ev.data)) ||
//       $card.value.length > 19
//     ) {
//       $cardError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
//       $card.value = $card.value.slice(0, $card.value.length - 1);

//       return;
//       // $cardError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
//       // return true;
//     }

//     // обеспечиваем работу клавиш "backspace","delete"

//     if (
//       ev.inputType === "deleteContentBackward" &&
//       regExp.test(value.slice(-4))
//     ) {
//       $card.value = $card.value.slice(0, $card.value.length - 1);
//       return;
//     }

//     // добавяем пробел после 4 цифр подряд
//     if (regExp.test(value.slice(-4)) && value.length < 19) {
//       $card.value += " ";
//     }
//   });
// }

// // When the user starts to type something inside the password field
// // psw.onkeyup = function () {
// function validatePsw() {
//   const $letter = document.getElementById("letter");
//   const $capital = document.getElementById("capital");
//   const $number = document.getElementById("number");
//   const $length = document.getElementById("length");

//   const $pswValue = document.getElementById("psw").value;

//   if ($pswValue == "") {
//     $pswError.innerHTML = `Password is required`;
//     return false;
//   } else {
//     // Validate lowercase letters
//     const lowerCaseLetters = /[a-z]/g;
//     if ($psw.value.match(lowerCaseLetters)) {
//       $letter.classList.remove("invalid");
//       $letter.classList.add("valid");
//     } else {
//       $letter.classList.remove("valid");
//       $letter.classList.add("invalid");
//     }

//     // Validate capital letters
//     const upperCaseLetters = /[A-Z]/g;
//     if ($psw.value.match(upperCaseLetters)) {
//       $capital.classList.remove("invalid");
//       $capital.classList.add("valid");
//     } else {
//       $capital.classList.remove("valid");
//       $capital.classList.add("invalid");
//     }

//     // Validate numbers
//     const numbers = /[0-9]/g;
//     if ($psw.value.match(numbers)) {
//       $number.classList.remove("invalid");
//       $number.classList.add("valid");
//     } else {
//       $number.classList.remove("valid");
//       $number.classList.add("invalid");
//     }

//     // Validate length
//     if ($psw.value.length >= 8) {
//       $length.classList.remove("invalid");
//       $length.classList.add("valid");
//       $pswError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
//       return true;
//     } else {
//       $length.classList.remove("valid");
//       $length.classList.add("invalid");
//     }
//   }
// }

// function validateForm() {
//   if (
//     !validateName() ||
//     !validateAge() ||
//     !validatePhone() ||
//     !validateEmail() ||
//     // !validateCard() ||
//     !validatePsw()
//   ) {
//     $submitError.style.display = "block";
//     $submitError.innerHTML = `Fix error,please`;
//     setTimeout(function () {
//       $submitError.style.display = "none";
//     }, 3000);
//     return false;
//   }
// }

// let peopleList;
// function showDate() {
//   // let peopleList;
//   if (localStorage.getItem("pepleList") == null) {
//     peopleList = [];
//   } else {
//     peopleList = JSON.parse(localStorage.getItem("peopleList"));
//   }

//   let info = "";
//   console.log(info);
//   peopleList.forEach(function (element, index) {
//     info += "<tr>";
//     info += "<td>" + element.name + "</td>";
//     info += "<td>" + element.age + "</td>";
//     info += "<td>" + element.$phone + "</td>";
//     info += "<td>" + element.$email + "</td>";
//     info += "<td>" + element.$card + "</td>";
//     info +=
//       '<td><button onclick ="deleteDate(' +
//       index +
//       ')" class="btn btn-danger">Delete</button><button
//       onclick="updateData(' +
//       index +
//       ')" class="btn btn-warning m-2">Edit</button></td>';
//     info += "</tr>";
//   });

//   document.querySelector("#crudTable tbody").innerHTML = info;
// }

// document.onload = showDate();

// function addData() {
//   validateForm();
//   if (
//     validateName() == true &&
//     validateAge() == true &&
//     validatePhone() == true &&
//     validateEmail() == true &&
//     validateCard() == true
//   ) {
//     const name = document.getElementById("contact-name").value;
//     const age = document.getElementById("contact-age").value;
//     const phone = document.getElementById("contact-phone").value;
//     const email = document.getElementById("contact-email").value;
//     const card = document.getElementById("bank-card-input").value;
//     // let peopleList;
//     if (localStorage.getItem("pepleList") == null) {
//       peopleList = [];
//     } else {
//       peopleList = JSON.parse(localStorage.getItem("peopleList"));
//     }

//     peopleList.push({
//       name: name,
//       age: age,
//       phone: phone,
//       email: email,
//       $card: card,
//     });

//     localStorage.setItem("peopleList", JSON.stringify(peopleList));
//     showDate();
//     document.getElementById("contact-name").value = "";
//     document.getElementById("contact-age").value = "";
//     document.getElementById("contact-phone").value = "";
//     document.getElementById("contact-email").value = "";
//     document.getElementById("bank-card-input").value = "";
//   }
// }

const mockUsers = [
  {
    id: 1,
    name: "Paul Parqe",
    age: 18,
    phone: 123456789,
    email: "asd@gmail.com",
    card: 1234123412341234,
  },

  {
    id: 2,
    name: "Rfte General",
    age: 20,
    phone: 123456789,
    email: "asd@gmail.com",
    card: 1234123412341234,
  },
];
const $list = document.getElementById("list");
const $form = document.getElementById("form");

let users = mockUsers;

const $username = document.getElementById("name");
const $age = document.getElementById("age");
const $phone = document.getElementById("phone");
const $email = document.getElementById("email");
const $card = document.getElementById("card");
const $password = document.getElementById("password");
const $spans = document.querySelectorAll("span");
// const $viewBtn = document.querySelector(".view-btn");
// console.log($viewBtn);

function addUsers(event) {
  event.preventDefault();
  // checkRequired([username, email, password]);

  if (validation(this) == true) {
    console.log("good");

    const user = {
      id: generateID(),
      name: $username.value,
      age: $age.value,
      phone: $phone.value,
      email: $email.value,
      card: $card.value,
    };
    users.push(user);
    addUsersDom(user);
    $username.value = "";
    $age.value = "";
    $phone.value = "";
    $email.value = "";
    $card.value = "";
    $password.value = "";
    $spans.innerHTML = "";
  } else {
    console.log("bed");
  }
}

function generateID() {
  return Math.floor(Math.random() * 10000000);
}

function addUsersDom(users) {
  const $tr = document.createElement("tr");
  // $list.appendChild($tr);
  // const $thName = document.createElement("th");
  // $thName.innerHTML = `Full Name: ${users.name}`;
  // $tr.appendChild($thName);
  // $thName.classList.add("name");

  $tr.innerHTML = `<th class="name">Full Name: ${users.name}
  <p><button class="btn btn-success btn_view">View</button>
  <button class="btn btn-primary">Edit</button>
  <button class="btn btn-danger">Delete</button></p></th>
  <th>Age: ${users.age}</th>
  <th>Phone Nomber: ${users.phone}</th>
  <th>Email: ${users.email}</th>
  <th>Bank Card: ${users.card}</th>`;

  const $btnView = document.getElementsByClassName("btn_view");
  console.log($btnView);
  // function showInfo() {
  //   console.log(`hi`);
  // }
  // $btnView.addEventListener("click", showInfo);

  document.querySelectorAll("tr th:not(:first-child)");
  // $th.style.display = "none";
  // console.log($th);
  // $th.classList.add("display__none");
  // <button type="button" class="btn btn-info view-btn">
  //   View
  // </button>;
  // <th>${users.age}</th>
  // <th>${users.phone}</th>
  // <th>${users.email}</th>
  // <th>${users.card}</th>
  $list.appendChild($tr);
  // const $th = document.querySelector(".name");
  // const $thAll = document.querySelectorAll("");
  // $thAll.classList.add("display__none");
  // console.log($thAll);
  // let $allThName = document.getElementsByTagName("th");

  // const $parBtn = document.createElement("p");

  // $allThName.appendChild($parBtn);
  // $th.appendChild($parBtn);

  // $viewBtn.type = "button";
  // $viewBtn.classList.add("viev_btn");
  // $viewBtn.classList.add("btn");
  // $viewBtn.classList.add("btn-info");
  // $viewBtn.textContent = "View";
  // $parBtn.appendChild($viewBtn);
  // console.log($viewBtn);

  // $viewBtn.onclick;

  // function showInfo() {

  //   $thAll.classList.remove("display__none");
  //   $thAll.classList.add("open");
  //   // $containerResult.innerHTML = "";
  // }
  // $viewBtn.addEventListener("click", showInfo);
}
// const $viewBtn = document.createElement("button");

// function createViewButton() {
//   const $th = document.querySelector(".name");
//   $viewBtn.type = "button";
//   $viewBtn.classList.add("viev_btn");
//   $viewBtn.textContent = "View";
//   $th.appendChild($viewBtn);
//   $viewBtn.onclick;
//   console.log($viewBtn);
// }
// createViewButton();

// function showUserInfo(event) {
//   const $tr = document.createElement("tr");
//   $tr.innerHTML = `// <th>${users.age}</th>
//   // <th>${users.phone}</th>
//   // <th>${users.email}</th>
//   // <th>${users.card}</th>`;
//   $list.appendChild($tr);
// }

function unit() {
  $list.innerHTML = "";
  users.forEach(addUsersDom);
}

unit();

$form.addEventListener("submit", addUsers);
// $viewBtn.addEventListener("onclick", showUserInfo);

// function checkRequired(inputArr) {
//   inputArr.forEach((input) => {
//     if (input.value.trim() === "") {
//       showError(input, `${getFieldName(input)} is required`);
//     } else {
//       showSuccess(input);
//     }
//   });
// }

const $inputCard = document.querySelector("#card");
$inputCard.addEventListener("input", function (evt) {
  // validateCard();
  $inputCard.value = $inputCard.value
    .replace(/(\d{4})(?!\s|$)/gm, `$1 `)
    .match(/(?:\d{4} ?){0,3}(?:\d{0,4})?/);
});
// let cc = document.querySelector("#card");

// let cc = $form.cardcode;
// for (let i in ["input", "change", "blur", "keyup"]) {
//   cc.addEventListener("input", formatCardCode, false);
// }
// function formatCardCode() {
//   let cardCode = this.value.replace(/[^\d]/g, "").substring(0, 16);
//   cardCode = cardCode != "" ? cardCode.match(/.{1,4}/g).join(" ") : "";
//   this.value = cardCode;
//   return true;
// }

function validation(form) {
  // console.log(form);

  let result = true;

  const allInputs = form.querySelectorAll("input");

  for (const input of allInputs) {
    removeError(input);

    if (input.dataset.psw) {
      // const re = /^.+\s.+\s?.*$/i;
      const re =
        /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
      // const re =
      //   /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/;
      // ^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$
      removeError(input);
      if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, `digit,symbol,up & low,6 cha-rs`);
        result = false;
      }
    }

    if (input.dataset.card) {
      // const re = /^.+\s.+\s?.*$/i;
      const re = /^\s*(\d\s*){16}$/;
      // const re =
      //   /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/;
      // ^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$
      removeError(input);
      if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, `Only 16 digits`);
        result = false;
      }
    }

    if (input.dataset.email) {
      // const re = /^.+\s.+\s?.*$/i;
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // const re =
      //   /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/;
      // ^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$
      removeError(input);
      if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, `Email is not valid`);
        result = false;
      }
    }

    if (input.dataset.phone) {
      // const re = /^.+\s.+\s?.*$/i;
      const re = /^((\+?3)?8)?0\d{9}$/;
      // const re =
      //   /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/;
      // ^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$
      removeError(input);
      if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, `Only 12 digits,start from +380`);
        result = false;
      }
    }

    if (input.dataset.age) {
      // const re = /^.+\s.+\s?.*$/i;
      // const re = /^(18?[1-9]|[1-9][0-9]|[1][1-9][1-9]|60)$/;
      const re = /^(?:1[01][0-9]|60|1[8-9]|[2-5][0-9])$/;
      // ^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$
      removeError(input);
      if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, `The age must be from 18 to 60`);
        result = false;
      }
    }

    if (input.dataset.fullName) {
      // const re = /^.+\s.+\s?.*$/i;
      // const re = /^[a-zA-Z]+ [a-zA-Z]+$/;
      const re = /^[A-Z][a-z]*\s[A-Z][a-z]*$/;
      removeError(input);
      if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, `Write name and surname`);
        result = false;
      }
    }

    if (input.dataset.required == "true") {
      if (input.value == "") {
        console.log(`Error`);
        showError(input, `${getFieldName(input)} is required`);
        result = false;
      }
    }
  }
  // const span = formControl.querySelector("span");
  // span.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
  return result;
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, message) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");

  formControl.className = "input-group span";
  span.textContent = message;
}

function removeError(input) {
  const formControl = input.parentElement;

  if (formControl.classList.contains("input-group span")) {
    formControl.querySelector("span").remove();
    formControl.classList.remove("input-group span");
  }
}

function showSuccess(input) {
  const formControl = input.parentElement;
  // const span = formControl.querySelector("span");

  $spans.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
}
