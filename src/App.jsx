const _jsxFileName = "src\\App.tsx";import React from "react";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import GlobalBackground from "@/components/GlobalBackground";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import CoursesPage from "@/pages/CoursesPage";
import QuizzesPage from "@/pages/QuizzesPage";
import ProgressPage from "@/pages/ProgressPage";
import Enroll from "@/pages/Enroll";
import Dashboard from "@/pages/Dashboard";

const queryClient = new QueryClient();

function Router() {
  return (
    React.createElement(React.Fragment, null
      , React.createElement(GlobalBackground, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 20}} )
      , React.createElement(Navbar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 21}} )
      /* Main content offset by sidebar width */
      , React.createElement('div', { className: "relative z-10 pl-[88px]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
        , React.createElement(Switch, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}
          , React.createElement(Route, { path: "/", __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}, React.createElement(Home, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}))
          , React.createElement(Route, { path: "/login", __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}, React.createElement(Login, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}))
          , React.createElement(Route, { path: "/register", __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}, React.createElement(Register, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}))
          , React.createElement(Route, { path: "/courses", __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}, React.createElement(CoursesPage, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}))
          , React.createElement(Route, { path: "/quizzes", __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}, React.createElement(QuizzesPage, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}))
          , React.createElement(Route, { path: "/progress", __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, React.createElement(ProgressPage, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}))
          , React.createElement(Route, { path: "/enroll/:id", __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}, React.createElement(Enroll, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}))
          , React.createElement(Route, { path: "/student/dashboard" }, React.createElement(Dashboard, { requiredRole: "Student" }))
          , React.createElement(Route, { path: "/instructor/dashboard" }, React.createElement(Dashboard, { requiredRole: "Instructor" }))
          , React.createElement(Route, { path: "/admin/dashboard" }, React.createElement(Dashboard, { requiredRole: "Admin" }))
          , React.createElement(Route, { __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}, React.createElement(NotFound, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}))
        )
      )
    )
  );
}

function App() {
  return (
    React.createElement(QueryClientProvider, { client: queryClient, __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
      , React.createElement(TooltipProvider, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
        , React.createElement(WouterRouter, { base: import.meta.env.BASE_URL.replace(/\/$/, ""), __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}
          , React.createElement(Router, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 43}} )
        )
        , React.createElement(Toaster, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 45}} )
      )
    )
  );
}

export default App;
