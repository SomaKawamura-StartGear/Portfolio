import { AnimatedBackground } from "./components/AnimatedBackground";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
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
