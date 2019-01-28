const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');
secondOnes.innerText = "-"

function initCounter(){
    let count = 0;

    return function (addToCount){
        return count+=addToCount
    }
}
const counter = initCounter();
console.log(counter(10));


// const intervalTimer = window.setInterval(increment,10)