const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
  const token = localStorage.getItem("jwt");

  if (token) {
    location.href = "/pages/dashboard/index.html";
  }
});

const signInButton = document.querySelector(".sign-in-sign-up");

signInButton.addEventListener("click", () => {
  location.href = "pages/signin/index.html";
});
