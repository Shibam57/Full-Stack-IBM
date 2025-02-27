let form=document.getElementById("userForm");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let fullName=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let number=document.getElementById("number").value;
    let password=document.getElementById("password").value;
    let confirmpassword=document.getElementById("Confirmpassword").value;


    console.log(fullName,password,confirmpassword);


    let obj={
        fullName,email,number,password
    }



    if(obj.password!==obj.confirmpassword){
        return alert("password do not match ");
    }

    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=obj.fullName;

    let td2=document.createElement("td");
    td2.innerText=obj.email;
    let td3=document.createElement("td");
    td3.innerText=obj.number;
    let td4=document.createElement("td");
    td4.innerText=obj.password;

    tr.append(td1,td2,td3,td4);




    document.getElementById("tbody").append(tr);
    
})