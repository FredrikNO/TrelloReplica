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
    html=model.tasks.map((task,index)=>`<div class="task-display" )"><div class="task-title" onclick="openBoard(${task.id})">${task.title}</div><i class="task-star ${task.stared?'task-liked':''}" onclick="addStar(${index})">✪</i></div>`).join('');
    html+=`
    <div class="${model.inputs.task.createNewTask?'task-create-new':'task-display-newTask'}" onclick="CreateNewTaskWindow()"><div class="${model.inputs.task.createNewTask?'':'task-title-newTask'}">${showCreateNewTask()}</div></div>
    `;
    return html;
}

function showCreateNewTask(){
    let html='Opprett ny tavle...';
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
                <input class="task-input" type="text" oninput="this.input.task.taskName=this.value">
            </div>
            <button class="task-button">Lag ny tavle</button>
        `;
    }
    return html;
}