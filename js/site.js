(function () {
  const phone = "0407 818 918";
  const email = "christian@4civil.com.au";
  const page = document.body.dataset.page || "home";

  if (!document.getElementById("preview09-css")) {
    const style = document.createElement("style");
    style.id = "preview09-css";
    style.textContent = `
      html{-webkit-text-size-adjust:100%;text-size-adjust:100%}
      body{overflow-x:hidden}
      .btn{min-height:44px;-webkit-tap-highlight-color:transparent}
      input,textarea{font-size:16px}
      .brand-logo{height:64px;width:auto;display:block}
      .footer-logo{height:48px;width:auto;display:block}
      .network-band{background:#0b0b0b;color:#fff}
      .cta-people{display:flex;align-items:center;gap:28px 40px;flex-wrap:wrap}
      .cta-person{display:flex;align-items:center;gap:16px}
      .cta-person img{width:88px;height:88px;object-fit:cover;border-radius:50%;flex:0 0 auto}
      .cta-person p{margin:0 0 10px;font-size:15px;letter-spacing:.04em;text-transform:uppercase;color:rgba(255,255,255,.78)}
      @media (max-width:900px){
        .header-inner{padding:10px 16px;gap:12px}
        .brand-logo{height:46px!important}
        .nav,.phone{display:none}
        .nav.open{display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:#f4f1eb;padding:8px 16px 20px;border-bottom:1px solid rgba(18,18,18,.12);align-items:stretch;gap:0;z-index:60}
        .nav.open a{padding:14px 4px;font-size:18px;min-height:48px;display:flex;align-items:center;border-bottom:1px solid rgba(18,18,18,.12)}
        .menu-toggle{display:block;width:44px;height:44px}
        .stats{grid-template-columns:1fr 1fr!important}
        .jobs{grid-template-columns:1fr 1fr!important}
        .services,.split,.work-grid,.trust,.section-head,.service-detail,.plant,.contact-grid,.form-row,.cred-grid,.tick-grid{grid-template-columns:1fr!important}
        .hero{min-height:78vh}
        .hero-copy{padding:0 20px 36px}
        .hero h1{font-size:clamp(32px,10vw,48px)!important;max-width:14ch}
        .cta-band{flex-direction:column;align-items:stretch;margin:0 12px 36px;padding:28px 20px}
        .cta-people{flex-direction:column;align-items:stretch;gap:18px}
        .cta-person{width:100%}
        .cta-person .btn{width:100%}
        .cta-person img{width:72px;height:72px}
        .section{padding:56px 16px}
        .page-hero{padding:48px 16px 24px}
        .contact-grid{padding:12px 16px 64px;gap:28px}
        .split{min-height:0;grid-template-columns:1fr!important}
        .split-copy{padding:32px 20px}
        .network-inner{padding:28px 16px 32px!important}
        .network-row{gap:20px!important;-webkit-overflow-scrolling:touch}
        .network-row img{height:40px!important}
        .site-footer{flex-wrap:wrap;padding:24px 16px}
        h2{font-size:clamp(28px,8vw,42px)}
      }
      @media (max-width:480px){
        .header-actions .btn{display:none}
        .jobs{grid-template-columns:1fr!important}
        .hero{min-height:70vh}
      }
    `;
    document.head.appendChild(style);
  }

  const header = `
    <div class="preview-bar">Proposed website &nbsp;·&nbsp; <strong>4 Civil Solutions</strong> &nbsp;·&nbsp; Preview 09 · phone ready</div>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand-lockup" href="index.html" aria-label="4 Civil Solutions">
          <img class="brand-logo" src="https://4civil.com.au/wp-content/uploads/2021/10/4civiltransmall.png" alt="4 Civil Solutions" width="300" height="110" />
        </a>
        <nav class="nav" id="nav">
          <a href="work.html" class="${page === "work" ? "active" : ""}">Work</a>
          <a href="capability.html" class="${page === "capability" ? "active" : ""}">Capability</a>
          <a href="contact.html" class="${page === "contact" ? "active" : ""}">Contact</a>
          <a href="tel:+61407818918">${phone}</a>
        </nav>
        <div class="header-actions">
          <a class="phone" href="tel:+61407818918">${phone}</a>
          <a class="btn" href="contact.html">Enquire</a>
          <button class="menu-toggle" aria-label="Menu" id="menuBtn"><span></span><span></span></button>
        </div>
      </div>
    </header>
  `;

  const networks = document.getElementById("networks") ? "" : `
    <section class="network-band" aria-label="Affiliations" style="background:#0b0b0b;color:#fff">
      <div class="network-inner" style="max-width:1440px;margin:0 auto;padding:36px 32px 44px">
        <div class="network-kicker" style="font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.55);text-align:center;margin-bottom:24px">Affiliations</div>
        <div class="network-row" style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between;gap:28px;overflow-x:auto">
          <img src="https://4civil.com.au/wp-content/uploads/2021/10/citywide-1.png" alt="Citywide" style="height:56px;width:auto;max-width:none;flex:0 0 auto;display:block;object-fit:contain" />
          <img src="https://4civil.com.au/wp-content/uploads/2021/10/citipower.png" alt="CitiPower" style="height:56px;width:auto;max-width:none;flex:0 0 auto;display:block;object-fit:contain" />
          <img src="https://4civil.com.au/wp-content/uploads/2021/10/powercor.png" alt="Powercor Australia" style="height:72px;width:auto;max-width:none;flex:0 0 auto;display:block;object-fit:contain" />
          <img src="https://4civil.com.au/wp-content/uploads/2021/10/spausnet.png" alt="SP AusNet" style="height:48px;width:auto;max-width:none;flex:0 0 auto;display:block;object-fit:contain" />
          <img src="https://4civil.com.au/wp-content/uploads/2021/10/jemena.png" alt="Jemena" style="height:56px;width:auto;max-width:none;flex:0 0 auto;display:block;object-fit:contain" />
        </div>
      </div>
    </section>`;

  const footer = `
    ${networks}
    <footer class="site-footer">
      <a class="footer-brand" href="index.html" aria-label="4 Civil Solutions">
        <img class="footer-logo" src="https://4civil.com.au/wp-content/uploads/2021/10/4civiltransmall.png" alt="4 Civil Solutions" width="300" height="110" />
      </a>
      <div>© ${new Date().getFullYear()} 4 Civil Solutions. Australian owned.</div>
      <div><a href="tel:+61407818918">${phone}</a> &nbsp;·&nbsp; <a href="mailto:${email}">${email}</a></div>
    </footer>
  `;

  const mountHeader = document.getElementById("site-header");
  const mountFooter = document.getElementById("site-footer");
  if (mountHeader) mountHeader.outerHTML = header;
  if (mountFooter) mountFooter.outerHTML = footer;

  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  if (btn && nav) btn.addEventListener("click", function () { nav.classList.toggle("open"); });

  const form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = (form.querySelector('[name="first"]').value + " " + form.querySelector('[name="last"]').value).trim();
      const from = form.querySelector('[name="email"]').value;
      const message = form.querySelector('[name="message"]').value;
      const subject = encodeURIComponent("Website enquiry — 4 Civil Solutions");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${from}\n\n${message}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      form.reset();
      const note = document.getElementById("form-status");
      if (note) note.textContent = "Your email app should open. If it does not, call directly.";
    });
  }
})();
