const convertToCelsius = (num) => {
  const tempCel = (num-32)*(5/9)
  return tempCel
}

const userDegree = Number(prompt(`enter your degree in fahrenheit`))
convertToCelsius (userDegree)

const degreeCel = convertToCelsius(userDegree)
if(!userDegree && userDegree!==0) {
// !  hi       &&  hi !==0
// !  NaN      &&   ! fale
//   true      &&    true
//            true
//  !  0       &&   0 !== 0   
//  !  false   &&   ! true
//            false
//  !  20      &&   20 !==0
//  !  true    &&   ! false
//            false
  alert(`please enter a number`)
} else {
  alert(`your entered degree is equal to ${degreeCel} degree in celsius`)
}
  
if(userDegree<32) {
  alert(`this is a very cold temperature`)
} else if(userDegree<64) {
  alert(`this is a cold temperature`)
} else if(userDegree<86) {
  alert(`this is a warm temperature`)
} else if(userDegree<100) {
  alert(`this is a hot temperature`)
} else if(userDegree>=100) {
  alert(`this is a very hot temperature`)
}

console.log(userDegree)

