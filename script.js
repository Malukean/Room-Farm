const caixaPrincipal = document.querySelector ('.caixa-principal');
const caixaPerguntas = document.querySelector ('.caixa-perguntas');
const caixaAlternativas = document.querySelector ('.caixa-alternativas');
const caixaResultado = document.querySelector ('.caixa-resultado');
const textoResultado = document.querySelector ('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "No âmbito social, você prefere um café com um amigo próximo ou uma festa animada? O café é mais íntimo, enquanto a festa oferece novas conexões",
                afirmaçao: "O café fortalece vínculos pessoais, enquanto a festa proporciona diversas interações.",
            },
            {
                texto: "No âmbito social, você prefere atividades de grupo ou hobbies individuais? Atividades de grupo promovem colaboração, e hobbies individuais permitem expressão pessoal.",
                afirmaçao: "Atividades de grupo fomentam trabalho em equipe, enquanto hobbies individuais incentivam desenvolvimento pessoal.",
            },
        ]
        
    },

    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "No âmbito ambiental, você prefere reduzir o uso de plásticos ou apoiar políticas para sua redução? ",
                afirmaçao: "Reduzir plásticos pessoalmente tem impacto direto, enquanto apoiar políticas promove mudanças amplas.",
            },
            {
                texto: "No âmbito ambiental, você prefere investir em produtos eco-friendly ou adotar um estilo de vida minimalista?",
                afirmaçao: "Produtos eco-friendly oferecem soluções sustentáveis, enquanto o minimalismo reduz o consumo.",
            },
        ]
        
    },

    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "No âmbito tecnológico, você prefere investir em gadgets novos ou em melhorias de software? ",
                afirmaçao: "Gadgets oferecem inovação, enquanto melhorias de software otimizam o desempenho atual.",
            },
            {
                texto: " No âmbito tecnológico, você prefere focar em segurança cibernética ou em inovação de produtos?",
                afirmaçao: "Segurança protege dados, enquanto inovação traz novos avanços.",
            },
        ]
        
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas (){
    if(atual>= alternativas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const opcao of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(opcao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcao){
    const afirmacoes = opcao.afirmaçao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Em resumo você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPerguntas();
