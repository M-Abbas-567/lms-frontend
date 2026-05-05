const _jsxFileName = "src\\pages\\CoursesPage.tsx";import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Search, Star, Users, Clock, Filter, BookOpen } from "lucide-react";
import { apiFetch } from "@/lib/api";


const categories = ["All", "AI & Data", "Engineering", "Design", "Business", "Security"];

const fallbackCourses = [
  { id: 1, title: "Advanced Machine Learning", category: "AI & Data", instructor: "Dr. Sarah Chen", rating: 4.9, students: "12.4k", duration: "40h", level: "Advanced", color: "from-sky-400 to-blue-500" },
  { id: 2, title: "UX Design Fundamentals", category: "Design", instructor: "Marcus Weaver", rating: 4.8, students: "8.2k", duration: "25h", level: "Beginner", color: "from-violet-400 to-purple-600" },
  { id: 3, title: "Full-Stack Web Development", category: "Engineering", instructor: "Elena Rodriguez", rating: 4.7, students: "15.1k", duration: "60h", level: "Intermediate", color: "from-pink-400 to-rose-500" },
  { id: 4, title: "Data Science with Python", category: "AI & Data", instructor: "James Wilson", rating: 4.9, students: "10.5k", duration: "45h", level: "Intermediate", color: "from-cyan-400 to-sky-500" },
  { id: 5, title: "Digital Marketing Mastery", category: "Business", instructor: "Anita Patel", rating: 4.6, students: "6.8k", duration: "30h", level: "Beginner", color: "from-amber-400 to-orange-500" },
  { id: 6, title: "Cloud Architecture & AWS", category: "Engineering", instructor: "David Kim", rating: 4.8, students: "9.3k", duration: "50h", level: "Advanced", color: "from-teal-400 to-emerald-500" },
  { id: 7, title: "Cybersecurity Essentials", category: "Security", instructor: "Lisa Nakamura", rating: 4.7, students: "7.1k", duration: "35h", level: "Intermediate", color: "from-red-400 to-rose-600" },
  { id: 8, title: "Product Management 101", category: "Business", instructor: "Omar Hassan", rating: 4.5, students: "5.9k", duration: "28h", level: "Beginner", color: "from-indigo-400 to-blue-600" },
  { id: 9, title: "React & TypeScript Pro", category: "Engineering", instructor: "Yuki Tanaka", rating: 4.9, students: "11.2k", duration: "42h", level: "Advanced", color: "from-fuchsia-400 to-pink-500" },
  { id: 10, title: "Statistics for Data Science", category: "Statistics", instructor: "Dr. Kavita Rao", rating: 4.8, students: "4.6k", duration: "32h", level: "Intermediate", color: "from-sky-400 to-cyan-500" },
  { id: 11, title: "Linear Algebra Essentials", category: "Mathematics", instructor: "Prof. Alan Briggs", rating: 4.7, students: "3.9k", duration: "28h", level: "Beginner", color: "from-emerald-400 to-teal-600" },
  { id: 12, title: "Agile Development Masterclass", category: "Agile", instructor: "Rina Gomez", rating: 4.6, students: "5.2k", duration: "18h", level: "Intermediate", color: "from-amber-400 to-orange-500" },
  { id: 13, title: "Software Engineering Foundations", category: "Software Engineering", instructor: "Prof. Mark Liu", rating: 4.9, students: "6.8k", duration: "40h", level: "Intermediate", color: "from-violet-400 to-purple-600" },
  { id: 14, title: "Calculus I: Differential", category: "Mathematics", instructor: "Dr. Hannah Lee", rating: 4.5, students: "4.1k", duration: "30h", level: "Beginner", color: "from-indigo-400 to-blue-500" },
];

