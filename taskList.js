
// Функция showList будет выводить весь список дел в виде 

// Todo: 
//  "create a task",
//  "make a bed",
// In Progress: 
//  "write a post"
// Done:
//  -

// Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль


const list = {
    'create a task': 'In Progress',

    'write a post': 'To Do',
    'что угодно': 'To Do',
};
function changeStatus(task, taskCondition) {
    list[task] = taskCondition;
}
function addTask(newTask) {
    list[newTask] = 'To Do';
}
function deleteTask(needToDelete) {
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