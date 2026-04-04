export function initSocialMedia() {
    console.log("[SISTEM] Modul Social Media sedia.");

    function kemasKiniStatus(platform, kandungan) {
        console.log(`Menerbitkan post ke ${platform}: ${kandungan}`);
        // TODO: Sambung ke API Facebook/Instagram (Graph API)
    }

    return { kemasKiniStatus };
}
