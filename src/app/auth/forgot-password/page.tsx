// src/app/auth/forgot-password/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ForgotPassword = () => {
  const router = useRouter();

  const [step, setStep] = useState<"request-code" | "enter-code" | "reset-password">("request-code");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["0", "0", "0", "0"]); // 4-digit code
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(299); // 4:59 in seconds
  const [canResend, setCanResend] = useState(false);

  // Countdown timer for resend code
  useEffect(() => {
    if (step !== "enter-code") return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [step]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle code input
  const handleCodeChange = (index: number, value: string) => {
    if (!/^[0-9]$/.test(value) && value !== "") return; // Only allow digits
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle Send Code
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      // Placeholder for API call to send code
      // const response = await fetch("https://api-rebrivo.onrender.com/v1/api/auth/forgot-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });
      // const data = await response.json();
      // if (response.ok) {
      setStep("enter-code");
      // } else {
      //   setError(data.message || "Failed to send code");
      // }
    } catch {
      setError("An error occurred while sending the code");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Submit Code
  const handleSubmitCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      // Placeholder for API call to verify code
      // const response = await fetch("https://api-rebrivo.onrender.com/v1/api/auth/verify-code", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, code: code.join("") }),
      // });
      // const data = await response.json();
      // if (response.ok) {
      setStep("reset-password");
      // } else {
      //   setError(data.message || "Invalid code");
      // }
    } catch {
      setError("An error occurred while verifying the code");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Resend Code
  const handleResendCode = async () => {
    setError("");
    setIsSubmitting(true);

    try {
      // Placeholder for API call to resend code
      // const response = await fetch("https://api-rebrivo.onrender.com/v1/api/auth/forgot-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });
      // const data = await response.json();
      // if (response.ok) {
      setCountdown(299);
      setCanResend(false);
      // } else {
      //   setError(data.message || "Failed to resend code");
      // }
    } catch {
      setError("An error occurred while resending the code");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Reset Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      // Placeholder for API call to reset password
      // const response = await fetch("https://api-rebrivo.onrender.com/v1/api/auth/reset-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, code: code.join(""), newPassword: password }),
      // });
      // const data = await response.json();
      // if (response.ok) {
      router.push("/auth/login");
      // } else {
      //   setError(data.message || "Failed to reset password");
      // }
    } catch {
      setError("An error occurred while resetting the password");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Interest.png')" }}
    >
      <div className="flex min-h-screen items-center justify-center px-6 py-12 md:px-12 md:py-16">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          {step === "request-code" && (
            <>
              <div className="text-center">
                <h2 className="mb-2 text-2xl font-semibold text-[#011631] md:text-3xl">
                  Forgot Password?
                </h2>
                <p className="mb-6 text-xs text-[#414141] md:text-sm">
                  Input your email to recover the password
                </p>
              </div>
              <form onSubmit={handleSendCode} className="flex flex-col gap-4">
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
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="h-12 rounded-lg bg-[#F26E52] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#e65a3e] disabled:opacity-50 md:text-base"
                >
                  Send Code
                </button>
                <p className="text-center text-sm text-[#414141]">
                  Don’t have an account?{" "}
                  <Link href="/auth/role-selection" className="text-[#F26E52] hover:underline">
                    Create Account
                  </Link>
                </p>
              </form>
            </>
          )}

          {step === "enter-code" && (
            <>
              <div className="text-center">
                <h2 className="mb-2 text-2xl font-semibold text-[#011631] md:text-3xl">
                  Enter Code
                </h2>
                <p className="mb-6 text-xs text-[#414141] md:text-sm">
                  Enter the four digit code sent to your email
                </p>
              </div>
              <form onSubmit={handleSubmitCode} className="flex flex-col gap-4">
                <div className="flex justify-center gap-2">
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      className="w-12 h-12 text-center text-lg border rounded-lg focus:outline-none focus:border-[#F26E52]"
                      required
                    />
                  ))}
                </div>
                {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting || code.some((digit) => digit === "0")}
                  className="h-12 rounded-lg bg-[#F26E52] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#e65a3e] disabled:opacity-50 md:text-base"
                >
                  Submit
                </button>
                <p className="text-center text-sm text-[#414141]">
                  {formatTime(countdown)}{" "}
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={!canResend || isSubmitting}
                    className="text-[#F26E52] hover:underline disabled:opacity-50"
                  >
                    Resend Code
                  </button>
                </p>
              </form>
            </>
          )}

          {step === "reset-password" && (
            <>
              <div className="text-center">
                <h2 className="mb-2 text-2xl font-semibold text-[#011631] md:text-3xl">
                  Reset Password
                </h2>
                <p className="mb-6 text-xs text-[#414141] md:text-sm">
                  Enter new password
                </p>
              </div>
              <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your new password"
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
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting || !password}
                  className="h-12 rounded-lg bg-[#F26E52] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#e65a3e] disabled:opacity-50 md:text-base"
                >
                  Reset
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;