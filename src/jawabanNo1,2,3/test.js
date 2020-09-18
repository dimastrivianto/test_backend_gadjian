// jawaban no 1
let character = "abcde"

const reverse = (character) => {
  function findCharLength(character){
    let length = 0
    while(character[length] !== undefined)
    length++;
    return length;
  }
  
  let charLength = findCharLength(character)
  let reverseString = ""
  for(let i = charLength-1; i>=0; i--){
    reverseString += character[i]
  }
  return reverseString;
}  
  reverse(character)

// namanya ganti array
// jawaban no 2
const fibonacci=(n)=>{
  let arrayFibonacci = []
  for(let i = 0; i<=n; i++){
    if(i === 0) arrayFibonacci.push(i)
    else if(i === 1) arrayFibonacci.push(i)
    else arrayFibonacci.push(arrayFibonacci[i-1]+arrayFibonacci[i-2])
  }
  return arrayFibonacci.join(" ")
}

fibonacci(9)

// jawaban no 3
function combination(n,r){
  if(n<=r) {
    return "sorry, n has to be bigger than r, please try again"
  }else{
    let topResult = n
    for(let i = 1; i<n; i++){
      topResult *= n-i
    }
    let firstBottomResult = r
    for(let i = 1; i<r; i++){
      firstBottomResult *= r-i
    }
    let secondBottomResult = n-r
    for(let i = 1; i<(n-r); i++){
      secondBottomResult *= (n-r)-i
    }

    let finalResult = topResult / (firstBottomResult * secondBottomResult)
    return finalResult
  }
}

combination(4,2)

module.exports.fibonacci = fibonacci
module.exports.reverse = reverse

