//#1
function squareOfRectangle(width, height){
    let result = width * height;
    return result;
};

console.log(squareOfRectangle(5, 4));

//#2
let squareOfRectangle2 = function (width, height) {
    let result = width * height
		return result;
};

console.log(squareOfRectangle2(6, 10));

//#3
let squareOfRectangle3 = (width, height) => {return width * height};

console.log(squareOfRectangle3(3, 3));