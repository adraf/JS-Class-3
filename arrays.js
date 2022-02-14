const rainbowColors = []

// add orange to end of array
let newLength = rainbowColors.push("Orange");

// add red to start of array
rainbowColors.unshift("Red")

// // add yellow to the end
rainbowColors.push("Yellow")

// // add more colours to the end
rainbowColors.push("Green", "Blue", "Indigo", "Violet")

// // print length
console.log(rainbowColors.length)

// // log second item
console.log(rainbowColors[1])

// // log last item - make it dynamic
console.log(rainbowColors[rainbowColors.length-1])

// // log index of string 'blue'
console.log(rainbowColors.indexOf("Blue"))

// // copy array - pull two colours out of the array
let twoColors = rainbowColors.slice(1,3)

// new array
const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5]

// remove duplicate numbers destructively
nums.splice(3,3)

// other method using 'set' - found on a tutorial
let uniqueNums = [...new Set(nums)];
console.log(uniqueNums)

console.log(rainbowColors)
console.log(twoColors)
console.log(nums)


// array of arrays
const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

// print 'inner array first item'
console.log(arrOfArrs[0][0])

// print 'third' with dynamic index
console.log(arrOfArrs[1][arrOfArrs.length -0])

// Bonus - loop thorugh second inner array and print out each item 
for (let count = 0; count <= 2; count ++) {
 console.log(arrOfArrs[1][count])
}

// top choices
const topFilms = ["Wayne's World", "Matrix", "Back to the Future", "Scream", "Knocked Up"]

for (let i = 0; i < topFilms.length; i++) {
 console.log("My #" + (i+1) + " film is " + (topFilms[i]))
}

// Bonus - top choices
function suffix(i) {
  let result;
  if (i == 1) {
    result = (i + "st");
  }
  else if (i == 2) {
    result = (i + "nd");
  }
  else if (i == 3) {
    result = (i + "rd");
  } 
  else {
    result = (i + "th");
  }
  return result;
}

for (let i = 0; i < topFilms.length; i++) {
  console.log("My " + (suffix(i+1)) + " choice is " + (topFilms[i]))
 }