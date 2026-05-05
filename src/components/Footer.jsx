const _jsxFileName = "src\\components\\Footer.tsx";import React from "react";
import { Link } from "wouter";
import { Github, Twitter, Linkedin, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    React.createElement('footer', { className: "border-t border-border bg-white/60 pt-16 pb-8"    , style: { backdropFilter: "blur(8px)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 6}}
      , React.createElement('div', { className: "container mx-auto px-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 7}}
        , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 8}}
          , React.createElement('div', { className: "md:col-span-2", __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
            , React.createElement('div', { className: "flex items-center gap-2 mb-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
              , React.createElement('div', { className: "w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
                , React.createElement(GraduationCap, { className: "w-4 h-4 text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}} )
              )
              , React.createElement('span', { className: "font-display font-bold text-xl text-foreground tracking-tight"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "Nexus"
                , React.createElement('span', { className: "text-primary", __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}, ".EDU")
              )
            )
            , React.createElement('p', { className: "text-muted-foreground max-w-sm text-sm leading-relaxed"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}, "Architecting the future of human cognition through immersive, technology-driven learning environments."

            )
          )

          , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
            , React.createElement('h4', { className: "text-foreground font-bold mb-4 text-sm uppercase tracking-widest"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, "Platform")
            , React.createElement('ul', { className: "space-y-2.5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}, React.createElement(Link, { href: "/courses", className: "text-sm text-muted-foreground hover:text-primary transition-colors"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}, "Courses"))
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}, React.createElement(Link, { href: "/quizzes", className: "text-sm text-muted-foreground hover:text-primary transition-colors"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}, "Quizzes"))
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}, React.createElement(Link, { href: "/progress", className: "text-sm text-muted-foreground hover:text-primary transition-colors"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}, "Progress"))
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}, React.createElement('a', { href: "#", className: "text-sm text-muted-foreground hover:text-primary transition-colors"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}, "Pricing"))
            )
          )

          , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
            , React.createElement('h4', { className: "text-foreground font-bold mb-4 text-sm uppercase tracking-widest"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}, "Legal")
            , React.createElement('ul', { className: "space-y-2.5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, React.createElement('a', { href: "#", className: "text-sm text-muted-foreground hover:text-primary transition-colors"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "Terms of Service"  ))
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, React.createElement('a', { href: "#", className: "text-sm text-muted-foreground hover:text-primary transition-colors"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, "Privacy Policy" ))
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, React.createElement('a', { href: "#", className: "text-sm text-muted-foreground hover:text-primary transition-colors"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "Cookie Policy" ))
            )
          )
        )

        , React.createElement('div', { className: "flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
          , React.createElement('p', { className: "text-muted-foreground text-sm mb-4 md:mb-0"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}, "© 2025 Nexus Education Systems. All rights reserved."

          )

          , React.createElement('div', { className: "flex gap-3" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
            , [Twitter, Github, Linkedin].map((Icon, i) => (
              React.createElement('a', { key: i, href: "#", className: "w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}
                , React.createElement(Icon, { className: "w-4 h-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}} )
              )
            ))
          )
        )
      )
    )
  );
}
