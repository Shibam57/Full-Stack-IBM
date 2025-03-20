const button = document.getElementById("submit-products");

button.addEventListener("click", async()=>{

    const name = document.getElementById("name").value;
    const desc = document.getElementById("desc").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("img").value;

    const obj = {
        name, price, category, image, desc
    }

    const response = await fetch("http://localhost:8080/api/create-product", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(obj)
    });

    const res = await response.json();

    console.log(res)

})

Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();