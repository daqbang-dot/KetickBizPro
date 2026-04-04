export function initCRM() {
    console.log("[SISTEM] Modul CRM sedia.");

    function daftarPelanggan(nama, noTel) {
        console.log(`Mendaftar pelanggan: ${nama} (${noTel})`);
        // TODO: Simpan maklumat ke pangkalan data pelanggan
    }

    function semakMataGanjaran(noTel) {
        console.log(`Menyemak mata ganjaran untuk: ${noTel}`);
        // TODO: Semak sejarah pembelian dan kira mata
    }

    return { daftarPelanggan, semakMataGanjaran };
}
