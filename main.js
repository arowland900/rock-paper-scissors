/*----- constants -----*/


/*----- app's state (variables) -----*/
var board, turn, winner

/*----- cached element references -----*/


/*----- event listeners -----*/



/*----- functions -----*/

initialize();

function init() {
    scores = {
        p: 0,
        c: 0,
        t: 0
    };
    results = {
        p: 'r',
        c: 'r'
    };
    winner = null;
}

