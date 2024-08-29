const cookieClosed = document.querySelector(".cookieClosed")
const openCookie = document.querySelector(".openCookie")
const clickImg = document.querySelector(".imgTremble")
const btnOpenNewCookie = document.querySelector("button")

function clickCokie() {
    cookieClosed.classList.toggle('hide')
    openCookie.classList.toggle('hide')
}

function btnClickCokie() {
    cookieClosed.classList.toggle('hide')
    openCookie.classList.toggle('hide')
    const randomPhrases = phrases[Math.floor(Math.random() * phrases.length)]
    document.querySelector("p").textContent = randomPhrases
}

const phrases = [
    "Acredite em si mesmo, pois é capaz de alcançar o que deseja.",
    "Cada desafio é uma oportunidade disfarçada.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Você é mais forte do que imagina.",
    "Não espere por oportunidades, crie-as.",
    "Grandes conquistas começam com pequenas decisões.",
    "O único limite é aquele que você impõe a si mesmo.",
    "A persistência é o caminho para o sucesso.",
    "Sonhe grande e trabalhe duro para alcançar seus objetivos.",
    "A jornada é tão importante quanto o destino.",
    "Mantenha o foco, a determinação e a disciplina.",
    "Hoje é um bom dia para começar algo novo.",
    "A vitória é reservada para aqueles que estão dispostos a pagar o preço.",
    "O otimismo é o imã da felicidade.",
    "Acredite no seu potencial e nunca desista."
]



clickImg.addEventListener('click', clickCokie)
btnOpenNewCookie.addEventListener('click', btnClickCokie)