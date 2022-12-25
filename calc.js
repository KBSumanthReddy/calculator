function ans(val){
    let a = [];
    let k=0;
    for(let i=0 ; i < val.length ; i++){
        if(val[i]=='*' || val[i]=='+' || val[i]=='-' || val[i]=='/'){
            a.push(parseFloat(val.substring(k,i)));
            k = i+1;
            a.push(val[i]);
        }
    }
    a.push(parseFloat(val.substring(k,val.length)));
    for(let j=0 ; j < a.length ; j++){
        if(a[j]=='/'){
            x = a[j-1]/a[j+1];
            a.splice(j-1,3,x);
            j -= 2
        }
    }
    for(let j=0 ; j < a.length ; j++){
        if(a[j]=='*'){
            x = a[j-1]*a[j+1];
            a.splice(j-1,3,x);
            j -= 2;
        }
    }
    for(let j=0 ; j < a.length ; j++){
        if(a[j]=='+'){
            x = a[j-1]+a[j+1];
            a.splice(j-1,3,x);
            j -= 2;
        }
        if(a[j]=='-'){
            x = a[j-1]-a[j+1];
            a.splice(j-1,3,x);
            j -= 2;
        }
    }
    return parseFloat(a[0].toString());
}

let a=0;
let w=0;
document.getElementById("answer").readOnly = true;
let screen = document.getElementById("answer");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value += buttonText;
        }else if (buttonText == "÷") {
            buttonText = "/";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == "AC") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == "DEL") {
            if(screen.value == a){
                screenValue = "";
                screen.value = screenValue;
            }
            if(screen.value[screen.value.length-1]=='S'){
                screenValue += " ";
                screen.value = screenValue;
            }
            screenValue = screenValue.substring(0,screenValue.length-1);
            screen.value = screenValue;
        } else if(buttonText == "=") {
            screenValue = ans(screenValue);
            screen.value = screenValue;
            a = screen.value;
            w=1;
        } else if(buttonText == "ANS"){
            if(screen.value.length != 0 && screen.value[screen.value.length-1]!='+' && screen.value[screen.value.length-1]!='-' && screen.value[screen.value.length-1]!='*' && screen.value[screen.value.length-1]!='/'){
                screenValue += "*";
                screen.value = screenValue;
            }
            screenValue += a;
            screen.value += "ANS";
        } else {
            if(screen.value[screen.value.length-1] == 'S'){
                screenValue += "*";
                screen.value = screenValue;
            }
            screenValue += buttonText;
            screen.value += buttonText;
        }
    });
}