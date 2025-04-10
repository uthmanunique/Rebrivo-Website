// src/app/auth/signup/SignupForm.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import Loader from "@/app/components/Loader";
import Image from "next/image";
import Link from "next/link";
import { API_BASE_URL } from "@/config/api";

// Define the payload type
interface SignupPayload {
  email: string;
  password: string;
  otp: string;
  interests?: string[];
}

export function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role")?.toUpperCase() || "BUYER";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRequestingOtp, setIsRequestingOtp] = useState(false);
  const [otpCooldown, setOtpCooldown] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedSales, setSelectedSales] = useState<string[]>([]);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isSaleOpen, setIsSaleOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const industries = [
    "Retail & E-commerce",
    "Fintech & Financial Services",
    "Manufacturing & Industrial",
    "Logistics & Transportation",
    "Consulting & Professional Services",
    "Hospitality & Tourism",
    "Technology & Software",
    "Healthcare & Pharmaceuticals",
    "Real Estate & Construction",
    "Agriculture & Agribusiness",
    "Media & Entertainment",
    "Education & EdTech",
    "Oil & Gas / Energy",
    "Telecommunications",
    "Automotive & Mobility",
    "Food & Beverage",
    "Sports & Recreation",
    "Legal & Compliance Services",
    "Marketing & Advertising",
    "Other (Specify)",
  ];

  const businessStatuses = ["Dormant Companies", "Struggling Companies", "Thriving Companies"];

  const businessSizes = [
    "Small Businesses (Annual Revenue: Below ₦10M)",
    "Medium-Sized Businesses (Annual Revenue: ₦10M – ₦100M)",
    "Large Enterprises (Annual Revenue: ₦100M – ₦500M)",
    "High-Value Businesses (Annual Revenue: ₦500M+)",
  ];

  const specialSales = [
    "Equity Sale (Partial Ownership Transfer)",
    "Seller Financing Available",
    "Distressed Sales (Urgent Liquidation)",
    "Franchises for Sale",
  ];

  // Password strength logic
  const getPasswordStrength = (password: string) => {
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
  };

  const passwordStrength = getPasswordStrength(password);
  const strengthColor = (() => {
    if (passwordStrength === "Weak") return "text-red-500";
    if (passwordStrength === "Medium") return "text-yellow-500";
    return "text-green-500";
  })();

  const handleMultiSelect = (value: string, selected: string[], setSelected: (values: string[]) => void) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  useEffect(() => {
    const isValid =
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      otp.trim() !== "" &&
      termsAccepted &&
      (role !== "BUYER" ||
        (selectedIndustries.length > 0 &&
         selectedStatuses.length > 0 &&
         selectedSizes.length > 0 &&
         selectedSales.length > 0));
    setIsFormValid(isValid);
  }, [
    email,
    password,
    confirmPassword,
    otp,
    termsAccepted,
    selectedIndustries,
    selectedStatuses,
    selectedSizes,
    selectedSales,
    role,
  ]);

  useEffect(() => {
    if (otpCooldown > 0) {
      const timer = setTimeout(() => setOtpCooldown(otpCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpCooldown]);

  const handleRequestOtp = async () => {
    setIsRequestingOtp(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}/auth/generate-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setOtpRequested(true);
        setOtpCooldown(30);
        toast.success("OTP sent successfully! Check your email.", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        setError(data.message || "Failed to request OTP");
        toast.error(data.message || "Failed to request OTP", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch {
      setError("An error occurred while requesting OTP");
      toast.error("An error occurred while requesting OTP", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsRequestingOtp(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsSubmitting(false);
      return;
    }

    try {
      const payload: SignupPayload = { email, password, otp };
      if (role === "BUYER") {
        payload.interests = [...selectedIndustries, ...selectedStatuses, ...selectedSizes, ...selectedSales];
      }

      const response = await fetch(`${API_BASE_URL}/auth/${role.toLowerCase()}/sign-up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(`${role === "BUYER" ? "Buyer" : "Seller"} registered successfully!`, {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          router.push(`/auth/login?role=${role.toLowerCase()}`);
        }, 2000);
      } else {
        setError(data.message || "Signup failed");
        toast.error(data.message || "Signup failed", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch {
      setError("An error occurred during signup");
      toast.error("An error occurred during signup", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const industryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef<HTMLDivElement>(null);
  const saleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (industryRef.current && !industryRef.current.contains(event.target as Node)) {
        setIsIndustryOpen(false);
      }
      if (statusRef.current && !statusRef.current.contains(event.target as Node)) {
        setIsStatusOpen(false);
      }
      if (sizeRef.current && !sizeRef.current.contains(event.target as Node)) {
        setIsSizeOpen(false);
      }
      if (saleRef.current && !saleRef.current.contains(event.target as Node)) {
        setIsSaleOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mx-auto max-w-md">
      <h2 className="mb-2 text-center text-2xl font-semibold text-[#011631] md:text-3xl">
        Sign Up to Rebrivo Effortlessly!
      </h2>
      <p className="mb-6 text-center text-xs text-[#414141] md:text-sm">
        Sign up to explore opportunities to buy & sell any kind of business and assets securely.
      </p>
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
          {password && (
            <p className={`mt-1 text-xs ${strengthColor}`}>
              Password Strength: {passwordStrength}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-12 px-4 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52]"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <Image
                src={showConfirmPassword ? "/EyeSlash.png" : "/eye.png"}
                alt={showConfirmPassword ? "Hide Password" : "Show Password"}
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="otp" className="block text-sm font-semibold text-gray-700">
            OTP
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="flex-1 h-12 px-4 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52]"
              required
            />
            <button
              type="button"
              onClick={handleRequestOtp}
              disabled={isRequestingOtp || !email || otpCooldown > 0}
              className="h-12 rounded-lg border-2 border-[#F26E52] bg-transparent px-4 text-sm font-semibold text-[#F26E52] transition-colors hover:bg-[#F26E52]/10 disabled:opacity-50 md:text-base flex items-center justify-center"
            >
              {isRequestingOtp && <Loader />}
              {otpCooldown > 0 ? `Resend in ${otpCooldown}s` : "Request OTP"}
            </button>
          </div>
          {otpRequested && otpCooldown > 0 && (
            <p className="mt-2 text-sm text-green-500">
              OTP has been sent to your email! Please check your inbox (or spam folder).
            </p>
          )}
        </div>

        {role === "BUYER" && (
          <>
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-[#011631] md:text-xl">
                Select What Interests You
              </h3>
              <p className="mb-4 text-xs text-[#414141] md:text-sm">
                Choose the business category you are interested in. This will enable you to see relevant listings.
              </p>
            </div>
            <div ref={industryRef}>
              <label className="block text-sm font-semibold text-gray-700">
                Select Industry and Sector
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsIndustryOpen(!isIndustryOpen)}
                  className="w-full min-h-[48px] px-4 py-2 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52] flex flex-wrap gap-2 items-center cursor-pointer"
                >
                  {selectedIndustries.length > 0 ? (
                    selectedIndustries.map((industry) => (
                      <span
                        key={industry}
                        className="bg-[#F26E52] text-white px-2 py-1 rounded text-xs flex items-center"
                      >
                        {industry}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMultiSelect(industry, selectedIndustries, setSelectedIndustries);
                          }}
                          className="ml-1 text-gray-700"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400">Select industries...</span>
                  )}
                </div>
                {isIndustryOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border text-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {industries.map((option) => (
                      <label
                        key={option}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedIndustries.includes(option)}
                          onChange={() => handleMultiSelect(option, selectedIndustries, setSelectedIndustries)}
                          className="mr-2 accent-[#F26E52]"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div ref={statusRef}>
              <label className="block text-sm font-semibold text-gray-700">
                Select Business Status
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsStatusOpen(!isStatusOpen)}
                  className="w-full min-h-[48px] px-4 py-2 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52] flex flex-wrap gap-2 items-center cursor-pointer"
                >
                  {selectedStatuses.length > 0 ? (
                    selectedStatuses.map((status) => (
                      <span
                        key={status}
                        className="bg-[#F26E52] text-white px-2 py-1 rounded text-xs flex items-center"
                      >
                        {status}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMultiSelect(status, selectedStatuses, setSelectedStatuses);
                          }}
                          className="ml-1 text-white"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400">Select statuses...</span>
                  )}
                </div>
                {isStatusOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border text-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {businessStatuses.map((option) => (
                      <label
                        key={option}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedStatuses.includes(option)}
                          onChange={() => handleMultiSelect(option, selectedStatuses, setSelectedStatuses)}
                          className="mr-2 accent-[#F26E52]"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div ref={sizeRef}>
              <label className="block text-sm font-semibold text-gray-700">
                Select Business Size and Revenue
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsSizeOpen(!isSizeOpen)}
                  className="w-full min-h-[48px] px-4 py-2 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52] flex flex-wrap gap-2 items-center cursor-pointer"
                >
                  {selectedSizes.length > 0 ? (
                    selectedSizes.map((size) => (
                      <span
                        key={size}
                        className="bg-[#F26E52] text-white px-2 py-1 rounded text-xs flex items-center"
                      >
                        {size}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMultiSelect(size, selectedSizes, setSelectedSizes);
                          }}
                          className="ml-1 text-white"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400">Select sizes...</span>
                  )}
                </div>
                {isSizeOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border text-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {businessSizes.map((option) => (
                      <label
                        key={option}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(option)}
                          onChange={() => handleMultiSelect(option, selectedSizes, setSelectedSizes)}
                          className="mr-2 accent-[#F26E52]"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div ref={saleRef}>
              <label className="block text-sm font-semibold text-gray-700">
                Select Special Business Sale Option
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsSaleOpen(!isSaleOpen)}
                  className="w-full min-h-[48px] px-4 py-2 border text-gray-600 rounded-lg focus:outline-none focus:border-[#F26E52] flex flex-wrap gap-2 items-center cursor-pointer"
                >
                  {selectedSales.length > 0 ? (
                    selectedSales.map((sale) => (
                      <span
                        key={sale}
                        className="bg-[#F26E52] text-white px-2 py-1 rounded text-xs flex items-center"
                      >
                        {sale}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMultiSelect(sale, selectedSales, setSelectedSales);
                          }}
                          className="ml-1 text-white"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400">Select sales options...</span>
                  )}
                </div>
                {isSaleOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border text-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {specialSales.map((option) => (
                      <label
                        key={option}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSales.includes(option)}
                          onChange={() => handleMultiSelect(option, selectedSales, setSelectedSales)}
                          className="mr-2 accent-[#F26E52]"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        <label className="flex items-center gap-2 text-sm text-[#414141]">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="h-4 w-4 accent-[#F26E52]"
          />
          I have read and agree to the Terms & Conditions
        </label>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          className="h-12 rounded-lg bg-[#F26E52] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#e65a3e] disabled:opacity-50 md:text-base flex items-center justify-center"
        >
          {isSubmitting && <Loader />}
          Create Account
        </button>
        <p className="text-center text-sm text-[#414141]">
          Already have an account?{" "}
          <Link href="/auth/role-selection?type=login" className="text-[#F26E52] hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
