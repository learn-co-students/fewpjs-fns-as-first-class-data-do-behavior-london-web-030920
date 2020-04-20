/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
let thisTime = parseInt(time.split(':')[0]);

if (thisTime < 12) {return "Good Morning"}
if (thisTime > 12, thisTime < 17){ return "Good Afternoon"}
if ( thisTime > 17){return "Good Evening"}

}

function displayMessage(string){
document.getElementById('greeting').innerText = string;

}


