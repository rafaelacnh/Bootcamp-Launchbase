const empresas = {
    nome: "Rocketseat",
    cor:  "Roxo",
    foco: "Programação",
    endereço: {
        rua: "Rua Guilherme Gembala",
        numero: "260",
    }
    };
console.log(`A ${empresas.nome} está localizada em ${empresas.endereço.rua},${empresas.endereço.numero}`)

const usuario = {
    nome: "Rafa",
    idade: "29",
    empresa: {
      nome: "Rocketseat"
    },
    tecnologias: [
        { 
         nome: "C++",
         especialidade: "Desktop" },
        { nome: "JavaScript",
         especialidade: "Web/Mobile" }
    ]
    };
console.log(`o usuário ${usuario.nome} tem ${usuario.idade} e usa ${usuario.tecnologias[0].nome} com especialidade em ${usuario.tecnologias[0].especialidade}`)