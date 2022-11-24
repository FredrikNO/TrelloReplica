function dragdiv(event){
    id=event.target.attributes.name.nodeValue.split(',')[0];
    board=event.target.attributes.name.nodeValue.split(',')[1];

    model.inputs.board.selectedCardId=id;
    model.inputs.board.selectedBoardId=board;
}

function allowdrop(event){
    event.preventDefault();
}

function dropdiv(event){
    if(event.target.attributes.name===undefined){return}
    
    let currentIndex=event.target.attributes.name.nodeValue.split(',')[1];
    let previousIndex=model.inputs.board.selectedBoardId;
    let previousCardIndex=model.tasks[model.app.currentTask].board[previousIndex].cards.map(card=>card.id).indexOf(parseInt(model.inputs.board.selectedCardId));

    const card = {
        id:model.tasks[model.app.currentTask].board[currentIndex].cards.length+1,
        description: model.tasks[model.app.currentTask].board[previousIndex].cards[previousCardIndex].description
    }
    model.tasks[model.app.currentTask].board[currentIndex].cards.push(card);
    model.tasks[model.app.currentTask].board[previousIndex].cards.splice(previousCardIndex,1)
    updateView()
}

function makeNewCard(index){
    const newCard={
        id: model.tasks[model.app.currentTask].board[index].cards.length+1,
        description: model.inputs.board.cardDescription,
    }
    model.tasks[model.app.currentTask].board[index].cards.push(newCard);
    model.dropdown[index]='dropdown'+index;
    updateView()
}
function showDropDownCardInput(index){
    model.dropdown[index]='';
    updateView()
}

function addNewTask(){
    if(model.inputs.newTaskTitle===''){return}
    if(model.tasks[model.app.currentTask].board.length<6){
        const board={
            id:model.tasks[model.app.currentTask].board.length+1,
            title:model.inputs.board.newTaskTitle,
            cards:[],
        }
        model.tasks[model.app.currentTask].board.push(board);
        model.dropdown.push(`dropdown${model.dropdown.length}`)
        updateView()
    }
}

function closeDropDown(index){
    model.dropdown[index]='dropdown'+index;
    updateView()
}
