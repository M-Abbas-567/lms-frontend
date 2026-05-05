const _jsxFileName = "src\\components\\Courses.tsx";import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Clock } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Advanced Machine Learning",
    category: "AI & Data",
    instructor: "Dr. Sarah Chen",
    rating: 4.9,
    students: "12.4k",
    duration: "40h",
    color: "from-[#00d4ff] to-[#0077ff]",
  },
  {
    id: 2,
    title: "UX Design Fundamentals",
    category: "Design",
    instructor: "Marcus Weaver",
    rating: 4.8,
    students: "8.2k",
    duration: "25h",
    color: "from-[#8b5cf6] to-[#6d28d9]",
  },
  {
    id: 3,
    title: "Full-Stack Web Dev",
    category: "Engineering",
    instructor: "Elena Rodriguez",
    rating: 4.7,
    students: "15.1k",
    duration: "60h",
    color: "from-[#ec4899] to-[#be185d]",
  },
  {
    id: 4,
    title: "Data Science with Python",
    category: "AI & Data",
    instructor: "James Wilson",
    rating: 4.9,
    students: "10.5k",
    duration: "45h",
    color: "from-[#00d4ff] to-[#8b5cf6]",
  },
  {
    id: 5,
    title: "Digital Marketing Mastery",
    category: "Business",
    instructor: "Anita Patel",
    rating: 4.6,
    students: "6.8k",
    duration: "30h",
    color: "from-[#ec4899] to-[#8b5cf6]",
  },
  {
    id: 6,
    title: "Cloud Architecture",
    category: "Engineering",
    instructor: "David Kim",
    rating: 4.8,
    students: "9.3k",
    duration: "50h",
    color: "from-[#00d4ff] to-[#ec4899]",
  },
];

export default function Courses() {
  return (
    React.createElement('section', { className: "py-24 relative bg-card/30"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}
      , React.createElement('div', { className: "container mx-auto px-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
        , React.createElement('div', { className: "flex justify-between items-end mb-16"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}
          , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}
            , React.createElement(motion.h2, { 
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-4xl md:text-5xl font-bold font-display mb-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 73}}
, "Active Databanks"

            )
            , React.createElement(motion.p, { 
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              className: "text-muted-foreground max-w-xl" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
, "Access our premium collection of knowledge modules. Each databank is constantly updated with the latest industry protocols."

            )
          )
          , React.createElement(motion.button, { 
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            className: "hidden md:block px-6 py-3 border border-border hover:border-primary/50 text-sm font-semibold rounded-lg transition-colors"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}
, "View All Modules"

          )
        )

        , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 101}}
          , courses.map((course, i) => (
            React.createElement(motion.div, {
              key: course.id,
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.1 },
              whileHover: { y: -10, scale: 1.02 },
              className: "glass rounded-2xl overflow-hidden group cursor-pointer"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}

              , React.createElement('div', { className: `h-32 w-full bg-gradient-to-br ${course.color} relative overflow-hidden`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}
                , React.createElement('div', { className: "absolute inset-0 bg-black/20"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}} )
                , React.createElement('div', { className: "absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
                  , course.category
                )
              )

              , React.createElement('div', { className: "p-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 119}}
                , React.createElement('h3', { className: "text-xl font-bold mb-2 group-hover:text-primary transition-colors"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}
                  , course.title
                )
                , React.createElement('p', { className: "text-sm text-muted-foreground mb-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}, "Lead Instructor: "
                    , course.instructor
                )

                , React.createElement('div', { className: "flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}}
                  , React.createElement('div', { className: "flex items-center gap-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}}
                    , React.createElement(Star, { className: "w-4 h-4 text-yellow-500 fill-yellow-500"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 129}} )
                    , React.createElement('span', { className: "text-white font-medium" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 130}}, course.rating)
                  )
                  , React.createElement('div', { className: "flex items-center gap-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}}
                    , React.createElement(Users, { className: "w-4 h-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 133}} )
                    , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 134}}, course.students)
                  )
                  , React.createElement('div', { className: "flex items-center gap-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 136}}
                    , React.createElement(Clock, { className: "w-4 h-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 137}} )
                    , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}, course.duration)
                  )
                )
              )
            )
          ))
        )
      )
    )
  );
}
