const LOW_PRIORITY = 'low',
    MEDIUM_PRIORITY = 'medium',
    HIGH_PRIORITY = 'high',
    PRIORITYS = [LOW_PRIORITY, MEDIUM_PRIORITY, HIGH_PRIORITY];

const DO_STATUS = 'To Do',
    PROGRESS_STATUS = 'In Progress',
    DONE_STATUS = 'Done',
    STATUSES = [DO_STATUS, PROGRESS_STATUS, DONE_STATUS];

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

function changeStatus(taskName, newStatus) {
    let task = list.find(item => item.name == taskName);
    task.status = newStatus;
}

function deleteTask(removableTask) {
    let index = list.indexOf(removableTask);
    list.splice(index, 1);
}

function addTask(taskName, taskPriority = LOW_PRIORITY) {
    let template = {
        id: list.length + 1,
        name: taskName,
        status: DO_STATUS,
        priority: taskPriority,
    }
    list.push(template);
}

function showBy(parameter) { // 'status' or 'priority'
    switch (parameter) {
        case 'priority':
            for (let key in PRIORITYS) {
                console.log(`${PRIORITYS[key]}:`);
                let needablePriority = list.filter(item => item.priority == PRIORITYS[key]);
                if (!needablePriority.length) {
                    console.log('-');
                }
                else {
                    for (let j of needablePriority) {
                        console.log(`  ${j.name}`);
                    }
                }
            }
            console.log('------------------');
            break;
        case 'status':
            for (let key in STATUSES) {
                console.log(`${STATUSES[key]}:`);
                let needableStatus = list.filter(item => item.status == STATUSES[key]);
                if (!needableStatus.length) {
                    console.log('-');
                }
                else {
                    for (let i of needableStatus) {
                        console.log(`  ${i.name}`);
                    }
                }
            }
            console.log('------------------');
            break;
    }
}

showBy('priority');
showBy('status');