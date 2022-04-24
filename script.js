const productsElem = document.querySelector (".products");
function renderProducts() {
    products.forEach((product) => {
        productsElem.innerHTML += `  <div class="products">
        <ul class="module">
            <li>
                <a><img  src="${product.imgSrc}" width="400"
                        height="400" class="home-img"></a>
                <h4 class="home-text">${product.name}</h4>
                <h3 class="home-text">${product.price}</h3>
                <button class="button"> Add to Cart</button>
            </li>
    </div>
       `;
    });
}
renderProducts();
