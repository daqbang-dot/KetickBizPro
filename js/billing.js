export function initBilling() {
    console.log("[SISTEM] Modul Billing sedia.");

    function janaInvois(idPelanggan, senaraiBarang) {
        console.log(`Menjana invois untuk pelanggan ${idPelanggan}...`);
        // TODO: Kira jumlah, jana PDF, dan hantar ke fail LHDN (jika perlu)
    }

    function paparInvoisTertunggak() {
        console.log("Menyemak senarai invois yang belum dibayar...");
        // TODO: Filter invois berstatus 'pending'
    }

    return { janaInvois, paparInvoisTertunggak };
}
