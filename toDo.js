const PRIORITYS = ['low', 'medium', 'high'],
    LOW_PRIORITY = PRIORITYS[0],
    MEDIUM_PRIORITY = PRIORITYS[1],
    HIGH_PRIORITY = PRIORITYS[2];

const STATUSES = ['To Do', 'In Progress', 'Done'],
    DO_STATUS = STATUSES[0],
    PROGRESS_STATUS = STATUSES[1],
    DONE_STATUS = STATUSES[2];

const list = [
    {
        id: 1,
        name: 'play the balalaika',
        status: DO_STATUS,
        priority: MEDIUM_PRIORITY,
    },
    {
        id: 2,
        name: 'fight a bear',
        status: DO_STATUS,
        priority: MEDIUM_PRIORITY,
    },
    {
        id: 3,
        name: 'buy a vodka',
        status: DONE_STATUS,
        priority: HIGH_PRIORITY,
    },
]

let idCounter = 4;


function findRequiredTask(taskName) {
    return list.find(item => item.name == taskName);
}

function changeStatus(taskName, newStatus = PROGRESS_STATUS) {
    findRequiredTask(taskName).status = newStatus;
}

function deleteTask(removableTaskName) {
    let removableTaskIndex = list.indexOf(findRequiredTask(removableTaskName));
    list.splice(removableTaskIndex, 1);
}

function addTask(taskName, taskPriority = LOW_PRIORITY) {
    let template = {
        id: idCounter,
        name: taskName,
        status: DO_STATUS,
        priority: taskPriority,
    }
    list.push(template);
    idCounter++;
}

function showBy(parameter) {

    let auxiliaryArray = (parameter == 'status') ? STATUSES : PRIORITYS;

    for (let key of auxiliaryArray) {
        console.log(`${key}:`);
        let needableProperty = list.filter(item => item[parameter] == key);
        if (!needableProperty.length) {
            console.log('-');
        }
        for (let j of needableProperty) {
            console.log(`  ${j.name}`);
        }
    }
    console.log('------------------');
}

showBy('priority');
showBy('status');