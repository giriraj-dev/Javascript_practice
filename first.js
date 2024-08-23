// /*--object having different types of vriable--*/

// const profile = {
//   fullName: "shraddhakhapra",
//   isfollow: true,
//   post: 195,
//   followers: 589,
//   following: 4,
//   bio: "Enterpreneur Apna college|EX-Microsoft,DRDO To educate someone is highest priviledge",
// };

// /*--------camparison operator--------*/

// let a = 2;
// b = 2;
// console.log("a+b=", a + b);
// console.log("a-b=", a - b);
// console.log("a/b=", a / b);
// console.log("a*b=", a * b);
// console.log("a%b=", a % b);
// console.log("a**b=", a ** b);

// /*--------conditional statements--------*/

// let Number = prompt("Enter a number");
// console.log("Number", Number);
// if (Number % 5 == 0) {
//   console.log("IT IS MULTIPUL OF 5");
// } else {
//   console.log("IT IS NOT MULTIPUL OF 5");
// }

// /*--------finding grades using conditional statements-------- */

// let n = prompt("Enter your score");
// console.log("Score", n);
// if (n >= 80 && n <= 100) {
//   console.log("Your have got grade A");
// } else if (n >= 70 && n <= 79) {
//   console.log("Your have got grade B");
// } else if (n >= 60 && n <= 69) {
//   console.log("Your have got grade C");
// } else if (n >= 50 && n <= 59) {
//   console.log("Your have got grade D");
// } else if (n >= 0 && n <= 49) {
//   console.log("Your have got grade F");
// }

// /*--------odd numbers--------*/

// for (let i = 1; i <= 200; i++) {
//   if (i % 2 !== 0) {
//     console.log("odd numbers are", i);
//   }
// }

// /*--------game to find the correct number--------*/

// let gameNum = 25;
// let num = prompt("Enter your number");
// console.log(num);
// while (num != gameNum) {
//   num = prompt("Enter your number again:-");
// }
// console.log("congratualation");

// /*--------string--------  */

// let str = prompt("Enter your name");
// let res = "@" + str + str.length;
// console.log("your new name is", res);

// /*--------average of marks-------- */

// var marks = [85, 97, 44, 37, 76, 60];
// var sum = 0;
// var length = length(number) / length(number[0]);
// for (i = 0; i > marks.length; i++) {
//   sum = sum + marks[i];
// }
// for (let val of marks) {
//   sum = val + sum;
//   let avg = sum / marks.length;
//   console.log(`the average is=${avg}`);
// }

// /*--------vowel using function--------*/

// function vowel(str) {
//   let vowel = "";
//   let consonent = "";
//   for (let i = 0; i <= str.length; i++) {
//     let char = str[i];
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       vowel++;
//     } else {
//       consonent++;
//     }
//   }
//   return { vowel, consonent };
// }
// console.log(vowel("sdfghjklzxcvbnmqwrtypaeiou"));

// //For a given array print the square of each number

// arr = [9, 5, 7, 2];

// arr.forEach(function square(val) {
//   console.log(val * val);
// });
// //arrow method------
// let calculate = (val) => {
//   console.log(val * val);
// };
// arr.forEach(calculate);

// //--------filter method--------

// marks = [34, 98, 89, 90, 97, 94, 93, 100];

// let newarr = marks.filter((val) => {
//   return val === 90;
// });
// console.log(newarr);

// let o = prompt("enter your number=");
// arr = [];
// for (let i = 0; i < n; i++) {
//   arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log("sum=", sum);

// let full = arr.reduce((res, curr) => {
//   return res * curr;
// });
// console.log("mul=", full);

// arr = [4, 6, 5, 3];

// let mul = arr.map((val) => {
//   return val * 2;
// });
// console.log(mul);

// let sam = arr.filter((val) => {
//   return val % 3 == 0;
// });
// console.log("sum=", sam);

// let div = arr.reduce((res, curr) => {
//   return res / curr;
// });
// console.log(div);

