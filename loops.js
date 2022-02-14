
// log every number from 1 to 10
for(let count = 1; count <= 10; count = count + 1) {
  console.log(count)
}

// log every number form 4 to -16
for(let count = 4; count >= -16; count -= 1) {
  console.log(count)
}

// log every fourth number from 8 to 41
for (let count = 8; count <41; count +=4) {
  console.log(count)
}

// fizzbuzz
for (let count = 1; count <=100; count +=1) {
  if ((count%3 === 0) && (count%5 === 0)) {
    console.log(count + " FizzBuzz")
    } else if (count%5 === 0) {
    console.log(count + " Buzz")
    } else if (count%3 === 0) {
    console.log(count + " Fizz")
    } else {
      console.log(count)
    }
}

// bonus times tables
for (let count = 1; count <=12; count +=1) {
  console.log(count + " x 9 = " + (count*9))
}

//bonus bonus times tables
for (let count = 1; count <=12; count +=1) {
  for (let otherCount = 1; otherCount <=12; otherCount +=1)
  console.log(count + " x " + otherCount + " = " + (count*otherCount))
}