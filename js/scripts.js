//business logic //
  var translate = function(int) {
    var numeralIndex = ["","I","II","III"];
    var numeral = "";
    var digits = int.toString().split('');
    for (var i=0; i <digits.length; i++) {
      numeral = numeralIndex[(digits[i])];
      console.log(numeral);
      return numeral
    }
    
  }


// var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
//                     ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
//                     ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];        // Hundreds

// function convert(int) {
//   var numeral = "";
//   var digits = Int.toString().split('').reverse();
//   for (var i=0; i < digits.length; i++){
//     numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
//   }
//   return numeral;  
// }




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