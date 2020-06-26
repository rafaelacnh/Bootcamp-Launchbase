const nome = "Carlos"
const sexo = "F"
const idade = 65
const contribuicao = 55

/* contribuição minima  p/ homem= 35  
   contribuição minima p/ mulheres = 30anos
*/

if(sexo == "F"){
    if (idade >= 55 && contribuicao >=30){
        console.log("pode aposentar")
    } else {
        (idade <= 54 || contribuicao <=29 )
        console.log("Ainda não pode se aposentar")
    } 
}
    else (sexo == "M")
      if(idade >= 65 && contribuicao >=30){
        console.log("pode aposentar")
    } else {
        console.log("Ainda não pode")
          }
