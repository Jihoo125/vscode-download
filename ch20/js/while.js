var x = prompt("enter a numebr");
var msg;
if ( x !== null){
    var xFactorialSampleTotallyNotRealUseCasesFrISwear = 1;
    var i = 1;

    while (i <= x){
        xFactorialSampleTotallyNotRealUseCasesFrISwear *= i;
        i++;
    }
    msg = x + "! =" + xFactorialSampleTotallyNotRealUseCasesFrISwear;
}
else{
    msg = "you didnt enter number bruh"
}

document.write(msg)