const productsElem = document.querySelector (".products");



function refreshcart (){
  var cart = JSON.parse(localStorage.getItem("cart"));
if (cart != null && cart != undefined) {
    document.getElementById("productcount").innerText = cart.products.length;
} else {
    document.getElementById("productcount").innerText = 0;
}
}

function add(id){
  var user = JSON.parse(localStorage.getItem("currentUser"));

  if (user == null || user == undefined) {
    alert("please log in before buy");
    return false;
  }
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (cart != null && cart != undefined) {
    /*fetch(`http://localhost:3300/api/carts/${cart._id}`, {
      method: "POST", headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(new FormData(document.getElementById("log"))))
  })
      .then(response => {
          if (response.status == 200) {
              alert("user logged in")
              return response.json();
          }
      })
      .then(user => {
          // Store
          localStorage.setItem("currentUser", JSON.stringify(user));
          window.location.href = '/Home.html';
      })*/
      cart.productcount += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart = {
      userId: user._id, 
      products:[
        {
          productId: id,
          quantity: 1
        }
      ],
      productcount: 1
    }  
    fetch(`http://localhost:3300/api/carts`, {
      method: "POST", headers: {
          'Content-Type': 'application/json',
          'token': `Bearer ${user.accessToken}`
      },
      body: JSON.stringify(cart)
  })
      .then(response => {
          if (response.status == 200) {
              alert("product added")
              return response.json();
          }
      })
      .then(c => {
         cart = c
         localStorage.setItem("cart", JSON.stringify(cart));
      })
  }
  
  refreshcart();
  return false;
}

function renderProducts() {

fetch('http://localhost:3300/api/products')//, { method: "GET", mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*'}})

  .then(response =>
      response.json()
     
    ).then(prod=>{
    prod.forEach((product) => {
      productsElem.innerHTML += `  <div class="products">
      <ul class="module">
          <li>
              <a><img  src="${product.imgSrc}" width="400"
                      height="400" class="home-img"></a>
              <h4 class="home-text">${product.name}</h4>
              <h3 class="home-text">${product.price}</h3>
              <button class="button" onclick="return add('${product._id}');"> Add to Cart</button>
          </li>
  </div>
     `;
  });
    })
  
    
  
}
renderProducts();





