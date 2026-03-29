// Konfigurasi Sistem - Ini biasanya datang dari Database/Firebase
const systemConfig = {
    // Status modul yang dibeli oleh klien (ON/OFF)
    subscriptions: {
        analytics: true,   // Add-on dibeli
        inventory: true,   // Add-on dibeli
        hr_system: false,  // Belum beli (OFF)
        anti_fraud: false  // Belum beli (OFF)
    },
    
    // Tahap akses berdasarkan Level
    permissions: {
        ceo: ["analytics", "inventory", "hr_system", "anti_fraud", "finance_global"],
        executive: ["analytics", "inventory"],
        operator: ["inventory_basic"]
    }
};

/**
 * Fungsi untuk menyemak sama ada user berhak melihat modul tersebut
 * @param {string} userLevel - 'ceo', 'executive', atau 'operator'
 * @param {string} moduleName - Nama modul (e.g., 'analytics')
 */
function canAccessModule(userLevel, moduleName) {
    const isSubscribed = systemConfig.subscriptions[moduleName];
    const hasPermission = systemConfig.permissions[userLevel].includes(moduleName);

    // Syarat: Mesti dah beli (subscribed) DAN user ada level yang betul
    if (isSubscribed && hasPermission) {
        return true;
    }
    return false;
}

// Export fungsi untuk digunakan di index.html atau module lain
export { canAccessModule, systemConfig };
