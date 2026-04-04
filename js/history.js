export function initHistory() {
    console.log("[SISTEM] Modul History sedia.");

    function rekodAktiviti(pengguna, tindakan, butiran) {
        const masa = new Date().toLocaleString();
        console.log(`[${masa}] ${pengguna} melakukan: ${tindakan} - ${butiran}`);
        // TODO: Simpan log ini ke Firebase Firestore
    }

    function paparLogAktiviti() {
        console.log("Memuatkan senarai sejarah log sistem...");
        // TODO: Panggil senarai log terkini
    }

    return { rekodAktiviti, paparLogAktiviti };
}
