let div1 = document.getElementById("div1")
    fetch("https://dummyjson.com/products").then(result=>result.json())
    .then(data => {
        console.log(data);
        for (let index = 0; index < data.products.length; index++) {
            const el = data.products[index];
            div1.innerHTML += `
            <div class="div">
                <img src="${el.thumbnail}">
                <p>${el.title}</p>
                <span>Category: ${el.category}, Brand: ${el.brand}</span><br>
                <span>${el.description}</span><br>
                <span>Price: $${el.price}</span><br>
                <span>Rated ${el.rating} out of 5</span><br>
                <span>Available stock: ${el.stock}</span>
            </div>
            `;
        }
    }).catch(err => {})