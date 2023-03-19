const body = document.querySelector("body");

const createNoteButton = document.querySelector(".create-note-button");

const token = localStorage.getItem("jwt");

window.addEventListener("load", () => {
  body.classList.add("visible");
});

createNoteButton.addEventListener("click", () => {
  const content = document.querySelector(".create-note-input").value;
  const heading = document.querySelector(".create-note-heading").value;
  if (token) {
    fetch(`${apiurl}/note/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ heading, content }),
    })
      .then((res) => res.json())
      .then((data) => {
        location.href = "/pages/dashboard/index.html";
      })
      .catch((err) => {
        alert("Creating note");
        console.log(err);
      });
  }
});
