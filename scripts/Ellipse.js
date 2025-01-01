function ellipseCalculateArea()
{
    const length1 = getInputValue('Ellipse-length1');
    const length2 = getInputValue('Ellipse-length2');

   const area = Math.PI * length1 * length2;
    
    const Area = parseFloat(area.toFixed(2));

    setInnerTextById('Ellipse-area', Area);
    
    
}

function getInputValue(inputFieldID)
{
    const inputFiled =  document.getElementById(inputFieldID);

    const inputValueText = inputFiled.value;

    const inputValue = parseFloat(inputValueText);

    return inputValue;
     
}

function setInnerTextById(elementId, area)
{
   const element = document.getElementById(elementId);
   element.innerText = area;

}
