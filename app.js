// js/app.js - Logik Utama Sistem ERP

// ==========================================
// 1. IMPORT KESEMUA MODUL (DIKOMEN SEMENTARA)
// ==========================================
/* NOTA: Buang komen (//) di bawah satu persatu HANYA SELEPAS 
anda telah mencipta fail-fail ini di dalam folder 'js/' 
dan menggunakan Live Server.
*/
// import { initPOS } from './pos.js';
// import { initInventory } from './inventory.js';
// import { initCRM } from './crm.js';
// import { initBilling } from './billing.js';
// import { initWhatsapp } from './whatsapp.js';
// import { initSocialMedia } from './social.js';
// import { initLHDN } from './lhdn.js';
// import { initKupon } from './kupon.js';
// import { initReport } from './report.js';
// import { initHistory } from './history.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard ERP sedia digunakan!");
    
    // ==========================================
    // 2. LOGIK UI: PENGURUSAN MENU DRAWER
    // ==========================================
    const openBtn = document.getElementById('open-drawer-btn');
    const closeBtn = document.getElementById('close-drawer-btn');
    const drawer = document.getElementById('menu-drawer');
    const overlay = document.getElementById('menu-overlay');

    // Semak jika semua elemen wujud sebelum jalankan fungsi untuk elak ralat (crash)
    if (openBtn && closeBtn && drawer && overlay) {
        
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
        overlay.addEventListener('click', closeDrawer); // Tutup bila klik luar
        
        console.log("Butang Menu Drawer Aktif!");
    } else {
        console.error("Sistem gagal mengesan butang atau menu di index.html");
    }

    // ==========================================
    // 3. KONFIGURASI FIREBASE & KESELAMATAN
    // ==========================================
    // TODO: Initialize Firebase configuration 
    // TODO: Check User Authentication status 

    // ==========================================
    // 4. PENGAKTIFAN MODUL (DIKOMEN SEMENTARA)
    // ==========================================
    // const pos = initPOS();
    // const inventory = initInventory();
    // const crm = initCRM();
    // const billing = initBilling();
    // const whatsapp = initWhatsapp();
    // const social = initSocialMedia();
    // const lhdn = initLHDN();
    // const kupon = initKupon();
    // const report = initReport();
    // const history = initHistory();

    // ==========================================
    // 5. PAPARAN DASHBOARD
    // ==========================================
    // TODO: Load Dashboard Data 
});
