function add(sum) {
  function func(number) {
    sum += number
    return func
  }
  func.toString = function() { return sum }

  return func
}

//output
//add(10)
//10
//add(10)(20)(30)
//60