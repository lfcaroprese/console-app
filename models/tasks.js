import Task from "./task.js";
import colors from 'colors';

const filterCOMPLETE = 1;
const filterPENDING = 0;

export default class Tasks {

    _taskList = {};
    
    get listArr() {
        const list = [];
        Object.keys(this._taskList).forEach(key => {
            list.push(this._taskList[key]);
        });
        return list;
    }

    constructor() {
        this._taskList = {};
    }

    deleteTask (id = ''){
        if(this._taskList[id]){
            delete this._taskList[id];
            delete this.listArr[id];
        }
    }
    newTask(desc = '') {
        const task = new Task(desc);
        this._taskList[task.id] = task;
    }

    loadTasksFromArray( tasks = []) {
        tasks.forEach((t) =>{
            this._taskList[t.id]=t;
        });
    }
    /*
    if filter is void the function returns all the tasks, but if filter is complete
    */
    listTasks() {
        let list = '\n';
        let index = 0;
        const format = (taskUnformat) => {
            index += 1;
            if(taskUnformat.complete){
                return `${index.toString().green}${'.'.green} ${taskUnformat.desc} :: ${'Completada'.green}\n`;
            }
            return `${index.toString().red}${'.'.red} ${taskUnformat.desc} :: ${'Pendiente'.red}\n`
        }

        this.listArr.forEach((t,i) => {
                list += format(t);        
        })
        return list;
    }

    listTasksWithFilter(filter){
        let index = 0;
        let list = '\n';
        
        const format = (taskUnformat) => {
            if (filter === filterCOMPLETE){
                if(taskUnformat.complete){
                    index += 1;
                    return `${index.toString().green}${'.'.green} ${taskUnformat.desc} :: ${taskUnformat.complete.green}\n`;
                }
            } else {
                if(!taskUnformat.complete){
                    index = index + 1;
                    return `${index.toString().red}${'.'.red} ${taskUnformat.desc} :: ${'Pendiente'.red}\n`
                }
            }
            return '';
        }
        this.listArr.forEach(t =>{
            list += format(t);
        });
        return list;
    }

    toggleComplete (ids = []) {
        ids.forEach(id => {
            if(!this._taskList[id].complete) {
                this._taskList[id].complete = new Date().toISOString();
            }
        })

        this.listArr.forEach (task => {
            if(!ids.includes(task.id)){
                this._taskList[task.id].complete = null;
            }
        })
    }
}

