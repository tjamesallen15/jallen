import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "./components/Dashboard.tsx";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import StairTransition from "./components/transition/StairTransition";
import PageTransition from "./components/transition/PageTransition";
import { initializeIconProvider } from "../../shared/common/icon-react";

initializeIconProvider();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StairTransition />
    <Header />
    <PageTransition>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </PageTransition>
    <Footer />
  </StrictMode>
);
