// Bài 1: Viết chương trình tạo hàm tính tổng 2 số  

// function sum(a,b) {
//     console.log(`Tong 2 so la ${a+b}`)
// }
// console.log(sum(1,2));

// Bài 2: Viết chương trình tạo hàm tính diện tích và chu vi hình tròn 
// function chuvi(bankinh) {
//     let chuvi = bankinh * 2 * Math.PI;
//     return chuvi;
// }
// console.log("Chu vi bang ", chuvi(2));

// Bài 3: Viết chương trình tạo hàm kiểm tra xem ký tự nhập vào có phải ký tự số hay không? 
// let input = prompt("Nhập vào dữ liệu bất kì");
// function Number(input){
//     if(Number(input) === `Number`){
//         console.log("Đây là ký tự số");
//     }
//     else {
//         console.log("Đây không phải là kí tự số");
//     }
// }
// function kiemtrakytu(input){
//     //isNan là 1 số => false
//     //isNan(input) là 1 ky hoac du lieu khac => true
//     return !isNaN(input)
// }
// let input = prompt("Nhập vào dữ liệu bất kì");
// if(kiemtrakytu(input)){
//     console.log("kí hiệu nhập vào là một chữ số");
// } else {
//     console.log("kí hiệu là không phải là 1 chữ ssoo")
// }


// ----------Ham notanumber--------------
// let a = 10;
// let b = 'b';
// let c = a * b;
// console.log(c);

// Bài 4: Viết chương trình cho người dùng nhập vào một số, kiểm tra xem số đưa vào có phải nguyên dương không? Nếu đung trả vè true, sai trả về false  

// function checkNumber(number){
//     if(number > 0){
//     return true;
//     } else if (number === 0){  
//     return 0;
//     } else {
//         return false;
//     }
// }
// let input = Number(prompt("Nhập vào dữ liệu bất kì"));
// console.log(checkNumber(input));
// Bài 5: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ 2 số nguyên đó 
// function swapNumber(a,b){
//     // tạo biến temp dể luuwu trữ number 1
//     let temp = a;
//     a = b, 
//     b = temp;
//     return[a,b]
// }

// let number1 = Number(prompt("nhap so bat ki"));
// let number2 = Number(prompt("nhap so bat ki"));
// console.log(swapNumber(number1,number2));

// ----------------------------------
// Bài 1: Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó 

// function findMinNumber(number1, number2, number3) {
//     let min = number1;
//     if(number2 < min){
//         min = number2;
//     }
//     if(number3 < min){
//         min = number3
//     }
//     return min
// }

// for (let i = 0; i < 3; i++){
//    let input = Number(prompt(`"Nhập số thứ " ${i+1} " bất kì"`));
//     }
// console.log(findMinNumber();
// // function func1(a) {

//     if (a == 2) {
    
//     return 2;
    
//     }
    
//     return a * func1(a - 1);
    
//     }
    
//     console.log(func1(5));

// Tao hàm cho người dùng nhập vào 2 số và tính tổng 2 số đó
// function sum(a,b){
//     return a +b
// }
// console.log(sum(1,2));
// Check xem số thứ nhẩ có lớn hơn số thứ 2 hay không
// function sum(a,b){
//     return (a>b);
// }


// 
// function timSoNguyenTo(number) {
//     if(number <2){
//         return false
//     }
//     for (i = 2; i < number; i++){
//         if(number % i ===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(timSoNguyenTo(prompt("Nhập số bất kì")));

// Bài 5:  Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Thực thi hàm vừa khởi tạo 
//  function factorial(a){
//      if (a === 0){
//          return 1;
//      }
//      return a * factorial(a-1);
//  }
//  console.log(factorial(parseInt(prompt("Nhập số bất kì"))));

// Bài 6: Cho người dùng nhập vào chuỗi số bất kì. Viết hàm sắp xếp chuỗi số đó từ bé đến lớn 

// let n = prompt("Nhap vao day so bat ki duoc ngan cach boi dau ,");
// let convert = n.split(",");
// console.log("chuyen doi string sang array",convert);
// convert.sort(function(a,b) {return a-b});
// console.log(convert);

// Bài 7: Viết chương trình tạo hàm để kiểm tra xem năm người dùng nhập vào có phải năm nhuận không 
// function namnhuan(a){
//     if(a % 100 == 0){
//         if( a % 400 == 0){
//             return true;
//         }

//          else {
//         return false;
//     }
//     }
//     else if (a % 4 == 0) {
//         return true;
        
//     }
//     else {
//         return false;
//     }
// }
// console.log(namnhuan(2045));
// console.log(namnhuan(2020));