const empresas = {
    nome: "Rocketseat",
    cor:  "Roxo",
    foco: "Programação",
    endereço: {
        rua: "Rua Guilherme Gembala",
        numero: "260",
    }
    };
//console.log(`A ${empresas.nome} está localizada em ${empresas.endereço.rua},${empresas.endereço.numero}`)

// Usuários e tecnologias

const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
  ]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

//busca por tecnologia

function checaSeUsuarioUsaCSS(usuario){
    for(let tecnologia of usuario.tecnologias){
        if(tecnologia == 'CSS') return true
    }
    return false
}

for (let i = 0; i<usuarios.length; i++){
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS){
        console.log(`O usuario ${usuarios[i].nome}trabalha com CSS`)
    }
}