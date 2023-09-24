// Chapter 21 (Changing Case)

// Question No. 1

var allLower = userInput.toLowerCase;

var allLower = userInput.toLowerCase();



// Question No. 2

var x = x.toLowerCase();



// Question No. 3

var y = y.toUpperCase();



// Question No. 4

var originalStr = "This is Original String";
var lowerCasedStr = originalStr.toLowerCase();




// Question No. 5

var originalArr = ["HASSAN" , "WASEEM", "ASAD", "QASIM", "ANEES"];
var lowerCasedArr = originalArr.toLocaleString('').toLowerCase();

// -------------OR-------------

var originalArr2 = ["Second Solution"];
var lowerCasedArr2 = originalArr2[0].toLowerCase();



// Question No. 6

var alertStr = "hello user...";
var upperCasedStr = alertStr.toUpperCase();
alert(upperCasedStr);




// Question No. 7

var cityName = "kaRacHi";
var firstChar = cityName.slice(0,1).toUpperCase();
var remainChar = cityName.slice(1).toLowerCase();
var updateCityName = firstChar + remainChar;
 

// Chapter 21 (Changing Case) Completed


// Chapter 22 - 25 (Strings)


// Question No. 1

var sameWords = "captain";
var sliceWord = sameWords.slice(1,3);



// Question No. 2

var myStr = "This is String";
var numOfChar = myStr.length;



// Question No. 3

// var anim/al = "elephant";
var seg = animal.slice(2, 6);



// Question No. 4

var str = "Hello World...";
var lengthStr = str.length;



// Question No. 5

var realString = "Pakistan Zindabad";
var charCount = realString.length;
var charSlice = realString.slice(1 , -3);



// Question No. 6

var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);



// Question No. 7

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);



// Question No. 8

var texts = "You can go, Let's go";
var secondIndx = texts.lastIndexOf("go");
console.log(secondIndx);



// Question No. 9

var strings = "May be";  

if(strings[2] === "y"){
    console.log("Yes");
}




// Question No. 10

var abcStr = "abcde";
var charIndex = abcStr.charAt(2);
console.log(charIndex);
// Result is "c"




// Question No. 11

var text123 = "Your texts goes here";
var textChar = text123.charAt(9);
console.log(textChar);
// Result is "s"




// Question No. 12

var stri = "STRI stand for String";
var lastChar = stri.charAt(stri.length -1);
console.log(lastChar); 




// Question No. 13

var input = "JavaScript";
var chaInput = input.charAt(4);
console.log(chaInput);




// Question No. 14

var myString = "Hassan Hanif";

if(myString.charAt(2) === "s"){
    console.log("Correct");
}




// Question No. 15

var reply = "no, no way, nothing";
var replyArr = [];

for(var i = 0; i < reply.length; i++){
    replyArr.push(reply.charAt(i));
}
console.log(replyArr);

var  revisedReply = reply.replace("no", "yes");
console.log(revisedReply);




// Question No. 16


var str2 = "12345";

for(var i = 0; i < str2.length; i++){
  if(str2.slice(i,i+1) === "1"){
    str2 = str2.slice(0,i) + "one" + str2.slice(i+1);
  }
}
console.log(str2);



// Question No. 17

var y = x.replace(/a/g, "z");


// Chapter 22 - 25 (Strings) Completed

// Chapter 26 (Rounding Numbers)


// Question No. 1

var round = Math.round(1.5);
console.log(round);



// Question No. 2

var origNum = 2.1;
var roundNum = Math.ceil(origNum);
console.log(roundNum); 



// Question No. 3

var originalNum = 4.9;
var downNum = Math.floor(originalNum);
console.log(downNum);



// Question No. 4

var realNum = 5.2;
var roundNumber = Math.round(realNum);
console.log(roundNumber);



// Question No. 5

var myNum = 0.5;
var reverseNum = Math.floor(myNum);
console.log(reverseNum);


// Chapter 26 (Rounding Numbers) Completed


// Chapter 27 (Random Numbers)

// Question No. 1

var randomNum = (Math.random() * 50) +1;
console.log(randomNum);



// Question No. 2

var randomNumber = Math.random();
console.log(randomNumber);



// Question No. 3

var dice = Math.ceil(Math.random() * 6);
console.log("You rolled a", dice);



// Question No. 4

var toss = Math.round(Math.random());

if(toss == 1){
    console.log("Head");
}
else(console.log("Tail"));


// Chapter 27 (Random Numbers) Completed


// Chapter 28, 29 (Converting Strings)


// Question No. 1

var strNum = "789";
var convertInteger = parseInt(strNum);

console.log(typeof convertInteger, convertInteger);



// Question No. 2

var strNumber = "123";
var strInteger = +(strNumber);

console.log(typeof strInteger, strInteger);




// Question No. 3

var numStr = "3.12326";
var float = parseFloat(numStr);

console.log(typeof float, float);




// Question No. 5

var num = 12345;
var numToStr = "" + num;

console.log(typeof numToStr, numToStr);




// Question No. 6

var num42 = 42;
var numToStr42 = "" + num42;

console.log(typeof numToStr42, numToStr42);




// Question No. 7

var strDecimal = "3.14";
var IntegerValue = parseInt(strDecimal) + "";

console.log(IntegerValue);




// Chapter 28, 29 (Converting Strings) Completed

// Chapter 30 (Controlling the length of decimals)


// Question No. 1

var number = 12.589632;
var newNum = number.toFixed(4);

console.log(typeof newNum, newNum);



// Question No. 2

var num_ber = 34.56789;
var strConvertNum = num_ber.toFixed(2);

console.log(typeof strConvertNum, strConvertNum);

var strConvertNum = parseFloat(num_ber.toFixed(2));
console.log(typeof strConvertNum, strConvertNum);



// Question No. 3

if(num.toFixed(2).toString().length > 4){
  console.log(true);
}




// Question No. 4

var decimalNumber = 98.76543;
var decimalString = decimalNumber.toFixed(2);

alert(typeof decimalString + " " + decimalString);


// Chapter 30 (Controlling the length of decimals) Completed


// ============================END============================



