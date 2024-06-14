import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Projects from "./pages/Projects.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute.jsx";
import EditPost from "./pages/EditPost.jsx";
import PostPage from "./pages/PostPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Search from "./pages/Search.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />}></Route>
          <Route path="/edit-post/:postId" element={<EditPost />}></Route>
        </Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/post/:postSlug" element={<PostPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
