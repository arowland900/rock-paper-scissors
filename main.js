/*----- constants -----*/


/*----- app's state (variables) -----*/
let scores, results, winner;

/*----- cached element references -----*/
const scoreEls = {
    p: document.querySelector(''),
    p: document.querySelector(''),
    p: document.querySelector('')
}

/*----- event listeners -----*/
document.getElementById('go-btn').addEventListener('click', handleGo)


/*----- functions -----*/

init();

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
    render();
}

function render() {
    // transfer all state (variables) to the DOM
    // display scores

    // display results
}

function handleGo() {

}
