function openBoard(id){
    model.app.currentTask=model.tasks.map(task=>task.id).indexOf(id);
    document.body.style.backgroundColor=model.tasks[model.app.currentTask].backgroundColor;
    let currentTask=model.tasks[model.app.currentTask];
    if(model.recentTasks.length>=2){
        model.recentTasks.splice(0,1);
    }
    const recent={id:currentTask.id,title:currentTask.title}
    model.recentTasks.push(recent)
    model.app.screen='board';
    resetmoodles('home');
    updateView();
}
function addStar(index){
    const task=model.tasks[index]
    task.stared= task.stared?false:true;
    if(task.stared){
        const fav={id:task.id,title:task.title}
        model.favoritedTasks.push(fav);
    }
    else{
        const index= model.favoritedTasks.map(favTask=>favTask.id).indexOf(task.id);
        model.favoritedTasks.splice(index,1);
    }
    updateView()
}
function CreateNewTaskWindow(){
    model.inputs.task.createNewTask= true;
    updateView()
}

function addNewWorkspace(){
    if(model.inputs.task.taskName===''){return};
    const task= {
        id: model.tasks.length+1,
        title: model.inputs.task.taskName,
        stared: false,
        backgroundColor:model.inputs.task.backgroundColor,
        board:[
            {id: 1,
                title: 'Gjøremål',
                cards:[],
            },
            {
                id: 2,
                title: 'Pågår',
                cards:[],
            },
            {
                id: 3,
                title: 'Ferdig',
                cards:[],
            }
        ]
    };
    model.tasks.push(task);
    model.inputs.task.createNewTask='';
    updateView();
}