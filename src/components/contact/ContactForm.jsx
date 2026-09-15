"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function submit(e) {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thanks! Your inquiry has been sent successfully. Our team will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Form Error:", error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send your inquiry. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container pb-24">
      <div className="max-w-3xl card p-7 md:p-10">
        <form
          onSubmit={submit}
          className="grid gap-5"
        >
          {/* Name + Email */}
          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              required
              disabled={loading}
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Work email"
              required
              disabled={loading}
            />
          </div>

          {/* Phone Number */}
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            required
            disabled={loading}
          />

          {/* Interest */}
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="" disabled>
              Select your interest
            </option>

            <option value="Full Stack Development">
              Full Stack Development
            </option>

            <option value="DevOps & Cloud">
              DevOps & Cloud
            </option>

            <option value="AI / ML">
              AI / ML
            </option>

            <option value="AI Automation">
              AI Automation
            </option>

            <option value="Training">
              Training
            </option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
            disabled={loading}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-fit disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

          {/* Success */}
          {status.type === "success" && (
            <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400">
              {status.message}
            </div>
          )}

          {/* Error */}
          {status.type === "error" && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}