// asynchronous bahavior

// setTimeout, setInterval. queueMicrotask

// Microtask , macrotask

// let name="synchronous Code";
// console.log(name);

// let surname="coded";
// console.log(surname)

// setTimeout(()=>{
//     console.log("setTime Out Task , hoh")
// },2000)
// // setInterval(()=>{
// //     console.log("hihi.uyuh")
// // },1000)

// // let myPromise=new Promise((resolve,reject)=>{
// //     let flag=true;
// //     if(flag){
// //         resolve("huihiuhihihihihihihiuhiuhuihih")
// //     }
// //     else{
// //         reject("drrddrdrrddrdrrdrddrrdrdrddr")
// //     }
// // })
// // console.log(myPromise);

// Promise.then().catch(console.log("Promishi,buyfgdd3dsf"));

// queueMicrotask(()=>{
//     console.log("hodihfoisdhofihosdfhdsfhoiefe")
// })

// console.log(name, surname);




// async function fetchData(){
//     let data=await fetch("https://fakestoreapi.com/products/1");
//     let ans= await data.json();
//     console.log(ans)
// }
// fetchData()

// const fetchData=async()=>{
// }

async function fetchData(){
    try {
        let data=await fetch("https://fakestoreapi.com/products/1");
        let ans= await data.json();
        console.log(ans)
    } catch (error) {
        console.log(error)
    }
}

fetchData()