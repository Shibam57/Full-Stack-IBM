let cartData=JSON.parse(localStorage.getItem('DataCart'))
console.log(cartData);

function showData(cart){
    data.forEach(el => {
        let box=document.createElement('div');
        box.className="parentBox"

        let h2=document.createElement("h2");
        h2.innerText=el.name;
        let p1=document.createElement('p');
        p1.innerText=el.category;

        let p2=document.createElement('p');
        p2.innerText=el.price;

        let p3=document.createElement('p');
        p3.innerText=el.rating;

        let img=document.createElement('img');
        img.src=el.image;
        img.style.height="100px";
        img.style.width="100px"

        let button=document.createElement('button');
        button.innerText="Delet"
        button.addEventListener('click',()=>{
          deleteFun(el,index)
        })

        box.append(h2,img,p1,p2,p3,button);

        // document.getElementById("cart").append(box)
    });
}
showData(cartData)

function deleteFun(){
    console.log("delete function")
}