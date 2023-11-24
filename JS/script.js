
let outputKalkulator = document.getElementById("output-kalkulator");
function display(num){
    outputKalkulator.value += num;
}
function Calculate(){
try{
    outputKalkulator.value = eval(outputKalkulator.value);
}
catch(err)
{
   alert("invalid")
}
}
function Clear(){
    outputKalkulator.value = "";
}
       