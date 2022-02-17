const output = document.getElementById("output");


function calculateTip(){
const storedValue = document.getElementById("storedValue").value;

if (storedValue < 4) {
var tipMessage="Too low, so no go";
} 
if (storedValue > 4) { var tipMessage="Too high, big guy";
} 
if (storedValue == 4) { var tipMessage="WINNER WINNER, CHICKEN DINNER!!";
} 
  
  
//output.innerHTML = message; 
output.innerHTML= tipMessage;
}
calcSubmit.onclick = calculateTip;