const model = {
    app:{
        currentBoard: 1,
    },
    inputs:{cardDescription:'',
            selectedCardId:'',
            selectedBoardId:'',
            newTaskTitle:''},
    dropdown:['dropdown0','dropdown1','dropdown2'],
    taskDimentions:[],
    tasks: {
        id:1,
        title: '',
        board: [
            {
                id: 1,
                title: 'Gjøremål',
                cards: [{
                    id:1,
                    description:'Lag trello app må være større'
                }],
            },
            {
                id: 2,
                title: 'Pågår',
                cards: [{
                    id:1,
                    description:'Start oppsett'
                }],
            },
            {
                id: 3,
                title: 'Ferdig',
                cards: [{
                    id:1,
                    description:'Lag modell'
                }],
            }
        ]
    }
}