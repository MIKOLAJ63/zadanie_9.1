//scripts.js
$(function(){
	console.log('DOM loaded - you can have fun');
});

function getTriangleArea (a , h) {
  var TriangleArea = a*h/2;
  if ((a <= 0) || (h <= 0)) {
    console.log("Nieprawidłowe dane")}
  else {
    return TriangleArea;}
  }
var a = 14;
var h = 49;
console.log(getTriangleArea(a , h));
var triangle1Area = getTriangleArea (0.2 , 15);
console.log(triangle1Area);
var triangle2Area = getTriangleArea (10 , 18);
console.log(triangle2Area);
var triangle3Area = getTriangleArea (20.2 , 14.258);
console.log(triangle3Area);