const _jsxFileName = "src\\components\\Contact.tsx";import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    React.createElement('section', { className: "py-24 relative overflow-hidden"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 5}}
      , React.createElement('div', { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 6}} )

      , React.createElement('div', { className: "container mx-auto px-6 relative z-10"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 8}}
        , React.createElement('div', { className: "max-w-4xl mx-auto" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
          , React.createElement(motion.div, { 
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}

            , React.createElement('h2', { className: "text-4xl md:text-5xl font-bold font-display mb-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}, "Establish Connection" )
            , React.createElement('p', { className: "text-muted-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "Ready to initialize your upgrade? Send us a transmission."        )
          )

          , React.createElement(motion.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.2 },
            className: "glass p-8 md:p-12 rounded-3xl"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}

            , React.createElement('form', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
              , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
                , React.createElement('div', { className: "space-y-2", __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
                  , React.createElement('label', { className: "text-sm text-muted-foreground font-medium uppercase tracking-wider"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, "Identifier")
                  , React.createElement('input', { 
                    type: "text", 
                    placeholder: "Enter your designation"  ,
                    className: "w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
                  )
                )
                , React.createElement('div', { className: "space-y-2", __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
                  , React.createElement('label', { className: "text-sm text-muted-foreground font-medium uppercase tracking-wider"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "Comm Link" )
                  , React.createElement('input', { 
                    type: "email", 
                    placeholder: "name@network.com",
                    className: "w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}
                  )
                )
              )

              , React.createElement('div', { className: "space-y-2", __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
                , React.createElement('label', { className: "text-sm text-muted-foreground font-medium uppercase tracking-wider"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}, "Transmission Payload" )
                , React.createElement('textarea', { 
                  rows: 4,
                  placeholder: "Enter your message here..."   ,
                  className: "w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}
                )
              )

              , React.createElement('button', { 
                type: "button",
                className: "w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity neon-border-primary"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}
, "Transmit Data"

              )
            )
          )
        )
      )
    )
  );
}
