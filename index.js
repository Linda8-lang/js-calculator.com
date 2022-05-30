//jQuery used to build the project
$(document).ready(function(){
    //Stores the inputs from user to calculate later
   var inputs=[""];
   //String to store current input string
   var totalString;
  //Operators array for validation without .
   var operators1 = ["+","-","&divide;","&times;"];
  //operators array for validation with .
   var operators2 = ["."];
   //Numbers array for validation
   var nums=[0,1,2,3,4,5,6,7,8,9];
   //Adds value to inputs array and checks validation
   function getValue(currVal){
      if(operators2.includes(inputs[inputs.length-1])===true && currVal==="."){
     console.log("Duplicate '.'");
   }
       //Validation so it doesn't start with an operator
     else if(inputs.length===1 && operators1.includes(currVal)===false){
       inputs.push(currVal);
     }
     //If last character was not an operator add operator to the array
   else if(operators1.includes(inputs[inputs.length-1])===false){
     inputs.push(currVal);
   }
     else if(nums.includes(Number(currVal))){
       inputs.push(currVal);
     }
     update();
   }
   function update(){
     totalString= inputs.join("");
     $("#display").html(totalString);
     console.log(inputs);
   }
   function getTotal(){
     totalString = inputs.join("");
     $("#display").html(eval(totalString));
   }
   
   $(".button").on("click", function(){
     if(this.id==="deleteAll"){
       inputs = [""];
       update();
     }
     else if(this.id==="backOne"){
       inputs.pop();
       update();
     }
     else if(this.id==="total"){
       getTotal();
     }
     else{
       
       //error1
       if(inputs[inputs.length-1].indexOf("+","-","&divide;","&times;",".")===-1){
         getValue(this.id);
       }
       else {
         getValue(this.id);
       }
     } 
   });
   
 });
 /*
 $(document).ready(function(){
  //storing current variables and characters to be used later
   var inputs=[""];
   var totalOutput;
   var nums=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   var operators1=["+", "-", "&times;", "&divide;"];
   var operators2=["."];
   //Displays inputs and outputs
   function calcDisplay(val){
     //check if the last input has an operator and a decimal point
     //Avoid duplication of decimal point in the same number
     if(operators2.includes(inputs[inputs.length-1]) === true && val === "."){
       console.log("Duplicate '.'")
     } 
     //check if the first input is a number and not an operator
     else if(inputs.length === 1 && operators1.includes(val) === false){
       inputs.push(val);
     } 
     //check if the last character is an operator, if not go ahead and add it
     else if(operators1.includes(inputs[inputs.length-1])===false)
     {
       inputs.push(val);
     } 
     else if(nums.includes(Number(val)))
     {
       inputs.push(val);
     }
    // update();
   } 
   //function to update the changes
   function update(){
     totalOutput = inputs.join("");
     $("#display").html(totalOutput)
   }
   //The total to be displayed
   function getTotal(){
     totalOutput= inputs.join("");
     $("#display").html(eval(totalOutput));
   }
   //add click handler to  all the buttons
   //validating the operators and numbers
   $(".button").on("click", function(){
     if(this.id==="clear"){
       inputs = [""]
       update();
     }
     else if(this.id==="equals")
     {
       getTotal();
     }
     else 
     {
       if(inputs[inputs.length - 1].indexOf("+", "-" ,"&times;", "&divide;")===-1){
         calcDisplay(this.id)
       }
                                                                   
   else{
     calcDisplay(this.id);
          } 
         }
       }
   });
 }); */