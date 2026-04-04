export function initPOS() {
    const grid = document.getElementById('product-grid');
    const cartBox = document.getElementById('cart-items');
    const totalBox = document.getElementById('cart-total');
    let cart = [];

    const produk = [
        { id: 1, nama: "Produk A", harga: 10 },
        { id: 2, nama: "Produk B", harga: 20 }
    ];

    // Papar Katalog
    grid.innerHTML = produk.map(p => `
        <div class="product-card" onclick="addToCart(${p.id})">
            <h4>${p.nama}</h4>
            <p>RM ${p.harga}</p>
        </div>
    `).join('');

    window.addToCart = (id) => {
        const item = produk.find(p => p.id === id);
        cart.push(item);
        renderCart();
    };

    function renderCart() {
        cartBox.innerHTML = cart.map(i => `<div class="cart-item"><span>${i.nama}</span><span>RM ${i.harga}</span></div>`).join('');
        const total = cart.reduce((sum, i) => sum + i.harga, 0);
        totalBox.innerText = `RM ${total.toFixed(2)}`;
    }
}
