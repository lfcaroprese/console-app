import Task from "./task.js";

export default class Tasks {

    _taskList = {};

    get listArr() {
        const list = [];
        Object.keys(this._taskList).forEach(key =>(list.push(this._taskList[key])));
        return list;
    }

    constructor() {
        this._taskList = {};
    }

    newTask(desc = '') {
        const task = new Task(desc);
        this._taskList[task.id] = task;
    }
}

