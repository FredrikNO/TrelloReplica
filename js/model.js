const model = {
    app:{
        screen:'tasks',
        currentTask: 0,
    },
    inputs:{
        board:{ cardDescription:'',
                selectedCardId:'',
                selectedBoardId:'',
                newTaskTitle:''},
        task:{  createNewTask:false,
                taskName:'',
                backgroundColor:'',},
        home:{  workspace:false,
                recent: false,
                favorites: false,
                templates:false,
                create: false},
        },
    dropdown:['dropdown0','dropdown1','dropdown2'],
    favoritedTasks:[],
    recentTasks:[],
    tasks:[ {
        id:1,
        title: 'Test task',
        stared:false,
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
    },{
        id:2,
        title: 'Trello',
        stared:false,
        board: [
            {
                id: 1,
                title: 'Gjøremål',
                cards: [{
                    id:1,
                    description:'Starte på hjemmesiden'
                }],
            },
            {
                id: 2,
                title: 'Pågår',
                cards: [{
                    id:1,
                    description:'Lage oppsett av forskjellige boards'
                }],
            },
            {
                id: 3,
                title: 'Ferdig',
                cards: [{
                    id:1,
                    description:'Lage card section'
                }],
            }
        ]
    }, {
        id:3,
        title: 'Nylige test',
        stared:false,
        board: [
            {
                id: 1,
                title: 'Gjøremål',
                cards: [{
                    id:1,
                    description:'se om dette fungerer'
                }],
            },
            {
                id: 2,
                title: 'Pågår',
                cards: [{
                    id:1,
                    description:'testing'
                }],
            },
            {
                id: 3,
                title: 'Ferdig',
                cards: [{
                    id:1,
                    description:'fullført oppgave'
                }],
            }
        ]
    },]
}