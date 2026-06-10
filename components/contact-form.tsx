"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SubmissionModal } from "./submission-modal";

// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          to_email: process.env.NEXT_PUBLIC_EMAILJS_RECEIVER_EMAIL || "",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setModalType("success");
      setShowModal(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setShowModal(false), 4000);
    } catch (error) {
      setModalType("error");
      setErrorMessage("Failed to send message. Please try again.");
      setShowModal(true);
      setTimeout(() => setShowModal(false), 4000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="contact-panel grid gap-5" onSubmit={handleSubmit}>
        <div>
          <p className="font-display text-2xl font-semibold">Start a conversation</p>
          <p className="mt-2 text-sm leading-6 text-white/54">
            Send a quick note about the role, product, or collaboration you have
            in mind.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell me about the role, project, or product goal."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="btn-primary w-fit"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
      <SubmissionModal
        isOpen={showModal}
        type={modalType}
        message={errorMessage}
      />
    </>
  );
}
