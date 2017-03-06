// Solution using 2 higher-order functions: .filter and .reduce
function sumFizzBuzzFactors(maximum){
    let range = [...Array(maximum).keys()];
    return range
      .filter( num => (num % 3 === 0 || num % 5 === 0 ) )
      .reduce( (a,b) => a + b );

//// Solutions Using a single higher order functions

// Solution: .forEach
function sumFizzBuzzFactors(maximum, arr=genArray(maximum)){
  let sum = 0
  arr.forEach(num => {
    if(!(num % 3) || !(num % 5)){
      sum += num
    }
  })
  return sum
}

// Solution: .reduce
function sumFizzBuzzFactors(maximum, arr=genArray(maximum)){
  return arr.reduce((acc, curr) => {
    return !(curr % 3) || !(curr % 5)
      ? acc + curr
      : acc
  }, 0)
}

// Creates array using max number. Used in previous two solutions.
function genArray(num, arr=[]){
  for(let i=0; i<num; i++){
    arr.push(i)
  }
  return arr
}

//// Recursion-based Solutions

// straight-forward recursion
function sumFizzBuzzFactors(maximum, current = 1, sum = 0) {
  let updatedSum = !(current % 3) || !(current % 5) ? sum + current : sum
  return current === maximum ? sum : sumFizzBuzzFactors(maximum, current + 1, updatedSum)
}


//recursive reduce-implementation
function sumFizzBuzzFactors(maximum) {
  let range = [...new Array(maximum).keys()];
  return recursiveReduceSum(0, range);
}

function recursiveReduceSum(acc, collection) {
  if (collection.length) {
    //plucks off first value of collection
    let current = collection.shift();

    let multiplier = (current % 3 === 0 || current % 5 === 0) ? 1 : 0;
    //multiply current value by 0 if not divisble by 3*5
    let addend = current * multiplier;

    let collSum = acc + addend;
    return recursiveReduceSum(collSum, collection);
  } else {
    //returns accumulator/base if collection has been emptied
    return acc;
  }
}
