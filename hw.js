

//Exercise 1
function sum(int1, int2){
    if(int1 === int2){
        return (int1 + int2) * 3
    }
    else {
        return int1 + int2
    }
}
console.log(sum(5, 8));

//Exercise 2

function numCheck(n1, n2) {
    return n1 === 50 || n2 === 50 || n1 + n2 === 50
  }
  console.log(numCheck(50, 1));

  //Exercise 3
  function remove(str, plc){
    return str.slice(0, plc -1) + str.slice(plc)
  }
    console.log(remove("I want a beer", 8))

//Exercise 4
function largestInt(in1, in2, in3)
{
    if (in1 > in2 && in1 > in3){
        return in1
    }
    else if (in2 > in1 && in2 > in3){
        return in2
    }
    else if (in3 > in1 && in3 > in2){
        return in3
    }

}
console.log(largestInt(8, 10, 1));

//Exercise 5
function range(int1, int2){
    if (int1 >= 40 && int1 <= 60 && int1 >= 40 && int1 <= 60 ){
        return "between 40 ~ 60"
    }
    else if (int1 >= 70 && int1 <= 100 && int1 >= 40 && int1 <= 100 )
    {
        return "between 70 ~ 100"
}
else {
    return "not in range"
}
}
console.log(range(40, 100))


//Exercise 6

const copyStr = (str, n) => {
    let newStr = ""
    for (let i = 0; i < n; i++) {
      newStr += str + " "
    }
    return newStr
  }
  console.log(copyStr("Funky Town", 12))

  //Exercise 7
  // Ex 7 is running but not returning the answer expected
  function first3(str){
 
    if (first3 === "Los" || first3 === "New")
    {
        return str
    }
    else {
        return 'blank'
    }

  }

  console.log(first3('New Orliens'))

  //Exercise 8

  function calculate(arr){
    let int = 0
    for(let i =0; i< arr.length; i++)
    {
    int += arr[i]
    }
    return int
  }
  console.log(calculate([12, 98, 812]));

  //Exercise 9

  function examine (arr){
    let outcome = false
    for (let i = 0; i < arr.length; i++){
        const int = arr[i]
    if (int === 1 || int === 3){
        outcome = true
    }
    return outcome
    
  }
}
  console.log(examine([3, 2]));
//Exercise 10

