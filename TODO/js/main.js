let closeButtons = document.querySelectorAll('.close');
let items = document.querySelectorAll('.item');
let addButtons = document.querySelectorAll('.input-custom img');
let inputs = document.querySelectorAll("input[type='text']");
let priorityBlocks = document.querySelectorAll('.priority-block');

function addEvent() {
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function () {
            items[i].remove();
        });
    }
}
addEvent();

let id = 4;

for (let j = 0; j < addButtons.length; j++) {
    addButtons[j].addEventListener('click', function () {

        let div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `<input type="checkbox" class="visually-hidden" id='${id}'>
        <label for='${id}'></label>
        <p>${inputs[j].value}</p>
        <img src="img/close-icon.png" width="15px" height="15px" class="close">`;

        priorityBlocks[j].append(div);
        inputs[j].value = '';
        id++;

        closeButtons = document.querySelectorAll('.close');
        items = document.querySelectorAll('.item');
        addEvent();
    })
}