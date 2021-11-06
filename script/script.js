$(document).ready(function () {

  
  
 //  only allow numbers
 $("#inputZip").keyup(function (e) {
   e.preventDefault();
   this.value = this.value.replace(/[^0-9\.]/g, "");
   $(this).next().text("remember, no alpha!");
 });
 
 //  only allow numbers
  $("#cvv").keyup(function (e) {
   e.preventDefault();
   this.value = this.value.replace(/[^0-9\.]/g, "");
   $(this).next().text("remember, no alpha!");
 });
 
 
});

 //  only allow strings
$('#inputFname').keydown(function (e) {
       $(this).next().text("remember, no number");
   if (e.ctrlKey || e.altKey) {
          e.preventDefault();
   } else {
          var key = e.keyCode;
          if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
               e.preventDefault();
          }
   
   }
});


 //  only allow strings
 $('#inputLname').keydown(function (e) {
    //  display span message
           $(this).next().text("remember, no number");
   if (e.ctrlKey || e.altKey) {
          e.preventDefault();
   } else {
          var key = e.keyCode;
          if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
               e.preventDefault();
          }
   }
});

 //  only allow strings
$('#inputCity').keydown(function (e) {
  
 //  display span message
           $(this).next().text("remember, no number");
   if (e.ctrlKey || e.altKey) {
          e.preventDefault();
   } else {
          var key = e.keyCode;
          if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
               e.preventDefault();
          }
   }
});

 //  only allow strings
$('#nameCC').keydown(function (e) {
    
 //  display span message
           $(this).next().text("remember, no number");
   if (e.ctrlKey || e.altKey) {
          e.preventDefault();
   } else {
          var key = e.keyCode;
          if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
               e.preventDefault();
          }
   }
});
//  user type strings in the input box
$("#inputFname").on("change", function (e) {
  //enables the disable selection box
  $("#inputState").prop("disabled", false);

});


//  validation that all required field need to have an input
window.onload = function () {
  var form = document.getElementById('btn');
  form.button.onclick = function (){
    for(var i=0; i < form.elements.length; i++){
      if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
        alert('There are some required fields!');
        return false;
      }
    }
    form.submit();
  }; 
};