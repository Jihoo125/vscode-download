var currentYear = new Date().getFullYear();
var birthYear;
var age;

birthYear = prompt("when were you born(YYYY)")
age = currentYear - birthYear + 1;
document.write(currentYear + "year<br>in " + birthYear + "it is " + age + "years old");