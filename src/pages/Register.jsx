const _jsxFileName = "src\\pages\\Register.tsx";import { useState } from "react";
import React from "react";
import { Link, useLocation } from "wouter";
import { Eye, EyeOff, Mail, Lock, User, Zap, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { apiFetch } from "@/lib/api";

const roles = ["Student", "Instructor", "Admin"];

const countryCodes = [
  { code: "+1", flag: "🇺🇸", name: "US" },
  { code: "+1", flag: "🇨🇦", name: "CA" },
  { code: "+44", flag: "🇬🇧", name: "GB" },
  { code: "+91", flag: "🇮🇳", name: "IN" },
  { code: "+61", flag: "🇦🇺", name: "AU" },
  { code: "+33", flag: "🇫🇷", name: "FR" },
  { code: "+49", flag: "🇩🇪", name: "DE" },
  { code: "+81", flag: "🇯🇵", name: "JP" },
  { code: "+86", flag: "🇨🇳", name: "CN" },
  { code: "+55", flag: "🇧🇷", name: "BR" },
  { code: "+7", flag: "🇷🇺", name: "RU" },
  { code: "+34", flag: "🇪🇸", name: "ES" },
  { code: "+39", flag: "🇮🇹", name: "IT" },
  { code: "+31", flag: "🇳🇱", name: "NL" },
  { code: "+82", flag: "🇰🇷", name: "KR" },
  { code: "+52", flag: "🇲🇽", name: "MX" },
  { code: "+27", flag: "🇿🇦", name: "ZA" },
  { code: "+971", flag: "🇦🇪", name: "AE" },
  { code: "+966", flag: "🇸🇦", name: "SA" },
  { code: "+65", flag: "🇸🇬", name: "SG" },
  { code: "+60", flag: "🇲🇾", name: "MY" },
  { code: "+62", flag: "🇮🇩", name: "ID" },
  { code: "+63", flag: "🇵🇭", name: "PH" },
  { code: "+66", flag: "🇹🇭", name: "TH" },
  { code: "+20", flag: "🇪🇬", name: "EG" },
  { code: "+234", flag: "🇳🇬", name: "NG" },
  { code: "+254", flag: "🇰🇪", name: "KE" },
  { code: "+64", flag: "🇳🇿", name: "NZ" },
  { code: "+48", flag: "🇵🇱", name: "PL" },
  { code: "+46", flag: "🇸🇪", name: "SE" },
  { code: "+47", flag: "🇳🇴", name: "NO" },
  { code: "+45", flag: "🇩🇰", name: "DK" },
  { code: "+41", flag: "🇨🇭", name: "CH" },
  { code: "+32", flag: "🇧🇪", name: "BE" },
  { code: "+351", flag: "🇵🇹", name: "PT" },
  { code: "+90", flag: "🇹🇷", name: "TR" },
  { code: "+92", flag: "🇵🇰", name: "PK" },
  { code: "+880", flag: "🇧🇩", name: "BD" },
  { code: "+94", flag: "🇱🇰", name: "LK" },
  { code: "+977", flag: "🇳🇵", name: "NP" },
];

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "Student",
    password: "",
    confirm: "",
    agree: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }
    if (!form.agree) {
      setError("You must agree to the Terms of Service and Privacy Policy");
      return;
    }
    try {
      await apiFetch("/register", {
        method: "POST",
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: `${selectedCountry.code} ${form.phone}`,
          role: form.role,
          password: form.password,
        }),
      });
      setSuccess("Account created. Redirecting to login...");
      setTimeout(() => setLocation("/login"), 900);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    React.createElement('div', { className: "min-h-screen flex items-center justify-center px-4 py-20"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}
      , React.createElement(motion.div, {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "w-full max-w-lg" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 73}}

        , React.createElement('div', {
          className: "rounded-3xl p-8 md:p-10"  ,
          style: {
            background: "rgba(255,255,255,0.68)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: "1px solid rgba(255,255,255,0.9)",
            boxShadow: "0 8px 40px rgba(100,140,200,0.14), 0 0 0 1px rgba(255,255,255,0.6) inset",
          }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}

          /* Logo */
          , React.createElement('div', { className: "flex flex-col items-center mb-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}
            , React.createElement('div', {
              className: "w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg mb-3 relative overflow-hidden"         ,
              style: {
                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
                boxShadow: "0 4px 20px rgba(129,140,248,0.4)",
              }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}

              , React.createElement(Zap, { className: "w-6 h-6 text-white"  , strokeWidth: 2.5, __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}} )
              , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-b from-white/25 to-transparent"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}} )
            )
            , React.createElement('h1', { className: "text-2xl font-bold font-display text-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 101}}, "Create your account"  )
            , React.createElement('p', { className: "text-sm text-muted-foreground mt-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 102}}, "Join Nexus.EDU and start learning today"     )
          )

          , React.createElement('form', { onSubmit: handleSubmit, className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}
            /* Name row */
            , React.createElement('div', { className: "grid grid-cols-2 gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}
              , [
                { key: "firstName", label: "First name", placeholder: "John" },
                { key: "lastName", label: "Last name", placeholder: "Doe" },
              ].map(({ key, label, placeholder }) => (
                React.createElement('div', { key: key, __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}
                  , React.createElement('label', { className: "block text-sm font-medium text-foreground/80 mb-1.5"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}, label)
                  , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
                    , React.createElement(User, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}} )
                    , React.createElement('input', {
                      'data-testid': `input-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`,
                      type: "text",
                      placeholder: placeholder,
                      value: (form )[key],
                      onChange: (e) => setForm({ ...form, [key]: e.target.value }),
                      required: true,
                      className: "w-full pl-10 pr-4 py-3 rounded-xl border border-white/60 bg-white/50 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#818cf8]/40 focus:border-[#818cf8]/60 transition-all"               , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}
                    )
                  )
                )
              ))
            )

            /* Email */
            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 131}}
              , React.createElement('label', { className: "block text-sm font-medium text-foreground/80 mb-1.5"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}}, "Email address" )
              , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 133}}
                , React.createElement(Mail, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}} )
                , React.createElement('input', {
                  'data-testid': "input-email",
                  type: "email",
                  placeholder: "you@example.com",
                  value: form.email,
                  onChange: (e) => setForm({ ...form, email: e.target.value }),
                  required: true,
                  className: "w-full pl-10 pr-4 py-3 rounded-xl border border-white/60 bg-white/50 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/40 focus:border-[#38bdf8]/60 transition-all"               , __self: this, __source: {fileName: _jsxFileName, lineNumber: 135}}
                )
              )
            )

            /* Phone with country code */
            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 148}}
              , React.createElement('label', { className: "block text-sm font-medium text-foreground/80 mb-1.5"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 149}}, "Phone number "
                  , React.createElement('span', { className: "text-muted-foreground font-normal" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 150}}, "(optional)")
              )
              , React.createElement('div', { className: "flex gap-2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 152}}
                /* Country selector */
                , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}
                  , React.createElement('button', {
                    type: "button",
                    'data-testid': "button-country-code",
                    onClick: () => setCountryOpen(!countryOpen),
                    className: "h-full px-3 py-3 rounded-xl border border-white/60 bg-white/50 text-sm font-medium text-foreground flex items-center gap-1.5 hover:bg-white/70 transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/40"                  ,
                    style: { minWidth: "90px" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 155}}

                    , React.createElement('span', { className: "text-base", __self: this, __source: {fileName: _jsxFileName, lineNumber: 162}}, selectedCountry.flag)
                    , React.createElement('span', { className: "text-xs text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}}, selectedCountry.code)
                    , React.createElement(ChevronDown, { className: `w-3 h-3 text-muted-foreground transition-transform ${countryOpen ? "rotate-180" : ""}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}} )
                  )

                  , countryOpen && (
                    React.createElement('div', {
                      className: "absolute top-full left-0 mt-1 z-50 rounded-2xl overflow-auto"      ,
                      style: {
                        width: "180px",
                        maxHeight: "240px",
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.9)",
                        boxShadow: "0 8px 32px rgba(100,140,200,0.18)",
                      }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 168}}

                      , countryCodes.map((c, i) => (
                        React.createElement('button', {
                          key: i,
                          type: "button",
                          onClick: () => { setSelectedCountry(c); setCountryOpen(false); },
                          className: "w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#818cf8]/10 transition-colors text-left"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 180}}

                          , React.createElement('span', { className: "text-base", __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}, c.flag)
                          , React.createElement('span', { className: "text-muted-foreground text-xs font-medium"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 187}}, c.name)
                          , React.createElement('span', { className: "ml-auto text-xs text-foreground/60"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 188}}, c.code)
                        )
                      ))
                    )
                  )
                )

                , React.createElement('input', {
                  'data-testid': "input-phone",
                  type: "tel",
                  placeholder: "555 000 0000"  ,
                  value: form.phone,
                  onChange: (e) => setForm({ ...form, phone: e.target.value }),
                  className: "flex-1 px-4 py-3 rounded-xl border border-white/60 bg-white/50 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/40 focus:border-[#38bdf8]/60 transition-all"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 195}}
                )
              )
            )

            /* Role */
            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 207}}
              , React.createElement('label', { className: "block text-sm font-medium text-foreground/80 mb-1.5"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 208}}, "I am a"  )
              , React.createElement('div', { className: "grid grid-cols-3 gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 209}}
                , roles.map((role) => (
                  React.createElement('button', {
                    key: role,
                    type: "button",
                    'data-testid': `button-role-${role.toLowerCase()}`,
                    onClick: () => setForm({ ...form, role }),
                    className: "py-2.5 rounded-xl text-sm font-semibold border transition-all"     ,
                    style: 
                      form.role === role
                        ? {
                            background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
                            color: "white",
                            border: "1px solid transparent",
                            boxShadow: "0 4px 14px rgba(129,140,248,0.4)",
                          }
                        : {
                            background: "rgba(255,255,255,0.5)",
                            border: "1px solid rgba(255,255,255,0.7)",
                            color: "#64748b",
                          }
                    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 211}}

                    , role
                  )
                ))
              )
            )

            /* Password */
            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 239}}
              , React.createElement('label', { className: "block text-sm font-medium text-foreground/80 mb-1.5"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 240}}, "Password")
              , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 241}}
                , React.createElement(Lock, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 242}} )
                , React.createElement('input', {
                  'data-testid': "input-password",
                  type: showPassword ? "text" : "password",
                  placeholder: "Min. 8 characters"  ,
                  value: form.password,
                  onChange: (e) => setForm({ ...form, password: e.target.value }),
                  required: true,
                  minLength: 8,
                  className: "w-full pl-10 pr-11 py-3 rounded-xl border border-white/60 bg-white/50 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#c084fc]/40 focus:border-[#c084fc]/60 transition-all"               , __self: this, __source: {fileName: _jsxFileName, lineNumber: 243}}
                )
                , React.createElement('button', { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 253}}
                  , showPassword ? React.createElement(EyeOff, { className: "w-4 h-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 254}} ) : React.createElement(Eye, { className: "w-4 h-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 254}} )
                )
              )
              , form.password.length > 0 && (
                React.createElement('div', { className: "flex gap-1 mt-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 258}}
                  , [1, 2, 3, 4].map((i) => (
                    React.createElement('div', { key: i, className: `h-1 flex-1 rounded-full transition-all ${
                      form.password.length >= i * 3
                        ? i <= 1 ? "bg-red-400" : i <= 2 ? "bg-yellow-400" : i <= 3 ? "bg-[#38bdf8]" : "bg-green-400"
                        : "bg-border"
                    }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 260}} )
                  ))
                )
              )
            )

            /* Confirm */
            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 271}}
              , React.createElement('label', { className: "block text-sm font-medium text-foreground/80 mb-1.5"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 272}}, "Confirm password" )
              , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 273}}
                , React.createElement(Lock, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 274}} )
                , React.createElement('input', {
                  'data-testid': "input-confirm-password",
                  type: showConfirm ? "text" : "password",
                  placeholder: "Repeat your password"  ,
                  value: form.confirm,
                  onChange: (e) => setForm({ ...form, confirm: e.target.value }),
                  required: true,
                  className: `w-full pl-10 pr-11 py-3 rounded-xl border bg-white/50 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 transition-all ${
                    form.confirm && form.confirm !== form.password
                      ? "border-red-300 focus:ring-red-200"
                      : "border-white/60 focus:ring-[#c084fc]/40 focus:border-[#c084fc]/60"
                  }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 275}}
                )
                , React.createElement('button', { type: "button", onClick: () => setShowConfirm(!showConfirm), className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 288}}
                  , showConfirm ? React.createElement(EyeOff, { className: "w-4 h-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 289}} ) : React.createElement(Eye, { className: "w-4 h-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 289}} )
                )
              )
              , form.confirm && form.confirm !== form.password && (
                React.createElement('p', { className: "text-xs text-red-500 mt-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 293}}, "Passwords do not match"   )
              )
            )

            /* Terms */
            , React.createElement('div', { className: "flex items-start gap-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 298}}
              , React.createElement('input', {
                'data-testid': "input-agree",
                id: "agree",
                type: "checkbox",
                checked: form.agree,
                onChange: (e) => setForm({ ...form, agree: e.target.checked }),
                required: true,
                className: "w-4 h-4 mt-0.5 rounded accent-[#818cf8]"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 299}}
              )
              , React.createElement('label', { htmlFor: "agree", className: "text-sm text-muted-foreground leading-snug"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 308}}, "I agree to the"
                   , " "
                , React.createElement('a', { href: "#", className: "text-[#818cf8] hover:underline" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 310}}, "Terms of Service"  ), " and" , " "
                , React.createElement('a', { href: "#", className: "text-[#818cf8] hover:underline" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 311}}, "Privacy Policy" )
              )
            )

            , React.createElement('button', {
              'data-testid': "button-register",
              type: "submit",
              className: "w-full py-3 rounded-xl text-sm font-bold text-white transition-all active:scale-[0.98]"       ,
              style: {
                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
                boxShadow: "0 4px 20px rgba(129,140,248,0.45), 0 0 0 1px rgba(255,255,255,0.3) inset",
              }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 315}}
, "Create Account"

            )
            , error && React.createElement('p', { className: "text-sm text-red-500 mt-2 text-center" }, error)
            , success && React.createElement('p', { className: "text-sm text-green-600 mt-2 text-center" }, success)
          )

          /* Divider */
          , React.createElement('div', { className: "relative my-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 329}}
            , React.createElement('div', { className: "absolute inset-0 flex items-center"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 330}}
              , React.createElement('div', { className: "w-full border-t border-border/50"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 331}} )
            )
            , React.createElement('div', { className: "relative flex justify-center"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 333}}
              , React.createElement('span', { className: "bg-white/60 px-3 text-xs text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 334}}, "or sign up with"   )
            )
          )

          , React.createElement('div', { className: "grid grid-cols-2 gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 338}}
            , [
              { name: "Google", svg: React.createElement('svg', { className: "w-4 h-4" , viewBox: "0 0 24 24"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 340}}, React.createElement('path', { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 340}}), React.createElement('path', { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 340}}), React.createElement('path', { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 340}}), React.createElement('path', { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"                   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 340}})) },
              { name: "GitHub", svg: React.createElement('svg', { className: "w-4 h-4" , fill: "currentColor", viewBox: "0 0 24 24"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 341}}, React.createElement('path', { d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"                                                                   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 341}})) },
            ].map((s) => (
              React.createElement('button', { key: s.name, className: "flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/60 bg-white/40 hover:bg-white/70 text-sm font-medium text-foreground transition-all"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 343}}
                , s.svg, s.name
              )
            ))
          )

          , React.createElement('p', { className: "text-center text-sm text-muted-foreground mt-5"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 349}}, "Already have an account?"
               , " "
            , React.createElement(Link, { href: "/login", className: "text-[#818cf8] font-semibold hover:underline"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 351}}, "Sign in" )
          )
        )
      )
    )
  );
}
