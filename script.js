class Input {
    constructor(){
        this.input = [];
        this.buttonFunctions = {
            delete: 'deleteInput',
            clear: 'clearInput()',
            power: 'getPower',
            parentheses: 'parentheses',
            equal: 'getResult',
        };
        this.buttonValue = {
            divide: '/',
            multiply: '*',
            square: "^2 ",
            squareRoot: '√',
            subtract: '-',
            add: '+',
            0: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            decimal: '.',
        };
    }
    pushInput(string){
        this.input.push(string);
        this.displayInput();
    }
    displayInput(){
        console.log('displayInput');
        let display = document.querySelector('#input');
        display.innerText = this.input.join('');
    }
    deleteInput(){
        console.log('deleteInput');
        console.log(this);
        this.input.pop();
        this.displayInput();
    }
    clearInput(){
        this.input = [];
        this.displayInput();
    }
    getPower(){
        //is this going to need to be asynchronus
        //to wait for the next button press?
    }
    parentheses(){
        //will need to determine is opening
        //or closing the parentheses
    }
    getResult(){
        //parse the current input
        //determine the proper calculation
        //display current input to oupt
        //display result of the calculation
        //clear current input
        this.clearInput();
    }
}
function nameMe(event){
    const buttonValue = input.buttonValue[this.id];
    if(this.id in input.buttonFunctions){
        let functionName = input.buttonFunctions[this.id];
        input[functionName]();
    } else if(this.id in input.buttonValue){
        input.pushInput(buttonValue);
    }
}




let buttons = document.getElementsByTagName('button');

for(let button of buttons){
    button.addEventListener('click', nameMe);
}


const input = new Input();
const output = {input:[], result:0, };
const buttonFunctions = {
    delete: input.deleteInput,
    clear: input.clearInput,
    power: input.getPower,
    parentheses: input.parentheses,
    equal: input.getResult,
}