// js/app.js - Logik Utama Sistem ERP KetickHub

// ==========================================
// 1. IMPORT KESEMUA MODUL
// ==========================================
/* Nota: Buang komen (//) satu persatu apabila fail .js sudah sedia */
import { initPOS } from './pos.js';
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
    console.log("KetickHub ERP: Sistem Sedia.");

    const container = document.getElementById('module-container');
    const pageTitle = document.getElementById('page-title');
    const navItems = document.querySelectorAll('.nav-item');
    const drawer = document.getElementById('menu-drawer');
    const overlay = document.getElementById('menu-overlay');

    // ==========================================
    // 2. FUNGSI MUAT MODUL DINAMIK (SPA)
    // ==========================================
    async function loadModule(moduleName) {
        try {
            // Muat fail HTML dari folder modul/
            const response = await fetch(`modul/${moduleName}.html`);
            if (!response.ok) throw new Error("Fail tidak dijumpai");
            
            const html = await response.text();
            
            // Masukkan kandungan ke dalam container utama
            container.innerHTML = html;
            
            // Kemas kini tajuk di header
            pageTitle.innerText = moduleName.toUpperCase();

            // Jalankan logik JavaScript mengikut modul yang dimuatkan
            initModuleLogic(moduleName);
            
            console.log(`Modul ${moduleName} berjaya dimuatkan.`);
        } catch (err) {
            container.innerHTML = `<div style="padding:20px; color:red;">
                <h3>Ralat Memuatkan Modul</h3>
                <p>Pastikan fail 'modul/${moduleName}.html' wujud dan anda menggunakan Live Server.</p>
            </div>`;
        }
    }

    // Fungsi untuk panggil init() bagi modul spesifik
    function initModuleLogic(name) {
        switch(name) {
            case 'pos':
                initPOS();
                break;
            case 'inventory':
                // initInventory(); 
                break;
            // Tambah kes lain di sini apabila modul sudah sedia
        }
    }

    // ==========================================
    // 3. LOGIK UI: DRAWER & NAVIGASI
    // ==========================================
    
    // Fungsi Buka/Tutup Drawer
    const toggleDrawer = (isOpen) => {
        drawer.classList.toggle('open', isOpen);
        overlay.classList.toggle('active', isOpen);
    };

    document.getElementById('open-drawer-btn').onclick = () => toggleDrawer(true);
    document.getElementById('close-drawer-btn').onclick = () => toggleDrawer(false);
    overlay.onclick = () => toggleDrawer(false);

    // Event Listener untuk setiap item menu
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const module = item.getAttribute('data-module');
            
            // Kemas kini gaya butang aktif
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Muat kandungan & tutup drawer
            loadModule(module);
            toggleDrawer(false);
        });
    });

    // ==========================================
    // 4. KONFIGURASI AWAL (STARTUP)
    // ==========================================
    
    // 1. Muat Dashboard secara automatik
    loadModule('dashboard');

    // 2. TODO: Semak status Firebase Auth di sini
    // 3. TODO: Inisialisasi Firebase App
});
