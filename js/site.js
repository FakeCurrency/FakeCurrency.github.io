(function () {
  const phone = "0407 818 918";
  const email = "christian@4civil.com.au";
  const page = document.body.dataset.page || "home";
  const header = `
    <div class="preview-bar">Proposed website &nbsp;·&nbsp; <strong>4 Civil Solutions</strong> &nbsp;·&nbsp; Preview 02</div>
    <header class="site-header">
      <div class="header-inner">
        <a class="wordmark" href="index.html">
          <span class="brand">4Civil</span>
          <span class="sub">Solutions</span>
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
  const footer = `
    <footer class="site-footer">
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
      window.location.href = `mailto:${email}?subject=${encodeURIComponent("Website enquiry — 4 Civil Solutions")}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + from + "\n\n" + message)}`;
      form.reset();
      const note = document.getElementById("form-status");
      if (note) note.textContent = "Your email app should open. If it does not, call Christian directly.";
    });
  }
})();
