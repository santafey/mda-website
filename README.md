<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Malinga Does Admin (MDA INC) – Admin & Student Support Services</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="Malinga Does Admin (MDA INC) offers CIPC & SARS admin, VAT filing, cashbook capturing, CSD compliance, and support for students with applications and CV drafting."
  />
  <style>
    :root {
      --primary: #124559;
      --primary-light: #197aa2;
      --accent: #f4a261;
      --bg: #f7f9fb;
      --text: #1f2933;
      --muted: #6b7280;
      --white: #ffffff;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    header {
      background: var(--primary);
      color: var(--white);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .container {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.8rem 0;
    }

    .logo {
      font-weight: 700;
      font-size: 1.2rem;
      letter-spacing: 0.05em;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      font-size: 0.95rem;
    }

    nav ul li a {
      padding: 0.4rem 0.6rem;
      border-radius: 0.25rem;
      transition: background 0.2s;
    }

    nav ul li a:hover {
      background: rgba(255, 255, 255, 0.12);
    }

    .btn {
      display: inline-block;
      padding: 0.6rem 1.1rem;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.95rem;
      transition: transform 0.1s, box-shadow 0.1s, background 0.1s;
      text-align: center;
    }

    .btn-primary {
      background: var(--accent);
      color: #1f2933;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }

    .btn-primary:hover {
      background: #f29a4d;
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
    }

    .btn-outline {
      background: transparent;
      color: var(--white);
      border: 1px solid rgba(255, 255, 255, 0.4);
    }

    /* Hero */
    .hero {
      padding: 3rem 0 3.5rem;
      background: linear-gradient(135deg, #124559, #0b3a4a 55%, #0f5c7a);
      color: var(--white);
    }

    .hero-inner {
      display: grid;
      grid-template-columns: minmax(0, 3fr) minmax(0, 2.5fr);
      gap: 2.5rem;
      align-items: center;
    }

    .hero h1 {
      font-size: clamp(2rem, 3vw, 2.6rem);
      margin-bottom: 1rem;
    }

    .hero p {
      max-width: 32rem;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 1.5rem;
    }

    .hero-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-bottom: 1.5rem;
      font-size: 0.8rem;
    }

    .badge {
      padding: 0.25rem 0.7rem;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.35);
      background: rgba(0, 0, 0, 0.12);
      backdrop-filter: blur(6px);
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      align-items: center;
    }

    .hero-note {
      font-size: 0.8rem;
      opacity: 0.9;
    }

    .hero-card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 0.75rem;
      padding: 1.5rem;
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
    }

    .hero-card h2 {
      font-size: 1.1rem;
      margin-bottom: 0.7rem;
    }

    .pill-tabs {
      display: inline-flex;
      border-radius: 999px;
      padding: 0.15rem;
      background: rgba(15, 23, 42, 0.6);
      margin-bottom: 1rem;
    }

    .pill-tabs button {
      border-radius: 999px;
      border: none;
      background: transparent;
      color: #cbd5f5;
      font-size: 0.8rem;
      padding: 0.3rem 0.65rem;
      cursor: pointer;
      transition: background 0.15s;
    }

    .pill-tabs button.active {
      background: var(--accent);
      color: #1f2933;
      font-weight: 600;
    }

    .hero-list {
      list-style: none;
      font-size: 0.85rem;
      display: grid;
      gap: 0.25rem;
      margin-bottom: 1rem;
    }

    .hero-list li::before {
      content: "•";
      color: var(--accent);
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }

    /* Sections */
    section {
      padding: 3rem 0;
    }

    .section-title {
      text-align: center;
      margin-bottom: 2rem;
    }

    .section-title h2 {
      font-size: 1.6rem;
      margin-bottom: 0.4rem;
    }

    .section-title p {
      color: var(--muted);
      font-size: 0.95rem;
      max-width: 30rem;
      margin: 0.3rem auto 0;
    }

    /* Services */
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--white);
      border-radius: 0.75rem;
      padding: 1.3rem 1.2rem;
      box-shadow: 0 6px 14px rgba(15, 23, 42, 0.06);
      border: 1px solid rgba(148, 163, 184, 0.25);
    }

    .card h3 {
      font-size: 1.05rem;
      margin-bottom: 0.4rem;
    }

    .card small {
      color: var(--muted);
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .card ul {
      margin-top: 0.6rem;
      padding-left: 1.1rem;
      font-size: 0.9rem;
      color: #374151;
    }

    .card ul li {
      margin-bottom: 0.25rem;
    }

    .tag {
      display: inline-block;
      font-size: 0.7rem;
      padding: 0.1rem 0.45rem;
      border-radius: 999px;
      background: #e0f2fe;
      color: #075985;
      margin-right: 0.3rem;
      margin-top: 0.3rem;
    }

    /* Contact */
    .contact-layout {
      display: grid;
      grid-template-columns: minmax(0, 3fr) minmax(0, 2.5fr);
      gap: 1.8rem;
      align-items: flex-start;
    }

    form {
      background: var(--white);
      border-radius: 0.75rem;
      padding: 1.4rem 1.3rem;
      box-shadow: 0 6px 14px rgba(15, 23, 42, 0.06);
      border: 1px solid rgba(148, 163, 184, 0.25);
    }

    .field-group {
      margin-bottom: 0.8rem;
    }

    label {
      display: block;
      font-size: 0.85rem;
      margin-bottom: 0.25rem;
      color: #374151;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select,
    textarea {
      width: 100%;
      padding: 0.5rem 0.55rem;
      border-radius: 0.4rem;
      border: 1px solid #cbd5e1;
      font-size: 0.9rem;
      font-family: inherit;
    }

    textarea {
      min-height: 90px;
      resize: vertical;
    }

    .inline-fields {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.8rem;
    }

    .helper-text {
      font-size: 0.78rem;
      color: var(--muted);
      margin-top: 0.1rem;
    }

    .contact-info {
      font-size: 0.9rem;
      color: #4b5563;
    }

    .contact-info h3 {
      font-size: 1.1rem;
      margin-bottom: 0.4rem;
    }

    .contact-box {
      background: #e0f2fe;
      border-radius: 0.75rem;
      padding: 1rem;
      margin-top: 0.9rem;
      font-size: 0.88rem;
    }

    .pill {
      display: inline-block;
      border-radius: 999px;
      background: #eff6ff;
      color: #1d4ed8;
      font-size: 0.75rem;
      padding: 0.15rem 0.6rem;
      margin-right: 0.3rem;
      margin-top: 0.3rem;
    }

    footer {
      padding: 1.3rem 0 1.6rem;
      font-size: 0.8rem;
      color: var(--muted);
      text-align: center;
    }

    footer a {
      color: var(--primary-light);
    }

    /* Responsive */
    @media (max-width: 900px) {
      .hero-inner,
      .contact-layout {
        grid-template-columns: minmax(0, 1fr);
      }
      .hero {
        padding-top: 2.3rem;
      }
    }

    @media (max-width: 768px) {
      nav ul {
        display: none; /* can add a mobile menu later */
      }

      .grid-3 {
        grid-template-columns: minmax(0, 1fr);
      }

      section {
        padding: 2.3rem 0;
      }

      .hero {
        padding-bottom: 2.5rem;
      }
    }
  </style>
</head>
<body>
  <!-- HEADER -->
  <header>
    <div class="container nav">
      <div class="logo">Malinga Does Admin (MDA INC)</div>
      <<nav>
  <ul>
    <li><a href="index.html#business-services">Business Services</a></li>
    <li><a href="index.html#student-services">Student & CV</a></li>
    <li><a href="pricing.html">Pricing</a></li>
    <li><a href="index.html#contact">Contact</a></li>
    <li><a href="index.html#contact" class="btn btn-outline">Get a Quote</a></li>
  </ul>
</nav>

    </div>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="container hero-inner">
      <div>
        <h1>Outsource your admin. Focus on growth.</h1>
        <p>
          Malinga Does Admin (MDA INC) helps businesses of all sizes stay compliant and organized –
          from CIPC and SARS submissions to cashbook capturing – and supports students with
          applications and professional CVs.
        </p>

        <div class="hero-badges">
          <span class="badge">CIPC & SARS admin</span>
          <span class="badge">Small, Medium & Large Businesses</span>
          <span class="badge">Student & Bursary Support</span>
        </div>

        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Request a free consultation</a>
          <span class="hero-note">Quick response via email or WhatsApp.</span>
        </div>
      </div>

      <aside class="hero-card">
        <div class="pill-tabs">
          <button class="active" data-target="business-panel">Business</button>
          <button data-target="student-panel">Students</button>
        </div>

        <div id="business-panel">
          <h2>Business admin made simple</h2>
          <ul class="hero-list">
            <li>Annual returns & CIPC compliance</li>
            <li>Filing of Beneficial Ownership (BEO) with CIPC</li>
            <li>Monthly VAT submissions</li>
            <li>Cashbook capturing: income & expenses</li>
            <li>Drafting invoices & purchase orders</li>
            <li>Tax pin applications</li>
            <li>CSD registration & CSD compliance</li>
          </ul>
          <p class="hero-note">
            Ideal for start-ups, SMEs, and established companies who want
            to outsource admin without hiring full‑time staff.
          </p>
        </div>

        <div id="student-panel" style="display: none;">
          <h2>Support for students & job seekers</h2>
          <ul class="hero-list">
            <li>University, college & bursary applications</li>
            <li>Assistance with required documents</li>
            <li>Professional CV drafting & layout</li>
            <li>Motivation letters and cover letters</li>
          </ul>
          <p class="hero-note">
            Perfect for matriculants, university students, and anyone
            needing a strong CV or help with applications.
          </p>
        </div>
      </aside>
    </div>
  </section>

  <!-- BUSINESS SERVICES -->
  <section id="business-services">
    <div class="container">
      <div class="section-title">
        <h2>Business Services</h2>
        <p>
          Flexible support for micro, small, medium and large
          businesses. Choose once‑off tasks or ongoing monthly support.
        </p>
      </div>

      <div class="grid-3">
        <div class="card">
          <small>Compliance & Registrations</small>
          <h3>CIPC & Tax Services</h3>
          <ul>
            <li>Filing annual returns</li>
            <li>CIPC compliance checks & updates</li>
            <li>Filing of Beneficial Ownership (BEO) on CIPC</li>
            <li>Assistance with company information updates</li>
            <li>Tax pin acquisition</li>
          </ul>
          <div>
            <span class="tag">Once‑off</span>
            <span class="tag">Retainer options</span>
          </div>
        </div>

        <div class="card">
          <small>Accounting Admin</small>
          <h3>VAT & Cashbook</h3>
          <ul>
            <li>Monthly VAT return preparation & filing</li>
            <li>Capturing monthly cashbook transactions</li>
            <li>Recording of income & expenses</li>
            <li>Basic reconciliations for clarity</li>
            <li>Reports for your accountant or auditor</li>
          </ul>
          <div>
            <span class="tag">Monthly support</span>
            <span class="tag">All business sizes</span>
          </div>
        </div>

        <div class="card">
          <small>Operations Support</small>
          <h3>Documents & CSD</h3>
          <ul>
            <li>Drafting professional invoices</li>
            <li>Drafting purchase orders</li>
            <li>Assistance with CSD registration</li>
            <li>Ongoing CSD compliance updates</li>
            <li>Document templates for internal use</li>
          </ul>
          <div>
            <span class="tag">Start‑ups</span>
            <span class="tag">Tenders & supplier lists</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STUDENT & CV SERVICES -->
  <section id="student-services">
    <div class="container">
      <div class="section-title">
        <h2>Student & CV Services</h2>
        <p>
          One‑on‑one assistance for students and anyone who needs help
          with applications, CVs or motivation letters.
        </p>
      </div>

      <div class="grid-3">
        <div class="card">
          <small>Applications</small>
          <h3>University & College</h3>
          <ul>
            <li>Guidance on choosing suitable programmes</li>
            <li>Assistance completing online applications</li>
            <li>Help gathering and uploading documents</li>
            <li>Tracking application submissions</li>
          </ul>
          <div>
            <span class="tag">Matriculants</span>
            <span class="tag">Undergraduates</span>
          </div>
        </div>

        <div class="card">
          <small>Funding</small>
          <h3>Bursary Applications</h3>
          <ul>
            <li>Identifying suitable bursary opportunities</li>
            <li>Completing bursary forms correctly</li>
            <li>Drafting strong motivation letters</li>
            <li>Assistance with supporting documents</li>
          </ul>
          <div>
            <span class="tag">Scholarships</span>
            <span class="tag">Bursaries</span>
          </div>
        </div>

        <div class="card">
          <small>Career Tools</small>
          <h3>CV & Cover Letters</h3>
          <ul>
            <li>Professional CV drafting and formatting</li>
            <li>Updating existing CVs</li>
            <li>Tailored cover letters</li>
            <li>Basic LinkedIn profile guidance</li>
          </ul>
          <div>
            <span class="tag">Students</span>
            <span class="tag">Job seekers</span>
            <span class="tag">Career change</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <div class="container">
      <div class="section-title">
        <h2>Get in touch</h2>
        <p>
          Tell me what you need help with and I’ll respond with
          information, next steps, and an estimate.
        </p>
      </div>

      <div class="contact-layout">
        <form
          id="contact-form"
          action="https://formspree.io/f/xzdlnrkz"
          method="POST"
        >
          <div class="inline-fields">
            <div class="field-group">
              <label for="name">Full name *</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="field-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="_replyto" required />
            </div>
          </div>

          <div class="inline-fields">
            <div class="field-group">
              <label for="phone">Phone / WhatsApp</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div class="field-group">
              <label for="client-type">I am a *</label>
              <select id="client-type" name="client_type" required>
                <option value="">Select one</option>
                <option value="business">Business</option>
                <option value="student">Student</option>
                <option value="job-seeker">Job seeker</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="field-group">
            <label for="services">Services needed *</label>
            <select id="services" name="services" required>
              <option value="">Select a main service</option>
              <option value="annual-returns">Annual returns / CIPC compliance</option>
              <option value="beo">Beneficial Ownership (BEO) filing</option>
              <option value="vat">Monthly VAT filing</option>
              <option value="cashbook">Cashbook capturing (income & expenses)</option>
              <option value="invoices-pos">Invoices & Purchase Orders</option>
              <option value="tax-pin">Tax pin / SARS admin</option>
              <option value="csd">CSD registration & compliance</option>
              <option value="tertiary-apps">University / College applications</option>
              <option value="bursaries">Bursary applications</option>
              <option value="cv">CV drafting / update</option>
              <option value="other">Other / Not sure</option>
            </select>
            <p class="helper-text">
              Choose the closest match – you can explain more below.
            </p>
          </div>

          <div class="field-group">
            <label for="message">Tell me more *</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Briefly describe your business or studies and what you need help with."
            ></textarea>
          </div>

          <input
            type="hidden"
            name="source"
            value="Malinga Does Admin (MDA INC) website contact form"
          />

          <button type="submit" class="btn btn-primary">Submit enquiry</button>
          <p id="form-status" class="helper-text" style="margin-top: 0.4rem;"></p>
        </form>

        <div class="contact-info">
          <h3>Prefer direct contact?</h3>
          <p>
            You can also reach out directly via email or WhatsApp.
            I work with clients across South Africa and can assist
            remotely.
          </p>

          <div class="contact-box">
            <p><strong>Email:</strong> <a href="mailto:sinethembamalingas@gmail.com">sinethembamalingas@gmail.com</a></p>
            <p><strong>WhatsApp:</strong>
              <a href="https://wa.me/27694707317" target="_blank">+27&nbsp;69&nbsp;470&nbsp;7317</a>
            </p>
            <p style="margin-top: 0.5rem;">
              Business hours: Mon – Fri, 08:00 – 17:00 (SAST)
            </p>
          </div>

          <p style="margin-top: 1rem;">Popular requests:</p>
          <div>
            <span class="pill">Annual returns</span>
            <span class="pill">BEO filing</span>
            <span class="pill">Monthly VAT</span>
            <span class="pill">CSD registration</span>
            <span class="pill">University applications</span>
            <span class="pill">CV drafting</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="container">
      <p>&copy; <span id="year"></span> Malinga Does Admin (MDA INC). All rights reserved.</p>
      <p>
        Admin support for small, medium and large businesses, as well as students
        and job seekers.
      </p>
    </div>
  </footer>

  <script>
    // Toggle hero card between Business / Students
    const tabs = document.querySelectorAll(".pill-tabs button");
    const businessPanel = document.getElementById("business-panel");
    const studentPanel = document.getElementById("student-panel");

    tabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabs.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        if (btn.dataset.target === "business-panel") {
          businessPanel.style.display = "block";
          studentPanel.style.display = "none";
        } else {
          businessPanel.style.display = "none";
          studentPanel.style.display = "block";
        }
      });
    });

    // Contact form – send via Formspree and show status messages
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        status.textContent = "Sending...";
        status.style.color = "#4b5563";

        try {
          const formData = new FormData(form);
          const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            status.textContent =
              "Thank you for your enquiry. I will contact you shortly.";
            status.style.color = "#16a34a";
            form.reset();
          } else {
            status.textContent =
              "There was a problem sending your message. Please email me directly at sinethembamalingas@gmail.com.";
            status.style.color = "#dc2626";
          }
        } catch (error) {
          status.textContent =
            "Network error. Please try again or email me directly at sinethembamalingas@gmail.com.";
          status.style.color = "#dc2626";
        }
      });
    }

    // Set current year in footer
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  </script>
</body>
</html>
