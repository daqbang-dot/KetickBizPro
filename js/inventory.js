export function initInventory() {
    console.log("[SISTEM] Modul Inventory sedia.");

    // Fungsi simulasi papar stok
    function paparSenaraiStok() {
        console.log("Memuatkan senarai stok dari pangkalan data...");
        // TODO: Fetch data dari Firebase Firestore (Collection: inventory)
    }

    // Fungsi simulasi tambah stok baru
    function tambahStokBaru(nama, harga, kuantiti) {
        console.log(`Mendaftar stok baru: ${nama} | RM${harga} | ${kuantiti} unit`);
        // TODO: Simpan data ke Firebase
    }

    return { paparSenaraiStok, tambahStokBaru };
}
