let screen = document.getElementById('result'); 
buttons = document.querySelectorAll('button'); 
let screenvalue = ''; 
for(button of buttons){
    button.addEventListener('click', (e)=>{
        let buttonText = e.target.innerText; 
       // console.log('button text is', buttonText);       
        if(buttonText == 'X'){
            buttonText = '*'; 
            screenvalue += buttonText; 
            screen.value = screenvalue; 
        }
        else if(buttonText=='C'){
            screenvalue = ''; 
            screen.value = screenvalue; 
        }
        else if(buttonText=='='){
                screen.value= eval(screenvalue); 
        }
        else{
            screenvalue+= buttonText; 
            screen.value = screenvalue; 
        }
    })
}