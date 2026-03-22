import { AnimatedBackground } from "./pages/AnimatedBackground";
import { Header } from "./pages/Header";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import "./App.css";

export const App = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="context">
        <Header />
        <Profile />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};
