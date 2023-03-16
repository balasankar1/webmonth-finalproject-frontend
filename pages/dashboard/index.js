const body = document.querySelector('body');

window.addEventListener('load',()=>{
    body.classList.add("visible");
})

const cardContainer = document.querySelector(".card-container");

const cardData=[
    {  heading:"heading1",content:"hasfhbwasyufgasdfugsdfyusdfhgsdyufhsdfyugsdfyusdhfiuasdhfsdhfesdjfsdfbhuwsehfyuweafas dfytegfyeasd fytesvfyteas faygsdc std fvhygsdt fsdgf sdfgcdfytc ysdveygstdc faystdcf saytfcasdgfc hstdfvcsdhgfc wedrtgfeyusdfeaiusdgf",id:1},
    {  heading:"heading1",content:"content",id:1},
    {  heading:"heading1",content:"content",id:1},
    {  heading:"heading1",content:"content",id:1},
    {  heading:"heading1",content:"content",id:1},
    {  heading:"heading1",content:"content",id:1},
    {  heading:"heading1",content:"content",id:1},
    {  heading:"heading1",content:"content",id:1},
]


const createNotes = (array) =>{
array.forEach(cardObj =>{
    const {heading,content,id} = cardObj;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id=id;

    const innerhtml = ` <div class="card-header"><div class="card-heading">${heading}</div><!-- <div class="edit-note"> <img src="" alt=""></div> --></div><div class="card-content">${content}</div>`
    card.innerHTML = innerhtml;
    cardContainer.appendChild(card);
    
})
}

createNotes(cardData);