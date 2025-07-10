import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";
import Dashboard from "./components/Dashboard.tsx";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import StairTransition from "./components/transition/StairTransition";
import PageTransition from "./components/transition/PageTransition";
import titleSliceReducer from "./store/titleSlice.ts";

const store = configureStore({
  reducer: {
    title: titleSliceReducer,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
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
    </Provider>
  </StrictMode>
);
