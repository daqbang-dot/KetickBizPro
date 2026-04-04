// js/app.js - Logik Utama Sistem ERP KetickHub

// ==========================================
// 1. IMPORT KESEMUA MODUL
// ==========================================
import { initDashboard } from './dashboard.js';
import { initPOS } from './pos.js';
// import { initInventory } from './inventory.js';
// import { initCRM } from './crm.js';
// ... import modul lain di sini

document.addEventListener('DOMContentLoaded', () => {
    console.log("KetickHub ERP: Sistem Sedia.");

    // Elemen DOM Utama
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
            pageTitle.innerText = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);

            // Jalankan logik JavaScript mengikut modul yang dimuatkan
            initModuleLogic(moduleName);
            
            console.log(`Modul ${moduleName} berjaya dimuatkan.`);
        } catch (err) {
            container.innerHTML = `
                <div style="padding:20px; color:#e74c3c; text-align:center;">
                    <i class="fas fa-exclamation-triangle fa-3x"></i>
                    <h3>Ralat Memuatkan Modul</h3>
                    <p>Fail 'modul/${moduleName}.html' tidak ditemui atau ralat pelayan berlaku.</p>
                </div>`;
        }
    }

    // Fungsi pusat untuk panggil init() bagi modul spesifik
    function initModuleLogic(name) {
        switch(name) {
            case 'dashboard':
                initDashboard();
                break;
            case 'pos':
                initPOS();
                break;
            case 'inventory':
                // initInventory(); 
                break;
            // Tambah kes lain di sini (crm, billing, dll)
        }
    }

    // ==========================================
    // 3. LOGIK UI: DRAWER & NAVIGASI
    // ==========================================
    
    const toggleDrawer = (isOpen) => {
        if (drawer && overlay) {
            drawer.classList.toggle('open', isOpen);
            overlay.classList.toggle('active', isOpen);
        }
    };

    // Event Listeners untuk Butang Menu
    document.getElementById('open-drawer-btn').onclick = () => toggleDrawer(true);
    document.getElementById('close-drawer-btn').onclick = () => toggleDrawer(false);
    overlay.onclick = () => toggleDrawer(false);

    // Navigasi Klik untuk Menu Drawer
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const module = item.getAttribute('data-module');
            
            // Kemas kini gaya butang aktif (UI)
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Muat kandungan modul & tutup drawer
            loadModule(module);
            toggleDrawer(false);
        });
    });

    // ==========================================
    // 4. KONFIGURASI AWAL (STARTUP)
    // ==========================================
    
    // Muat Dashboard secara automatik semasa mula
    loadModule('dashboard');

    // Space untuk Firebase Integration nanti
    // TODO: firebase.initializeApp(config);
});
