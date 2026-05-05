const _jsxFileName = "src\\pages\\Login.tsx";import { useState } from "react";
import React from "react";
import { Link, useLocation } from "wouter";
import { GraduationCap, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { apiFetch, dashboardPath, saveSession } from "@/lib/api";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [error, setError] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const session = await apiFetch("/login", {
        method: "POST",
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      saveSession(session, form.remember);
      setError("");
      setLocation(dashboardPath(session.user.role));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    React.createElement('div', { className: "min-h-screen flex items-center justify-center px-4 py-20"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
      , React.createElement(motion.div, {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "w-full max-w-md" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}

        /* Card */
        , React.createElement('div', {
          className: "rounded-3xl p-8 md:p-10"  ,
          style: {
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(180,200,230,0.4)",
            boxShadow: "0 8px 40px rgba(100,140,200,0.12)",
          }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}

          /* Logo */
          , React.createElement('div', { className: "flex flex-col items-center mb-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
            , React.createElement('div', { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg mb-3"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
              , React.createElement(GraduationCap, { className: "w-6 h-6 text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}} )
            )
            , React.createElement('h1', { className: "text-2xl font-bold font-display text-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "Welcome back" )
            , React.createElement('p', { className: "text-sm text-muted-foreground mt-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}, "Sign in to your Nexus.EDU account"     )
          )

          , React.createElement('form', { onSubmit: handleSubmit, className: "space-y-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}
            /* Email */
            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
              , React.createElement('label', { className: "block text-sm font-medium text-foreground/80 mb-1.5"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "Email address"

              )
              , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
                , React.createElement(Mail, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}} )
                , React.createElement('input', {
                  'data-testid': "input-email",
                  type: "email",
                  placeholder: "you@example.com",
                  value: form.email,
                  onChange: (e) => setForm({ ...form, email: e.target.value }),
                  required: true,
                  className: "w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"               , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}
                )
              )
            )

            /* Password */
            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
              , React.createElement('div', { className: "flex justify-between items-center mb-1.5"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}
                , React.createElement('label', { className: "block text-sm font-medium text-foreground/80"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}, "Password")
                , React.createElement('a', { href: "#", className: "text-xs text-primary hover:underline"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}, "Forgot password?" )
              )
              , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}
                , React.createElement(Lock, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}} )
                , React.createElement('input', {
                  'data-testid': "input-password",
                  type: showPassword ? "text" : "password",
                  placeholder: "••••••••",
                  value: form.password,
                  onChange: (e) => setForm({ ...form, password: e.target.value }),
                  required: true,
                  className: "w-full pl-10 pr-11 py-3 rounded-xl border border-border bg-white/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"               , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
                )
                , React.createElement('button', {
                  type: "button",
                  onClick: () => setShowPassword(!showPassword),
                  className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}

                  , showPassword ? React.createElement(EyeOff, { className: "w-4 h-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}} ) : React.createElement(Eye, { className: "w-4 h-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}} )
                )
              )
            )

            /* Remember me */
            , React.createElement('div', { className: "flex items-center gap-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}
              , React.createElement('input', {
                'data-testid': "input-remember",
                id: "remember",
                type: "checkbox",
                checked: form.remember,
                onChange: (e) => setForm({ ...form, remember: e.target.checked }),
                className: "w-4 h-4 rounded border-border accent-primary"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}
              )
              , React.createElement('label', { htmlFor: "remember", className: "text-sm text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}, "Remember me for 30 days"    )
            )

            /* Submit */
            , React.createElement('button', {
              'data-testid': "button-login",
              type: "submit",
              className: "w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
, "Sign In"

            )
            , error && React.createElement('p', { className: "text-sm text-red-500 mt-2 text-center" }, error)
          )

          /* Divider */
          , React.createElement('div', { className: "relative my-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}
            , React.createElement('div', { className: "absolute inset-0 flex items-center"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
              , React.createElement('div', { className: "w-full border-t border-border/60"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}} )
            )
            , React.createElement('div', { className: "relative flex justify-center"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 117}}
              , React.createElement('span', { className: "bg-white/60 px-3 text-xs text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}, "or continue with"  )
            )
          )

          /* Social logins */
          , React.createElement('div', { className: "grid grid-cols-2 gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}
            , React.createElement('button', { className: "flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border bg-white/50 hover:bg-white/80 text-sm font-medium text-foreground transition-all"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 124}}
              , React.createElement('svg', { className: "w-4 h-4" , viewBox: "0 0 24 24"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}, React.createElement('path', { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}), React.createElement('path', { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}), React.createElement('path', { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}), React.createElement('path', { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"                   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}})), "Google"

            )
            , React.createElement('button', { className: "flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border bg-white/50 hover:bg-white/80 text-sm font-medium text-foreground transition-all"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}}
              , React.createElement('svg', { className: "w-4 h-4" , fill: "currentColor", viewBox: "0 0 24 24"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 129}}, React.createElement('path', { d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"                                                                   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 129}})), "GitHub"

            )
          )

          , React.createElement('p', { className: "text-center text-sm text-muted-foreground mt-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}}, "Don't have an account?"
               , " "
            , React.createElement(Link, { href: "/register", className: "text-primary font-semibold hover:underline"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 136}}, "Sign up"

            )
          )
        )
      )
    )
  );
}
