class Calculator {
    constructor(){
        this.input = [];
        this.currentDisplay = '';
        this.firstNumber = '';
        this.secondNumber = '';
        this.operatorFunctionName = '';
        this.operatorSymbol = '';
        this.canCompute = false;
        this.output = {
            lastInput:[],
            result:0,
        }
        this.buttonFunctions = {
            delete: 'delete',
            clear: 'clearInputDisplay',
            equal: 'compute',
            D: 'delete',
            C: 'clearInputDisplay',
            ENTER: 'compute',
            BACKSPACE: 'delete',
            DELETE: 'delete',
        };
        this.numbers = '0123456789.decimal';
        this.operators = '+-*/^'
        this.operatorSymbols = {
            divide: '/',
            multiply: '*',
            square: "^2 ",
            squareRoot: '√',
            subtract: '-',
            add: '+',
            power: '^',
        };
    }
    updateInput(string, isOperator = false){
        if(!this.canCompute && !isOperator){
            this.setFirstNumber(string);
            this.currentDisplay = this.firstNumber;
        } else if(this.canCompute){
            this.setSecondNumber(string)
            this.currentDisplay = this.firstNumber + this.operatorSymbol + this.secondNumber;
        }
        if(isOperator){
            this.operatorSymbol = this.operatorSymbols[string];
            this.currentDisplay = this.firstNumber + this.operatorSymbol; 
        }
        this.displayInput();
    }
    displayInput(){
        let display = document.querySelector('#input');
        display.innerText = this.currentDisplay;
    }
    displayOutput(string){
        let lastInput = document.querySelector('#lastInput');
        lastInput.innerText = this.output['lastInput'];
        let result = document.querySelector('#result');
        result.innerText = this.output['result'];
    }
    delete(){
        if(!this.canCompute && !this.operatorFunctionName && this.firstNumber){
            this.firstNumber = this.firstNumber.slice(0,-1);
            this.currentDisplay = this.firstNumber;
        } else if(this.canCompute && this.secondNumber){
            this.secondNumber = this.secondNumber.slice(0,-1);
            this.currentDisplay = this.firstNumber + this.operatorSymbol + this.secondNumber;
        }else if(this.operatorFunctionName && !this.secondNumber){
            this.operatorFunctionName = '';
            this.operatorSymbol = '';
            this.canCompute = false;
            this.currentDisplay = this.firstNumber;
        }
        this.displayInput();
    }
    clearInputDisplay(){
        this.currentDisplay = '';
        this.firstNumber = '';
        this.operatorSymbol = '';
        this.operatorFunctionName = '';
        this.secondNumber = '';
        this.canCompute = false;
        this.displayInput();
    }
    compute(){
        let operator = this.operatorFunctionName;
        this.output['lastInput'] = this.currentDisplay;
        let num1 = Number(this.firstNumber);
        let num2 = Number(this.secondNumber);
        this.output['result'] = this[operator](num1, num2);
        this.clearInputDisplay();
        this.displayOutput();
        this.firstNumber = this.output.result;
        this.currentDisplay = this.firstNumber;
        this.displayInput();
    }
    setFirstNumber(string){
        if(string == 'decimal'){
            string = '.';
        }
        this.firstNumber += string;
    }
    setSecondNumber(string){
        if(string == 'decimal'){
            string = '.';
        }
        this.secondNumber += string;
    }
    handleOperator(operatorString){
        let operatorFunctionName = '';
        if(operatorString in this.operatorSymbols){
            //If operatorString from DOM element id, then no extra handling needed
            //The DOM element id's match the function names
            operatorFunctionName = operatorString;
        } else if(this.operators.includes(operatorString)){
            //If operatorString is from a keypress and has a value like '+'
            //Then the object literal operatorSymbols must be looped through
            //to get the key that matches the operator symbols, and will be
            //stored as the operator's function name
            let object = this.operatorSymbols;
            for(let key in object){
                if(object[key] == operatorString){
                    operatorFunctionName = key;
                    break;
                }
            }
        }
        switch(true){
            case this.canCompute:
                this.compute();
                this.operatorFunctionName = operatorFunctionName;
                this.updateInput(operatorFunctionName,true);
            case !this.canCompute:
                this.updateInput(operatorFunctionName, true);
                this.operatorFunctionName = operatorFunctionName;
                this.canCompute = true;
        }
    }
    add(a,b){return a+b;}
    subtract(a,b){return a-b;}
    multiply(a,b){return a*b;}
    divide(a,b){return a/b;}
    power(a,b){return a**b;}
    square(a,_){return a**2;}
    squareRoot(a,_){return a**0.5;}
}