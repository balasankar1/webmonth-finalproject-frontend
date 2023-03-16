const body = document.querySelector('body');

window.addEventListener('load',()=>{
    body.classList.add("visible");
})

const createNoteInput = document.querySelector(".create-note-input");
createNoteInput.addEventListener("input",(e)=>{
    console.log(e.target.value);
})


