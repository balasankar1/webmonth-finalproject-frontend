const body = document.querySelector('body');

window.addEventListener('load',()=>{
    body.classList.add("visible");
})

const cardContainer = document.querySelector(".card-container");

const cardData=[
    {  heading:"heading1",content:"hasfhbwasyufgasdfugsdfyusdfhgsdyufhsdfyugsdfyusdhfiuasdhfsdhfesdjfsdfbhuwsehfyuweafas dfytegfyeasd fytesvfyteas faygsdc std fvhygsdt fsdgf sdfgcdfytc ysdveygstdc faystdcf saytfcasdgfc hstdfvcsdhgfc wedrtgfeyusdfeaiusdgf",id:0},
    {  heading:"heading2",content:"content",id:1},
    {  heading:"heading3",content:"content",id:2},
    {  heading:"heading4",content:"content",id:3},
    {  heading:"heading5",content:"content",id:4},
    {  heading:"heading6",content:"content",id:5},
    {  heading:"heading7",content:"content",id:6},
    {  heading:"heading8",content:"content",id:7},
]


const createNotes = (array) =>{
array.forEach(cardObj =>{
    const {heading,content,id} = cardObj;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id=id;

    const innerhtml = `  <div class="card-header">
    <div class="card-heading">${heading}</div><a href="../updatenotes/updatenotes.html?noteId=${id}">
    <div class="edit-note"> <img src="../../assets/edit-note.svg" alt=""></div> </div><div class="card-content">${content}</div>`
    card.innerHTML = innerhtml;
    cardContainer.appendChild(card);
    
})
}

createNotes(cardData);