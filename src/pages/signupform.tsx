import React, { useState, useEffect } from "react";
import './signupfrom.css';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const SignUp: React.FC = () => {
  const [companyName, setCompanyName] = useState("");
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    if (companyName.trim()) {
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (!submitted) return;

    const apiUrl = "https://aihr4u.onrender.com/api/verify-company/";

    const verifyCompany = async () => {
      try {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ company_name: companyName.trim() }),
        });

        const text = await res.text();
        let data: any = {};
        if (text) {
          try {
            data = JSON.parse(text);
          } catch (err) {
            console.error("JSON parsing error:", err, text);
          }
        }

        if (res.ok && data.message?.includes("Verified")) {
          setIsVerified(true);
          setTimeout(() => navigate("/login"), 1500);
        } else {
          setIsVerified(false);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setIsVerified(false);
      } finally {
        setSubmitted(false);
      }
    };

    verifyCompany();
  }, [submitted, companyName, navigate]);

  return (
    <div className="signup-container">
      <div className="signup-box">
        <label htmlFor="companyInput">  Enter Your Company</label><br />
        <div className="company-input">
          <span className="search-icon"><Search size={18} color="black" /></span>
          <input
            id="companyInput"
            type="text"
            placeholder="Enter company name..."
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
          />
        </div>
        <button onClick={handleVerify}>Verify</button>
        {isVerified === true && <p className="company-verified">✅ Verified! Redirecting to login...</p>}
        {isVerified === false && <p className="company-not-verified">❌ Company not verified</p>}
      </div>
    </div>
  );
};

export default SignUp;
