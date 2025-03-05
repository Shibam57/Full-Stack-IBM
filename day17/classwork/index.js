async function fetchData(){
    let data=await fetch("aizasybflvhjecxvzr4iyk9wlom65yz8i0s5ias");
    let ans= await data.json();
    console.log(ans)
}
fetchData()