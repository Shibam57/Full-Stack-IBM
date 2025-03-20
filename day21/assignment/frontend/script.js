let parent=document.getElementById('parent');

async function getData() {
    let data=await fetch(`http://localhost:3000/posts`);
    let responce=await data.json();

    showData(responce)

    console.log(responce)
}
getData()

async function showData(arr) {
    parent.innerHTML=null;
    arr.forEach((el,index)=>{
        let box=document.createElement("div");
        box.className='box';

        let title=document.createElement('p');
        title.innerText=el.title;

        let views=document.createElement('p');
        views.innerText=el.views;

        let but=document.createElement('button');
        but.innerText='add title'
        but.addEventListener('click',()=>{
            addTitle(el.id)
        });

        let deleteBtn=document.createElement("button");
        deleteBtn.innerText="Delete data"
        deleteBtn.addEventListener('click',()=>{
            deleteData(el.id);
        })

        box.append(title,views,but,deleteBtn);
        parent.append(box);
    })
}

async function deleteData(id) {
    try {
        let res=await fetch(`http://localhost:3000/posts/${id}`,{
            method:'DELETE'
        })
        if(res){
            alert('Data is delete');
            getData();
        }
    } catch (error) {
        console.log(error)
    }
}

async function addTitle(id) {
    let value=prompt("enter new value");
    let obj={
        title:value,
        views:Math.floor(Math.random()*500),

    }
    try {
        let res = await fetch(`http://localhost:3000/posts/${id}`,{
            method:"PUT",
            Headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj),
        });
        if(res){
            alert('data save');
            getData();
        }
        let responce=res.json();
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}



let button=document.getElementById("btn")
button.addEventListener('click',async()=>{
    let value=document.getElementById("input").value;
    let obj={
        title:value,
        views:Math.floor(Math.random()*500)
    }
    try {
        let res=await fetch(`http://localhost:3000/posts`,{
            method:"POST",
            Headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj),
        });
        if(res){
            alert('data save');
            getData();
        }
        let responce=res.json();
        console.log(responce);
    } catch (error) {
        console.log(error)
    }
})