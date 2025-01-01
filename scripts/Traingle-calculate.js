
/*
*step-1: get base value
*step-2: get height value
*step-3: set base and height value into a float value using parseFloat fuicntion
*step-4: Calculate the area and get the result

*/ 

function TriangleArea()
{
    // get the base value using unique Id
    const triangleBase = document.getElementById('triangle-base');
    const baseInput = triangleBase.value;
    const base = parseFloat(baseInput);
    // console.log(base);
    
    // get the height value using unique Id

    const triangleHeight = document.getElementById('triangle-height');
    const heightInput = triangleHeight.value;
    const height = parseFloat(heightInput);
    // console.log(height);

    const area = 0.5 * base * height;
    const areaTriangleSpan = document.getElementById('triangle-area');
    areaTriangleSpan.innerText = area;
    
    
    
    
       
}
