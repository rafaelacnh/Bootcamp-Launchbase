//criar um programa que calcula a media 
//das notas entre os alunos e envia 
//mensagem do calculo da media.

const aluno1 = 'Ivila'
const notaaluno1 = 9.8

const aluno2 = "Rafa"
const notaaluno2 = 8.5

const aluno3 = 'Puff'
const notaaluno3 = 3.2

const media = (notaaluno1 + notaaluno2 + notaaluno3)/3

//se a media for maior que 5, parabenizara a turma
if (media > 5){
    //faz alguma coisa
    console.log(`A media foi de ${media}. Parabéns`)
} else{ 
    //faz outra coisa
    console.log(' A media é menor que 5')
}
console.log(media)