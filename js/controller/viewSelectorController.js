function homeView(){
    model.app.screen='tasks';
    resetmoodles('home')
    updateView();
}

function showWorkSpaces(){
    model.inputs.home.workspace = model.inputs.home.workspace? false: true;
    resetmoodles('workspace')
    updateView();
}

function showRecent(){
    model.inputs.home.recent=model.inputs.home.recent?false:true;
    resetmoodles('recent')
    updateView();
}

function showFavorites(){
    model.inputs.home.favorites=model.inputs.home.favorites?false:true;
    resetmoodles('favorites')
    updateView();
}

function showTemplates(){
    model.inputs.home.templates=model.inputs.home.templates?false:true;
    resetmoodles('templates')
    updateView();
}

function showCreate(){
    
    model.inputs.home.create=model.inputs.home.create?false:true;
    resetmoodles('create')
    updateView();
}

function resetmoodles(moodle){
    let moodleHome=model.inputs.home;
    if(moodle==='workspace'){
        moodleHome.create=moodleHome.recent=moodleHome.templates=moodleHome.favorites='';
    }
    else if(moodle==='favorites'){
        moodleHome.create=moodleHome.recent=moodleHome.templates=moodleHome.workspace='';
    }
    else if(moodle==='recent'){
        moodleHome.create=moodleHome.workspace=moodleHome.templates=moodleHome.favorites='';
    }
    else if(moodle==='templates'){
        moodleHome.create=moodleHome.recent=moodleHome.workspace=moodleHome.favorites='';
    }
    else if(moodle==='create'){
        moodleHome.workspace=moodleHome.recent=moodleHome.templates=moodleHome.favorites='';
    }
    else{
        moodleHome.workspace=moodleHome.recent=moodleHome.templates=moodleHome.favorites=moodleHome.workspace='';
    }
}