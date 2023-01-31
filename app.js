import { inquirerMenu, pause } from './helpers/inquirer.js';
import Task from './models/task.js';

console.clear();

const main = async() =>{
    let opt = '';
    
    do{
        const task = new Task('comprar comida');
        console.log(task);
        
        //opt = await inquirerMenu();
        await pause();
    } while(opt !== '0');
}

main();