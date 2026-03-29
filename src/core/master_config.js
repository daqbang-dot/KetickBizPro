/**
 * KETICK ELITE - MASTER CONFIGURATION
 * Di sini kita kawal Hierarki & Status Langganan (Add-on)
 */

export const masterConfig = {
    // 1. TAHAP AKSES (Hierarchy Control)
    // CEO: 100% (Semua)
    // EXECUTIVE: 50% (Pengurusan & Analitik)
    // OPERATOR: 25% (Operasi & Input sahaja)
    roles: {
        ceo: {
            label: "Sovereign",
            theme: "level-ceo",
            allowedModules: ["executive", "operator", "inventory", "sales", "anti_fraud"]
        },
        executive: {
            label: "Architect",
            theme: "level-executive",
            allowedModules: ["executive", "inventory"]
        },
        operator: {
            label: "Specialist",
            theme: "level-operator",
            allowedModules: ["operator"]
        }
    },

    // 2. STATUS LANGGANAN (SaaS Add-on Logic)
    // Klien hanya boleh guna kalau 'active: true'
    addons: {
        executive: { active: true, price: "Basic" },
        operator: { active: true, price: "Basic" },
        inventory: { active: true, price: "Premium" },
        sales: { active: false, price: "Elite" }, // Belum beli
        anti_fraud: { active: false, price: "Elite" } // Belum beli
    }
};

/**
 * Fungsi untuk check akses akhir
 */
export function checkAccess(role, moduleId) {
    const roleData = masterConfig.roles[role];
    const addonData = masterConfig.addons[moduleId];

    // Syarat 1: Level user ada kebenaran?
    const hasPermission = roleData.allowedModules.includes(moduleId);
    
    // Syarat 2: Klien dah bayar/aktifkan modul ni?
    const isSubscribed = addonData ? addonData.active : false;

    return {
        canView: hasPermission && isSubscribed, // Boleh masuk
        isLocked: hasPermission && !isSubscribed // Tunjuk tapi "Locked" (untuk CEO sahaja)
    };
}
