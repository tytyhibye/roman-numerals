//business logic //
  var translate = function(int) {
    var numeralIndex = ["","I","II","III","IV","V","VI","VII","VII","IX"];
    var numeral = "";
    var digits = int.toString().split('');
    for (var i=0; i <digits.length; i++) {
      numeral = numeralIndex[(digits[i])];
      console.log(numeral);
      return numeral
    }    
  }



//User interface logic //
$(document).ready(function(){
 $("#romanNumerals").submit(function(event){
   event.preventDefault();
  
    var int = parseInt($("input#int").val());
    var result = translate(int);
    // console.log(numeral);
    if (result) {
    $(".return").text(result);
    }
  });
 });