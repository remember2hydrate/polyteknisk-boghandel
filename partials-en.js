/**
 * partials.js — Polyteknisk Boghandel
 * Injects shared nav, footer, modals into all pages
 */

 document.addEventListener('DOMContentLoaded', function () {

  /* ---- Main Header ---- */
  const headerHtml = `
  <header id="main-header">
    <div id="lang-bar">
      <div class="container d-flex justify-content-between align-items-center">
        <span style="font-size:12px;">
          📍 Anker Engelunds Vej 1, 2800 Kgs. Lyngby &nbsp;|&nbsp; ☎ +45 45 93 15 51
        </span>
        <div class="d-flex align-items-center gap-2">
          <button class="lang-btn" onclick="switchLang('da')">🇩🇰 DA</button>
          <button class="lang-btn active" onclick="switchLang('en')">🇬🇧 EN</button>
        </div>
      </div>
    </div>
    <div class="header-logo-area">
      <div class="container d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <!-- Hamburger (mobile) -->
        <button class="btn d-lg-none p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav">
          <span class="navbar-toggler-icon" style="background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280%2C0%2C0%2C0.7%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"); width:24px;height:24px;display:block;">Ξ</span>
        </button>

        <!-- Logo -->
        <a href="index-en.html" class="site-logo">
          <img src="assets/logo.png" alt="Polyteknisk Boghandel" class="logo-img">
        </a>

        <!-- Search -->
        <form id="search-form" class="header-search flex-grow-1" style="max-width:480px;">
          <div class="search-wrapper">
            <input type="text" id="search-input" class="search-input"
              data-i18n-placeholder="nav.search" placeholder="Search...">
            <button type="button" class="scan-btn scan-trigger" title="Scan barcode">📷</button>
            <button type="submit" class="search-btn">🔍</button>
          </div>
        </form>

        <!-- Icons -->
        <div class="header-icons d-flex align-items-center">
          <button class="hdr-icon-btn" onclick="document.getElementById('loginModal') && new bootstrap.Modal(document.getElementById('loginModal')).show()">
            <span>👤</span>
            <span class="icon-label" data-i18n="nav.login">Login</span>
          </button>
          <button class="hdr-icon-btn open-cart-btn" style="position:relative;">
            <span>🛒</span>
            <span class="icon-label" data-i18n="nav.cart">Cart</span>
            <span class="cart-badge" style="display:none;">0</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Category Nav (desktop) -->
    <nav id="cat-nav" class="d-none d-lg-block">
      <div class="container">
        <ul class="navbar-nav flex-row justify-content-center">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">For students</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="product.html?cat=studieteknik">Study technique and Formulae</a></li>
          <li><a class="dropdown-item" href="product.html?cat=papirvarer">Paper & office supplies</a></li>
          <li><a class="dropdown-item" href="product.html?cat=byggematerialer">Study- and building articles</a></li>
          <li><a class="dropdown-item" href="product.html?cat=kitler">Labcoats & lab-equipment</a></li>
          <li><a class="dropdown-item" href="product.html?cat=dtu-merch">DTU Merchandise</a></li>
          <li><a class="dropdown-item" href="product.html?cat=gavekort">Gift certificates</a></li>
        </ul>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">For professionals</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="product.html?cat=byggeri-konstruktion">Building & Construction</a></li>
          <li><a class="dropdown-item" href="product.html?cat=sbi-anvisninger">SBI guidelines</a></li>
          <li><a class="dropdown-item" href="product.html?cat=br18-ab18">Building regulations 2018</a></li>
          <li><a class="dropdown-item" href="product.html?cat=el-installator">Books on electrical installations</a></li>
          <li><a class="dropdown-item" href="product.html?cat=teknik-videnskab">Science & Technical</a></li>
          <li><a class="dropdown-item" href="product.html?cat=it-computer">IT & Computer</a></li>
          <li><a class="dropdown-item" href="product.html?cat=maskinmester-skibsmotor">Marine engineer & Ship engines</a></li>
          <li><a class="dropdown-item" href="product.html?cat=ledelse-business">Management & Business</a></li>
        </ul>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">For leisure</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="product.html?cat=popularvidenskab">Popular science</a></li>
          <li><a class="dropdown-item" href="product.html?cat=gaver-sjov">Gifts & Gadgets</a></li>
          <li><a class="dropdown-item" href="product.html?cat=tekniklegetoj">Technical toys</a></li>
          <li><a class="dropdown-item" href="product.html?cat=giant-microbes">Giant Microbes</a></li>
        </ul>
      </li>
        </ul>
      </div>
    </nav>
  </header>`;

  /* ---- Mobile Offcanvas Nav ---- */
  const mobileNavHtml = `
  <div class="offcanvas offcanvas-start offcanvas-nav" tabindex="-1" id="mobileNav">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Menu</h5>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
  </div>

  <div class="offcanvas-body p-0">
    <div class="mobile-nav-section">
      <button class="nav-cat-title w-100 text-start border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileStudents"
              aria-expanded="false"
              aria-controls="mobileStudents">
        For students
        <span>▾</span>
      </button>
      <div class="collapse nav-sub-links" id="mobileStudents">
        <a href="product.html?cat=studieteknik">Study technique and Formulae</a>
        <a href="product.html?cat=papirvarer">Paper & office supplies</a>
        <a href="product.html?cat=byggematerialer">Study- and building articles</a>
        <a href="product.html?cat=kitler">Labcoats & lab-equipment</a>
        <a href="product.html?cat=dtu-merch">DTU Merchandise</a>
        <a href="product.html?cat=gavekort">Gift certificates</a>
      </div>
    </div>

    <div class="mobile-nav-section">
      <button class="nav-cat-title w-100 text-start border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileProfessionals"
              aria-expanded="false"
              aria-controls="mobileProfessionals">
        For professionals
        <span>▾</span>
      </button>
      <div class="collapse nav-sub-links" id="mobileProfessionals">
        <a href="product.html?cat=byggeri-konstruktion">Building & Construction</a>
        <a href="product.html?cat=sbi-anvisninger">SBI guidelines</a>
        <a href="product.html?cat=br18-ab18">Building regulations 2018</a>
        <a href="product.html?cat=el-installator">Books on electrical installations</a>
        <a href="product.html?cat=teknik-videnskab">Science & Technical</a>
        <a href="product.html?cat=it-computer">IT & Computer</a>
        <a href="product.html?cat=maskinmester-skibsmotor">Marine engineer & Ship engines</a>
        <a href="product.html?cat=ledelse-business">Management & Business</a>
      </div>
    </div>

    <div class="mobile-nav-section">
      <button class="nav-cat-title w-100 text-start border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileLeisure"
              aria-expanded="false"
              aria-controls="mobileLeisure">
        For leisure
        <span>▾</span>
      </button>
      <div class="collapse nav-sub-links" id="mobileLeisure">
        <a href="product.html?cat=popularvidenskab">Popular science</a>
        <a href="product.html?cat=gaver-sjov">Gifts & Gadgets</a>
        <a href="product.html?cat=tekniklegetoj">Technical toys</a>
        <a href="product.html?cat=giant-microbes">Giant Microbes</a>
      </div>
    </div>
  </div>
</div>`;

  /* ---- Cart Offcanvas ---- */
  const cartHtml = `
  <div class="offcanvas offcanvas-end offcanvas-cart" tabindex="-1" id="cartOffcanvas">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" data-i18n="cart.title">Your cart</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body px-4 py-3">
      <p id="cart-empty-msg" class="text-muted text-center py-5" style="display:none;" data-i18n="cart.empty">The cart is empty</p>
      <div id="cart-items-list"></div>
    </div>
    <div id="cart-footer" class="cart-footer" style="display:none;">
      <div class="d-flex justify-content-between align-items-center">
        <span class="cart-total" data-i18n="cart.total">Total</span>
        <span class="cart-total"><span id="cart-total-price">0,00 kr.</span></span>
      </div>
      <button class="btn-checkout" onclick="checkout()" data-i18n="cart.checkout">Go to checkout</button>
    </div>
  </div>`;

  /* ---- Login Modal ---- */
  const loginModalHtml = `
  <div class="modal fade modal-login" id="loginModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered" style="max-width:400px;">
      <div class="modal-content border-0" style="border-radius:4px;overflow:hidden;">
        <div class="modal-header">
          <h5 class="modal-title" data-i18n="login.title">Login</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-4">
            <label class="form-label-poly" data-i18n="login.email">E-mail</label>
            <input type="email" class="form-control-poly" placeholder="your@email.com">
          </div>
          <div class="mb-4">
            <label class="form-label-poly" data-i18n="login.pass">Password</label>
            <input type="password" class="form-control-poly" placeholder="••••••••">
          </div>
          <button class="btn-login-submit" data-i18n="login.submit"
            onclick="showToast('✅ Logged in!'); bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide()">
            Login
          </button>
          <div class="login-divider">or</div>
          <button class="btn-login-submit" style="background:var(--poly-navy);" data-i18n="login.register">
            Register account
          </button>
          <p class="text-center mt-3" style="font-size:12px; color:var(--poly-text-muted);">
            <a href="#">Forgot password?</a>
          </p>
        </div>
      </div>
    </div>
  </div>`;

  /* ---- Scanner Modal ---- */
  const scannerModalHtml = `
  <div class="modal fade" id="scanner-modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered" style="max-width:420px;">
      <div class="modal-content border-0" style="overflow:hidden; border-radius:6px;">
        <div class="modal-header" style="background:var(--poly-navy);color:white;">
          <h5 class="modal-title" data-i18n="scan.title">📷 Scan barcode</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-0" style="background:#111;">
          <div id="reader" style="width:100%;min-height:220px;display:flex;align-items:center;justify-content:center;">
            <p style="color:rgba(255,255,255,0.6);font-size:13px;padding:40px;text-align:center;">
              📸 Camera will activate when opened.<br>
              <small>Point at a book's barcode or ISBN.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  /* ---- Footer ---- */
  const footerHtml = `
  <footer>
    <div class="container">
      <div class="row g-4">
        <div class="col-md-3">
          <div class="footer-logo-text"><span>Poly</span>teknisk<br>Boghandel</div>
          <p style="font-size:13px;color:rgba(255,255,255,0.6);line-height:1.7;">
            Denmark's specialist bookstore for technical and scientific books since 1956.
          </p>
          <p style="font-size:13px;color:rgba(255,255,255,0.5);">
            📍 Anker Engelunds Vej 1<br>
            2800 Kgs. Lyngby<br>
            ☎ +45 45 93 15 51<br>
            ✉ info@polyteknisk.dk
          </p>
        </div>

        <div class="col-md-3">
          <h5>Opening hours</h5>
          <table class="footer-hours">
            <tr><td>Monday</td><td>10:00–17:00</td></tr>
            <tr><td>Tuesday</td><td>10:00–17:00</td></tr>
            <tr><td>Wednesday</td><td>10:00–17:00</td></tr>
            <tr><td>Thursday</td><td>10:00–17:00</td></tr>
            <tr><td>Friday</td><td>10:00–16:00</td></tr>
            <tr><td>Saturday</td><td>Closed</td></tr>
            <tr><td>Sunday</td><td>Closed</td></tr>
          </table>
        </div>

        <div class="col-md-3">
          <h5>Categories</h5>
          <a href="product.html?cat=dtu">Study books – DTU</a>
          <a href="product.html?cat=engineering">Engineering science</a>
          <a href="product.html?cat=building">Construction & SBI</a>
          <a href="product.html?cat=it">IT & Programming</a>
          <a href="product.html?cat=popular">Popular science</a>
          <a href="product.html?cat=ebooks">Digital books</a>
        </div>

        <div class="col-md-3">
          <h5>Information</h5>
          <a href="#">About Polyteknisk Boghandel</a>
          <a href="#">Booklist guarantee</a>
          <a href="#">FAQ for students</a>
          <a href="#">Business customers</a>
          <a href="#">Gift certificates</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms and conditions</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container d-flex justify-content-between flex-wrap gap-2">
        <span>© 2025 Polyteknisk Boghandel A/S · CVR 10 40 07 40</span>
        <span>💳 Dankort · Visa · Mastercard · MobilePay</span>
      </div>
    </div>
  </footer>`;

  /* ---- Inject all partials ---- */
  const headerMount = document.getElementById('header-mount');
  if (headerMount) headerMount.outerHTML = headerHtml;

  const footerMount = document.getElementById('footer-mount');
  if (footerMount) footerMount.outerHTML = footerHtml;

  document.body.insertAdjacentHTML('beforeend', mobileNavHtml);
  document.body.insertAdjacentHTML('beforeend', cartHtml);
  document.body.insertAdjacentHTML('beforeend', loginModalHtml);
  document.body.insertAdjacentHTML('beforeend', scannerModalHtml);
});