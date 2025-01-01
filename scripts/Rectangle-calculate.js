function RectangleArea()
{
   
   const rectangleWidth = document.getElementById('rec-width');
   const widthInput = rectangleWidth.value;
   const width = parseFloat(widthInput);
 
   const rectangleLength = document.getElementById('rec-length');
   const lengthInput = rectangleLength.value;
   const length = parseFloat(lengthInput);

//    console.log(length);

   const rectArea = width * length ;
   const areaRectangleSpan = document.getElementById('rectangle-area');
   areaRectangleSpan.innerText = rectArea;
   
}
