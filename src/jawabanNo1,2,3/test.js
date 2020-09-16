// jawaban no 1
let character = "abcde"

const reverse = (character) => {
  let charLength = findCharLength(character)
  let reverseString = ""
  function findCharLength(character){
    let length = 0
    while(character[length] !== undefined)
      length++;
    return length;
  }
  for(let i = charLength-1; i>=0; i--){
    reverseString += character[i]
  }
  return reverseString;
}  
  reverse(character)

// jawaban no 2
const fibonacci=(n)=>{
  let stringFibonacci = []
  for(let i = 0; i<=n; i++){
    if(i === 0) stringFibonacci.push(i)
    else if(i === 1) stringFibonacci.push(i)
    else stringFibonacci.push(stringFibonacci[i-1]+stringFibonacci[i-2])
  }
  return stringFibonacci.join(" ")
}

fibonacci(9)

// jawaban no 3
function combination(n,r){
  if(n<=r) {
    return "sorry, n has to be bigger than r, let's try again ;)"
  }else{
    let topResult = n
    for(let i = 1; i<n; i++){
      topResult *= n-i
    }
    
  }
}

combination(4,3)

module.exports.fibonacci = fibonacci
module.exports.reverse = reverse