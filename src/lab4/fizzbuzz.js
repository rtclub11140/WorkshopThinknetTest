const fizzBuzz = (number) => {
  const inputNumber = number || 15
  if((number%3 === 0) && (number%5 === 0)){
      inputNumber = 'fizz buzz'
  }else if(number%3 === 0){
      inputNumber = 'fizz'
  }else if(number%5){
      inputNumber = 'buzz'
  }  
}

export {fizzBuzz}