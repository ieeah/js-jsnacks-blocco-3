const numbers = [4, 9, 16, 25];
const newArr = numbers.map(myfunction);


function myfunction(num) {
    return num * num;
}

console.log(newArr);