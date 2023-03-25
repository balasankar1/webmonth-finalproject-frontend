const body = document.querySelector("body");
const cardContainer = document.querySelector(".card-container");

const token = localStorage.getItem("jwt");

const logout = document.querySelector(".log-out");
const createNoteButton = document.querySelector(".new-note");

const apiurl = "http://localhost:8000";

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

let cardData = [];

createNoteButton.addEventListener("click", () => {
  location.href = "../createnotes/index.html";
});

const createNotes = (array1) => {
  cardContainer.innerHTML = "";
  array1.forEach((cardObj) => {
    const { heading, content } = cardObj;
    const id = cardObj.noteId;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const insidehtml = `<div class="card-header">
    <div class="heading">${heading}</div>
    <a href="../updatenotes/updatenotes.html?noteId=${id}"
      ><div class="edit-note">
        <img class="img" src="../../assets/icons8-edit.svg" alt="" /></div
    ></a>
    <div class="delete-note">
      <img class="img" src="../../assets/icons8-delete.svg" alt="" />
    </div>
  </div>
  <div class="card-content">${content}</div>`;

    card.innerHTML = insidehtml;

    const deleteButton = card.querySelector(".delete-note");

    deleteButton.addEventListener("click", () => {
      fetch(`${apiurl}/notes/delete/${id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          location.href = "dashboard.html";
        })
        .catch((err) => {
          console.log(err);
        });
    });
    cardContainer.appendChild(card);
  });
};

window.addEventListener("load", () => {
  body.classList.add("visible");

  if (token) {
    fetch(`${apiurl}/notes/getallnotes`, {
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
        console.log(err);
      });
  } else {
    location.href = "/";
  }
});
