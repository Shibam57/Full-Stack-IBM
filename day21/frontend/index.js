let parent=document.getElementById('parent')

async function getData() {
    let data=await fetch(`http://localhost:3000/posts`);
    let response=await data.json();

    showData(response)

    console.log(response)
}

getData()

async function showData(arr) {
    parent.innerHTML=null;
    arr.forEach((el, index) => {
        let box=document.createElement("div");
        box.className='box';
        box.style.width='200px';
        box.style.height='200px';
        box.style.border='1px solid black'

        let title=document.createElement('p');
        title.innerText=el.title;

        let views=document.createElement('p');
        views.innerText=el.views;

        let button1=document.createElement('button');
        button1.innerText='add title'
        button1.className='button1'
        button1.addEventListener('click',async()=>{
            let obj={
                title:value
            }
            try {
                let res = await fetch(`http://localhost:3000/posts/${id}`,{
                    method:"PUT",
                    Headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(obj),
                });
                if(res)
                {
                    alert('Data dave successfuly');
                    getData();
                }
        
                let responce = res.json();
                console.log(responce);
                
            } catch (error) {
                console.log(error); 
            }
        })

        box.append(title,views,button1);
        parent.append(box);
    });
}

let button=document.getElementById("btn")
button.addEventListener("click",async()=>{
    let value=document.getElementById("input").value;
    let obj={
        title:value,
        views:Math.random(100,1000)
    }
    try {
        let res = await fetch(`http://localhost:3000/posts`,{
            method:"POST",
            Headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj),
        });
        if(res)
        {
            alert('Data dave successfuly');
            getData();
        }

        let responce = res.json();
        console.log(responce);
        
    } catch (error) {
        console.log(error); 
    }

})

