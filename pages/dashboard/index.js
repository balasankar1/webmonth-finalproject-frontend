const body = document.querySelector("body");
const cardContainer = document.querySelector(".card-container");

const token = localStorage.getItem("jwt");

const logout = document.querySelector(".log-out");
const createnNoteButton = document.querySelector(".new-note");

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

const apiurl = ji;
const createNoteButton = document.querySelector(".new-note");
createNoteButton.addEventListener("click", () => {
  location.href = "../createnotes/index.html";
  console.log("hi");
});

let cardData = [];

createNoteButton.addEventListener("click", () => {
  location.href = "/pages/createnotes/index.html";
});

const createNotes = (array) => {
  cardContainer.innerHTML = "";
  array.forEach((cardObj) => {
    const { heading, content } = cardObj;
    const id = cardObj.noteId;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const innerhtml = `  <div class="card-header">
    <div class="card-heading">${heading}</div><a href="../updatenotes/updatenotes.html?noteId=${id}">
    <div class="edit-note"> <img src="../../assets/edit-note.svg" alt=""></div> </div><div class="card-content">${content}</div>`;
    card.innerHTML = innerhtml;
    cardContainer.appendChild(card);
  });
};

window.addEventListener("load", () => {
  body.classList.add("visible");

  if (token) {
    fetch(`${apiurl}/auth/signup`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        cardData = data.data;
        createNotes(cardData);
      })
      .catch((err) => {
        alert("Error Signing Up!!! Re-try...");
        console.log(err);
      });
  }
});
