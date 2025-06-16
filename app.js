// 1-masala
// let son = prompt("son kiritng");
// son = parseInt(son);

// if (isNaN(son) || son < 100 || son > 999) {
//     alert("to'g'ri son kiriting");
// } else {

//     let yuzlik = Math.floor(son / 100);
//     let onlik = Math.floor((son % 100) / 10);
//     let birlik = son % 10;

//     if (yuzlik !== onlik && yuzlik !== birlik && onlik !== birlik) {
//         alert("har xil");
//     } else {
//         alert("bir xil");
//     }
// }


// 2-masala
// function calc(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(calc(3, 7));


// 3, 4-masala
// function avarage(a, b, c) {
//     let arr = [a, b, c];
//     arr.sort((x, y) => x - y);
//     return arr;
// }
// console.log(avarage(10, 5, 8)); 


// 5-masala
// function isPalindrom(N) {
//     let str = N.toString();
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// console.log(isPalindrom(1678761)); 
// console.log(isPalindrom(123321)); 
// console.log(isPalindrom(78987));    
// console.log(isPalindrom(123456));   


// 6-masala
// function getDividersNumberAndSum(N) {
//     let c = 0;
//     let s = 0;
//     for (let i = 1; i <= N; i++) {
//         if (N % i === 0) {
//             c++;
//             s += i;
//         }
//     }
//     return [c, s];   
// }
// console.log(getDividersNumberAndSum(12));


// 7-masala

// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: "D", 9: "A", 10: "B" };
// const myAnswers = { 1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "B" };
// let right = 0;

// for (let key in rightAnswers) {
//     if (rightAnswers[key] === myAnswers[key]) {
//         right++;
//     }
// }

// let total = Object.keys(rightAnswers).length;
// let incorrect = total - right;

// console.log(`Correct answers: ${right}`);
// console.log(`Incorrect answers: ${incorrect}`);


// 8-masala

// const arr = ["Abdulaziz", "Safarmurod", "O'rol", "Jahongir"];
// function arr(array) {
//     let result = {};
//     for (let str of array) {
//         result[str] = str.length;
//     }
//     return result;
// }

// console.log(arr(arr));



// 9-masala
// const str = "George Raymond Richard Martin";
// const nextStr = str.split` `.map(s => s[0]).join``;
// console.log(nextStr); 

// 10-masala
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const juftSonlar = arr.filter(num => num % 2 === 0);
// const toqSonlar = arr.filter(num => num % 2 !== 0);

// console.log("Juftlar: " juftSonlar);  
// console.log("Toqlar: " toqSonlar); 
