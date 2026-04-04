export function initWhatsapp() {
    console.log("[SISTEM] Modul WhatsApp Blast sedia.");

    function hantarMesej(noTel, mesej) {
        console.log(`Menghantar WhatsApp ke ${noTel}: ${mesej}`);
        // TODO: Panggil API WhatsApp pihak ketiga
    }

    function blastPromosi(kategoriPelanggan, mesejPromosi) {
        console.log(`Memulakan blast mesej kepada kumpulan: ${kategoriPelanggan}`);
        // TODO: Dapatkan senarai nombor dari CRM dan loop hantarMesej()
    }

    return { hantarMesej, blastPromosi };
}
