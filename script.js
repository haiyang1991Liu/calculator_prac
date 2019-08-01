var calculator ={
    displayValue:'0', //初始值
    currentOperator:null,
    leftOperand:null,
    waitingSecondOperand:false,
    time:null,
    timeEvents:[]
};
bindKeyPress()
function bindKeyPress() {
    var keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click',function(event){ //绑定事件
        var target = event.target;//具体到哪个element触发这个事件
        var value = target.value;//具体value
        if(target.classList.contains('clear')){
            return handleClear();
        }
        handleDigit(target.value);//传递实参
    });
}
function handleClear(){
    calculator.displayValue='0';
    calculator.currentOperator=null;
    calculator.leftOperand=null;
    updateDisplay();
}

function handleDigit(value){//形参
    var displayValue = calculator.displayValue;
    calculator.displayValue =
     displayValue ==='0'? value:displayValue+value;//排除0在前
    updateDisplay();//调用updateDisplay
}
function updateDisplay(){//显示功能
    var display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}
