class Calculator {
    constructor(){
        this.input = [];
        this.firstNumber;
        this.secondNumber;
        this.operator;
        this.canCompute = false;
        this.output = {
            lastInput:[],
            result:0,
        }
        this.buttonFunction = {
            delete: 'deleteInput',
            clear: 'clearInput',
            parentheses: 'parentheses',
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
        this.operatorSymbol = {
            divide: '/',
            multiply: '*',
            square: "^2 ",
            squareRoot: '√',
            subtract: '-',
            add: '+',
            power: '^',
        };
    }
    storeInput(string){
        this.input.push(string);
    }
    displayInput(){
        let input = [];
        if(this.firstNumber){
            input.push(this.firstNumber);
        } else if(this.operator){
            input.push(this.operatorSymbol[this.operator]);
        } else if(this.secondNumber){
            input.push(this.secondNumber);
        }
        let display = document.querySelector('#input');
        display.innerText = this.input.join('');
    }
    displayOutput(string){
        let lastInput = document.querySelector('#lastInput');
        lastInput.innerText = this.output['lastInput'].join('');
        let result = document.querySelector('#result');
        result.innerText = this.output['result'];
    }
    deleteInput(){
        this.input.pop();
        this.displayInput();
    }
    clearInput(){
        this.input = [];
        this.displayInput();
    }
    compute(){
        let operator = this.operator
        this.output['lastInput'] = this.input;
        console.log(this[operator]);
        console.log();
        this.output['result'] = operator(this.firstNumber,this.secondNumber);
        this.displayOutput();
        this.clearInput();
        this.displayInput(this.output.result);
        this.canCompute = false;
        this.operator = '';
    }
    setFirstNumber(){
        this.firstNumber = this.input.join('');
        this.clearInput();
    }
    setSecondNumber(){
        this.secondNumber = this.input.join('');
        this.clearInput();
    }
    handleOperator(operatorString){
        switch(true){
            case this.canCompute:
                this.compute();
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