//Adding numbers
function dodawanie(){
    var liczba1 = parseInt(document.getElementById("liczba1").value);
    var liczba2 = parseInt(document.getElementById("liczba2").value);
    var wynik = liczba1+liczba2;
    document.getElementById("wynik").innerHTML=wynik;
 }

 //subtraction of numbers
 function odejmowanie(){
    var liczba1 = parseInt(document.getElementById("liczba1").value);
    var liczba2 = parseInt(document.getElementById("liczba2").value);
    var wynik = liczba1-liczba2;
    document.getElementById("wynik").innerHTML=wynik;
 }

 //multiplication of numbers
 function odejmowanie(){
    var liczba1 = parseInt(document.getElementById("liczba1").value);
    var liczba2 = parseInt(document.getElementById("liczba2").value);
    var wynik = liczba1*liczba2;
    document.getElementById("wynik").innerHTML=wynik;
 }