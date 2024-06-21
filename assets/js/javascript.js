const img = document.querySelectorAll(".image-hover");
const logogrid1 = document.getElementById("logo-grid-1");
const logogrid2 = document.getElementById("logo-grid-2");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const container = document.getElementById("container");

// hover
img.forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    e.target.style.transform = "scale(1.3)";
  });
  e.addEventListener("mouseout", (e) => {
    e.target.style.transform = "scale(1.2)";
  });
});

// hover over logo
logogrid1.addEventListener("mouseover", () => {
  image2.style.transform = "scale(1.3)";
});

logogrid1.addEventListener("mouseout", () => {
  image2.style.transform = "scale(1.2)";
});

logogrid2.addEventListener("mouseover", () => {
  image3.style.transform = "scale(1.3)";
});

logogrid2.addEventListener("mouseout", () => {
  image3.style.transform = "scale(1.2)";
});

// legion
const legion = document.getElementById("legion");
const legionImage = document.getElementById("legionImage");

image2.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  legion.style.display = "block";
  container.style.display = "none";
});

legionImage.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  legion.style.display = "none";
  container.style.display = "block";
});

// king
const king = document.getElementById("king");
const kingImage = document.getElementById("kingImage");

image4.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  king.style.display = "block";
  container.style.display = "none";
});

kingImage.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  king.style.display = "none";
  container.style.display = "block";
});

// panda
const panda = document.getElementById("panda");
const pandaImage = document.getElementById("pandaImage");

image3.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  panda.style.display = "block";
  container.style.display = "none";
});

pandaImage.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  panda.style.display = "none";
  container.style.display = "block";
});

// dragon
const dragon = document.getElementById("dragon");
const dragonImage = document.getElementById("dragonImage");

image1.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  dragon.style.display = "block";
  container.style.display = "none";
});

dragonImage.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  dragon.style.display = "none";
  container.style.display = "block";
});

const srcollDown = document.getElementById("srcollDown");

srcollDown.addEventListener("click", (e) => {
  e.preventDefault();
  const currentScrollPosition =
    window.scrollY || document.documentElement.scrollTop;

  if (currentScrollPosition === 0) {
    window.scrollTo({ top: 360, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// signUp
const signUp = document.getElementById("signUp");
const closeSignUp = document.getElementById("closeSignUp");
const formContainerSignUp = document.getElementById("formContainerSignUp");

signUp.addEventListener("click", (e) => {
  formContainerSignUp.style.visibility = "visible";
});

closeSignUp.addEventListener("click", (e) => {
  formContainerSignUp.style.visibility = "hidden";
});

const myUserNameSignUp = document.getElementById("usernameSignUp");
const myUserEmailSignUp = document.getElementById("emailSignUp");
const myPasswordSignUp = document.getElementById("passwordSignUp");

const submitButtonSignUp = document.getElementById("submitButtonSignUp");

let isUsernameValidSignUp = false;
let isEmailValidSignUp = false;
let isPasswordValidSignUp = false;

submitButtonSignUp.disabled = true;

myUserNameSignUp.addEventListener("keyup", (e) => {
  let usernameSignUp = myUserNameSignUp.value;
  let usernameSignUpRegEx = /^[\w\d.-]{4,12}$/;
  isUsernameValidSignUp = usernameSignUpRegEx.test(usernameSignUp);
  const wrongUsernameSignUp = document.getElementById("labelUsernameSignUp");

  if (isUsernameValidSignUp) {
    myUserNameSignUp.style.border = "2px solid green";
    wrongUsernameSignUp.innerText = "Username";
    wrongUsernameSignUp.style.fontSize = "1.3rem";
    console.log("valid username");
  } else {
    myUserNameSignUp.style.border = "2px solid orange";
    wrongUsernameSignUp.innerText = "Username: needs to be 4 to 12 characters ";
    wrongUsernameSignUp.style.fontSize = "1rem";
    console.log("invalid username");
  }
  validateSignUpForm();
});

myUserEmailSignUp.addEventListener("keyup", (e) => {
  let emailSignUp = myUserEmailSignUp.value;
  let emailSignUpRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  isEmailValidSignUp = emailSignUpRegEx.test(emailSignUp);
  const wrongEmailSignUp = document.getElementById("labelEmailSignUp");

  if (isEmailValidSignUp) {
    myUserEmailSignUp.style.border = "2px solid green";
    wrongEmailSignUp.innerText = "Email";
    wrongEmailSignUp.style.fontSize = "1.3rem";
    console.log("valid email");
  } else {
    myUserEmailSignUp.style.border = "2px solid orange";
    wrongEmailSignUp.innerText = "Email: needs to be a valid email";
    wrongEmailSignUp.style.fontSize = "1rem";
    console.log("invalid email");
  }
  validateSignUpForm();
});

myPasswordSignUp.addEventListener("keyup", (e) => {
  let passwordSignUp = myPasswordSignUp.value;
  let passwordSignUpRegEx = /^[a-zA-Z0-9]{8,15}$/;

  isPasswordValidSignUp = passwordSignUpRegEx.test(passwordSignUp);
  const wrongPasswordSignUp = document.getElementById("labelPasswordSignUp");

  if (isPasswordValidSignUp) {
    myPasswordSignUp.style.border = "2px solid green";
    wrongPasswordSignUp.innerText = "Password";
    wrongPasswordSignUp.style.fontSize = "1.3rem";
    console.log("valid Password");
  } else {
    myPasswordSignUp.style.border = "2px solid orange";
    wrongPasswordSignUp.innerText = "Password: needs to be 8 to 15 characters";
    wrongPasswordSignUp.style.fontSize = "1rem";
    console.log("invalid Password");
  }
  validateSignUpForm();
});

submitButtonSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Form submitted successfully!");
  formContainerSignUp.style.visibility = "hidden";
});

function validateSignUpForm() {
  console.log(isUsernameValidSignUp, isEmailValidSignUp, isPasswordValidSignUp);
  if (isUsernameValidSignUp && isEmailValidSignUp && isPasswordValidSignUp) {
    submitButtonSignUp.disabled = false;
  } else {
    submitButtonSignUp.disabled = true;
  }
}
