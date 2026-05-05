const _jsxFileName = "src\\components\\GlobalBackground.tsx";import React from "react";

export default function GlobalBackground() {
  return (
    React.createElement('div', { className: "fixed inset-0 z-0 overflow-hidden pointer-events-none"    , 'aria-hidden': true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 3}}
      /* Base glassy white */
      , React.createElement('div', { className: "absolute inset-0 bg-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 5}} )

      /* Primary bloom — sky blue */
      , React.createElement('div', {
        className: "absolute rounded-full" ,
        style: {
          width: "600px",
          height: "600px",
          top: "-120px",
          left: "60px",
          background: "radial-gradient(circle, rgba(56,189,248,0.28) 0%, rgba(56,189,248,0.08) 55%, transparent 75%)",
          filter: "blur(40px)",
          animation: "bloom1 12s ease-in-out infinite alternate",
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 8}}
      )

      /* Secondary bloom — purple */
      , React.createElement('div', {
        className: "absolute rounded-full" ,
        style: {
          width: "700px",
          height: "700px",
          top: "30%",
          right: "-150px",
          background: "radial-gradient(circle, rgba(129,140,248,0.22) 0%, rgba(192,132,252,0.10) 55%, transparent 75%)",
          filter: "blur(50px)",
          animation: "bloom2 15s ease-in-out infinite alternate",
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
      )

      /* Accent bloom — pink */
      , React.createElement('div', {
        className: "absolute rounded-full" ,
        style: {
          width: "500px",
          height: "500px",
          bottom: "-80px",
          left: "25%",
          background: "radial-gradient(circle, rgba(251,113,133,0.20) 0%, rgba(251,113,133,0.07) 55%, transparent 75%)",
          filter: "blur(40px)",
          animation: "bloom3 10s ease-in-out infinite alternate",
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
      )

      /* Teal accent blob */
      , React.createElement('div', {
        className: "absolute rounded-full" ,
        style: {
          width: "400px",
          height: "400px",
          bottom: "20%",
          left: "5%",
          background: "radial-gradient(circle, rgba(52,211,153,0.18) 0%, transparent 70%)",
          filter: "blur(35px)",
          animation: "bloom1 18s ease-in-out infinite alternate-reverse",
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}
      )

      /* Subtle grid overlay */
      , React.createElement('div', {
        className: "absolute inset-0 opacity-[0.025]"  ,
        style: {
          backgroundImage:
            "linear-gradient(rgba(100,130,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,130,200,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}
      )

      , React.createElement('style', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 73}}, `
        @keyframes bloom1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(40px, 30px) scale(1.15); }
        }
        @keyframes bloom2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(-50px, 40px) scale(1.12); }
        }
        @keyframes bloom3 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(30px, -40px) scale(1.08); }
        }
      `)
    )
  );
}
