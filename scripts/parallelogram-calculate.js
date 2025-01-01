


function parallelogramAreaCalculate()
{
    // console.log('Connected');

    const base = getInputValue('parallelogram-base');  
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    
    // const areaParallelogramSpan = document.getElementById('parallelogram-area');
    // areaParallelogramSpan.innerText = area;

    setInnerTextById('parallelogram-area', area);
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