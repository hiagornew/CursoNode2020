const{ obterPessoas } = require('./service')

async function main(){
    try {
        const{results} =await obterPessoas('a')
        const pesos = results.map(item=>parseInt(item.height))
        console.log('pesos',pesos)
        const total = pesos.reduce((anterior,proximo)=>{
            return anterior + proximo
        },0)
        const maior = pesos.reduce(function(a,b){
            return Math.max(a,b);
        })
        const menor = pesos.reduce(function(a,b){
            return Math.min(a,b);
        })
        console.log('Maior',maior)
        console.log('Menor',menor)
        console.log('Total:',total)
    } catch (error) {
        console.error('Deu ruim',error)
    }
}
main()