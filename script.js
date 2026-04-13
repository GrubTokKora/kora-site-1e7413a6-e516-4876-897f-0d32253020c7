/**
 * Tawa Indian Cuisine — site config, Kora form submissions, and UI helpers.
 * Edit KORA_SITE_CONFIG below (reCAPTCHA site key, etc.).
 */

window.KORA_SITE_CONFIG = {
  apiBaseUrl: "https://kora-agent.grubtok.com",
  businessId: "1e7413a6-e516-4876-897f-0d32253020c7",
  /** reCAPTCHA v2 checkbox site key (Google reCAPTCHA admin for this domain). */
  recaptchaSiteKey: "6LcsdJYsAAAAAAur-h7cYlZuGJTmijNHmOi5kFH7",
  skipRecaptcha: false,
};

(function () {
  const config = window.KORA_SITE_CONFIG || {};
  const apiBaseUrl = (config.apiBaseUrl || "https://kora-agent.grubtok.com").replace(
    /\/+$/,
    ""
  );
  const businessId = config.businessId || "";
  const recaptchaSiteKey = config.recaptchaSiteKey || "6LcsdJYsAAAAAAur-h7cYlZuGJTmijNHmOi5kFH7";
  const skipRecaptcha = config.skipRecaptcha === true;

  function setStatus(form, text, kind) {
    const statusEl = form.querySelector(".form-status");
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.classList.add("is-visible");
    statusEl.classList.remove("form-status--error", "form-status--success", "form-status--neutral");
    if (kind === "error") statusEl.classList.add("form-status--error");
    else if (kind === "success") statusEl.classList.add("form-status--success");
    else statusEl.classList.add("form-status--neutral");
  }

  function clearStatus(form) {
    const statusEl = form.querySelector(".form-status");
    if (!statusEl) return;
    statusEl.textContent = "";
    statusEl.classList.remove(
      "is-visible",
      "form-status--error",
      "form-status--success",
      "form-status--neutral"
    );
  }

  function setSubmittingState(form, isSubmitting) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) return;
    if (isSubmitting) {
      submitBtn.dataset.originalText = submitBtn.textContent || "Submit";
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;
    } else {
      submitBtn.textContent = submitBtn.dataset.originalText || "Submit";
      submitBtn.disabled = false;
    }
  }

  function getRecaptchaToken(form) {
    if (skipRecaptcha || !recaptchaSiteKey || typeof grecaptcha === "undefined") return "";
    const recaptchaEl = form.querySelector(".g-recaptcha");
    if (!recaptchaEl) return "";
    return grecaptcha.getResponse() || "";
  }

  function collectFormData(form) {
    const formData = new FormData(form);
    const result = {};
    formData.forEach((value, key) => {
      result[key] = typeof value === "string" ? value.trim() : value;
    });

    const firstName = result.first_name || "";
    const lastName = result.last_name || "";
    const fullName = [firstName, lastName].filter(Boolean).join(" ").trim();
    if (fullName) result.full_name = fullName;

    return result;
  }

  async function submitPublicForm(form) {
    const formType = form.dataset.formType || "contact";
    const payloadData = collectFormData(form);
    const submitterEmail = payloadData.email || null;
    const captchaToken = getRecaptchaToken(form);

    if (!skipRecaptcha && recaptchaSiteKey && form.querySelector(".g-recaptcha")) {
      if (!captchaToken) {
        setStatus(form, "Please complete the reCAPTCHA.", "error");
        return;
      }
    }

    if (!businessId) {
      setStatus(
        form,
        "Form submission is not configured. Set businessId in script.js (KORA_SITE_CONFIG).",
        "error"
      );
      return;
    }

    if (!skipRecaptcha && !recaptchaSiteKey && form.querySelector(".g-recaptcha")) {
      setStatus(
        form,
        "reCAPTCHA is not configured. Add recaptchaSiteKey in script.js or set skipRecaptcha for local testing only.",
        "error"
      );
      return;
    }

    const payload = {
      business_id: businessId,
      form_type: formType,
      form_data: payloadData,
      submitter_email: submitterEmail,
      captcha_token: captchaToken || "",
    };

    setSubmittingState(form, true);
    setStatus(form, "Sending...", "neutral");

    try {
      const response = await fetch(`${apiBaseUrl}/api/v1/public/forms/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      if (typeof grecaptcha !== "undefined" && recaptchaSiteKey && !skipRecaptcha) {
        grecaptcha.reset();
      }
      setStatus(form, "Thank you! Your submission has been received.", "success");
    } catch (error) {
      console.error("Form submit error:", error);
      setStatus(
        form,
        "Something went wrong. Please try again or call us at 248-536-2650.",
        "error"
      );
    } finally {
      setSubmittingState(form, false);
    }
  }

  function validateClient(form, formType, data) {
    if (formType === "contact") {
      if (!data.name || !data.email || !data.message) {
        setStatus(form, "Please fill in your name, email, and message.", "error");
        return false;
      }
    }
    if (formType === "catering") {
      if (!data.full_name || !data.email || !data.phone) {
        setStatus(form, "Please fill in full name, email, and phone.", "error");
        return false;
      }
    }
    return true;
  }

  function initKoraForm(form) {
    if (skipRecaptcha) {
      form.querySelectorAll(".g-recaptcha").forEach((el) => {
        el.style.display = "none";
      });
    }
    const recaptchaEl = form.querySelector(".g-recaptcha");
    if (recaptchaEl && recaptchaSiteKey) {
      recaptchaEl.setAttribute("data-sitekey", recaptchaSiteKey);
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      clearStatus(form);
      const formType = form.dataset.formType || "contact";
      const data = collectFormData(form);
      if (!validateClient(form, formType, data)) return;
      await submitPublicForm(form);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("form[data-form-type]").forEach(initKoraForm);
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("hidden");
    });
  }
});
