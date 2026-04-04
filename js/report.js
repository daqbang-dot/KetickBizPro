export function initReport() {
    console.log("[SISTEM] Modul Report sedia.");

    function janaLaporanJualan(bulan, tahun) {
        console.log(`Menjana laporan jualan untuk ${bulan}/${tahun}...`);
        // TODO: Kumpul data dari History & POS untuk visualisasi carta
    }

    return { janaLaporanJualan };
}
