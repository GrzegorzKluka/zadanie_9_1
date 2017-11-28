function getTriangleArea(a, h) {
	if (a > 0 && h > 0)
    	return(a*h/2);
	else 
		return("Nieprawidłowe dane");
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(5, -8),
	triangle2Area = getTriangleArea(4, 3),
	triangle3Area = getTriangleArea(0, 2);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);