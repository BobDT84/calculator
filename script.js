function nameMe(event){
    console.log(this.id);
}

let buttons = document.getElementsByTagName('button');

for(let button of buttons){
    button.addEventListener('click', nameMe);
}

const input = {current:[], };
const output = {input:[], result:0, };