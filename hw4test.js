//<html>
   // <body>
    
       // <h2>Hanoof Alsuwailem HW4</h2>
      
            var number = parseFloat(prompt('Please Enter a Number Between 2 and 10'));
            
            //if the input is not valid
            if (number < 2 || number > 10) {
                //tell the user invalid number
                document.write('<h2 style="color:red">Your input is  ' + number + '. The valid input is between 2 and 10. Please reload this page and try again</h2>');
            } else { //otherwise it is
                //print the user's number
                document.write('<h2>Your input is' + number + '</h2>');
  
                //continue
                var numTimes = 0; //create a variable to store number of times
                var n = number;
    
                while (n > 0.000001) { 
                    n = n / 2.0;
                    numTimes++;
                }
                
                //now print results
                document.write("<h1>The number of times to divide the number " + parseInt(number) + " by 2 to get a value less than one millionth is " + parseInt(numTimes) + "</h1>");
             document.write("<br /><br /><br />"); //so the stars are below this output
            
                //the outer loop is for the rows (lines)
                for (var i=number; i>=1; i--) {
                    //inner loop is for the columns (the stars on the row (line))
                    for (var j=0; j<i; j++) {
                        document.write("*");
                    }
                    
                    document.write("<br />"); //go to next line
                }
            }
                 
   
   // </body>
//</html>


