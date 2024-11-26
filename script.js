document.addEventListener("DOMContentLoaded", () => {
    const cartTable = document.querySelector("table tbody");
    const subtotalElement = document.querySelector(".subtotal");
    const totalElement = document.querySelector(".total-price");

    
    const updateTotals = () => {
        let subtotal = 0;
        document.querySelectorAll("table tbody tr").forEach(row => {
            const price = parseFloat(row.querySelector("td:nth-child(2)").textContent.replace("$", ""));
            const quantity = parseInt(row.querySelector(".quantity").textContent);
            const total = price * quantity;

            
            row.querySelector(".item-total").textContent = `$${total}`;
            subtotal += total;
        });
        subtotalElement.textContent = `$${subtotal}`;
        totalElement.textContent = `$${subtotal}`;
    };

    
    cartTable.addEventListener("click", (event) => {
        if (event.target.classList.contains("increase")) {
            const quantityElement = event.target.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = ++quantity;
            updateTotals();
        } else if (event.target.classList.contains("decrease")) {
            const quantityElement = event.target.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = --quantity;
                updateTotals();
            }
        }
    });

    
    cartTable.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove")) {
            const row = event.target.closest("tr");
            row.remove();
            updateTotals();
        }
    });
});
