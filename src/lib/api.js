export const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";

export function getSession() {
  const raw = localStorage.getItem("lmsSession") || sessionStorage.getItem("lmsSession");
  return raw ? JSON.parse(raw) : null;
}

export function saveSession(session, remember = true) {
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem("lmsSession", JSON.stringify(session));
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");
}

export function clearSession() {
  localStorage.removeItem("lmsSession");
  sessionStorage.removeItem("lmsSession");
}

export function dashboardPath(role) {
  if (role === "Admin") return "/admin/dashboard";
  if (role === "Instructor") return "/instructor/dashboard";
  return "/student/dashboard";
}

export async function apiFetch(path, options = {}) {
  const session = getSession();
  const headers = {
    Accept: "application/json",
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...(session?.token ? { Authorization: `Bearer ${session.token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.message || "Request failed");
  }

  return data;
}
