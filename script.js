const calculator = new Calculator();
function runCalculator(event){
    switch(true){
        case this.id in calculator.numbers:
            calculator.updateInput(this.id);
            break;
        case this.id in calculator.buttonFunctions:
            let functionName = calculator.buttonFunctions[this.id];
            console.log(calculator[functionName]());
            calculator[functionName]();
            break;
        case  this.id in calculator.operatorSymbols:
            calculator.handleOperator(this.id);
    }
}

let buttons = document.getElementsByTagName('button');
for(let button of buttons){
    button.addEventListener('click', runCalculator);
}