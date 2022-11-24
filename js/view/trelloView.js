
function boardView() {
    let html = '';
    html = `
        <div  class="col">
            ${listTasks()}
        </div>
    `;
    return html;
}

function listTasks() {
    let html = model.tasks[model.app.currentTask].board.map((tasks, index) => `<div class="task" id="task${index}" ondrop="dropdiv(event)" ondragover="allowdrop(event)"><h5 class="task-header">${tasks.title}</h5><div><div class="card-placement" name="0,${index}"></div>${listCards(index)}</div><div class="card-dropdown " >${dropDownAddCard(index)}</div></div>`).join('')

    html += model.tasks[model.app.currentTask].board.length !== 6 ? ` <div class="task">
                <input class="task-input" type="text" placeholder="tittel" oninput="model.inputs.board.newTaskTitle=this.value">
                <button class="task-button" onclick="addNewTask()">Legg til task</button>
            </div>`: '';
    return html;
}
function listCards(index) {
    let html = model.tasks[model.app.currentTask].board[index].cards.map(card => `<div class="card" name="${card.id},${index}" ondragstart="dragdiv(event)"  draggable="true">${card.description}</div>`).join('')
    return html;
}
function dropDownAddCard(index) {
    let html = '';
    html = `  
            <div class="dropdown-button ${model.dropdown[index] === `dropdown${index}` ? '' : `dropdown${index}`}" onclick="showDropDownCardInput(${index})"></div>
            <input class="task-input ${model.dropdown[index]}" type="text" oninput="model.inputs.board.cardDescription=this.value">
            <button class="${model.dropdown[index]}" onclick="makeNewCard(${index})">Legg til kort</button> <i onclick="closeDropDown(${index})" class="close ${model.dropdown[index]}">X</i>
    `;
    return html;
}