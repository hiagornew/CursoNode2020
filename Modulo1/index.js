//AULA 1
    //console.log("Hello Node!")
//FIM AULA 1

//AULA 2
/*
0- Obter um usuario
1- Obter o numero de telefone de um usuario a partir de seu Id
2 Obter o endereço do usuario pelo ID
*/
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)
function obterUsuario(){

    return new Promise(function resolvePromise(resolve,reject){
        setTimeout( function(){
        return resolve({
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    },1000) //ele vai esperar 1 segundo para retornar

    })
    
}

function obterTelefone( idusuario,){

    return new Promise(function resolverPromise(resolve,reject){
        
        setTimeout(()=>{
            return resolve({
                telefone: '1199002',
                ddd: 11
            })
        },2000);
    })
}

function obterEndereco( idUsuario,callback){
    setTimeout(()=>{
        return callback(null,{
            rua: 'dos bobos',
            numero: 0
        })
    },2000);
}

const usuarioPromise = obterUsuario()

//Para manipular o sucesso usamos a função .then
//Para manipular erros, usamos o .cath

usuarioPromise
.then(function(usuario){
    return obterTelefone(usuario.id)
    .then(function resolverTelefone(result){
        return{
            usuario:{
                nome: usuario.nome,
                id: usuario.id
            },
            telefone: result
        }
    })
})
.then(function(resultado){
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco.then(function resolverEndereco(result){
        return{
            usuario: resultado.usuario,
            telefone: resultado.telefone,
            endereco: result
        }
    })
})
.then(function (resultado){
    console.log(`
    Nome: ${resultado.usuario.nome}
    Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
    Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `)
})
.catch(function(error){
    console.error('Deu ruim',error)
})

/*
obterUsuario(function resolverUsuario(error,usuario){
    //null || "" || 0 == false
    if(error){
        console.log('Deu ruim no usuario',error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1,telefone){
        if(error1){
            console.log('Deu ruim no telefone',error1)
            return;
        }
        obterEndereco(usuario.id,function resolverEndereco(error2,endereco){
            if(error2){
                console.log('Deu ruim no Endereco',error2)
                return;
            }

            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua},${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})*/
//FIM AULA 2
