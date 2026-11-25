import { useCallback, useState } from "react";
import { AnimatedBackground } from "./pages/AnimatedBackground";
import { Header } from "./pages/Header";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { LoadingIntro } from "./components/LoadingIntro/LoadingIntro";
import "./App.css";

export const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && <LoadingIntro onComplete={handleIntroComplete} />}
      <AnimatedBackground />
      <div className={`context ${showIntro ? "context--loading" : ""}`}>
        <Header />
        <Profile />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};
