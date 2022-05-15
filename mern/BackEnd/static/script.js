const productsElem = document.querySelector (".products");
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
              <button class="button" > Add to Cart</button>
          </li>
  </div>
     `;
  });
    })
  
    
  
}
renderProducts();


/*<div class="center">
<form class="form">
    <label class="label">First Name</label>
    <input type="text"><br><br>
    <label class="label" for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required>
    <br><br>
    <label class="label">Password <input type="password">
    </label><br><br>
    <button type="submit" class="button">Sign in</button>
    <br><br>

    <label class="label">Remember me<input type="checkbox"></label>
</form>
</div>*/