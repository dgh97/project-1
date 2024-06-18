document.querySelectorAll('.increase-btn').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElement = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        // Update the subtotal, tax, and total accordingly
    });
});

document.querySelectorAll('.decrease-btn').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElement = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            // Update the subtotal, tax, and total accordingly
        }
    });
});
