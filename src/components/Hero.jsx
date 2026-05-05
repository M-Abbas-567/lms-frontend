const _jsxFileName = "src\\components\\Hero.tsx";import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

function CssFallbackBg() {
  return (
    React.createElement('div', { className: "absolute inset-0 overflow-hidden"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
      , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-[#e0f2fe] via-[#f3e8ff] to-[#fce7f3]"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}} )
      , React.createElement('div', { className: "absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#bae6fd]/40 blur-3xl"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}} )
      , React.createElement('div', { className: "absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#ddd6fe]/40 blur-3xl"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}} )
      , React.createElement('div', { className: "absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-[#fbcfe8]/30 blur-2xl"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}} )
    )
  );
}

export default function Hero() {
  return (
    React.createElement('section', { className: "relative h-screen w-full flex items-center justify-center overflow-hidden"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
      , React.createElement('div', { className: "absolute inset-0 z-0"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
        , React.createElement(CssFallbackBg, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 36}} )
      )

      , React.createElement('div', { className: "relative z-10 container mx-auto px-6 text-center flex flex-col items-center"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
        , React.createElement(motion.div, {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          className: "inline-block px-4 py-1.5 mb-6 rounded-full glass border-primary/30 text-primary text-sm font-medium tracking-wide uppercase"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
, "Welcome to the Next Generation"

        )

        , React.createElement(motion.h1, {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.4 },
          className: "text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 tracking-tight leading-tight"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}
, "Upgrade Your "
            , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 60}} )
          , React.createElement('span', { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}, "Cognitive Core"

          )
        )

        , React.createElement(motion.p, {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.6 },
          className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}
, "A cutting-edge learning ecosystem designed for digital pioneers. Immerse yourself in high-tech courses and master the tools of tomorrow."

        )

        , React.createElement(motion.div, {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay: 0.8 },
          className: "flex flex-col sm:flex-row gap-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}

          , React.createElement(Link, { href: "/courses", 'data-testid': "button-explore-courses", className: "px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 duration-300 inline-block text-center", __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}, "Explore Courses")
            , React.createElement(Link, { href: "/register", 'data-testid': "button-get-started", className: "px-8 py-4 glass text-foreground font-bold rounded-lg hover:bg-white/60 transition-all transform hover:scale-105 duration-300 inline-block text-center", __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}, "Get Started Free")
        )
      )
    )
  );
}
