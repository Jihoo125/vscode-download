function aNum(x, y){
    var sum = x + y;
    return sum;
}
var x = prompt("x");
var y = prompt("y");
var result = aNum(x, y);
document.write(`sum of both numbers is ${result}`);