// let sub = (val) => {
//   console.log(val * val);
// };
// arr.forEach(sub);

// arr.forEach((val) => {
//   console.log(val * val);
// });

// const name = "Sad";
// const object = {
//   name: "raj",
//   marks: 34,
//   printmarks: () => {
//     console.log(this);
//   },
// };

// object.printmarks();

// /*--------callBack & callBack hell--------*/

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data=", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// console.log("fetching data.......");
// getData(1, () => {
//   console.log("fetching next data.......");
//   getData(2, () => {
//     console.log("fetching last data.......");
//     getData(3);
//   });
// });

// /*--------Promise method to handle callback hell--------*/

// function asyncfunc1() {
//   return new Promise((resolve, result) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 3000);
//   });
// }

// function asyncfunc2() {
//  return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 3000);
//   });
// }

// function asyncfunc3() {
//   return new Promise((resolve, reject) => {
//      setTimeout(() => {
//        console.log("data3");
//        resolve("success");
//      }, 3000);
//    });
//  }

// console.log("fetching data1......");
// let p1 = asyncfunc1();
// p1.then((res) => {
//   console.log("fetching data2......");
//   let p2 = asyncfunc2();
//   p2.then((res) => {
//     console.log("fetching data3......");
//     let p3 = asyncfunc3();
//     p3.then((res) => {});
//   });
// });

// /*--------Async-await method to handle callback hell--------*/

// function api(){
//   return new position ((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("weater data");
//       resolve(200);
//     },2000);
//   });
// }

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data=", dataId);
//       resolve("success");
//       },1000);
//   });
// }

// async function getAllData(){
  
//   console.log("fetching data1......");
//   await getData("hello");
//   console.log("fetching data2......");
//   await getData("are you there?");
//   console.log("fetching data3......");
//   await getData("yes I'm!!!");
//   console.log("fetching data4......");
//   await getData("see you soon then.");
//   console.log("fetching data5......");
//   await getData("yes! ok bye.");
// }

// getAllData();
// console.log();

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";

// let newText = document.createElement("p");
// newText.innerText="hey fam!!!!!!";


// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.body.prepend(newBtn);
// document.body.append(newText);
// let btn1 = document.querySelector("button");
// btn1.onclick=(e)=>{
//   alert("hello");
//       console.log(e.type);
//       console.log(e.target);
//       console.log(e.clientX);
//       console.log(e.clientY);
// };
// ////

// document.querySelector("#btn3").ondblclick=(e)=>
//   {alert('toodles!!');
//    console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX);
//   console.log(e.clientY);};

// //////

// let mouse = document.querySelector("div");

// mouse.onmouseover=(e)=>{
//   console.log(e.type);
//       console.log(e.target);
//       console.log(e.clientX);
//       console.log(e.clientY);
//     mouse.onclick=(e)=>{
//       alert("good morning!!");
//       console.log(e.type);
//       console.log(e.target);
//       console.log(e.clientX);
//       console.log(e.clientY);
//     }
//     mouse.style.fontSize="40px";
// };
//  mouse.onmouseout=(e)=>{
//   mouse.style.fontSize="18px";
//   mouse.style.color="black";
//       console.log(e.type);
//       console.log(e.target);
//       console.log(e.clientX);
//       console.log(e.clientY);
//  }


//  let btn6 = document.createElement("button");
//  btn6.innerText="CLICK HERE";

//  document.body.prepend(btn6);

//  btn6.addEventListener("click",()=>{
//   btn6.style.fontSize="30px";
//  })

let btn = document.createElement("button");
btn.innerText="Click for dark mode";
document.body.append(btn);

let page= document.querySelector("body");

btn.addEventListener("click",()=>{
  if(page.style.backgroundColor=="white")
    {
  page.style.backgroundColor="black";
  btn.innerText="Click for light mode";
  }
  else{
    page.style.backgroundColor="white"
    btn.innerText="Click for dark mode";
  }
})