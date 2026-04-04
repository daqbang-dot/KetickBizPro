export function initPOS() {
    console.log("[SISTEM] Modul POS sedia.");
    
    // Fungsi simulasi tambah barang ke troli POS
    function tambahKeTroli(idBarang, kuantiti) {
        console.log(`Menambah barang ${idBarang} sebanyak ${kuantiti} unit ke troli.`);
        // TODO: Tarik harga dari db inventory dan kemas kini jumlah
    }

    // Fungsi simulasi bayaran
    function prosesBayaran(jumlah) {
        console.log(`Memproses bayaran sebanyak RM${jumlah}`);
        // TODO: Tolak stok di inventory, rekod jualan, jana resit
    }

    return { tambahKeTroli, prosesBayaran };
}
