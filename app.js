require('colors');
const { mostrarMenu, pausa } = require('./helpers/messages');

console.clear();

const main = async() =>{
    let opt = '';
    
    do{
        
        opt = await mostrarMenu();
        if(opt !== '0') await pausa();

    } while(opt !== '0');
}

main();