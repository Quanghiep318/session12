// Thuc hành kiểm tra hàm đối xứng
// let input = prompt("Nhập vào chuỗi kí tự bất kì");
// function isPalindrome(str){
//     // chuyển đổi về dạng chữ thường và loại bỏ khoảng trắng và dấu câu
//     str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     // dao nguoc chuoi
//     let reversed = str.split("").reverse().join("");
//     // So sánh chuỗi gốc với chuỗi đảo ngược
//     return str === reversed;
// }
// console.log(isPalindrome(input));
// console.log(isPalindrome("racecar")); //true
// console.log(isPalindrome("hello"));   // false
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
// // --------------------------------
// Thực hành hàm quy đổi nhiệt độ (dộ C sang độ f)
// function celsiusToFahreheit(celsius){
//     let fahrenheit = celsius * 1.8 +32;
//     return fahrenheit;
// }

// function fahrenheitToCelsius(fahrenheit){
//     let celsius = (fahrenheit - 32) / 1.8;
//     return celsius;
// }

// console.log(celsiusToFahreheit(25));
// console.log(fahrenheitToCelsius(77));
// -----------------------------
// Thực hành hàm tính tổng các phần tử trong mảng

// function sum(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i ++){
//         sum += array[i];
//     }
//     return sum;
// }

// let arr = [1,2,3,4,5,6];
// let arr2 = [10,20,30,40,50];
// let arr3 = [1,3,5,7];
// console.log(sum(arr));
// console.log(sum(arr2));
// console.log(sum(arr3));

// -----------------------------
// Hàm viết hoa chữ cái đầu tiên
function capitalize(str){
    let words = str.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++){
       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

let a = "helLo WORD";
let b = "rIkkEi acaDemY";
console.log(capitalize(a));
console.log(capitalize(b));


