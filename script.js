console.log("the example sentence is...")
let text = "Hello World";
console.log(text)
console.log("...")
let search = text.search("World");let part = text.slice(4);
console.log("The position of the first occurrence of World is:")
console.log(search)
console.log('this is text.search("World")')
console.log("the part of " + text + " sliced from the 4th letter is")
console.log(part)
console.log("...")


console.log('this is text.slice(4)')
console.log("the part of " + text + " sliced from the 3th letter is")
console.log(part)
console.log("...")
let sub = text.substring(3);
console.log(sub)
console.log('this is text.substring(3)')
console.log("its litterly the same")
console.log("...")
let newText = text.replace("World", "Hello");

console.log('this is text.replace("World", "Hello")')
console.log("it replaced World with Hello")
console.log(newText)
console.log("...")
let leng= text.length

console.log("this is text.length()")
console.log("it measures the length of a string")
console.log("The length of " + text +" is " + leng)
console.log("...")
let upper = text.toUpperCase();

console.log("this is text.toUpperCase();")
console.log("it makes all the letters Upercased")
console.log("" + text +" Upper cased is " + upper)
console.log("...")
let lower = text.toLowerCase();

console.log("this is text.toLowerCase();")
console.log("it makes all the letters Lowercased")
console.log("" + text +" Lower cased is " + lower)
console.log("...")

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat("@ @ @ @ @ @ @ @ @", text2);
console.log('this is text.concat();')
console.log("it joins up to strings together")
console.log(text1 + " and " + text2 + " joined together with @ is:")
console.log(text3)
console.log("...")

let untrimmed = "                    Hello World!                   ";
let trimmed = untrimmed.trim();
console.log('this is text.trim()')
console.log("it trims off the whitespace from text. for example:")
console.log(untrimmed + " trimmed is " + trimmed)
console.log("...")


let include = text.includes("World")
console.log('this is text.includes()')
console.log("it checks if text includes something you put in")
console.log("for example does hello world contain the word hello?")
console.log(include)

