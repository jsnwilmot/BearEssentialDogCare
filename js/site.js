(function () {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.dataset.open = String(!isOpen);
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        toggle.setAttribute("aria-expanded", "false");
        nav.dataset.open = "false";
      }
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const email = "tammy@bearessentials.ca";

  function setInvalid(field, invalid) {
    const wrapper = field.closest(".field");
    if (wrapper) wrapper.dataset.invalid = String(invalid);
    field.setAttribute("aria-invalid", String(invalid));
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = Array.from(form.querySelectorAll("[required]"));
    let firstInvalid = null;

    fields.forEach((field) => {
      const invalid = !field.value.trim();
      setInvalid(field, invalid);
      if (invalid && !firstInvalid) firstInvalid = field;
    });

    const emailField = form.querySelector("#email");
    const phoneField = form.querySelector("#phone");
    const hasContact = Boolean((emailField && emailField.value.trim()) || (phoneField && phoneField.value.trim()));
    if (!hasContact) {
      [emailField, phoneField].forEach((field) => field && setInvalid(field, true));
      firstInvalid = firstInvalid || emailField || phoneField;
    }

    if (firstInvalid) {
      if (status) status.textContent = "Please complete the highlighted fields before preparing your email.";
      firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent("Mobile grooming inquiry for " + (data.get("dog-name") || "my dog"));
    const body = encodeURIComponent(
      [
        "Name: " + data.get("name"),
        "Phone: " + data.get("phone"),
        "Email: " + data.get("email"),
        "Dog name: " + data.get("dog-name"),
        "Breed or size: " + data.get("dog-size"),
        "Service needed: " + data.get("service"),
        "Preferred day or time: " + data.get("preferred-time"),
        "",
        "Message:",
        data.get("message")
      ].join("\n")
    );

    if (status) status.textContent = "Opening your email app. Your message is not sent until you review and send it.";
    window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
  });
})();
