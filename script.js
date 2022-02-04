var currentNumberWrapper = document.getElementById("current-number")
var currentTotalWrapper = document.getElementById("total")
var currentNumber = 1;
currentTotal = 399
currentTotalWrapper.innerHTML = currentTotal
console.log(currentTotalWrapper)


function increment(){
  currentNumber = currentNumber +1
  currentNumberWrapper.innerHTML=currentNumber;
  var currentTotal = 399 * currentNumber
  currentTotalWrapper.innerHTML =currentTotal
}
function decrement(){
  if (currentNumber >= 1){
  
  currentNumber = currentNumber -1
  currentNumberWrapper.innerHTML=currentNumber;
  var currentTotal = 399 * currentNumber
  currentTotalWrapper.innerHTML =currentTotal
}}
  if(currentNumber ==1){
   var currentTotal = 399
 }
 else{
   currentNumber=0
 }