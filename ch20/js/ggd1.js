var i, x, y;
var y = prompt("몇단까지")
var y = prompt("몇단까지")
		
for (i = 1; i <= 9; i++) {
    document.write("<h3>" + i + "단</h3>");
    for (x = 1; x <= y; x++) {
        document.write(i +" X " + x + " = " + i*x + "<br>");
    }
}