// document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const res = await fetch('http://localhost:8080/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password })
//     });

//     console.log(res)

//     const data = await res.json();
//     console.log(data)
//     alert(data.message);
//     window.location.href="login.html"
// });

// document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const res = await fetch('http://localhost:8080/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//     });

//     const data = await res.json();
//     console.log(data)
//     if (data.token) {
//         localStorage.setItem('token', data.token);
//         window.location.href = 'dashboard.html';
//     } else {
//         alert('Login failed');
//     }
// });


const productContainer = document.getElementById("product-container");
// const nextBtn = document.getElementById("next-btn");

let currentPage = 1;
let loading=false;

async function fetchProducts() {
    if(loading) return;
    loading =true;
    
    try {
        const response = await fetch(`http://localhost:8080/api/products?page=${currentPage}`,{
            method:"GET"
        });
        const data = await response.json();

        console.log(data)

        displayProducts(data.products);
    } catch (error) {
        console.error("Error fetching products:", error);
    } finally{
        loading=false;
    }
}

function displayProducts(products) {
    products.forEach((product, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = product.category || "No Category";

        let img = document.createElement("img");
        img.src = product.image || "placeholder.jpg";
        

        let name = document.createElement("p");
        name.innerText = product.name;

        let price = document.createElement("p");
        price.innerText = `Price: $${product.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${product.rating || "N/A"}`;

        let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click", () => {
            addToCart(product);
            
        });

        productBox.append(heading, img, name, price, rating, button);
        productContainer.append(productBox);
    });
}


// nextBtn.addEventListener("click", () => {
//     currentPage++;
//     fetchProducts();
// });



window.addEventListener("scroll",()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-10){
        fetchProducts();
    }
})
fetchProducts();

function addToCart(product){
    Toastify({
        text: `${product.name}This is a toast`,
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}