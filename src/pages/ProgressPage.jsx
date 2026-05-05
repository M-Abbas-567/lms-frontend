const _jsxFileName = "src\\pages\\ProgressPage.tsx";import { motion } from "framer-motion";
import React from "react";
import { TrendingUp, BookOpen, CheckCircle, Award, Clock, Flame, BarChart2 } from "lucide-react";

const enrolledCourses = [
  { id: 1, title: "Advanced Machine Learning", progress: 72, total: 40, done: 28.8, color: "from-sky-400 to-blue-500", category: "AI & Data" },
  { id: 2, title: "Full-Stack Web Development", progress: 45, total: 60, done: 27, color: "from-pink-400 to-rose-500", category: "Engineering" },
  { id: 3, title: "UX Design Fundamentals", progress: 90, total: 25, done: 22.5, color: "from-violet-400 to-purple-600", category: "Design" },
  { id: 4, title: "Cloud Architecture & AWS", progress: 20, total: 50, done: 10, color: "from-teal-400 to-emerald-500", category: "Engineering" },
];

const weeklyData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 1.0 },
  { day: "Wed", hours: 3.5 },
  { day: "Thu", hours: 2.0 },
  { day: "Fri", hours: 4.0 },
  { day: "Sat", hours: 1.5 },
  { day: "Sun", hours: 3.0 },
];
const maxHours = Math.max(...weeklyData.map((d) => d.hours));

const recentActivity = [
  { text: "Completed Lesson 12 – Neural Networks", time: "2 hours ago", icon: CheckCircle, color: "text-green-500" },
  { text: "Scored 88% on ML Fundamentals Quiz", time: "Yesterday", icon: Award, color: "text-amber-500" },
  { text: "Started Cloud Networking module", time: "2 days ago", icon: BookOpen, color: "text-blue-500" },
  { text: "Earned Certificate: Python Basics", time: "4 days ago", icon: Award, color: "text-purple-500" },
];

