let currentDisplay='';

function appendToDisplay(value){
    currentDisplay += value;
    document.querySelector('.display').value = currentDisplay;
}

function clearDisplay(){
    currentDisplay = '';
    document.querySelector('.display').value = '';
}
function calculate(){
    try{
        const expression=currentDisplay.replace(/x/g,'*');
        currentDisplay=eval(expression).toString();
        document.querySelector('.display').value = currentDisplay;
        
    } catch(error){
        document.querySelector('.display').value='error';
        currentDisplay = '';
    }

    }
