console.log(this);


// let obj={
//     name: "shujf uh",
//     class: "B.tech cse",
//     myFunction: function(){
//         console.log(this);
//         console.log(this.name,this.class);
//         console.log("uhfiuhewiufbfb fiweuff");
//     },
//     subjects: ["dbms","cn","ai","az"],
//     newObj:{
//         1:12,
//         myNewFunction:function(){
//             console.log(this)
//         }
//     }
// }

// console.log(obj.myFunction());
// console.log(obj.newObj.myNewFunction())

// let obj={
//     name: "shujf uh",
//     class: "B.tech cse",
//     myFunction: ()=>{
//         // console.log(this);
//         // console.log(this.name,this.class);
//         return this.name;
//         console.log("uhfiuhewiufbfb fiweuff");
//     },
//     subjects: ["dbms","cn","ai","az"],
//     newObj:{
//         1:12,
//         myNewFunction:function(){
//             console.log(this)
//         }
//     }
// }

// console.log(obj.myFunction());
// console.log(obj.newObj.myNewFunction())

// let num1=20,num2=20;

// if(num1<num2){
//     console.log(`${num1} is less then ${num2}`);
// }
// else{
//     console.log(`${num1} is not less then ${num2}`);
// }


//let suppose you have one num as input you have to check if num is multiple of 3 then print "Fizz", if num is multiple of 5 than print "Buzz". If num is multiple of both 3 and 5 than print "Fizz Buzz".

let n=3;

if(n%3==0 && n%5==0){
    console.log("fizz Buzz");
}
else if(n%3==0){
    console.log("fizz");
}
else if(n%5==0){
    console.log("buzz");
}

else{
    console.log("");
}


let arr=[1,2,3,4,5,6,7,8]

for(let i=0; i<=arr.length;i++){
    console.log(arr[i],i);
}

let str="shibam samanta"
// for(let i=0;i<str.length;i++){
//     console.log(i,str[i]);
// }
for(let i=0;i<str.length;i++){
    console.log("a"+str[i],"b");
}