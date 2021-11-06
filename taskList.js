const list = {
    'create a task': 'In Progress',
    'write a post': 'Done',
    'что угодно': 'To Do',
};
function changeStatus(task, taskCondition) { // изменяет статус
    list[task] = taskCondition;
}
function addTask(newTask) { // добавляет новую задачу
    list[newTask] = 'To Do';
}
function deleteTask(needToDelete) { //удаляет задачу
    delete list[needToDelete];
}
let count = 0; // счётчик 
function showList(listName) {
    console.log('To Do:');
    for (let prop in listName) {
        if (listName[prop] === 'To Do') { //выведение To Do
            console.log(prop);
            count++;
        }
    }
    if (count === 0) {
        console.log('-');
    }
    count = 0;


    console.log('In Progress:');
    for (let prop in listName) {
        if (listName[prop] === 'In Progress') { //выведение In Progress
            console.log(prop);
            count++;
        }
    }
    if (count === 0) {
        console.log('-');
    }
    count = 0;


    console.log('Done:');
    for (let prop in listName) {
        if (listName[prop] === 'Done') { //выведение Done
            console.log(prop);
            count++;
        }
    }
    if (count === 0) {
        console.log('-');
    }
}
showList(list);