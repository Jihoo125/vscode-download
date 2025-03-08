var i, x, y, z;
var y = prompt("몇단까지")
var z = prompt("몇단까지")
		
for (z = 1; z <= y; z++) {
    document.write("<h3>" + z + "단</h3>");
    for (z = 1; z <= y; x++) {
        document.write(z +" X " + x + " = " + i*x + "<br>");
    }
}