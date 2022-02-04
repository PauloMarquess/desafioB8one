var currentNumberWrapper = document.getElementById("current-number")
var currentTotalWrapper = document.getElementById("total")
var currentNumber = 1;
var fix =3199
currentTotal = fix.toFixed(2)
currentTotalWrapper.innerHTML = currentTotal
console.log(currentTotalWrapper)


function increment(){
  currentNumber = currentNumber +1
  currentNumberWrapper.innerHTML=currentNumber;
  var currentTotal = 3199 * currentNumber
  currentTotalWrapper.innerHTML =currentTotal.toFixed(2).replace(".", ",")
}
function decrement(){
  if (currentNumber >= 1){
  
  currentNumber = currentNumber -1
  currentNumberWrapper.innerHTML=currentNumber;
  var currentTotal = 3199 * currentNumber
  currentTotalWrapper.innerHTML =currentTotal.toFixed(2).replace(".", ",")
}}
  if(currentNumber ==1){
   var currentTotal = 3199
 }
 else{
   currentNumber=0
 }
 
 var title =document.getElementById('alterar')
 var namee = document.getElementById('alterar')
 
 function spaceGray(){
   title.style.color='#3b3b3b'
   namee.innerHTML='Space Gray'
 }
 function Salmon(){
   title.style.color='salmon'
   namee.innerHTML='Salmon'
 
 }
 function Gray(){
   title.style.color='#c8c8cf'
    namee.innerHTML='Gray'
 }