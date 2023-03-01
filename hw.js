

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
