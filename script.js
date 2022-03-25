const calculator = new Calculator();
function runCalculator(event){
    switch(true){
        case this.id in calculator.numbers:
            calculator.storeInput(this.id);
            break;
        case this.id in calculator.buttonFunction:
            let functionName = calculator.buttonFunction[this.id];
            console.log(calculator[functionName]());
            calculator[functionName]();
            break;
        case  this.id in calculator.operatorSymbol:
            calculator.handleOperator();


            
            if(calculator.canCompute){
                calculator.setSecondNumber = calculator.input.join('');
                let operator = calculator.operators[this.id];
                calculator.compute(calculator[operator]);
                calculator.displayInput(this.id);
            } else {
                calculator.canCompute = true;
                calculator.setFirstNumber = calculator.input.join('');
                calculator.displayInput(calculator.operatorSymbol[this.id]);
                let operator = calculator.operators[this.id];
                calculator.operator = calculator[operator];
            }
            break;
        }
    }

let buttons = document.getElementsByTagName('button');
for(let button of buttons){
    button.addEventListener('click', runCalculator);
}