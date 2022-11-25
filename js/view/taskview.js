function taskView(){
    let html='';
    html=`
        <div class="task-view">
            ${showTasks()}
        </div>
    `;
    return html;
}

function showTasks(){
    let html='';
    html=model.tasks.map((task,index)=>`<div class="task-display" style="background-color: ${task.backgroundColor}"><div class="task-title" onclick="openBoard(${task.id})">${task.title}</div><i class="task-star ${task.stared?'task-liked':''}" onclick="addStar(${index})">✪</i></div>`).join('');
    html+=`
    <div class="${model.inputs.task.createNewTask?'task-create-new':'task-display-newTask'}" >${showCreateNewTask()}<div class="${model.inputs.task.createNewTask?'':'task-title-newTask'}" onclick="CreateNewTaskWindow()">${model.inputs.task.createNewTask?'':'Opprett ny tavle...'}</div></div>
    `;
    return html;
}

function showCreateNewTask(){
    let html='';
    if(model.inputs.task.createNewTask){
        html=`
            <div>
                <p>Bakgrunnsfarge: </p>
                <input class="task-input" type="color" onchange="model.inputs.task.backgroundColor=this.value" list="presetColor">
                <datalist id="presetColor">
                    <option value="#3F4E4F"></option>
                    <option value="#A27B5C"></option>
                    <option value="#DCD7C9"></option>
                    <option value="#2C3639"></option>
                </datalist>
            </div>
            <div>
                <p>Tittel:</p>
                <input class="task-input" type="text" oninput="model.inputs.task.taskName=this.value">
            </div>
            <button class="task-button" onclick="addNewWorkspace()">Lag ny tavle</button>
        `;
    }
    return html;
}

