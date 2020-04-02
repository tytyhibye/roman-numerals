//business logic //
  var array = [[1000, "M"],[900, "CM"],[500, "D"],[400, "CD"],[100, "C"],[90, "XC"],[50, "L"],[40, "XL"],[10, "X"],[9, "IX"],[5, "V"],[4, "IV"],[1, "I"]];

  function translate(int) {
    if(int === 0){
      return ""
    }
    for(i=0; i< array.length; i++) {
      if(int >=array[i][0]){
        return array[i][1] + translate(int-array[i][0]);
      }
    }
  }
  
    
    
  
  

//User interface logic //
$(document).ready(function(){
 $("#romanNumerals").submit(function(event){
   event.preventDefault();
  
    var int = $("input#int").val();
    var result = translate(int);
    if (result) {
    $(".return").text(result);
    console.log(result);
    }
  });
});

  // var translate = function(int) {
  // var onesIndex = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
    // var tensIndex = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    
    // if(int.length <2){
    //   int = onesIndex[parseInt(int)]
    //   return int
    // }else if(int.length <3){
    //   newArray = int.split('').reverse();
    //   return (tensIndex[parseInt(newArray[1])]) + (onesIndex[parseInt(newArray[2])])
      
    // };