const levelColors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-purple-100 text-purple-700",
};

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [courses, setCourses] = useState(fallbackCourses);
  const [, setLocation] = useLocation();

  useEffect(() => {
    apiFetch("/courses")
      .then((data) => {
        setCourses(data);
        localStorage.setItem("courses", JSON.stringify(data));
      })
      .catch(() => setCourses(fallbackCourses));
  }, []);

  const filtered = courses.filter((c) => {
    const matchCat = activeCategory === "All" || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    React.createElement('div', { className: "min-h-screen pt-10 pb-16"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
      , React.createElement('div', { className: "container mx-auto px-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
        /* Header */
        , React.createElement(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mb-10", __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
          , React.createElement('div', { className: "flex items-center gap-2 mb-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
            , React.createElement(BookOpen, { className: "w-5 h-5 text-primary"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}} )
            , React.createElement('span', { className: "text-sm font-semibold text-primary uppercase tracking-widest"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}, "Course Library" )
          )
          , React.createElement('h1', { className: "text-4xl md:text-5xl font-bold font-display text-foreground mb-3"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "Explore Courses" )
          , React.createElement('p', { className: "text-muted-foreground text-lg max-w-xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}, "Browse our collection of expert-led courses and start learning at your own pace."            )
        )

        /* Search + Filter */
        , React.createElement(motion.div, { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "flex flex-col md:flex-row gap-4 mb-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}
          , React.createElement('div', { className: "relative flex-1" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
            , React.createElement(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}} )
            , React.createElement('input', {
              'data-testid': "input-search-courses",
              type: "text",
              placeholder: "Search courses or instructors..."   ,
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white/70 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
            )
          )
          , React.createElement('button', { className: "flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-white/70 text-sm font-medium text-foreground hover:bg-white transition-colors"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}
            , React.createElement(Filter, { className: "w-4 h-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}} ), " Filters"
          )
        )

        /* Categories */
        , React.createElement(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.15 }, className: "flex gap-2 flex-wrap mb-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}
          , categories.map((cat) => (
            React.createElement('button', {
              key: cat,
              'data-testid': `button-category-${cat.toLowerCase().replace(/\s/g, "-")}`,
              onClick: () => setActiveCategory(cat),
              className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white/70 border border-border text-foreground/70 hover:bg-white hover:text-foreground"
              }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}

              , cat
            )
          ))
        )

        /* Grid */
        , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}
          , filtered.map((course, i) => (
            React.createElement(motion.div, {
              key: course.id,
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: i * 0.05 },
              whileHover: { y: -6, scale: 1.02 },
              'data-testid': `card-course-${course.id}`,
              className: "rounded-2xl overflow-hidden cursor-pointer group"   ,
              style: {
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(180,200,230,0.35)",
                boxShadow: "0 4px 24px rgba(100,140,200,0.08)",
              }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}

              , React.createElement('div', { className: `h-28 w-full bg-gradient-to-br ${course.color} relative`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
                , React.createElement('div', { className: "absolute inset-0 bg-black/10"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}} )
                , React.createElement('div', { className: "absolute top-3 right-3 bg-white/25 backdrop-blur-md px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}
                  , course.category
                )
                , React.createElement('div', { className: `absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${levelColors[course.level]}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}
                  , course.level
                )
              )
              , React.createElement('div', { className: "p-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}
                , React.createElement('h3', { className: "font-bold text-foreground text-base mb-1 group-hover:text-primary transition-colors"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}, course.title)
                , React.createElement('p', { className: "text-xs text-muted-foreground mb-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}, "by " , course.instructor)
                , React.createElement('div', { className: "flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-3"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}
                  , React.createElement('div', { className: "flex items-center gap-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}, React.createElement(Star, { className: "w-3.5 h-3.5 fill-amber-400 text-amber-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}} ), React.createElement('span', { className: "font-semibold text-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}, course.rating))
                  , React.createElement('div', { className: "flex items-center gap-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 117}}, React.createElement(Users, { className: "w-3.5 h-3.5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 117}} ), course.students)
                  , React.createElement('div', { className: "flex items-center gap-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}, React.createElement(Clock, { className: "w-3.5 h-3.5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}} ), course.duration)
                )
                , React.createElement('button', { onClick: () => setLocation(`/enroll/${course.id}`), className: "w-full mt-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}, "Enroll Now"

                )
              )
            )
          ))
        )

        , filtered.length === 0 && (
          React.createElement('div', { className: "text-center py-20 text-muted-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 129}}
            , React.createElement(BookOpen, { className: "w-12 h-12 mx-auto mb-4 opacity-30"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 130}} )
            , React.createElement('p', { className: "text-lg font-medium" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 131}}, "No courses found"  )
            , React.createElement('p', { className: "text-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}}, "Try adjusting your search or filters"     )
          )
        )
      )
    )
  );
}
