let button=Array.from(document.getElementsByClassName('button'));
let display = document.getElementById('display')


button.map((button)=>{
    button.addEventListener('click',(e)=>{
     switch(e.target.innerText){
        case 'Ac': display.innerText = '';
        break;

        case'C': display.innerText = display.innerText.slice(0,-1);
        break;

        case'=': 
        display.innerText = eval(display.innerText);
        break;

        default: display.innerText += e.target.innerText;
     }
    })
    
})