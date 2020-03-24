const service = require('./service')

async function main(name) {
    try{
        const result = await service.obterPessoas(name)
        const names =[]

        // FOR
        //for(let i=0; i<=result.results.length -1; i++){
          //  const pessoa = result.results[i]
          //  names.push(pessoa.name)
        //}
        
        //For in
        //for(let i in result.results){
          //  const pessoa = result.results[i]
          //  names.push(pessoa.name)
       // }
        //For OF
        for(pessoa of result.results){
            names.push(pessoa.name)
        }
        
        console.log('names',names)
    }
    catch(error){
        console.error('error interno',error)
    }
}
const stdin = process.openStdin()
stdin.addListener('data', function(value){
    //console.log(`Voce digitou: ${value.toString().trim()}`)
    main(value.toString())
})

