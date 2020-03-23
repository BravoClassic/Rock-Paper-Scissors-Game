// Defined varables in the game


let game = {

    scores: document.querySelectorAll('span'), //First item in the array is for the user
    userScore: 0,
    computerScore: 0,
    rock: document.querySelector('.btns .rock'),
    paper: document.querySelector('.btns .paper'),
    scissors: document.querySelector('.btns .scissors'),
    mainText: document.querySelector('main h2')
};

let statementsGood = ['Awesome!', 'You\'re a genius', 'Bravo!'];
let statementsBad = ['Try again', 'Dumb ass', 'Think well', 'You are almost there'];
let statementsDraw = ['You can do better than this', 'Same choice', 'Almost lucky'];


//Click events

game.rock.addEventListener('click', function() {
    compare("r");
});
game.paper.addEventListener('click', function() {
    compare("p");
});

game.scissors.addEventListener('click', function() {
    compare("s");
});


function cmpPlay() {
    let options = ["r", "p", "s"];
    let num = Math.ceil((Math.random()) * 2);
    let choice = options[num];
    return choice;
}

function scores(rem) {
    if (rem == 'winUser') {
        ++game.userScore;
        console.log(game.userScore);
        game.scores[0].textContent = game.userScore;
        mainText.textContent = stateGood();
    } else if (rem == 'winPC') {
        ++game.computerScore;
        console.log(game.computerScore);
        game.scores[1].textContent = game.computerScore;
        mainText.textContent = stateGood();

    } else {
        mainText.textContent = stateDraw();
    }

    setTimeout(mainText.textContent = 'Let\'s play!', 200);
}


function stateGood() {
    return statementsGood[Math.floor(Math.random() * statementsGood.length - 1)]
}


function stateBad() {
    return statementsBad[Math.floor(Math.random() * statementsBad.length - 1)]
}

function stateDraw() {
    return statementsDraw[Math.floor(Math.random() * statementsDraw.length - 1)]
}

function compare(userChoice) {
    p1 = userChoice;
    p2 = cmpPlay();

    switch (p1 + p2) {
        //P1 wins
        case 'pr':
            console.log('P1 wins');
            console.log('P2 loses');
            scores("winUser");
            break;

        case 'rs':
            console.log('P1 wins');
            console.log('P2 loses');
            scores("winUser");
            break;

        case 'sp':
            console.log('P1 wins');
            console.log('P2 loses');
            scores("winUser");
            break;



            //P2 wins
        case 'rp':
            console.log('P2 wins');
            console.log('P1 loses');
            scores('winPC');
            break;
        case 'sr':
            console.log('P2 wins');
            console.log('P1 loses');
            scores('winPC');
            break;
        case 'ps':
            console.log('P2 wins');
            console.log('P1 loses');
            scores('winPC');
            break;


            //Draw
        case "rr":
            console.log("Draw");
            break;
        case 'pp':
            console.log("Draw");
            break;
        case 'ss':
            console.log("Draw");
            break;


        default:
            console.log('Small brain bro!');
            break;
    }
}