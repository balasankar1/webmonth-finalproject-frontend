const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
});

const signUpForm = document.querySelector(".sign-up");

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hi");

  const email = document.querySelector(".signup-email").value;
  const name = document.querySelector(".signup-name").value;
  const password = document.querySelector(".signup-password").value;
  const reTypedPassword = document.querySelector(
    ".signup-retyped-password"
  ).value;
  console.log(email, password, reTypedPassword);
  if (password != reTypedPassword) {
    alert("password");
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
        location.href = "/pages/dashboard/index.html";
      } else {
        alert("Signup Again");
      }
    })
    .catch((err) => {
      alert("Error Signing Up!!! Re-try...");
      console.log(err);
    });
});

const signInForm = document.querySelector(".sign-in");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  signInForm.addEventListener("submit", (event) => {
    const sigInEmail = document.querySelector(".sigin-email");
    const sigInPassword = document.querySelector(".signin-password");

    const email = sigInEmail.value;
    const password = sigInPassword.value;

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
          location.href = "/pages/dashboard/index.html";
        } else {
          alert("SignIn Again");
        }
      })
      .catch((err) => {
        alert("Error Signing In!!! Re-try...");
        console.log(err);
      });
  });
});
