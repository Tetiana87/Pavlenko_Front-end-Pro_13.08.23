const $nameError = document.getElementById("name-error");
const $ageError = document.getElementById("age-error");
const $phoneError = document.getElementById("phone-error");
const $emailError = document.getElementById("email-error");
// const messageError = document.getElementById("message-error");
const $cardError = document.getElementById("card-error");
const $psw = document.getElementById("psw");
const $pswError = document.getElementById("psw-error");
const $submitError = document.getElementById("submit-error");

function validateName() {
  const name = document.getElementById("contact-name").value;

  if (name == "") {
    $nameError.innerHTML = `Name is required`;
    return false;
  }

  // if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  if (!name.match(/^.+\s.+\s?.*$/i)) {
    $nameError.innerHTML = `Write full name`;
    return false;
  }

  $nameError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
  return true;
}

function validateAge() {
  const age = document.getElementById("contact-age").value;

  if (age == "") {
    $ageError.innerHTML = `Age is required`;
    return false;
  }

  if (!age.match(/^(?:100|[1-9]\d|[6-9])$/)) {
    $ageError.innerHTML = `Only whole digits, please`;
    return false;
  }

  if (age < 18 || age > 60) {
    $ageError.innerHTML = `The age must be from 18 to 60`;

    return false;
  }

  $ageError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
  return true;
}

function validatePhone() {
  const phone = document.getElementById("contact-phone").value;

  if (phone == "") {
    $phoneError.innerHTML = `Phone is required`;
    return false;
  }

  // if (!phone.match(/^[0-9]{10}+$/)) {
  // if (!phone.match(/(.*\d.*){10}/)) {
  // if (!phone.match(/^\d{10}$/)) {
  // if (!phone.match(/[0-9]{10}/)) {

  if (!phone.match(/^\d+$/)) {
    $phoneError.innerHTML = `Only digits, please`;
    return false;
  }

  if (!phone.match(/^\d{10}/)) {
    $phoneError.innerHTML = `Only 10 digits, please`;
    return false;
  }

  // if (phone.lenght !== 10) {
  //   phoneError.innerHTML = `Phone should be 10 digits`;

  //   return false;
  // }

  $phoneError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
  return true;
}

function validateEmail() {
  const email = document.getElementById("contact-email").value;

  if (email == "") {
    $emailError.innerHTML = `Email is required`;
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    $emailError.innerHTML = `Email Invalid`;
    return false;
  }

  $emailError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
  return true;
}

$psw.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

$psw.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// function validatePsw() {
//   const pswValue = document.getElementById("psw").value;

//   if (pswValue == "") {
//     pswError.innerHTML = `Password no is required`;
//     return false;
//   }
// }

// function validateCard() {
const $inputCard = document.querySelector("#bank-card-input");
$inputCard.addEventListener("input", function (evt) {
  // validateCard();
  $inputCard.value = $inputCard.value
    .replace(/(\d{4})(?!\s|$)/gm, `$1 `)
    .match(/(?:\d{4} ?){0,3}(?:\d{0,4})?/);
});
// }

function validateCard() {
  const $card = document.getElementById("bank-card-input").value;
  // let regExp = /[0-9]{4}/;
  let regExp = /^\d+$/;

  // const $cardInput = document.querySelector("#bank-card-input"),
  //   numbers = /[0-9]/,
  //   regExp = /[0-9]{4}/;

  if ($card == "") {
    $cardError.innerHTML = `Bank card is required`;
    return false;
  }
  // else {
  // $cardError.innerHTML = `Only 16 digits, please`;

  // }

  // if (!$card.match(regExp)) {
  //   $cardError.innerHTML = `Only digits, please`;
  //   return false;
  // }

  if (!$card.match(/^\d{16}/)) {
    $cardError.innerHTML = `Only 16 digits, please`;
    return false;
  }
  // console.log($card);

  $cardError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;

  return true;
}

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

// When the user starts to type something inside the password field
// psw.onkeyup = function () {
function validatePsw() {
  const $letter = document.getElementById("letter");
  const $capital = document.getElementById("capital");
  const $number = document.getElementById("number");
  const $length = document.getElementById("length");

  const $pswValue = document.getElementById("psw").value;

  if ($pswValue == "") {
    $pswError.innerHTML = `Password is required`;
    return false;
  } else {
    // Validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;
    if ($psw.value.match(lowerCaseLetters)) {
      $letter.classList.remove("invalid");
      $letter.classList.add("valid");
    } else {
      $letter.classList.remove("valid");
      $letter.classList.add("invalid");
    }

    // Validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if ($psw.value.match(upperCaseLetters)) {
      $capital.classList.remove("invalid");
      $capital.classList.add("valid");
    } else {
      $capital.classList.remove("valid");
      $capital.classList.add("invalid");
    }

    // Validate numbers
    const numbers = /[0-9]/g;
    if ($psw.value.match(numbers)) {
      $number.classList.remove("invalid");
      $number.classList.add("valid");
    } else {
      $number.classList.remove("valid");
      $number.classList.add("invalid");
    }

    // Validate length
    if ($psw.value.length >= 8) {
      $length.classList.remove("invalid");
      $length.classList.add("valid");
      $pswError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
      return true;
    } else {
      $length.classList.remove("valid");
      $length.classList.add("invalid");
    }
  }
}

function validateForm() {
  if (
    !validateName() ||
    !validateAge() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateCard() ||
    !validatePsw()
  ) {
    $submitError.style.display = "block";
    $submitError.innerHTML = `Fix error,please`;
    setTimeout(function () {
      $submitError.style.display = "none";
    }, 3000);
    return false;
  }
}

function showDate() {
  let pepleList;
  if (localStorage.getItem("pepleList") == null) {
    pepleList = [];
  }
}
