function f(n)
{
        if (n < 2){
          return n
        }
        return f(n - 1) + f(n - 2)
}
function fib() {
    var n = document.getElementById("inputFib").value;
    var oblicz = f(n);
    var wynik = "Wynik "+oblicz+"";
    document.getElementById("p1").innerHTML=wynik;
}

function m()
{var str = input1.value;
  
var x = str.split(" ");
    var maks = x[0];
    for (var i=0; i < x.length; i++)
     {
        if (x[i]> maks) {
            maks =x[i];
        }
      }
document.getElementById("p1").innerHTML = maks;
  }
    function h()
{
    var x = input1.value
    let i = 0;
    let counter = 0;
    while(i < x.length)
    {
    if(x[i] == 0 || x[i]== 1 ||x[i]== 2 ||x[i]== 3 ||x[i]== 4 ||x[i]== 5 ||x[i]== 6 ||x[i]== 7 ||x[i]== 8 ||x[i]== 9)
    {
        counter++;
        
    }
    i++;
    }
    if(x==""){
    p1.style.color="red"
    p1.innerHTML="WPISZ HASŁO"
    }
    else if(counter >= 1 && x.length>6){
    p1.style.color="green"
    p1.innerHTML="DOBRE"        
    }
    else if(((x.length>=4 && x.length<=6) && counter > 0) || (counter == 0 && x.length > 4)){
    p1.style.color="blue"
    p1.innerHTML="ŚREDNIE"       
    }
    else {
    p1.style.color="yellow"
    p1.innerHTML="SŁABE"
    }
}   
