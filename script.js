class Calculator {
    //Should this class declaration be in a separate file?
    constructor(){
        this.input = [];
        this.output = {
            lastInput:[],
            result:0,
        }
        this.buttonFunction = {
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
    parseOperators(){
        let numbers = [];
        let equation = [];
        for(let entry of this.input){
            if(isNaN(entry)){
                equation.push(numbers.join(''));
                equation.push(entry);
                numbers = [];
            } else {
                numbers.push(entry);
            }
        }
        return equation;
    }
    add(a,b){return a+b;}
    subtract(a,b){return a-b;}
    multiply(a,b){return a*b;}
    divide(a,b){return a/b;}
    power(a,b){return a**b;}
}


const calculator = new Calculator();
function nameMe(event){//DON'T FORGET TO FIND A BETTER NAME
    const buttonValue = calculator.buttonValue[this.id];
    if(this.id in calculator.buttonFunction){
        let functionName = calculator.buttonFunction[this.id];
        calculator[functionName]();
    } else if(this.id in calculator.buttonValue){
        calculator.pushInput(buttonValue);
    }
}

let buttons = document.getElementsByTagName('button');
for(let button of buttons){
    button.addEventListener('click', nameMe);//DON'T FORGET TO FIND A BETTER NAME
}