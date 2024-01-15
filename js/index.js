// alert("Message")

// variable -named memory location
// keywords


// let word="webskitters";  
// let num=123.456;
// let response=true;


// console.log("Hello"+word)
// console.log(num+' Given number')
// console.log(response)

// let(local) vs const(global)
// let can be reassigned, but const can not
// const xyz=123
// console.log(xyz)
// xyz=456
// console.log(xyz)

// const variable must be initialized at the declaration time
// const
// greet="hello"
// console.log(greet);

// single line comment
/*
 Multi line comment*/

//  array - collection of similar type data

// let day=["Monday","Tuesday","Wednesday"]
// let numArr=[23,45,-65,78]

// console.log("3rd day:",day[2],"1st day:",day[0])
// console.log("1st", numArr[1])

// console.log("Message");
// console.warn("Warning message");
// console.error("Error message");


// let msg="Be Aware"
// alert("Message: "+msg)

// let value1=prompt("Enter your name")
// console.log("Hello",value1);
// console.log(typeof(value1));

// let value2=Number(prompt("Enter your contact Number"))
// let num=Number(value2)
// console.log(value2);
// console.log(value2);
// console.log(typeof(value2));

// let data=confirm("Are you sure?");
// console.log(data);

// let a=20
// let b=10
// console.log("Given number:",a,b)
// if(a>b)
// {
//     console.log(a,"is largest")
// }
// else
// {
//     console.log(b,"is the largest")
// }

// let a=Number(prompt("enter the first number"));
// let b=Number(prompt("enter the second number"));

// if(a>b)
// {
//     console.log(a,"is largest")
//     // document.getElementById("result").innerHTML="<h3> first value is largest </h3>"
//     document.getElementById("result").innerHTML=`<h3> ${a} is larger than ${b} </h3>`
// }
// else
// {
//     console.log(b,"is the largest")
//     document.getElementById("result").innerHTML=`<h3> ${b} is larger than ${a} </h3>`
// }

 
// let mark=Number(prompt("Enter your marks in Abc subject"))
// document.getElementById('marks').innerHTML=`Given marks:${mark}`
// document.getElementById('marks').style.color="green"

// let result=document.getElementById('result')
// if(mark>=80)
// {
//     result.innerHTML=`<h3>Grade: A</h3> <p>Well done<p>`

// }
// else if(mark>=60) 
// {
//  result.innerHTML="<h3>Grade: B</h3>"
  
// }

// else if(mark>=40) 
// {
//     result.innerHTML="<h3>Grade: C</h3>"
  
// }

// else
// {
// result.innerHTML="<h3>Fail</h3>"
//  result.style.color="red"
//  result.style.fontSize="30px"
  
// }

// // = == ===
// let a=10;
// let b='10';

// if(a==b)
// console.log("Same for==")
// else
// console.log("Different for==");


// if(a===b)
// console.log("Same for===")
// else
// console.log("Different for===");


// named function without parameter without return type
// function calculation(num1,num2){
    // let num1= Number(prompt("Enter first number"))
    // let num2= Number(prompt("Enter second number"))
//     let sum=num1+num2
//     let mul=num1*num2
//     console.log("Given numbers:",num1,num2)
//     console.log("Sum value:",sum,"Mul value:",mul)
// }

// calculation(10,20);
// calculation(-50,-20);
// calculation(25,28);

// function sum(a,b,c){
//     let result=a+b+c;
//     return result;  
// }
// console.log(sum(10,20,30))
// let r=sum(10,43,32)
// console.log(r)

// // (10+20+30)*(50+60+70)
// let res=sum(10,20,30)*sum(50,60,70);
// console.log(res);

// array method-push,pop,shift,unshift,slice,splice

// let arr=[10,20,30,40]
// console.log(arr);
// arr.push(1111,2222)
// console.log(arr);
// arr.unshift(1000,2000)
// console.log(arr);

// let day=["sun","mon","tues"]
// console.log(day);
// day.pop()
// console.log(day);
// day.shift()
// console.log(day);

// let arr=[10,34,27,65,98]

// let sliced=arr.slice(1,4)
// console.log(sliced)

// splice (position number of elements to be removed, elements to add)

// let new_arr=["red","green","grey","blue"]
// new_arr.splice(2,1,"yellow","brown")
// console.log(new_arr);

// new_arr.splice(2,1)
// console.log(new_arr);

// new_arr.splice(2,0,"yellow","brown")
// console.log(new_arr);


console.log("Printing value:");
function printData(){
    console.log("Hello")
    console.log("Done");
}
setTimeout(printData,3000)
console.log("By Interval")
setInterval(printData,2000)

































