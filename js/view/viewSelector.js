updateView()
function updateView(){
    let html='';
    html=`
    <div class="header">
        <div class="header-btn" onclick="homeView()"><i>▣</i>Trallo</div>
        <div class="header-dropdown" onclick="showWorkSpaces()">Arbeidsområder<i class="header-arrow">⇩</i></div>
        <div class="header-dropdown" onclick="showRecent()">Nylig<i class="header-arrow">⇩</i></div>
        <div class="header-dropdown" onclick="showFavorites()">Stjernemerket<i class="header-arrow">⇩</i></div>
        <div class="header-dropdown" onclick="showTemplates()">Maler<i class="header-arrow">⇩</i></div>
        <div class="header-btn" onclick="showCreate()">Opprett</div>
        <input class="header-search" type="text" oninput="" placeholder="søk ✎">
    </div>
    ${selectView()}
    ${moodleWorkspaces()}
    ${moodleRecent()}
    ${moodleFavorites()}
    ${moodleTemplates()}
    ${moodleCreate()}
    `;
    document.getElementById('app').innerHTML=html;
}

function selectView(){
    let html='';
    if(model.app.screen==='tasks'){
        html+=taskView();
    }
    else if(model.app.screen==='board'){
        html+=boardView();
    }
    return html;
}

function moodleWorkspaces(){
    let html='';
    let workspaces=model.tasks.map(task=>`<div onclick="openBoard(${task.id})">${task.title}</div>`).join('');
    html=`
        <div class="moodle-workSpace-container ${model.inputs.home.workspace?'':'moodle-hide'}">
            <div class="moodle-workSpace-title">Dine Arbeidsområder</div>
            ${workspaces}
        </div>
    `;
    return html
}

function moodleRecent(){
    let html='';
    let recent=model.recentTasks.map(rec=>`<div onclick="openBoard(${rec.id})">${rec.title}</div>`).join('');
    html=`
        <div class="moodle-recent-container ${model.inputs.home.recent?'':'moodle-hide'}">
            <div class="moodle-workSpace-title">Nylige tavler</div>
            ${recent}
        </div>
    `;
    return html
}
function moodleFavorites(){
    let html='';
    let favorites=model.favoritedTasks.map(fav=>`<div onclick="openBoard(${fav.id})">${fav.title}</div>`).join('');
    html=`
        <div class="moodle-favorites-container ${model.inputs.home.favorites?'':'moodle-hide'}">
            <div class="moodle-workSpace-title">Dine favoritter</div>
            ${favorites}
        </div>
    `;
    return html
}
function moodleTemplates(){
    let html='';
    html=`
        <div class="moodle-templates-container ${model.inputs.home.templates?'':'moodle-hide'}">
            <div class="moodle-workSpace-title">Maler</div>
        </div>
    `;
    return html
}
function moodleCreate(){
    let html='';
    html=`
        <div class="moodle-create-container ${model.inputs.home.create?'':'moodle-hide'}">
            <div class="moodle-workSpace-title">Opprett nytt arbeidsområdet</div>
        </div>
    `;
    return html
}