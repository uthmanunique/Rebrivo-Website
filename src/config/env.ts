// src/config/env.ts
export const config = {
    API_BASE_URL: () => {
      if (process.env.NODE_ENV === "development") {
        return "http://localhost:8000/api"; // Your local API
      } else {
        return "https://api-rebrivo.onrender.com/v1/api"; // Your production API
      }
    },
  };
  
  export const getLoginRedirectUrl = (userType: string) => {
    if (userType.toUpperCase() === "SELLER") {
      return "https://rebrivo-seller-dashboard.netlify.app";
    } else {
      return "https://rebrivo-buyer-dashboard.netlify.app";
    }
  };
  
  export const getRedirectUrl = (role: string) => {
    if (role === "seller") {
      return `https://rebrivo-seller-dashboard.netlify.app`;
    } else {
      return `https://rebrivo-buyer-dashboard.netlify.app`;
    }
  };