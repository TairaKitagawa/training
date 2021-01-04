'use strict';
const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];
const removeTask = removeButton => {
const targetTask = removeButton.closest('li');
  addTaskTarget.removeChild(targetTask);
};
function addTask(task) {
    const listItem = document.createElement('li');
    const removeButton = document.createElement('button');
    let check = document.createElement('input');
    removeButton.innerText = '削除';
    removeButton.addEventListener('click', () => removeTask(removeButton));
    listItem.innerText = task;
    check.setAttribute('type','checkbox');
    check.setAttribute('name','name');
    check.setAttribute('checked','checked');
    listItem.append(removeButton);
    addTaskTarget.appendChild(listItem);
}
addTaskTrigger.addEventListener('click', event => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = '';
});
