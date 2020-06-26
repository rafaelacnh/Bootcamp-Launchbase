/* =================================================================
 OPERADORES DE  COMPARAÇÃO

 > MAIOR
 < MENOR
 >= MAIOR IGUAL A 
 <= MENOR IGUAL A 
 == IGUAL A 
 === IGUAL E DO MESMO TIPO
 != DIFERENTE DE 
 !== DIFERENTE, INCLUSIVE DE TIPO 

 ===================================================================*/
 //entendendo com exemplos 
/*
 console.log( 5>4) // true
 console.log( 5<4) //  false
 console.log( 5 >=4)// true
 console.log(4<=4)//true

 //////////////////////////////////////////////////////////////////////
 console.log( 4 == "4") // true
 console.log( 4 === "4") //false
 console.log( 4 != 5)// true
 console.log( 4 !== 5)//true
 
 ======================================================================*/
 //DESAFIO 1
/*const  idade = 17
 // Verificar se a pessoa é maior ou igual de 18 anos.
 console.log(idade >= 18) 
 // se sim deixar entrar , se não , bloquear a entrada
 if(idade >= 18){
     console.log('Deixa entrar')
 } else {
     console.log('Bloquear a entrada')
 }
 //se a pessoa tiver 17 anos avisar p/ voltar quando fizer 18 anos
 if(idade == 17){
     console.log('voltar quando fizer 18anos')
 }
*/
//====================================================================
//refatorado
// Verificar se a pessoa é maior ou igual de 18 anos.
// se sim deixar entrar , se não , bloquear a entrada
//se a pessoa tiver 17 anos avisar p/ voltar quando fizer 18 anos
/*const  idade = 16
if(!(idade >= 18) || idade === 17) {
    console.log('Entrada bloqueada, volte quando tiver 18anos')
} else {
    console.log('Entrada permitida')
}*/
 //=========================================================================================
 /*operadores lógicos

 && "E" AS DUAS CONDIÇÕES DEVEM SER VERDADEIRAS PARA QUE A CONDIÇÃO FINAL SEJA VERDADEDEIRA.
 || "OU" UMA DAS CONDIÇÕES DEVE SER VERDADEIRA PARA QUE A CONDÇÃO FINAL SEJA VERDADEIRA.
 ! "NÃO" NEGA UMA CONDIÇÃO.
 ===========================================================================================
console.log(5 == 5 && 6 == 6)//true
console.log(5 == 5 && 6 != 6)// false

console.log(5 != 5 || 6== 6 )//true
console.log(5 == 5 ||  6 != 6)//true

console.log(!(5 > 6))//true
console.log(!(5 < 6))//false
*/
/*=========================================================================================
OPERADORES ARITMÉTICOS

* MULTIPLICAÇÃO
/ DIVISÃO
% RESTO DA DIVISÃO
+ ADIÇÃO
- SUBTRAÇÃO

==========================================================================================*/
console.log( 2 * 2 ) // 4
console.log( 2 / 2 ) // 1
console.log( 2 % 1.5 ) //0.5
console.log( 2 + 2 ) // 4
console.log( 2 - 2 ) // 0