

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

function noMatch(arr) {
    let diff = true
    if (arr.includes(1) || arr.includes(3)) {
      diff = false
    }
  
    return diff
  }
   console.log(noMatch([1, 5]));

   //Exercise 11

   function longString(arr){
    let firsLength = 0
    let newLength = ""

    for (let i = 0; i < arr.length; i++)
    {
        const str = arr[i]

        if (firstLength = str.length ){
            firstLength = str.length
            newLength = str
        }
    }
    return newLength

   }
   console.log(longString(['ou812', 'peace', 'burn one down']));

   //Exercise 12

    function type(ang) {
  switch (true) {
    case ang >= 0 && ang < 90:
      return "Acute angle";
      break;

     case ang === 90:
      return "Right angle";
      break;

     case ang > 90 && ang < 180:
       return "Obtuse angle";
       break;

      case ang === 180:     
       return "Straight angle";
       break;

     default:
       return "angle not found";
      break;
  }
 }
 console.log(type(360));

 //Exercise 13
 function greatestElement(arr) {
 return arr.indexOf(Math.max.apply(null, arr));
 };
 console.log(greatestElement([8, 420, 77]));

 //Exercise 14

 function findLargeEven(arr) {
    let even = []
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i]
  
      if (num % 2 === 0) {
        even.push(num)
      }
    }
  

  
      return Math.max.apply(null, arr);
  }
   console.log(findLargeEven([1000, 91, 69, 71, 91]));

   //Exercise 15
   function pollarInt(n1, n2){
    return(n1 < 0 && n2 > 0)|| (n1 > 0 && n2 < 0)
   }
   console.log(pollarInt(5, 8))