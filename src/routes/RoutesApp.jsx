import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "../themes/ThemeContext";
import Button from "../components/Button";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob";

const RoutesApp = () => {
  const { theme } = useTheme();

  return (
    <section className={`App ${theme}`}>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/myjob"}>My_Job</Link>
      </nav>
      <main>
        <Button />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myjob" element={<MyJob />} />
        </Routes>
      </main>
    </section>
  );
};

export default RoutesApp;
