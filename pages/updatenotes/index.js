const body = document.querySelector("body");
const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get("noteId");

const apiurl = "http://localhost:8000";

const token = localStorage.getItem("jwt");

function display(heading, content) {
  const card = document.querySelector(".create-notes-container");
  const insidehtml = `<div class="heading">
  <h3>Update Note</h3>
      <input
      value=${heading}
        type="text"
        placeholder="Heading"
        class="create-note-heading"
        maxlength="25"
      />
      </div>
      <input
      value=${content}
      type="text"
      placeholder="Create Your Note"
      class="create-note-input"
      />
      <div class="create-note-button">Update Note</div>`;
  card.innerHTML = insidehtml;

  const updateNoteButton = document.querySelector(".create-note-button");
  updateNoteButton.addEventListener("click", () => {
    const heading = card.querySelector(".create-note-heading").value;
    const content = card.querySelector(".create-note-input").value;

    if (token) {
      fetch(`${apiurl}/notes/update/${noteId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify({ heading, content }),
      })
        .then((res) => res.json())
        .then((data) => {
          location.href = "../dashboard/dashboard.html";
        })
        .catch((err) => {
          alert("Error in updating the note!! Re-Try...");
          console.log(err);
        });
    }
  });
}

window.addEventListener("load", () => {
  body.classList.add("visible");
  fetch(`${apiurl}/notes/update/${noteId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      display(data.data[0].heading, data.data[0].content);
    })
    .catch((err) => {
      alert("Error in updating the note!! Re-Try...");
      console.log(err);
    });
});
