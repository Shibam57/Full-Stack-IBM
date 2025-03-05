let data = [];
async function fetchData() {
  try {
    let val = await fetch("https://fakestoreapi.com/products");
    data = await val.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData().then(()=>{
  data.forEach((val) => {

    let box = document.createElement("div");
    box.className = "product-box";

    let h2 = document.createElement("h2");
    h2.innerText = val.title;
    let p1 = document.createElement("p");
    p1.innerText = val.category;

    let img = document.createElement("img");
    img.src = val.image;
    img.className = "product-image";

    let p2 = document.createElement("p");
    p2.innerText = `$${val.price}`;

    let p3 = document.createElement("p");
    p3.innerText =  `${val.rating.rate}`;
    
    let button = document.createElement("button");
    button.innerText = "add to cart";
    button.className = "add-to-cart-btn";

    box.append(h2,img, p1, p2, p3,button);
    document.getElementById("products").append(box);
  });
});