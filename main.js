/**
 * main.js — Polyteknisk Boghandel
 * Core UI logic: language toggle, scanner modal, nav behavior, shared utilities
 */

/* =====================
   Language Toggle
   ===================== */
const translations = {
  da: {
    'nav.students':     'Studerende',
    'nav.pro':          'Fagfolk',
    'nav.leisure':      'Fritid',
    'nav.search':       'Søg...',
    'nav.login':        'Log på',
    'nav.cart':         'Kurv',
    'hero.title':       'Din boghandel – <em>siden 1956</em>',
    'hero.sub':         'Specialister i fagbøger til studerende og professionelle.',
    'hero.btn1':        'Find studiebøger',
    'hero.btn2':        'Nyeste udgivelser',
    'section.study':    'Find dine studiebøger',
    'section.new':      'Nyeste udgivelser',
    'login.title':      'Log på',
    'login.email':      'E-mail',
    'login.pass':       'Adgangskode',
    'login.submit':     'Log på',
    'login.register':   'Opret konto',
    'cart.title':       'Din kurv',
    'cart.empty':       'Kurven er tom',
    'cart.checkout':    'Gå til kassen',
    'cart.total':       'I alt',
    'scan.title':       'Scan stregkode',
    'product.addcart':  'Læg i kurv',
    'product.sort':     'Sortér',
  },
  en: {
    'nav.students':     'Students',
    'nav.pro':          'Professionals',
    'nav.leisure':      'Leisure',
    'nav.search':       'Search...',
    'nav.login':        'Login',
    'nav.cart':         'Cart',
    'hero.title':       'Your bookshop – <em>since 1956</em>',
    'hero.sub':         'Specialists in academic books for students and professionals.',
    'hero.btn1':        'Find study books',
    'hero.btn2':        'New releases',
    'section.study':    'Find your study books',
    'section.new':      'Newly published books',
    'login.title':      'Login',
    'login.email':      'Email',
    'login.pass':       'Password',
    'login.submit':     'Login',
    'login.register':   'Create account',
    'cart.title':       'Your Cart',
    'cart.empty':       'Your cart is empty',
    'cart.checkout':    'Go to Checkout',
    'cart.total':       'Total',
    'scan.title':       'Scan Barcode',
    'product.addcart':  'Add to cart',
    'product.sort':     'Sort by',
  }
};

let currentLang = 'da';

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage('da');


/* =====================
   Toast Notification
   ===================== */
function showToast(message, duration = 2800) {
  let toast = document.getElementById('poly-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'poly-toast';
    toast.className = 'poly-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), duration);
}
window.showToast = showToast;


/* =====================
   Barcode Scanner
   ===================== */
let html5QrCode = null;

function startScanner() {
  const scannerModalEl = document.getElementById('scanner-modal');
  if (!scannerModalEl) return;
  const scannerModal = new bootstrap.Modal(scannerModalEl);
  scannerModal.show();

  scannerModalEl.addEventListener('shown.bs.modal', function handler() {
    this.removeEventListener('shown.bs.modal', handler);
    const readerEl = document.getElementById('reader');
    if (typeof Html5Qrcode === 'undefined') {
      readerEl.innerHTML =
        '<p class="text-center text-white p-5">📷 Camera scanner ready.<br><small>Include html5-qrcode library in production.</small></p>';
      return;
    }
    html5QrCode = new Html5Qrcode('reader');
    html5QrCode.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: { width: 250, height: 120 } },
      (decodedText) => {
        const si = document.getElementById('search-input');
        if (si) si.value = decodedText;
        stopScanner();
        scannerModal.hide();
        showToast('📦 ISBN scanned: ' + decodedText);
      },
      () => {}
    ).catch(err => {
      readerEl.innerHTML = `<p class="text-white p-4 text-center">Camera error: ${err}</p>`;
    });
  });
}

function stopScanner() {
  if (html5QrCode) {
    html5QrCode.stop().catch(() => {});
    html5QrCode = null;
  }
}

document.getElementById('scanner-modal')?.addEventListener('hide.bs.modal', stopScanner);
document.querySelectorAll('.scan-trigger').forEach(b => b.addEventListener('click', startScanner));


/* =====================
   Mobile Offcanvas Category Toggle
   ===================== */
document.querySelectorAll('.nav-cat-title').forEach(title => {
  title.addEventListener('click', function () {
    const sub = this.nextElementSibling;
    const icon = this.querySelector('.toggle-icon');
    const isOpen = sub && sub.classList.contains('show');
    document.querySelectorAll('.nav-sub-links').forEach(s => s.classList.remove('show'));
    document.querySelectorAll('.toggle-icon').forEach(i => i.textContent = '＋');
    if (!isOpen && sub) {
      sub.classList.add('show');
      if (icon) icon.textContent = '－';
    }
  });
});


/* =====================
   Search
   ===================== */
const searchForm = document.getElementById('search-form');
if (searchForm) {
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const q = document.getElementById('search-input').value.trim();
    if (q) {
      showToast(`🔍 Searching for: "${q}"`);
      setTimeout(() => { window.location.href = `product.html?q=${encodeURIComponent(q)}`; }, 700);
    }
  });
}

/* =====================
   Preview
   ===================== */

let scannerStream = null;
let scannerModalInstance = null;

async function startScannerPreview() {
  const video = document.getElementById("scanner-video");
  const status = document.getElementById("scanner-status");

  if (!video) return;

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    if (status) status.textContent = "Camera preview is not supported in this browser.";
    return;
  }

  try {
    if (status) status.textContent = "Requesting camera permission...";

    scannerStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment",
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    });

    video.srcObject = scannerStream;
    await video.play();

    if (status) status.textContent = "Point the barcode inside the frame.";
  } catch (error) {
    console.error("Camera error:", error);
    if (status) status.textContent = "Could not access the camera. Check permission / HTTPS.";
  }
}

function stopScannerPreview() {
  const video = document.getElementById("scanner-video");

  if (scannerStream) {
    scannerStream.getTracks().forEach(track => track.stop());
    scannerStream = null;
  }

  if (video) {
    video.pause();
    video.srcObject = null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const modalEl = document.getElementById("scanner-modal");
  const triggerButtons = document.querySelectorAll(".scan-trigger");

  if (!modalEl) return;

  scannerModalInstance = new bootstrap.Modal(modalEl);

  triggerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      scannerModalInstance.show();
    });
  });

  modalEl.addEventListener("shown.bs.modal", startScannerPreview);
  modalEl.addEventListener("hidden.bs.modal", stopScannerPreview);
});




document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const q = searchInput.value.trim();
      window.location.href = q
        ? `product.html?q=${encodeURIComponent(q)}`
        : 'product.html';
    });
  }
});


function switchLang(lang) {
  const path = window.location.pathname;

  if (lang === "en") {
    if (!path.includes("-en.html")) {
      window.location.href = path.replace(".html", "-en.html");
    }
  } else {
    window.location.href = path.replace("-en.html", ".html");
  }
}