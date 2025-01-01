 function pentagonAreaCalculate()
 {
        const side1 = getInputValue('Pentagon-side1');
        const side2 = getInputValue('Pentagon-side2');

    area = 0.5 * side1 * side2;

    setInnerTextById('Pentagon-area', area);
        
 }

 function getInputValue(inputFieldID)
 {
  const inputFiled = document.getElementById(inputFieldID);
  const inputValueText = inputFiled.value;

  const inputValue = inputValueText;

  return inputValue;
 
 }

 function setInnerTextById(elementId, area)
 {
      const element = document.getElementById(elementId);
      
      element.innerText = area;

 }
