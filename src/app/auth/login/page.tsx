"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { API_BASE_URL } from "@/config/api";
import Loader from "@/app/components/Loader";
import Cookies from "js-cookie";

function SigninContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role")?.toLowerCase() || "buyer";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = email.trim() !== "" && password.trim() !== "";
    setIsFormValid(isValid);
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const endpoint = role === "buyer" ? "buyer" : "seller";
      const response = await fetch(`${API_BASE_URL}/auth/${endpoint}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login Response:", data); // Debug response

      if (response.ok) {
        toast.success("Login successful!", { position: "top-right", autoClose: 2000 });

        // Set cookies
        Cookies.set("accessToken", data.accessToken, {
          expires: 1,
          path: "/",
          secure: false, // Set to true in production
          sameSite: "lax",
        });
        Cookies.set("refreshToken", data.refreshToken, {
          expires: 7,
          path: "/",
          secure: false,
          sameSite: "lax",
        });
        Cookies.set("role", role === "buyer" ? "BUYER" : "SELLER", {
          expires: 1,
          path: "/",
          secure: false,
          sameSite: "lax",
        });

        if (role === "buyer") {
          Cookies.set("buyerData", JSON.stringify(data.buyer), {
            expires: 1,
            path: "/",
            secure: false,
            sameSite: "lax",
          });
        } else {
          Cookies.set("sellerData", JSON.stringify(data.seller), {
            expires: 1,
            path: "/",
            secure: false,
            sameSite: "lax",
          });
        }

        setTimeout(() => {
          if (role === "seller") {
            // window.location.href = `http://localhost:3001`; // Seller dashboard
            window.location.href = `https://rebrivo-seller-dashboard.netlify.app`; // Production
          } else {
            // window.location.href = `http://localhost:8000`; // Buyer dashboard
            window.location.href = `https://rebrivo-buyer-dashboard.netlify.app`; // Production
          }
        }, 2000);
      } else {
        const errorMessage = data.message || "Invalid email or password. Please try again.";
        toast.error(errorMessage, { position: "top-right", autoClose: 3000 });
        setError(errorMessage);
      }
    } catch (err) {
      const genericError = "An error occurred during login. Please try again.";
      toast.error(genericError, { position: "top-right", autoClose: 3000 });
      setError(genericError);
      console.error("Rebrivo Login - Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Interest.png')" }}>
      <div className="flex min-h-screen items-center justify-center px-6 py-12 md:px-12 md:py-16">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg relative">
          {/* Go to Home Link */}
          <Link
            href="/"
            className="absolute top-4 left-4 flex items-center text-sm text-[#F26E52] hover:underline"
          >
            <Image src="/home.png" alt="Home" width={16} height={16} className="mr-1" />
            Go to Home
          </Link>
          <div className="text-center mt-8">
            <h2 className="mb-2 text-2xl font-semibold text-[#011631] md:text-3xl">
              Welcome Back, {role === "buyer" ? "Buyer" : "Seller"}!
            </h2>
            <p className="mb-6 text-xs text-[#414141] md:text-sm">Log in to your personal dashboard.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-4 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <Image
                    src={showPassword ? "/EyeSlash.png" : "/eye.png"}
                    alt={showPassword ? "Hide Password" : "Show Password"}
                    width={20}
                    height={20}
                  />
                </button>
              </div>
              <div className="text-right mt-2">
                <Link href="/auth/forgot-password" className="text-sm text-[#F26E52] hover:underline">
                  Forgot Password?
                </Link>
              </div>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className="h-12 rounded-lg bg-[#F26E52] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#e65a3e] disabled:opacity-50 md:text-base flex items-center justify-center"
            >
              {isSubmitting && <Loader />}
              Sign In
            </button>
            <p className="text-center text-sm text-[#414141]">
              Don’t have an account?{" "}
              <Link href="/auth/role-selection?type=signup" className="text-[#F26E52] hover:underline">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Signin() {
  return (
    <Suspense fallback={<div>Loading login form...</div>}>
      <SigninContent />
    </Suspense>
  );
}
