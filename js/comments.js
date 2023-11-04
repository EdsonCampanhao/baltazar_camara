const comments = {
    0: {
        image: "https://github.com/EdsonCampanhao.png",
        name: "Gabryel Campanhão",
        comment: "Ótimo atendimento, muito solicita e educada"
    },
    1: {
        image: "https://github.com/lucas.png",
        name: "Lucas",
        comment: "o cara é diferenciado"
    },
    2: {
        image: "https://github.com/gabriela.png",
        name: "Roberta",
        comment: "fez milagra comigo"
    },
    3: {
        image: "https://github.com/ronald.png",
        name: "Ronald",
        comment: "paciente e educado com quem está começando, recomendo"
    },
    4: {
        image: "https://github.com/neymar.png",
        name: "neymar",
        comment: "pensa em um cara que sabe treinar, ele é esse cara"
    },
}

const arrowButton = document.querySelectorAll('.comments__arrow');
const commentCard = document.querySelector('.comments__card');
let commentId=0

function changeComment(direction) {

    if (direction=='right'){
        if(commentId==Object.keys(comments).length-1){
            commentId=0
        }else{
            commentId+=1
        }
    }else if(direction=='right'){
        if(commentId==0){
            commentId=Object.keys(comments).length-1
        }else{
            commentId-=1
        }
    }

    commentCard.innerHTML = `
    <article class="comments__card">
        <img class="comments__img-profile" src="${comments[commentId].image}" alt="Foto do usuário">
        <h3 class="comments__name">${comments[commentId].name}</h3>
        <p class="comments__review">${comments[commentId].comment}</p>
    </article> 
    `
}

arrowButton.forEach(
    (button)=>{
        button.addEventListener('click',(event)=>{ changeComment(event.target.classList[1])})
    }
    )