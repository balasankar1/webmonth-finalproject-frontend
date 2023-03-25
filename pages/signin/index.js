const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
});

const apiurl = "http://localhost:8000";

const signUpForm = document.querySelector(".sign-up");
const signUpButton = document.querySelector(".sign-up-button");

signUpButton.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.querySelector(".signup-email").value;

  const name = document.querySelector(".signup-name").value;
  const password = document.querySelector(".signup-password").value;
  const reTypedPassword = document.querySelector(
    ".signup-retyped-password"
  ).value;

  if (password != reTypedPassword) {
    alert("password doesn't match");
    retrun;
  }

  fetch(`${apiurl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { token } = data;
      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/pages/dashboard/dashboard.html";
      } else {
        alert("user already exists ");
        location.href = "/pages/signin/index.html";
      }
    })
    .catch((err) => {
      alert("Error Signing Up!!! Re-try...");
      console.log(err);
    });
});

const signInForm = document.querySelector(".sign-in");

const signInButton = document.querySelector(".sign-in-button");

signInButton.addEventListener("click", (event) => {
  event.preventDefault();

  const sigInEmail = document.querySelector(".sigin-email");
  const sigInPassword = document.querySelector(".signin-password");

  const email = sigInEmail.value;
  console.log(email);

  const password = sigInPassword.value;

  // console.log(email, password);

  fetch(`${apiurl}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { token } = data;
      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/pages/dashboard/dashboard.html";
      } else {
        alert("SignIn Again");
      }
    })
    .catch((err) => {
      alert("Error Signing In!!! Re-try...");
      console.log(err);
    });
});
