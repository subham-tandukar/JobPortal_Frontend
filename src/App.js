import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import JobSingle from "./Components/Pages/Jobs/JobSingle";
import JobList from "./Components/Pages/Jobs/JobList";
import ScrollToTop from "./Components/ScrollToTop";
import BlogList from "./Components/Pages/Blogs/BlogList";
import BlogSingle from "./Components/Pages/Blogs/BlogSingle";
import Login from "./Components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { appliedList, userInfo } from "./Redux/Auth/authApi";
import Toast from "./Components/Modules/Toast";
import Register from "./Components/Register/Register";

function App() {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      dispatch(userInfo(currentUser.Token));
      dispatch(appliedList(currentUser.Token));
    }
  }, [currentUser]);
  return (
    <>
      <Toast />
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" index={true} element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:slug" element={<JobSingle />} />

        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<BlogSingle />} />

        {/* Login */}
        {!currentUser && <Route path="/login" element={<Login />} />}

        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
