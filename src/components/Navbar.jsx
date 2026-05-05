const _jsxFileName = "src\\components\\Navbar.tsx";import React from "react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Home, BookOpen, CheckSquare, BarChart2, Info,
  LayoutDashboard, LogIn, LogOut, UserPlus, Zap
} from "lucide-react";
import { clearSession, dashboardPath, getSession } from "@/lib/api";

const navLinks = [
  { label: "Home", href: "/", icon: Home, color: "#38bdf8" },
  { label: "Courses", href: "/courses", icon: BookOpen, color: "#818cf8" },
  { label: "Quizzes", href: "/quizzes", icon: CheckSquare, color: "#c084fc" },
  { label: "Progress", href: "/progress", icon: BarChart2, color: "#34d399" },
  { label: "About", href: "/#about", icon: Info, color: "#fb7185" },
];

const authLinks = [
  { label: "Login", href: "/login", icon: LogIn, color: "#38bdf8" },
  { label: "Register", href: "/register", icon: UserPlus, color: "#c084fc" },
];









function NavIcon({ label, href, icon: Icon, color, active }) {
  const [hovered, setHovered] = useState(false);

  const linkStyle = {
    background: active ? `${color}22` : hovered ? `${color}15` : "transparent",
    boxShadow: active
      ? `0 0 18px ${color}40, inset 0 0 12px ${color}15`
      : hovered
      ? `0 0 12px ${color}30`
      : "none",
    border: active ? `1.5px solid ${color}55` : "1.5px solid transparent",
  };

  return (
    <>
      <div className="relative flex items-center" style={{ isolation: "isolate" }}>
        <Link
          href={href}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          data-testid={`nav-${label.toLowerCase()}`}
          className="relative w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 group"
          style={linkStyle}
        >
          <Icon
            className="w-5 h-5 transition-all duration-300"
            style={{ color: active || hovered ? color : "#94a3b8", filter: active || hovered ? `drop-shadow(0 0 6px ${color}80)` : "none" }}
          />
        </Link>
      </div>

      {hovered && (
        <div
          className="absolute left-[calc(100%+12px)] px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap z-[100] pointer-events-none"
          style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", border: `1px solid ${color}40`, boxShadow: `0 4px 20px ${color}30`, color }}
        >
          {label}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent" style={{ borderRightColor: `${color}30` }} />
        </div>
      )}
    </>
  );
}

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const session = getSession();
  const visibleAuthLinks = session?.user
    ? [
        { label: "Dashboard", href: dashboardPath(session.user.role), icon: LayoutDashboard, color: "#14b8a6" },
        { label: "Logout", href: "/login", icon: LogOut, color: "#f43f5e", onClick: () => { clearSession(); setLocation("/login"); } },
      ]
    : authLinks;

  return (
    React.createElement('nav', {
      className: "fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 py-5 px-2 rounded-3xl"           ,
      style: {
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.8)",
        boxShadow:
          "0 8px 40px rgba(100,140,220,0.12), 0 0 0 1px rgba(255,255,255,0.6) inset",
        width: "64px",
      }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}

      /* Logo */
      , React.createElement(Link, { href: "/", __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}
        , React.createElement('div', { className: "mb-4 flex flex-col items-center group cursor-pointer"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}
          , React.createElement('div', {
            className: "w-10 h-10 rounded-2xl flex items-center justify-center relative overflow-hidden"       ,
            style: {
              background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
              boxShadow: "0 4px 20px rgba(129,140,248,0.5), 0 0 0 2px rgba(255,255,255,0.8) inset",
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}

            /* Stylish Z / lightning bolt logo */
            , React.createElement(Zap, { className: "w-5 h-5 text-white drop-shadow-lg"   , strokeWidth: 2.5, __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}} )
            /* Gloss overlay */
            , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-2xl"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}} )
          )
          , React.createElement('span', {
            className: "text-[9px] font-black tracking-wider mt-1.5 text-transparent bg-clip-text"     ,
            style: { backgroundImage: "linear-gradient(135deg, #38bdf8, #c084fc)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}
, "NEXUS"

          )
        )
      )

      /* Divider */
      , React.createElement('div', { className: "w-8 h-px bg-gradient-to-r from-transparent via-border to-transparent mb-1"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}} )

      /* Nav links */
      , React.createElement('div', { className: "flex flex-col items-center gap-1.5"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 131}}
        , navLinks.map((link) => (
          React.createElement(NavIcon, {
            key: link.href,
            ...link,
            active: location === link.href, __self: this, __source: {fileName: _jsxFileName, lineNumber: 133}}
          )
        ))
      )

      /* Divider */
      , React.createElement('div', { className: "w-8 h-px bg-gradient-to-r from-transparent via-border to-transparent my-1"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 142}} )

      /* Auth links */
      , React.createElement('div', { className: "flex flex-col items-center gap-1.5"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 145}}
        , visibleAuthLinks.map((link) => (
          React.createElement(NavIcon, {
            key: link.label,
            ...link,
            active: location === link.href, __self: this, __source: {fileName: _jsxFileName, lineNumber: 147}}
          )
        ))
      )
    )
  );
}
