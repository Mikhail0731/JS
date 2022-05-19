const productsElem = document.querySelector (".products");



function refreshcart (){
  var cart = JSON.parse(localStorage.getItem("cart"));
if (cart != null && cart != undefined) {
  var cnt = 0;
  cart.products.forEach((x,i)=>{
    cnt += x.quantity;
  
  })
    document.getElementById("productcount").innerText = cnt;
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
    var found = false;
   cart.products.forEach((x,i)=>{
     if (x.productId == id){
       x.quantity +=1; 
       found = true;
     }
   })
   if (!found){
     cart.products.push( {
      productId: id,
      quantity: 1
    });
   }
    fetch(`http://localhost:3300/api/carts/${cart._id}`, {
      method: "PUT", headers: {
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
         refreshcart();
      })
      
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
         refreshcart();
      })
  }
  
  
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





