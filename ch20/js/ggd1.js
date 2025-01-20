var i, j;
		
for (i = 1; i <= 9; i++) {
    document.write("<h3>" + i + "단</h3>");
    for (j = 1; j <= x; j++) {
        document.write(i +" X " + j + " = " + i*j + "<br>");
    }
}