// js/app.js - Logik Utama Sistem ERP

// ==========================================
// 1. IMPORT KESEMUA MODUL
// ==========================================
import { initPOS } from './pos.js';
import { initInventory } from './inventory.js';
import { initCRM } from './crm.js';
import { initBilling } from './billing.js';
import { initWhatsapp } from './whatsapp.js';
import { initSocialMedia } from './social.js';
import { initLHDN } from './lhdn.js';
import { initKupon } from './kupon.js';
import { initReport } from './report.js';
import { initHistory } from './history.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard ERP sedia digunakan!");
    console.log("Inisialisasi Sistem ERP Dimulakan...");
    
    // ==========================================
    // 2. KONFIGURASI FIREBASE & KESELAMATAN
    // ==========================================
    // TODO: Initialize Firebase configuration (Akan dipautkan dari firebase-config.js)
    // TODO: Check User Authentication status (Pastikan pengguna log masuk sebelum sistem dibuka)

    // ==========================================
    // 3. LOGIK UI: PENGURUSAN MENU DRAWER
    // ==========================================
    const openBtn = document.getElementById('open-drawer-btn');
    const closeBtn = document.getElementById('close-drawer-btn');
    const drawer = document.getElementById('menu-drawer');
    const overlay = document.getElementById('menu-overlay');

    // Fungsi buka drawer
    function openDrawer() {
        drawer.classList.add('open');
        overlay.classList.add('active');
    }

    // Fungsi tutup drawer
    function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
    }

    // Pautan klik (Event Listeners)
    openBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer); // Tutup bila klik di luar kawasan menu

    // ==========================================
    // 4. PENGAKTIFAN MODUL
    // ==========================================
    const pos = initPOS();
    const inventory = initInventory();
    const crm = initCRM();
    const billing = initBilling();
    const whatsapp = initWhatsapp();
    const social = initSocialMedia();
    const lhdn = initLHDN();
    const kupon = initKupon();
    const report = initReport();
    const history = initHistory();

    // ==========================================
    // 5. PAPARAN DASHBOARD
    // ==========================================
    // TODO: Load Dashboard Data (Tarik jumlah jualan terkini dan amaran stok rendah dari db)
    
    // Contoh penggunaan bersilang (Cross-module logic) nanti:
    // Apabila pengguna tekan butang bayar, pos.prosesBayaran() dipanggil,
    // kemudian inventory.tolakStok() dipanggil, 
    // dan akhirnya history.rekodAktiviti() menyimpan log.
});
