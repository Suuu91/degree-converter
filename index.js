const convertToCelsius = (num) => {
  const tempCel = (num-32)*(5/9)
  return tempCel
}

const userDegree = Number(prompt(`enter your degree in fahrenheit`))
convertToCelsius (userDegree)

const degreeCel = convertToCelsius(userDegree)
if(!userDegree) {
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


