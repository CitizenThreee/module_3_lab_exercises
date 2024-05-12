//Which of the following console.log messages will print? Why?

/*<---------------------------------------------------------------------------------------------------->*/

if (0) console.log('#1 zero is true') //this won't print because 0 == false
if ("0") console.log('#2 zero is true') //this will print because "0" is not an empty string
if (null) console.log('null is true') //this won't print becaues null == false
if (-1) console.log('negative is true') //this will print, because only 0 == false
if (1) console.log('positive is true') //this will print, because only 0 == false

//all print as expected