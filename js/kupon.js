export function initKupon() {
    console.log("[SISTEM] Modul Kupon sedia.");

    function ciptaKupon(kod, peratusDiskaun, tarikhLuput) {
        console.log(`Mencipta kupon [${kod}] bernilai ${peratusDiskaun}% sah sehingga ${tarikhLuput}`);
        // TODO: Simpan kod ke pangkalan data
    }

    function sahkanKupon(kod) {
        console.log(`Menyemak kesahihan kupon: ${kod}`);
        // TODO: Semak jika kod wujud dan belum luput dari pangkalan data
    }

    return { ciptaKupon, sahkanKupon };
}
