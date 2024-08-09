/*--object having different types of vriable--*/

const profile = {
    fullName : "shraddhakhapra",
    isfollow : true,
    post : 195,
    followers : 589,
    following : 4,
    bio : "Enterpreneur Apna college|EX-Microsoft,DRDO To educate someone is highest priviledge"
    };


/*--------camparison operator--------*/

let a=2;
b=2;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a/b=",a/b);
console.log("a*b=",a*b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);

/*--------conditional statements--------*/

let Number= prompt("Enter a number");
console.log("Number",Number);
if(Number%5==0){
    console.log("IT IS MULTIPUL OF 5");
}
else{
    console.log("IT IS NOT MULTIPUL OF 5")
}

/*--------finding grades using conditional statements-------- */

let n = prompt("Enter your score");
console.log("Score",n);
if(n>=80 && n<=100){
    console.log("Your have got grade A");
}
else if(n>=70 && n<=79){
    console.log("Your have got grade B");
}
else if(n>=60 && n<=69){
    console.log("Your have got grade C");
}
else if(n>=50 && n<=59){
    console.log("Your have got grade D");
}
else if(n>=0 && n<=49) {
    console.log("Your have got grade F");
}

/*--------odd numbers--------*/

for(let i=1;i<=200;i++){
    if(i%2!==0){
        console.log("odd numbers are",i);
    }
}

/*--------game to find the correct number--------*/

let gameNum=25;
let num=prompt("Enter your number");
console.log(num);
while(num != gameNum){
    num=prompt("Enter your number again:-");
}
console.log("congratualation");

/*--------string--------  */

let str=prompt("Enter your name");
let res="@"+str+str.length;
console.log("your new name is",res);

/*--------average of marks-------- */

 var marks=[85,97,44,37,76,60];
 var sum=0;
 var length = length (number)/length(number[0]);
 for(i=0;i> marks.length;i++){
    sum =sum+ marks[i];
 }
for(let val of marks){
sum=val+sum;
let avg =sum / marks.length;
 console.log(`the average is=${avg}`);
}

function vowel(str){
    let vowel="";
    let consonent="";
     for(let i=0;i<=str.length;i++){
      let char=str[i]
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
            vowel++;
          }
          else{
              consonent++;
          }
      }
      return {vowel,consonent};
  }
  console.log(vowel("sdfghjklzxcvbnmqwrtypaeiou"));
  
  function isvowel(str){
      let count=0;
      for(const char of str){
          if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
          count++;
           }
      }
      return count;
  }
  console.log(isvowel("giriraj"));
  
  const VOWEL=(str)=>{
       let count=0;
      for(const char of str){
          if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
          count++;
           }
      }
      return count;
  }
  console.log(isvowel("grammer"));
  
  //For a given array print the square of each number
  
  arr=[9,5,7,2];
  
  arr.forEach(function square(val){
      console.log(val*val);
  });
  let calculate=(val)=>
  {
      console.log(val*val);
  }
  arr.forEach(calculate)
  
  marks=[34,98,89,90,97,94,93,100];
  
  let newarr=marks.filter((val)=>{
      return val===90;
  });
  console.log(newarr);
  
  let o=prompt("enter your number=");
  arr=[];
  for(let i=0;i<=n;i++){
      arr[i-1]=i;
  }
  console.log(arr);
  
  let sum=arr.reduce((res,curr)=>
  {
      return res+curr;
     
  });
  console.log("sum=",sum);
  
  let full=arr.reduce((res,curr)=>
  {
      return res*curr;
     
  });
  console.log("mul=",full);
  
  arr=[4,6,5,3];
  
  let mul=arr.map((val)=>{
      return val*2;
  });
  console.log(mul);
  
  let sam=arr.filter((val)=>{
      return val%3==0;
  });
  console.log("sum=",sam);
  
  let div=arr.reduce((res,curr)=>{
      return res/curr;
  });
  console.log(div);
  
  let sub=(val)=>{
      console.log(val*val);
  }
  arr.forEach(sub);
  
  arr.forEach((val)=>{
      console.log(val*val);
  });
  
  const name="Sad";
  const object = {
      name:"raj",
      marks:34,
      printmarks: () =>{
          console.log(this)
      }
  }
  
  object.printmarks();