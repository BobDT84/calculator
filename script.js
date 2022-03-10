function nameMe(event){
    console.log(this.id);
}

function deleteInput(){
    input[current].pop();
}

function clearInput(){
    input[current] = [];
}

function getPower(){
    //is this going to need to be asynchronus
    //to wait for the next button press?
}

function parentheses(){
    //will need to determine is opening
    //or closing the parentheses
}

function getResult(){
    //parse the current input
    //determine the proper calculation
    //display current input to oupt
    //display result of the calculation
    //clear current input
    clearInput();
}

let buttons = document.getElementsByTagName('button');

for(let button of buttons){
    button.addEventListener('click', nameMe);
}

const input = {current:[], };
const output = {input:[], result:0, };
const buttonValues = {
    divide: '/',
    delete: deleteInput(),
    clear: clearInput(),
    multiply: '*',
    square: '<sup>2</sup>',
    squareRoot: '√',
    subtract: '-',
    power: getPower(),
    parentheses: parentheses(),
    add: '+',
    equal: getResult(),
}