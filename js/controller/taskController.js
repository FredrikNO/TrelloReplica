function openBoard(id){
    model.app.currentTask=model.tasks.map(task=>task.id).indexOf(id);
    let currentTask=model.tasks[model.app.currentTask];
    if(model.recentTasks.length>=2){
        model.recentTasks.splice(0,1);
    }
    const recent={id:currentTask.id,title:currentTask.title}
    model.recentTasks.push(recent)
    model.app.screen='board';
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