var i, x, y, z;
var y = prompt("몇단까지")
var z = prompt("몇단까지")
		
for (i = 1; i <= 9; i++) {
    document.write("<h3>" + i + "단</h3>");
    for (x = 1; x <= y; x++) {
        document.write(z +" X " + x + " = " + i*x + "<br>");
    }
}