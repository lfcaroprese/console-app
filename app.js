import colors from 'colors';
import { checkListState, confirm, deleteTaskList, inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { readJson, saveJson } from './helpers/jsonInterface.js';
import Tasks from './models/tasks.js';



console.clear();


const main = async() =>{
    let opt = '';
    const tasks = new Tasks();
    const tasksDB = readJson();

    if(tasksDB){
        tasks.loadTasksFromArray(tasksDB);
    }

    do{
        opt = await inquirerMenu();
        switch(opt){
            case '1': //Create new task and put in the taskList
                const desc = await readInput('Descripción:');
                tasks.newTask(desc);
            break;
            case '2': //Show the task list
                console.log(tasks.listTasks());
            break;
            case '3': //Show the task list complete
                console.log(tasks.listTasksWithFilter(1));
            break;
            case '4': //Show the task list pending
                console.log(tasks.listTasksWithFilter(0));
            break;
            case '5': //complete | pending tasks
                const ids = await checkListState(tasks.listArr);
                tasks.toggleComplete(ids);
            break;
            case '6': //delete the task
                const id = await deleteTaskList(tasks.listArr);
                if (id !== '0'){
                    const ok = await confirm('esta seguro?');
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log('tarea borrada');
                    }
                }
            break;
        }
        saveJson(tasks.listArr);
        await pause();
    } while(opt !== '0');
}

main();