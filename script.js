function nameMe(event){
    console.log(this.id);
    console.log(buttonValues[this.id]);
    if(this.id in buttonValues){
        input['current'].push(buttonValues[this.id]);
    } else {
        input['current'].push(this.id);
    }
    console.log(input.current);
    displayInput();
}

function deleteInput(){
    input['current'].pop();
    displayInput();
}

function clearInput(){
    input['current'] = [];
    displayInput();
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

function displayInput(){
    let display = document.querySelector('#input');
    display.innerText = input['current'].join('');
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
    square: "^2 ",
    squareRoot: '√',
    subtract: '-',
    power: getPower(),
    parentheses: parentheses(),
    add: '+',
    equal: getResult(),
}