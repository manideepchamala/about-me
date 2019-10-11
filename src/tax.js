




function calculations() {
    
  //Passes string and returns float
const top = parseFloat(document.querySelector('#firstNumber').value)
  const bottom = parseFloat(document.querySelector('#secondNumber').value)
  const height = parseFloat(document.querySelector('#thirdNumber').value)
  
  if(top<0){
      throw new Error( "top shouldn't be negative");
  }
  if(bottom<0){
      throw new Error( "bottom shouldn't be negative");
  }
if(height<0){
      throw new Error( "height shouldn't be negative");
  }

  //calculating the area
  const area=((top+bottom)*height)/2;

//  const top1 = document.querySelector("#firstNumber").value
//   const bottom1 = document.querySelector("#secondNumber").value
//   const height1 = document.querySelector("#thirdNumber").value

  localStorage.setItem('top1', top)
  localStorage.setItem('bottom1', bottom)
  localStorage.setItem('height1', height)

  //Modifying HTML page with the calculations output
  document.querySelector('#result').innerHTML = `Area of trapezoid is ${area}`
}

function testcalculations(top, bottom,height){
  
  if(top<0){
    throw new Error( "top shouldn't be negative");
}
if(bottom<0){
    throw new Error( "bottom shouldn't be negative");
}
if(height<0){
    throw new Error( "height shouldn't be negative");
}
else{
  return ((top+bottom)*height)/2;
}
  
}

//On click perform the calculation function
document.querySelector('#areatrap').addEventListener('click', calculations)


