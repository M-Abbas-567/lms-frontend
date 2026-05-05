import React, { useState } from "react";
import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, Mail, Users, Clock } from "lucide-react";
import { apiFetch, getSession } from "@/lib/api";

export default function Enroll() {
  const [match, params] = useRoute("/enroll/:id");
  const courseId = params?.id || null;
  const [, setLocation] = useLocation();

  const courses = JSON.parse(localStorage.getItem("courses") || "null");
  // fallback: minimal lookup from page data if available globally
  const course = (courses && courses.find && courses.find((c) => String(c.id) === String(courseId))) || { id: courseId, title: "Selected Course" };
  const session = getSession();

  const [form, setForm] = useState({ name: session?.user?.name || "", email: session?.user?.email || "", phone: "", notes: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email) {
      setError("Please provide your name and email");
      return;
    }
    try {
      const path = session?.user?.role === "Student"
        ? `/student/courses/${course.id}/enroll`
        : `/courses/${course.id}/enrollments`;
      await apiFetch(path, { method: "POST", body: JSON.stringify(form) });
      setSuccess("Enrollment successful. Redirecting...");
      setTimeout(() => setLocation(session?.user?.role === "Student" ? "/student/dashboard" : "/courses"), 1200);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    React.createElement('div', { className: "min-h-screen pt-10 pb-16" },
      React.createElement('div', { className: "container mx-auto px-6" },
        React.createElement(motion.div, { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, className: "max-w-xl mx-auto rounded-2xl p-6 bg-white/80 backdrop-blur-md border border-border" },
          React.createElement('div', { className: "flex items-center gap-3 mb-4" }, React.createElement(BookOpen, { className: "w-5 h-5 text-primary" }), React.createElement('h2', { className: "text-lg font-bold" }, "Enroll: ", course.title)),
          React.createElement('form', { onSubmit: handleSubmit, className: "space-y-4" },
            React.createElement('div', null, React.createElement('label', { className: "block text-sm font-medium mb-1" }, "Full name"), React.createElement('input', { type: "text", value: form.name, onChange: (e) => setForm({ ...form, name: e.target.value }), className: "w-full px-4 py-2 rounded-lg border", required: true })),
            React.createElement('div', null, React.createElement('label', { className: "block text-sm font-medium mb-1" }, "Email"), React.createElement('input', { type: "email", value: form.email, onChange: (e) => setForm({ ...form, email: e.target.value }), className: "w-full px-4 py-2 rounded-lg border", required: true })),
            React.createElement('div', null, React.createElement('label', { className: "block text-sm font-medium mb-1" }, "Phone (optional)"), React.createElement('input', { type: "tel", value: form.phone, onChange: (e) => setForm({ ...form, phone: e.target.value }), className: "w-full px-4 py-2 rounded-lg border" })),
            React.createElement('div', null, React.createElement('label', { className: "block text-sm font-medium mb-1" }, "Notes (optional)"), React.createElement('textarea', { value: form.notes, onChange: (e) => setForm({ ...form, notes: e.target.value }), className: "w-full px-4 py-2 rounded-lg border", rows: 4 })),
            React.createElement('div', null, React.createElement('button', { type: "submit", className: "w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold" }, "Submit Enrollment")),
            error && React.createElement('p', { className: "text-sm text-red-500" }, error),
            success && React.createElement('p', { className: "text-sm text-green-600" }, success)
          )
        )
      )
    )
  );
}
