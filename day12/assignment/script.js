let form=document.getElementById("userform")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let MovieName=document.getElementById("movieName").value ;
    let Description=document.getElementById("movieDescription").value;
    let Date=document.getElementById("date").value;
    let Ratings=document.getElementById("ratings").value;
    let Genre=document.getElementById("genre").value;

    var obj={
        MovieName,Description,Date,Ratings,Genre
    }

});
let table=document.getElementById("userdata")

table.addEventListener(()=>{
    e.preventDefault();
    let tr=document.createElement("tr");

    let td1=document.createElement("td")
    td1.innerText=obj.MovieName;

    let td2=document.createElement("td")
    td2.innerText=obj.Description;

    let td3=document.createElement("td")
    td3.innerText=obj.Date;

    let td4=document.createElement("td")
    td4.innerText=obj.Ratings;

    let td5=document.createElement("td")
    td5.innerText=obj.Genre;

    tr.append(td1,td2,td3,td4,td5)
    document.getElementById("tbody").append(tr)
})