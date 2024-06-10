import CircularProgress from "@mui/material/CircularProgress";
import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ErrorBoundary from "../helpers/Errorboundary";
import HomePage from "./HomePage";
import AboutPage from './About';
// import SocialsPage from './Socials';
import IdeenBakPage from "./Ideabox";
import StartMokumMatchPage from './StartMokummatch';
import QuestionnairePage from './Questionnaire';
import TopThreePage from "./TopThree";
import { routes } from "./routes";

const SocialsPage = lazy(() => import('./Socials'));

const Pages = () => {

  const location = useLocation();

  useEffect(() =>{
    window.speechSynthesis.cancel();
  },[location]);

  return (
    <ErrorBoundary>
      <Routes>
        <Route
          index
          element={
            <HomePage />
          }
        />
        <Route
          path={routes.ABOUT}
          element={
            <Suspense
              fallback={
                <div>
                  <CircularProgress />
                </div>
              }
            >
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path={routes.SOCIALS}
          element={
            <Suspense
              fallback={
                <div>
                  <CircularProgress />
                </div>
              }
            >
              <SocialsPage />
            </Suspense>
          }
        />
        <Route
          path={routes.IDEENBAK}
          element={
            <Suspense
              fallback={
                <div>
                  <CircularProgress />
                </div>
              }
            >
              <IdeenBakPage />
            </Suspense>
          }
        />
        <Route
          path={routes.START_MOKUMMATCH}
          element={
            <Suspense
              fallback={
                <div>
                  <CircularProgress />
                </div>
              }
            >
              <StartMokumMatchPage />
            </Suspense>
          }
        />
        <Route
          path={routes.QUESTIONNAIRE}
          element={
            <Suspense
              fallback={
                <div>
                  <CircularProgress />
                </div>
              }
            >
              <QuestionnairePage />
            </Suspense>
          }
        />
        <Route
          path={routes.TOP_THREE}
          element={
            <Suspense
              fallback={
                <div>
                  <CircularProgress />
                </div>
              }
            >
              <TopThreePage />
            </Suspense>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
};

export default Pages;
