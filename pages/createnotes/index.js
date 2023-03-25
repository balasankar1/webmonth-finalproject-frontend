const body = document.querySelector("body");

const createNoteButton = document.querySelector(".create-note-button");

const token = localStorage.getItem("jwt");
const apiurl = "http://localhost:8000";

window.addEventListener("load", () => {
  body.classList.add("visible");
});

createNoteButton.addEventListener("click", () => {
  const content = document.querySelector(".create-note-input").value;
  const heading = document.querySelector(".create-note-heading").value;
  if (token) {
    fetch(`${apiurl}/notes/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ heading, content }),
    })
      .then((res) => res.json())
      .then((data) => {
        location.href = "/pages/dashboard/dashboard.html";
      })
      .catch((err) => {
        alert("error Creating notes!! Re-try...");
        console.log(err);
      });
  }
});
