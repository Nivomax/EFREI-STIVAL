document.addEventListener("DOMContentLoaded", () => {
    const items = [
        { id: "1", label: "Friday 1st", price: 39 },
        { id: "2", label: "Saturday 2nd", price: 39 },
        { id: "3", label: "Sunday 3rd", price: 39 },
        { id: "4", label: "ALL DAYS ACCESS", price: 99 }
    ];

    const counts = { "1": 0, "2": 0, "3": 0, "4": 0 };

    function updateUI(id) {
        const counter = document.getElementById(`count${id}`);
        if (counter) counter.textContent = counts[id];
        updatePanier();
    }

    function updatePanier() {
        let total = 0;
        const list = document.getElementById("article-list");
        const totalPriceElem = document.getElementById("panier-price");
        if (!list || !totalPriceElem) return;

        list.innerHTML = "";

        items.forEach(({ id, label, price }) => {
            const quantity = counts[id];
            if (quantity > 0) {
                const li = document.createElement("li");
                li.textContent = `${label} (x${quantity}) : ${quantity * price}€`;
                list.appendChild(li);
                total += quantity * price;
            }
        });

        totalPriceElem.textContent = `TOTAL PRICE : €${total}`;
    }

    function clearCart() {
        Object.keys(counts).forEach(id => counts[id] = 0);
        items.forEach(({ id }) => updateUI(id));
    }

    function handleBuy() {
        let total = 0;
        let receipt = "✅ Purchase Confirmation:\n\n";
        let hasItems = false;

        items.forEach(({ id, label, price }) => {
            const quantity = counts[id];
            if (quantity > 0) {
                receipt += `- ${label} (x${quantity}) = ${quantity * price}€\n`;
                total += quantity * price;
                hasItems = true;
            }
        });

        if (!hasItems) {
            alert("❌ Your cart is empty. Please select tickets before buying.");
            return;
        }

        receipt += `\n💰 Total Paid: ${total}€\n\n🎉 Thank you for your purchase!`;
        alert(receipt);

        clearCart(); // On vide le panier après l'achat
    }

    function attachEvents() {
        items.forEach(({ id }) => {
            const plus = document.getElementById(`btn-increase${id}`);
            const minus = document.getElementById(`btn-decrease${id}`);

            if (plus) plus.addEventListener("click", () => { counts[id]++; updateUI(id); });
            if (minus) minus.addEventListener("click", () => { if (counts[id] > 0) counts[id]--; updateUI(id); });
        });

        const clear = document.getElementById("btn-clear-cart");
        if (clear) clear.addEventListener("click", clearCart);

        const buyBtn = document.querySelector(".buy");
        if (buyBtn) buyBtn.addEventListener("click", handleBuy);
    }

    attachEvents();
});
