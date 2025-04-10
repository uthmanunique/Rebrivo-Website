// src/components/Subscribe.tsx
"use client";

import { useState } from "react";
import { API_BASE_URL } from "@/config/api";
import { toast } from "react-toastify";
import Loader from "@/app/components/Loader"; // Import Loader component

const Subscribe: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/newsletters/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Subscribed to newsletters successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
        setMessage("Subscribed to newsletters successfully!");
        setName("");
        setEmail("");
      } else {
        const errorMessage = data.message || "Subscription failed.";
        if (errorMessage.toLowerCase().includes("user not found")) {
          toast.error("User not found. Please check your email.", {
            position: "top-right",
            autoClose: 3000,
          });
        } else {
          toast.error(errorMessage, {
            position: "top-right",
            autoClose: 3000,
          });
        }
        setMessage(errorMessage);
      }
    } catch {
      const genericError = "An error occurred. Please try again.";
      toast.error(genericError, {
        position: "top-right",
        autoClose: 3000,
      });
      setMessage(genericError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/subscribe.png')` }}
    >
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 text-center px-4 md:px-8 max-w-3xl mx-auto">
        <h2 className="text-white text-3xl md:text-5xl font-semibold mb-8">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full md:w-64 h-12 px-4 border-2 border-white/80 rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:border-[#F26E52]"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-64 h-12 px-4 border-2 border-white/80 rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:border-[#F26E52]"
            required
          />
          <button
            type="submit"
            className="w-full md:w-64 h-12 bg-[#F26E52] text-white rounded-lg hover:bg-[#e65a3e] transition-colors font-medium disabled:opacity-50 flex items-center justify-center"
            disabled={loading}
          >
            {loading && <Loader />}
            {loading ? "Subscribing..." : "Subscribe Now"}
          </button>
        </form>
        {message && <p className="mt-4 text-white">{message}</p>}
      </div>
    </section>
  );
};

export default Subscribe;
