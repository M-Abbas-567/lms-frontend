const _jsxFileName = "src\\components\\Features.tsx";import React from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, LineChart, Users, Smartphone, Award } from "lucide-react";

const features = [
  {
    title: "Neural Courses",
    description: "Interactive, immersive learning modules designed for rapid knowledge acquisition.",
    icon: BookOpen,
    color: "text-[#00d4ff]",
  },
  {
    title: "Adaptive Quizzes",
    description: "AI-driven assessments that adapt to your knowledge level in real-time.",
    icon: CheckCircle,
    color: "text-[#8b5cf6]",
  },
  {
    title: "Progress Analytics",
    description: "Deep analytics and progress tracking visualized in stunning 3D data.",
    icon: LineChart,
    color: "text-[#ec4899]",
  },
  {
    title: "Expert Network",
    description: "Direct uplink to industry leaders and holographic mentoring sessions.",
    icon: Users,
    color: "text-[#00d4ff]",
  },
  {
    title: "Mobile Sync",
    description: "Seamless synchronization across all your digital devices and implants.",
    icon: Smartphone,
    color: "text-[#8b5cf6]",
  },
  {
    title: "Blockchain Certs",
    description: "Immutable cryptographic certificates verifying your upgraded skills.",
    icon: Award,
    color: "text-[#ec4899]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Features() {
  return (
    React.createElement('section', { className: "py-24 relative overflow-hidden"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}
      , React.createElement('div', { className: "absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}} )
      , React.createElement('div', { className: "absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 pointer-events-none"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}} )

      , React.createElement('div', { className: "container mx-auto px-6 relative z-10"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}
        , React.createElement('div', { className: "text-center mb-16" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}
          , React.createElement(motion.h2, { 
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "text-4xl md:text-5xl font-bold font-display mb-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
, "System Capabilities"

          )
          , React.createElement(motion.div, { 
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            className: "h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}
          )
        )

        , React.createElement(motion.div, { 
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-100px" },
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}

          , features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              React.createElement(motion.div, {
                key: index,
                variants: itemVariants,
                whileHover: { scale: 1.05, rotateY: 5, rotateX: 5 },
                className: "glass-card p-8 rounded-2xl flex flex-col items-start cursor-pointer group"       ,
                style: { transformStyle: "preserve-3d" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}

                , React.createElement('div', { className: "p-4 rounded-xl bg-card border border-border mb-6 group-hover:neon-border-primary transition-all duration-300"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}
                  , React.createElement(Icon, { className: `w-8 h-8 ${feature.color}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}} )
                )
                , React.createElement('h3', { className: "text-2xl font-bold mb-3 tracking-wide"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}, feature.title)
                , React.createElement('p', { className: "text-muted-foreground leading-relaxed" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}
                  , feature.description
                )
              )
            );
          })
        )
      )
    )
  );
}
