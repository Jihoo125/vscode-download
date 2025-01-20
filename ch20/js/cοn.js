var i;
var n = 10;
var sum = 0;

for (i = 1; i <= n; i++){
    if (i % 2 === 1){
        continue
    }
    sum += i;

document.write(i + " ------ " + sum + "<br>");
}