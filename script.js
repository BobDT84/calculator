const calculator = new Calculator();
function runCalculator(event){
    let input = '';
    if(event.key){
        input = event.key.toUpperCase();
    } else if(this.id){
        input = this.id;
    }
    switch(true){
        case calculator.numbers.includes(input):
            calculator.updateInput(input);
            break;
        case input in calculator.buttonFunctions:
            let functionName = calculator.buttonFunctions[input];
            calculator[functionName]();
            break;
        case  input in calculator.operatorSymbols || calculator.operators.includes(input):
            calculator.handleOperator(input);
            break;
    }
}

let buttons = document.getElementsByTagName('button');
for(let button of buttons){
    button.addEventListener('click', runCalculator);
}

document.onkeydown = runCalculator;