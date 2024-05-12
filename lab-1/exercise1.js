//What are the results of these expressions? (answer first, then use console.log() to check)

/*<---------------------------------------------------------------------------------------------------->*/

"" + 1 + 0; /*result will be "10"  */ console.log("" + 1 + 0); // "10"
"" - 1 + 0; /*result will be -1  */ console.log("" - 1 + 0); // -1
true + false; /*result will be 1  */ console.log(true + false); // 1
!true; /*result will be false  */ console.log(!true); // false
6 / "3"; /*result will be 2  */ console.log(6 / "3"); // 2
"2" * "3"; /*result will be 6  */ console.log("2" * "3"); // 6
4 + 5 + "px"; /*result will be "9px"  */ console.log(4 + 5 + "px"); // "9px"
"$" + 4 + 5; /*result will be "$45"  */ console.log("$" + 4 + 5); // "$45"
"4" - 2; /*result will be 2  */ console.log("4" - 2); // 2
"4px" - 2; /*result will be -1  */ console.log("4px" - 2); // NaN  || my thiking was that "4px" converts to true, which converts to 1, but I forgot about NaN
" -9 " + 5; /*result will be " -9 5"  */ console.log(" -9 " + 5); // " -9 5 "
" -9 " - 5; /*result will be -14  */ console.log(" -9 " - 5); // -14
null + 1; /*result will be 1  */ console.log(null + 1); // 1
undefined + 1; /*result will be 1  */ console.log(undefined + 1); // NaN  || forgot about NaN again, non-existent value is unknown
undefined == null; /*result will be true  */ console.log(undefined == null); // true
undefined === null; /*result will be false  */ console.log(undefined === null); // false
" \t \n" - 2; /*result will be -1  */ console.log( " \t \n" - 2 ); // -2  || my thinking was the same as the ones I got wrong above, in which case this should be NaN, but what I think is going on is that the string is converted to an html string because \t and \n are html symbols, and that must convert to 0 unlike a regular string

