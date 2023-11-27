class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

class Marketplace {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    displayProducts() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        this.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `<strong>${product.name}</strong> - Price: $${product.price} - Stock: ${product.stock}`;
            productList.appendChild(productDiv);
        });
    }

    purchaseProduct() {
        const productName = document.getElementById('product-name').value;
        const quantity = parseInt(document.getElementById('quantity').value);

        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            if (product.name === productName) {
                if (product.stock >= quantity) {
                    const totalCost = product.price * quantity;
                    alert(`Pembelian Sukses! Total Harga: $${totalCost}`);
                    product.stock -= quantity;
                    this.displayProducts();
                } else {
                    alert("STOK Habis");
                }
                return;
            }
        }

        alert("Produk Tidak Ditemukan.");
    }
}

// Example usage
const marketplace = new Marketplace();

const product1 = new Product("Laptop", 1000, 10);
const product2 = new Product("Smartphone", 500, 20);

marketplace.addProduct(product1);
marketplace.addProduct(product2);

marketplace.displayProducts();

function purchaseProduct() {
    marketplace.purchaseProduct();
}
