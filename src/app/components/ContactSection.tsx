// src/components/ContactSection.tsx
"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "@/app/components/Loader";
import { API_BASE_URL } from "@/config/api";

const ContactSection: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form fields
  useEffect(() => {
    const isValid =
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      email.trim() !== "" &&
      message.trim() !== "";
    setIsFormValid(isValid);
  }, [firstName, lastName, phoneNumber, email, message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/contact-us/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          email,
          message,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        // Reset form
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
      } else {
        setError(data.message || "Failed to send message");
        toast.error(data.message || "Failed to send message", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch {
      setError("An error occurred while sending the message");
      toast.error("An error occurred while sending the message", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-6 bg-amber-50 md:px-12">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-1g font-semibold text-[#F26E52] text-center mb-6">
          Contact Us
        </h3>
        <h2 className="text-3xl font-bold text-[#414141] text-center mb-4">
        We respond to messages swiftly
        </h2>
        <p className="text-center text-[#414141] mb-8">
        We’d love to hear from you. Please fill out this form.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full h-12 px-4 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52]"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full h-12 px-4 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52]"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full h-12 px-4 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52]"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 px-4 py-2 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52]"
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className="h-12 rounded-lg bg-[#F26E52] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#e65a3e] disabled:opacity-50 md:text-base flex items-center justify-center"
          >
            {isSubmitting && <Loader />}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
