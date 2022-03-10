function nameMe(event){
    console.log(this.id);
    return this.id;
}

let buttons = document.getElementsByTagName('button');

for(let button of buttons){
    let a = button.addEventListener('click', nameMe);
    console.log("a is " + a);
}

const input = {current:[], };
const output = {input:[], result:0, };