const _jsxFileName = "src\\components\\About.tsx";import React from "react";
import { motion } from "framer-motion";

function CssSphere() {
  return (
    React.createElement('div', { className: "w-full h-full flex items-center justify-center relative"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}
      , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}} )
      , React.createElement('div', { className: "relative w-64 h-64"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
        , React.createElement('div', { className: "absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6]/60 to-[#00d4ff]/40 animate-pulse blur-sm"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}} )
        , React.createElement('div', { className: "absolute inset-4 rounded-full bg-gradient-to-br from-[#8b5cf6]/80 to-[#00d4ff]/60 animate-spin"      , style: { animationDuration: "8s" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}} )
        , React.createElement('div', { className: "absolute inset-8 rounded-full border-2 border-[#8b5cf6]/50 animate-spin"     , style: { animationDuration: "12s", animationDirection: "reverse" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}} )
        , React.createElement('div', { className: "absolute inset-0 rounded-full border border-[#00d4ff]/20"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}} )
      )
    )
  );
}

export default function About() {
  return (
    React.createElement('section', { className: "py-24 relative" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}
      , React.createElement('div', { className: "container mx-auto px-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
        , React.createElement('div', { className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-24"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}

          , React.createElement(motion.div, {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.8 },
            className: "flex-1 w-full" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 73}}

            , React.createElement('div', { className: "inline-block px-3 py-1 mb-6 rounded-full border border-secondary/30 text-secondary text-xs font-semibold tracking-widest uppercase"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}, "Mission Directive"

            )
            , React.createElement('h2', { className: "text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}, "Forging the "
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 84}} )
              , React.createElement('span', { className: "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}, "Digital Elite"

              )
            )
            , React.createElement('p', { className: "text-lg text-muted-foreground mb-6 leading-relaxed"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}, "We are not just a platform; we are a catalyst for evolution. Our systems are engineered to accelerate cognitive processing, bridging the gap between human potential and artificial intelligence."

            )
            , React.createElement('p', { className: "text-lg text-muted-foreground mb-8 leading-relaxed"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}, "Step out of outdated educational paradigms and into a reactive, responsive environment that learns how you learn."

            )

            , React.createElement('div', { className: "grid grid-cols-2 gap-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}
              , React.createElement('div', { className: "border-l-2 border-primary pl-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}
                , React.createElement('div', { className: "text-3xl font-bold text-white mb-1"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}, "99.9%")
                , React.createElement('div', { className: "text-sm text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}, "Uptime")
              )
              , React.createElement('div', { className: "border-l-2 border-secondary pl-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 101}}
                , React.createElement('div', { className: "text-3xl font-bold text-white mb-1"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 102}}, "2M+")
                , React.createElement('div', { className: "text-sm text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}, "Nodes Connected" )
              )
            )
          )

          , React.createElement(motion.div, {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 1 },
            className: "flex-1 w-full h-[400px] lg:h-[600px] relative"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}

            , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}} )
              , React.createElement(CssSphere, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 117}} )
          )

        )
      )
    )
  );
}
