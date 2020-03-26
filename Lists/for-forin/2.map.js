const service = require('./service')
async function main(){
    try{
        const resultado = await service.obterPessoas('a')
        //const names =[]
        //resultado.results.forEach(function(item){
          //  names.push(item.name)
        //})
        //const names = resultado.results.map(function(pessoa){
           // return pessoa.name
       // })
       const names = resultado.results.map((pessoa)=>pessoa.name)
        console.log('names',names)
    }
    catch(error){
        console.error('Deu Ruim',error)
    }
}
main()