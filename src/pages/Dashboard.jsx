import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Edit,
  GraduationCap,
  LayoutDashboard,
  Plus,
  Trash2,
  Users,
} from "lucide-react";
import { apiFetch, clearSession, dashboardPath, getSession } from "@/lib/api";

const roleCopy = {
  Student: {
    title: "Student Dashboard",
    nav: ["My Courses", "Available Courses", "My Quiz Results", "Profile"],
  },
  Instructor: {
    title: "Instructor Dashboard",
    nav: ["My Courses", "Create Course", "Lessons", "Quizzes", "Students"],
  },
  Admin: {
    title: "Admin Dashboard",
    nav: ["Users", "Courses", "Categories", "Reports", "Enrollments"],
  },
};

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-white/70 bg-white/75 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">{label}</span>
        <Icon className="h-4 w-4 text-sky-500" />
      </div>
      <div className="mt-2 text-2xl font-bold text-slate-900">{value ?? 0}</div>
    </div>
  );
}

function CourseCard({ course, action }) {
  return (
    <div className="rounded-lg border border-white/70 bg-white/80 p-4 shadow-sm">
      <div className={`mb-4 h-2 rounded-full bg-gradient-to-r ${course.color || "from-sky-400 to-teal-400"}`} />
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-slate-950">{course.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{course.category} | {course.level}</p>
          <p className="mt-2 text-sm text-slate-600">Instructor: {course.instructor}</p>
        </div>
        {action}
      </div>
    </div>
  );
}

function DashboardShell({ children, user, title, nav }) {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 border-b border-white/70 pb-5 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase text-sky-600">
              <LayoutDashboard className="h-4 w-4" />
              {user?.role}
            </div>
            <h1 className="mt-2 text-3xl font-bold text-slate-950">{title}</h1>
            <p className="mt-1 text-sm text-slate-500">{user?.name} | {user?.email}</p>
          </div>
          <button
            onClick={() => {
              clearSession();
              setLocation("/login");
            }}
            className="h-10 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Logout
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="rounded-lg border border-white/70 bg-white/70 p-3">
            {nav.map((item) => (
              <div key={item} className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600">
                {item}
              </div>
            ))}
          </aside>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

function StudentDashboard({ data, reload }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Stat icon={BookOpen} label="Enrolled Courses" value={data.stats.enrolledCourses} />
        <Stat icon={GraduationCap} label="Available Courses" value={data.stats.availableCourses} />
        <Stat icon={ClipboardList} label="Quiz Attempts" value={data.stats.quizAttempts} />
        <Stat icon={BarChart3} label="Average Score" value={`${data.stats.averageScore}%`} />
      </div>

      <section>
        <h2 className="mb-3 text-lg font-bold text-slate-950">My Courses</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {data.enrolledCourses.map((course) => (
            <CourseCard key={course.id} course={course} action={<CheckCircle2 className="h-5 w-5 text-emerald-500" />} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-slate-950">Available Courses</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {data.availableCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              action={
                <button
                  onClick={async () => {
                    await apiFetch(`/student/courses/${course.id}/enroll`, { method: "POST", body: JSON.stringify({}) });
                    reload();
                  }}
                  className="rounded-lg bg-sky-500 px-3 py-2 text-xs font-bold text-white hover:bg-sky-600"
                >
                  Enroll
                </button>
              }
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-slate-950">Recent Quiz Results</h2>
        <div className="rounded-lg border border-white/70 bg-white/80">
          {data.quizResults.length === 0 ? (
            <p className="p-4 text-sm text-slate-500">No quiz attempts yet.</p>
          ) : data.quizResults.map((result) => (
            <div key={result.id} className="flex items-center justify-between border-b border-slate-100 p-4 text-sm last:border-0">
              <span>{result.quiz?.title}</span>
              <span className={result.passed ? "font-bold text-emerald-600" : "font-bold text-rose-600"}>{result.score}%</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function InstructorDashboard({ data }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Stat icon={BookOpen} label="My Courses" value={data.stats.courses} />
        <Stat icon={Users} label="Students" value={data.stats.students} />
        <Stat icon={ClipboardList} label="Lessons" value={data.stats.lessons} />
        <Stat icon={BarChart3} label="Quizzes" value={data.stats.quizzes} />
      </div>
      <div className="flex justify-end">
        <button className="flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white">
          <Plus className="h-4 w-4" /> Create New Course
        </button>
      </div>
      <div className="grid gap-4">
        {data.courses.map((course) => (
          <div key={course.id} className="rounded-lg border border-white/70 bg-white/80 p-4">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="font-bold text-slate-950">{course.title}</h3>
                <p className="text-sm text-slate-500">{course.enrollments_count} students | {course.lessons_count} lessons | {course.quizzes_count} quizzes</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-lg border bg-white p-2"><Edit className="h-4 w-4" /></button>
                <button className="rounded-lg border bg-white p-2"><ClipboardList className="h-4 w-4" /></button>
                <button className="rounded-lg border bg-white p-2 text-rose-600"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminDashboard({ data }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Stat icon={Users} label="Total Users" value={data.stats.users} />
        <Stat icon={BookOpen} label="Courses" value={data.stats.courses} />
        <Stat icon={GraduationCap} label="Enrollments" value={data.stats.enrollments} />
        <Stat icon={BarChart3} label="Quiz Attempts" value={data.stats.quizAttempts} />
      </div>
      <section className="rounded-lg border border-white/70 bg-white/80">
        <div className="border-b border-slate-100 p-4 font-bold text-slate-950">User Management</div>
        {data.users.map((user) => (
          <div key={user.id} className="grid grid-cols-3 gap-3 border-b border-slate-100 p-4 text-sm last:border-0">
            <span className="font-semibold">{user.name}</span>
            <span className="text-slate-500">{user.email}</span>
            <span className="font-bold text-sky-600">{user.role}</span>
          </div>
        ))}
      </section>
      <section className="rounded-lg border border-white/70 bg-white/80">
        <div className="border-b border-slate-100 p-4 font-bold text-slate-950">Course Management</div>
        {data.courses.map((course) => (
          <div key={course.id} className="grid grid-cols-4 gap-3 border-b border-slate-100 p-4 text-sm last:border-0">
            <span className="font-semibold">{course.title}</span>
            <span>{course.category}</span>
            <span>{course.owner?.name || course.instructor}</span>
            <span>{course.enrollments_count} enrollments</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default function Dashboard({ requiredRole }) {
  const [, setLocation] = useLocation();
  const session = getSession();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      const role = requiredRole || session?.user?.role;
      if (!session?.token || !role) {
        setLocation("/login");
        return;
      }
      if (requiredRole && session.user.role !== requiredRole) {
        setLocation(dashboardPath(session.user.role));
        return;
      }
      setData(await apiFetch(`/${role.toLowerCase()}/dashboard`));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    load();
  }, [requiredRole]);

  if (error) return <div className="p-10 text-rose-600">{error}</div>;
  if (!data) return <div className="p-10 text-slate-600">Loading dashboard...</div>;

  const user = data.user || session.user;
  const copy = roleCopy[user.role];

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <DashboardShell user={user} title={copy.title} nav={copy.nav}>
        {user.role === "Student" && <StudentDashboard data={data} reload={load} />}
        {user.role === "Instructor" && <InstructorDashboard data={data} />}
        {user.role === "Admin" && <AdminDashboard data={data} />}
      </DashboardShell>
    </motion.div>
  );
}
