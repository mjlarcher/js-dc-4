/**
 * Question 1
 * Create an empty array and store it in a variable named code.
 */

var code = []

// console.log (code)

 /**
  * Question 2
  * Add the following characters to the end of the code array:
  * 'x', 'u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 'n',
  * 'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r',
  * 'o', 'm', 'c'
  */

code.push ('x', 'u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 'n',
   'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r',
   'o', 'm', 'c')

// console.log (code)

/**
 * Question 3
 * Remove the first and last elements of the array.
 * Hint: You may need to look up a method we haven't talked about.
 */

code.splice (19,3)
code.splice (0,3)

// console.log ( code )


/**
 * Question 4
 * Reverse the array.
 */



code.reverse ()

// console.log ( code )


/**
 * Question 5
 * Replace the last element in the array with an 'e'.
 * Hint: Use length
 */

// console.log ( code.length )  // => 16  

code.splice (15,1, 'e')

// console.log ( code )


/**
 * Question 6
 * Replace the 5th element and 14th element with space characters.
 * Hint: remember indexes start at 0!
 */

code.splice (4,1, " ")
code.splice (13,1, " ")

// console.log ( code )

/**
 * Question 7
 * Join the array with an empty String in between each character and log the
 * result to the console.
 */

var emptyString = ' '

// console.log ( code.length )

console.log ( code [0] + emptyString, code [1] + emptyString, code [2] + emptyString, 
	code [3] + emptyString, code [4] + emptyString, code [5] + emptyString, code [6] + emptyString, 
	code [7] + emptyString, code [8] + emptyString, code [9] + emptyString, code [10] + emptyString, 
	code [11] + emptyString, code [12] + emptyString, code [13] + emptyString, code [14] + emptyString, 
	code [15] + emptyString)



