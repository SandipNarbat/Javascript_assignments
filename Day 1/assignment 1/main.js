function calculate(cal){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let result;
    if(!num1 || !num2){
        result="please enter both numbers";
    }else{
        switch (cal){
            case 'add':
                result = num1+num2;
                break;
            case 'sub':
                result = num1-num2;
                break;
            case 'mul':
                result = num1*num2;
                break;
            case 'div':
                if(num2!==0){
                    result = num1/num2;
                    break;
                }else{
                    result= "cannot be divided by 0"
                }

        }
    }
    document.getElementById("result").textContent = "result: "+ result;

}