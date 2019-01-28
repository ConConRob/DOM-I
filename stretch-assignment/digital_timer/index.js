const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');
secondOnes.innerText = "-"
const intervalOfTimer = 10;//ms
const stopTime = 10000;
function initCounter(){
    let count = 0;

    return function (addToCount){
        return count+=addToCount
    }
}
const counter = initCounter();

//get [.01s, .1s, 1s, 10s]
function valsOfTimer(curTime){
    curStr = curTime.toString();
    const arr =[]
    if(curStr.length>=2){
        //.01s
        arr.push(curStr[curStr.length-2]);
    }
    if(curStr.length>=3){
        //.1s
        arr.push(curStr[curStr.length-3]);
    }
    if(curStr.length>=4){
        //1s
        arr.push(curStr[curStr.length-4]);
    }
    if(curStr.length>=5){
        //10s
        arr.push(curStr[curStr.length-5]);
    }
    return arr;
}
//update DOM timer
function updateText(element, text){
    element.innerText = text;
}
//Loop DOM of Time 
function updateTimerDisplay(curArr){
    curArr.forEach((digit, index)=>{
        if(index===0){
            updateText(msTens, digit);
        }else if(index === 1){
            updateText(msHundreds, digit);
        }else if(index === 2){
            updateText(secondOnes, digit);
        }else if(index === 3){
            updateText(secondTens, digit);
        }
    })
}
//THIS WILL RUN EVERY  intervalOfTimer
function controller(){
const curTime = counter(intervalOfTimer);
    if (curTime>stopTime){
        //STOP
        window.clearInterval(intervalTimer); 
    } else{
        const curArr = valsOfTimer(curTime);
        updateTimerDisplay(curArr); 
    }

}


const intervalTimer = window.setInterval(controller , intervalOfTimer)
