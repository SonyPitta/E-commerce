
const cart = [];


const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');


const products = [
  { id: 1, name: 'Wireless Headphones', price: 89.99 },
  { id: 2, name: 'Smart Watch', price: 129.99 },
  { id: 3, name: 'Bluetooth Speaker', price: 59.99 }
];


function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    renderCart();
  } else {
    console.error(`Product with ID ${productId} not found.`);
  }
}


function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}
