
const buttonsOfDifferentials = document.querySelectorAll('.differentials__list-item');
const selectedDiferentials = document.querySelector('.differentials__selected');

const differentialsList={
    "pilates":{
        "title":"Pilates para Fortalecimento e Flexibilidade",
        "text":"Como parte dos meus diferenciais, ofereço a inclusão do Pilates no seu programa de treinamento. O Pilates é uma abordagem excepcional para fortalecimento, flexibilidade e equilíbrio. Com a orientação especializada, você pode aproveitar os benefícios do Pilates, que ajudam a melhorar a postura, reduzir dores crônicas e aprimorar a saúde do núcleo do corpo. A combinação de Pilates com treinamento de força é uma fórmula vencedora para atingir suas metas de condicionamento físico de forma abrangente."
    },
    "atendimentoEspecializado":{
        "title":"Apoio Especializado à idosos e Pessoas com Baixa Mobilidade",
        "text":"Acredito que a idade ou as limitações físicas não devem ser obstáculos para uma vida saudável e ativa. Com vasta experiência em treinamento para a terceira idade e pessoas com baixa mobilidade, estou comprometido em proporcionar um ambiente seguro e eficaz para seu progresso. Vamos trabalhar juntos para melhorar a força, a mobilidade e a qualidade de vida, adaptando cada sessão às suas necessidades específicas."
    },
    "academiaPreferida":{
        "title":"Atendimento na Sua Academia de Escolha",
        "text":"Entendo que a comodidade e o ambiente podem fazer toda a diferença no seu compromisso com o treinamento. Por isso, ofereço a flexibilidade de atender você na academia de sua escolha. Assim, você se sentirá mais à vontade e motivado para alcançar seus objetivos, onde quer que se sinta mais confortável."
    },
    "maisTreinos":{
        "title":"Acesso a Mais de 20 Treinos Diferentes ",
        "text":"Acredito que a chave para construir um físico verdadeiramente completo e equilibrado está na variedade de treinamento. Ofereço a você acesso a uma biblioteca com mais de 20 treinos distintos, todos projetados para atingir diferentes grupos musculares e aspectos do condicionamento físico. Essa diversidade de treinos não apenas mantém as coisas interessantes, mas também garante que você trabalhe todos os aspectos do seu corpo, resultando em um físico mais completo e bem arredondado. "
    }
}

function changeDifferential(differential) {

    let selectedDiferential=differentialsList[differential]
    selectedDiferentials.classList.add('active')

    selectedDiferentials.innerHTML = `
            <h3 class= "title">${selectedDiferential.title}</h3>       
        <p>
        ${selectedDiferential.text}
        </p>  
    `
    selectedDiferentials.scrollIntoView({ behavior: 'smooth' });
}
buttonsOfDifferentials.forEach((button)=>{button.addEventListener('click',(e)=>{
    changeDifferential(e.target.dataset.type)
})})