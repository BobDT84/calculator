class Calculator {
    constructor(){
        this.input = [];
        this.output = {
            lastInput:[],
            result:0,
        }
        this.buttonFunctions = {
            delete: 'deleteInput',
            clear: 'clearInput',
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
        let display = document.querySelector('#input');
        display.innerText = this.input.join('');
    }
    deleteInput(){
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
        //set input to equal result to allow
        //for chaining equations
    }
}
function nameMe(event){
    const buttonValue = calculator.buttonValue[this.id];
    if(this.id in calculator.buttonFunctions){
        let functionName = calculator.buttonFunctions[this.id];
        calculator[functionName]();
    } else if(this.id in calculator.buttonValue){
        calculator.pushInput(buttonValue);
    }
}




let buttons = document.getElementsByTagName('button');

for(let button of buttons){
    button.addEventListener('click', nameMe);
}


const calculator = new Calculator();
