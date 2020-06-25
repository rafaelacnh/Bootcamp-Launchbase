//criar um programa que calcula a media 
//das turmas de alunos e envia 
//mensagem do calculo da media.

const alunosDaTurmaA = [
    {
        nome: "Rafa",
        nota: 9.5
    },

    {
        nome: "Vida",
        nota: 7.5
    },

    {
        nome: "Puff",
        nota: 3.2
    },
]
const alunosDaTurmaB = [
    {
        nome: "Caio",
        nota: 8.7
    },

    {
        nome: "Renato",
        nota: 4.5
    },

    {
        nome: "Mirai",
        nota: 7.2
    },
]

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

}
const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {
    //se a media for maior que 5, parabenizara a turma
    if (media > 5) {
        //faz alguma coisa
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        //faz outra coisa
        console.log(' A media da turma ${turma} é menor que 5')
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')