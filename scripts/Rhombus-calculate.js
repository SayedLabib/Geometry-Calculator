function rhombusCalculateArea()
{

 const side1 = getInputValue('Rhombus-side1');
 const side2 = getInputValue('Rhombus-side2');
 
//  console.log('side1 of the rhombus ',side1);
 
//  console.log('side2 of the rhombus ',side2);


 area = 0.5 * side1 * side2;
  
 setInnerTextById('Rhombus-area', area);
 
 
}


function getInputValue(inputFieldID)
{
  const inputField = document.getElementById(inputFieldID);
  
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);

  return inputValue;

}

function setInnerTextById(elementID, area)
{
 const element = document.getElementById(elementID);
 element.innerText = area;
}