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

// Contact form – show status messages when using Formspree
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
          "There was a problem sending your message. Please email me directly.";
        status.style.color = "#dc2626";
      }
    } catch (error) {
      status.textContent =
        "Network error. Please check your connection or email me directly.";
      status.style.color = "#dc2626";
    }
  });
}

// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
