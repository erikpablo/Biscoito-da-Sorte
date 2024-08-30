// variáveis 

let choice = Number(prompt(`
    Que tipo de frase você está buscando?

    1. Frases motivacionais  
    2. Frases Engraçadas 
    3. Frases Negativas
`))
const cookieClosed = document.querySelector(".cookieClosed")
const openCookie = document.querySelector(".openCookie")
const clickImg = document.querySelector(".imgTremble")
const btnOpenNewCookie = document.querySelector("button")
const cookieBreakingAudio = document.querySelector('#cookieBreaking')
const initialTime = 1

// frases 
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

const funnyPhrases = [
    "Eu não sou preguiçoso, só estou em modo de economia de energia.",
    "O importante não é vencer, mas fazer com que os outros percam.",
    "A vida é curta, sorria enquanto você ainda tem dentes.",
    "Se você acha que ninguém se importa com você, tente faltar ao pagamento do aluguel.",
    "Não leve a vida tão a sério. Ninguém sai vivo dela de qualquer maneira.",
    "Minha dieta para hoje: um pouco de chocolate e muito de mim mesmo.",
    "A única coisa que estou cultivando agora é minha habilidade de assistir séries sem parar.",
    "Eu já tenho um plano para o futuro: fazer um monte de nada e ver como é que fica.",
    "Se a vida te der limões, faça uma limonada. E se a vida não der limões, vá ao supermercado.",
    "Não sou bom em matemática, mas consigo somar um sorriso com qualquer pessoa.",
    "A diferença entre um capricho e uma paixão é que um é uma expressão de interesse e o outro é uma verdadeira obsessão. Por exemplo: pizza e trabalho.",
    "Se você me ver correndo, é melhor correr também, porque provavelmente algo está me perseguindo.",
    "Estou em forma. Redondo é uma forma, não é?",
    "Toda vez que vejo alguém usando roupas de ginástica, me sinto inspirado a ir à academia… mas depois me lembro que tenho que passar por isso.",
    "Eu tentei ser normal uma vez. Pior dois minutos da minha vida."
];

const criticalPhrases = [
    "Você é como um buraco negro: não há nada de bom que possa sair de você.",
    "Se a ignorância é uma bênção, você deve estar em um estado de graça eterna.",
    "Você tem a incrível habilidade de tornar o pior momento ainda pior.",
    "Se houvesse um prêmio para ser um completo desastre, você ganharia todos os anos.",
    "A sua presença é como um furacão de desastres; sempre deixa um rastro de problemas.",
    "Você tem um talento especial para tornar tudo em volta mais difícil.",
    "Se não fosse por você, as coisas poderiam estar bem mais tranquilas.",
    "Você é um verdadeiro mestre em fazer com que qualquer situação se torne um pesadelo.",
    "Quando você fala, até o silêncio parece mais inteligente.",
    "Você é a razão pela qual as pessoas evitam certos lugares e situações.",
    "Seus conselhos são como um buraco negro: nada útil pode sair deles.",
    "Você tem a habilidade rara de transformar uma conversa normal em uma experiência insuportável.",
    "A sua presença é tão agradável quanto uma tempestade de areia no deserto.",
    "Você é a prova viva de que a natureza pode errar na criação de seres humanos.",
    "Se sua vida fosse um filme, seria uma comédia de erros sem o comédia."
];
  
  
// funções 

function clickCokie() {
    cookieClosed.classList.toggle('hide')
    openCookie.classList.toggle('hide')
    randomPhrasesClick()
    timeAudio()
}

function btnClickCokie() {
    cookieClosed.classList.toggle('hide')
    openCookie.classList.toggle('hide')
}

function randomPhrasesClick() {
    if(choice == 1) {
        let randomPhrases = phrases[Math.floor(Math.random() * phrases.length)]
        document.querySelector("p").textContent = randomPhrases
    } 
    else if(choice == 2) {
        let randomPhrasesFunny = funnyPhrases[Math.floor(Math.random() * funnyPhrases.length)]
        document.querySelector("p").textContent = randomPhrasesFunny
    } 
    else if(choice == 3) {
        let randomPhrasesCritical = criticalPhrases[Math.floor(Math.random() * criticalPhrases.length)]
        document.querySelector("p").textContent = randomPhrasesCritical
    }
}

function timeAudio() {
    cookieBreakingAudio
    const initialDuration = 2

    cookieBreakingAudio.currentTime = 0
    startAudio()

    setTimeout(function() {
        cookieBreakingAudio.pause()
        cookieBreakingAudio.currentTime = 0
    }, initialDuration * 1000)
}

function startAudio() {
    cookieBreakingAudio.currentTime = initialTime
    cookieBreakingAudio.play()
}




clickImg.addEventListener('click', clickCokie)
btnOpenNewCookie.addEventListener('click', btnClickCokie)