export default function ProgressPage() {
  const overallProgress = Math.round(enrolledCourses.reduce((a, b) => a + b.progress, 0) / enrolledCourses.length);
  const totalHours = weeklyData.reduce((a, b) => a + b.hours, 0);

  return (
    React.createElement('div', { className: "min-h-screen pt-10 pb-16"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
      , React.createElement('div', { className: "container mx-auto px-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}

        /* Header */
        , React.createElement(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mb-10", __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
          , React.createElement('div', { className: "flex items-center gap-2 mb-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}
            , React.createElement(BarChart2, { className: "w-5 h-5 text-primary"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}} )
            , React.createElement('span', { className: "text-sm font-semibold text-primary uppercase tracking-widest"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}, "Analytics")
          )
          , React.createElement('h1', { className: "text-4xl md:text-5xl font-bold font-display text-foreground mb-3"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}, "Progress Tracker" )
          , React.createElement('p', { className: "text-muted-foreground text-lg" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}, "Your learning journey at a glance."     )
        )

        /* Top stats */
        , React.createElement(motion.div, { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
          , [
            { icon: TrendingUp, label: "Overall Progress", value: `${overallProgress}%`, color: "text-primary", bg: "from-sky-50 to-blue-50" },
            { icon: Flame, label: "Day Streak", value: "14 days", color: "text-orange-500", bg: "from-orange-50 to-amber-50" },
            { icon: Clock, label: "This Week", value: `${totalHours}h`, color: "text-purple-500", bg: "from-purple-50 to-violet-50" },
            { icon: Award, label: "Certificates", value: "3", color: "text-green-500", bg: "from-green-50 to-emerald-50" },
          ].map((stat, i) => (
            React.createElement(motion.div, { key: i, initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { delay: i * 0.07 },
              className: `rounded-2xl p-5 bg-gradient-to-br ${stat.bg}`,
              style: { border: "1px solid rgba(180,200,230,0.3)", boxShadow: "0 4px 16px rgba(100,140,200,0.07)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}

              , React.createElement(stat.icon, { className: `w-5 h-5 ${stat.color} mb-3`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}} )
              , React.createElement('div', { className: "text-2xl font-bold text-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}, stat.value)
              , React.createElement('div', { className: "text-xs text-muted-foreground mt-0.5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}, stat.label)
            )
          ))
        )

        , React.createElement('div', { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}

          /* Weekly chart */
          , React.createElement(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 },
            className: "lg:col-span-2 rounded-2xl p-6"  ,
            style: { background: "rgba(255,255,255,0.72)", backdropFilter: "blur(16px)", border: "1px solid rgba(180,200,230,0.35)", boxShadow: "0 4px 24px rgba(100,140,200,0.08)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}

            , React.createElement('h2', { className: "font-bold text-foreground text-lg mb-1"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 73}}, "Weekly Study Hours"  )
            , React.createElement('p', { className: "text-xs text-muted-foreground mb-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}, "Total: " , totalHours, "h this week"  )
            , React.createElement('div', { className: "flex items-end gap-3 h-36"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}
              , weeklyData.map((d, i) => (
                React.createElement('div', { key: i, className: "flex-1 flex flex-col items-center gap-1.5"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}
                  , React.createElement(motion.div, {
                    initial: { height: 0 },
                    animate: { height: `${(d.hours / maxHours) * 100}%` },
                    transition: { delay: 0.3 + i * 0.07, duration: 0.6, ease: "easeOut" },
                    className: "w-full rounded-t-lg bg-gradient-to-t from-primary to-secondary min-h-[4px]"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}
                  )
                  , React.createElement('span', { className: "text-xs text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}, d.day)
                  , React.createElement('span', { className: "text-xs font-semibold text-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}, d.hours, "h")
                )
              ))
            )
          )

          /* Recent activity */
          , React.createElement(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.25 },
            className: "rounded-2xl p-6" ,
            style: { background: "rgba(255,255,255,0.72)", backdropFilter: "blur(16px)", border: "1px solid rgba(180,200,230,0.35)", boxShadow: "0 4px 24px rgba(100,140,200,0.08)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}

            , React.createElement('h2', { className: "font-bold text-foreground text-lg mb-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}, "Recent Activity" )
            , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}
              , recentActivity.map((item, i) => (
                React.createElement('div', { key: i, className: "flex gap-3 items-start"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}
                  , React.createElement('div', { className: `mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.color.replace("text-", "bg-").replace("500", "50")}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}
                    , React.createElement(item.icon, { className: `w-4 h-4 ${item.color}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 101}} )
                  )
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
                    , React.createElement('p', { className: "text-sm text-foreground leading-snug"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}, item.text)
                    , React.createElement('p', { className: "text-xs text-muted-foreground mt-0.5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}, item.time)
                  )
                )
              ))
            )
          )
        )

        /* Course progress */
        , React.createElement(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 },
          className: "rounded-2xl p-6" ,
          style: { background: "rgba(255,255,255,0.72)", backdropFilter: "blur(16px)", border: "1px solid rgba(180,200,230,0.35)", boxShadow: "0 4px 24px rgba(100,140,200,0.08)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}

          , React.createElement('div', { className: "flex items-center justify-between mb-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}
            , React.createElement('h2', { className: "font-bold text-foreground text-lg"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 119}}, "Course Progress" )
            , React.createElement('span', { className: "text-xs text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}, enrolledCourses.length, " enrolled" )
          )
          , React.createElement('div', { className: "space-y-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}
            , enrolledCourses.map((course, i) => (
              React.createElement(motion.div, { key: course.id, initial: { opacity: 0, x: -16 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.35 + i * 0.08 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 124}}
                , React.createElement('div', { className: "flex items-center justify-between mb-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 126}}
                    , React.createElement('p', { className: "text-sm font-semibold text-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}}, course.title)
                    , React.createElement('p', { className: "text-xs text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}}, course.category, " · "  , course.done, "h / "  , course.total, "h completed" )
                  )
                  , React.createElement('span', { className: `text-sm font-bold ${course.progress >= 80 ? "text-green-600" : course.progress >= 50 ? "text-blue-600" : "text-orange-500"}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 130}}
                    , course.progress, "%"
                  )
                )
                , React.createElement('div', { className: "h-2 rounded-full bg-muted overflow-hidden"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}}
                  , React.createElement(motion.div, {
                    initial: { width: 0 },
                    animate: { width: `${course.progress}%` },
                    transition: { delay: 0.4 + i * 0.08, duration: 0.8, ease: "easeOut" },
                    className: `h-full rounded-full bg-gradient-to-r ${course.color}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 135}}
                  )
                )
              )
            ))
          )
        )

      )
    )
  );
}
