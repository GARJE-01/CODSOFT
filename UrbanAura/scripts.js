// scripts.js

// Example: Add functionality to the Buy Now buttons
document.querySelectorAll('.product-card .btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
