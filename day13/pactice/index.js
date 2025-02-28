// let arr=[1,2,3,4,5,"shibam",6,7,8,"shdfss",9];
let arr=[5,8,7,2,7,4,5,1,6,2];

// arr.forEach((el,index)=>{
//     // return el;               for-each can't use return key
//     console.log(el,index);
// });

// map

// let output=arr.map((el,index)=>{
//     return el**2;
// });

// console.log(output);

// filter
// let output=arr.filter((el,index)=>{
//     // return el%2==1;
//     return typeof el==="string";
// });

// let output=arr.filter((el,index)=>{
//     return typeof el!=="string" && el%2==0;
// }).map((el,index)=>{
//     return el**2
// })

// console.log(output);


// reduce

// let output=arr.reduce((acc,el)=>{
//     return acc+el;
// },100);

// console.log(output)

// let output=arr.reduce((acc,el)=>{
//     return acc+el;
// },0).map((el,index)=>{
//     return el**2;
// });

// let output=arr.map((el,index)=>{
//     return el**2;
// }).reduce((acc,el)=>{
//     return acc+el;
// },0)

// console.log(output);


// let output=arr.map((el,index)=>{
//     return el**2;
// }).filter((el,index)=>{
//     return typeof el!=="string" && el%2==0;
// }).reduce((acc,el)=>{
//     return acc+el;
// },0);

// console.log(output);


// sort

// let output=arr.sort((a,b)=>{
//     return a-b;
// })
// let output=arr.sort((a,b)=>a-b)
// console.log(output);




let data=[
    { name: "watch", price: 2000, rating: 4 },
    { name: "phone", price: 56675, rating: 2},
    { name: "shoe",price: 634,rating: 3 },
    { name: "car", price: 48535, rating: 5 },
    { name: "earphone", price: 4856, rating: 1 }
]

let output=data.sort((a,b)=>{
    if(a.name<b.name){
        return -1;
    }
    if(a.name>b.name){
        return 1;
    }
})

data.sort((a,b)=>a.name.localeCompare(b.name));             //it's most improtant for string sort
console.log(output);