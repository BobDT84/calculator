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
        };
        this.numbers = {
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
        this.operators = {
            divide: 'divide',
            multiply: 'multiply',
            square: "square",
            squareRoot: 'squareRoot',
            subtract: 'subtract',
            add: 'add',
            power: 'power',
        };
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
        this.firstNumber += this.numbers[string];
    }
    setSecondNumber(string){
        this.secondNumber += this.numbers[string];
    }
    handleOperator(operatorString){
        switch(true){
            case this.canCompute:
                this.compute();
                this.operatorFunctionName = operatorString;
                this.updateInput(operatorString,true);
            case !this.canCompute:
                this.updateInput(operatorString, true);
                this.operatorFunctionName = operatorString;
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