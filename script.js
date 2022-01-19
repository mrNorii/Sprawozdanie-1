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
 function mnozenie(){
    var liczba1 = parseInt(document.getElementById("liczba1").value);
    var liczba2 = parseInt(document.getElementById("liczba2").value);
    var wynik = liczba1*liczba2;
    document.getElementById("wynik").innerHTML=wynik;
 }

 //dividing numbers
 function dzielenie(){
    var liczba1 = parseInt(document.getElementById("liczba1").value);
    var liczba2 = parseInt(document.getElementById("liczba2").value);
    if(liczba2==0){
      window.alert("Dzielenie przez 0");
    }
    else{
      var wynik = liczba1/liczba2;
    document.getElementById("wynik").innerHTML=wynik;
    }
    
 }

//proofing of numbers
function potegowanie(){
    var liczba1 = parseInt(document.getElementById("liczba1").value);
    var liczba2 = parseInt(document.getElementById("liczba2").value);
    var wynik = Math.pow(liczba1,liczba2);
    document.getElementById("wynik").innerHTML=wynik;
 }