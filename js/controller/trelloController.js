function dragdiv(event){
    id=event.target.attributes.name.nodeValue.split(',')[0];
    board=event.target.attributes.name.nodeValue.split(',')[1];

    model.inputs.selectedCardId=id;
    model.inputs.selectedBoardId=board;
}

function allowdrop(event){
    event.preventDefault();
}

function dropdiv(event){
    let currentIndex=event.target.attributes.name.nodeValue.split(',')[1];

    let previousIndex=model.inputs.selectedBoardId;
    let previousCardIndex=model.tasks.board[previousIndex].cards.map(card=>card.id).indexOf(parseInt(model.inputs.selectedCardId));

    const card = {
        id:model.tasks.board[currentIndex].cards.length+1,
        description: model.tasks.board[previousIndex].cards[previousCardIndex].description
    }
    model.tasks.board[currentIndex].cards.push(card);
    model.tasks.board[previousIndex].cards.splice(previousCardIndex,1)
    updateView()
}

function makeNewCard(index){
    const newCard={
        id: model.tasks.board[index].cards.length+1,
        description: model.inputs.cardDescription,
    }
    model.tasks.board[index].cards.push(newCard);
    model.dropdown[index]='dropdown'+index;
    updateView()
}
function showDropDownCardInput(index){
    model.dropdown[index]='';
    updateView()
}

function addNewTask(){
    if(model.tasks.board.length<6){
        const board={
            id:model.tasks.board.length+1,
            title:model.inputs.newTaskTitle,
            cards:[],
        }
        model.tasks.board.push(board);
        model.dropdown.push(`dropdown${model.dropdown.length}`)
        updateView()
    }
    else{
        console.log('ikke mer plass');
    }
}

function closeDropDown(index){
    model.dropdown[index]='dropdown'+index;
    updateView()
}
