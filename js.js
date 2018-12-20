function myFunction() {

var checkBox = document.getElementById("myCheck");

var add1 = document.getElementById("add1");
var add2 = document.getElementById("add2");
var add3 = document.getElementById("add3");
var add4 = document.getElementById("add4");
var add5 = document.getElementById("add5");
var add6 = document.getElementById("add6");

if (checkBox.checked == true){
  add1.setAttribute("disabled","")
  add2.setAttribute("disabled","")
  add3.setAttribute("disabled","")
  add4.setAttribute("disabled","")
  add5.setAttribute("disabled","")
  add6.setAttribute("disabled","")
} else {
  add1.removeAttribute("disabled")
  add2.removeAttribute("disabled")
  add3.removeAttribute("disabled")
  add4.removeAttribute("disabled")
  add5.removeAttribute("disabled")
  add6.removeAttribute("disabled")
}
}



function myFunction2(){
  var card1 = document.getElementById("card1");
  var card2 = document.getElementById("card2");
  var marr = document.getElementById("inlineRadio2");
  var sing = document.getElementById("inlineRadio1");
  if (marr.checked == true){
    card1.style.display =  "block";
    card2.style.display =  "block";
  } else if (sing.checked == true) {
    card1.style.display = "none";
    card2.style.display = "none";
  }

}
