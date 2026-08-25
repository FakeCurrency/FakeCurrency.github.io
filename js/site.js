(function () {
  const phone = "0407 818 918";
  const email = "christian@4civil.com.au";
  const page = document.body.dataset.page || "home";

  if (!document.getElementById("preview04-css")) {
    const style = document.createElement("style");
    style.id = "preview04-css";
    style.textContent = `
      .brand-logo{height:64px;width:auto;display:block}
      .footer-logo{height:48px;width:auto;display:block}
      .network-band{background:#0b0b0b;color:#fff}
      .network-inner{max-width:1440px;margin:0 auto;padding:36px 32px 44px}
      .network-kicker{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.55);text-align:center;margin-bottom:24px}
      .network-row{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between;gap:28px;overflow-x:auto}
      .network-row img{height:56px;width:auto;max-width:none;flex:0 0 auto;object-fit:contain}
      @media (max-width:900px){
        .brand-logo{height:52px}
        .network-row img{height:44px}
      }
    `;
    document.head.appendChild(style);
  }

  const header = `
    <div class="preview-bar">Proposed website &nbsp;·&nbsp; <strong>4 Civil Solutions</strong> &nbsp;·&nbsp; Preview 06</div>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand-lockup" href="index.html" aria-label="4 Civil Solutions">
          <img class="brand-logo" src="https://4civil.com.au/wp-content/uploads/2021/10/4civiltransmall.png" alt="4 Civil Solutions" width="300" height="110" />
        </a>
        <nav class="nav" id="nav">
          <a href="work.html" class="${page === "work" ? "active" : ""}">Work</a>
          <a href="capability.html" class="${page === "capability" ? "active" : ""}">Capability</a>
          <a href="contact.html" class="${page === "contact" ? "active" : ""}">Contact</a>
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
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

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
      if (note) note.textContent = "Your email app should open. If it does not, call Christian directly.";
    });
  }
})();
