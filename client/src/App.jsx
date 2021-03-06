import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import KeyWordAnswer from "./components/questions/KeyWordAnswer";
import LongAnswer from "./components/questions/LongAnswer";
import MultipleChoice from "./components/questions/MultipleChoice";
import RankingAnswer from "./components/questions/RankingAnswer";
import ScaleAnswer from "./components/questions/ScaleAnswer";
import SelectImg from "./components/questions/SelectImg";
import ShortAnswer from "./components/questions/ShortAnswer";
import Profile from "./components/profilePage/Profile";
import Mockbrand from "./components/brandPage/Mockbrand";
import BarChartDisplay from "./components/chart/BarChartDisplay";

export default function App() {
  const [surveySubmitted, setSurveySubmitted] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              surveySubmitted={surveySubmitted}
              setSurveySubmitted={setSurveySubmitted}
            />
          }
        />
        <Route
          path="/Dashboard"
          element={
            <Dashboard
              surveySubmitted={surveySubmitted}
              setSurveySubmitted={setSurveySubmitted}
            />
          }
        />
        <Route path="/KeyWordAnswer" element={<KeyWordAnswer />} />
        <Route path="/LongAnswer" element={<LongAnswer />} />
        <Route path="/MultipleChoice" element={<MultipleChoice />} />
        <Route path="/RankingAnswer" element={<RankingAnswer />} />
        <Route path="/ScaleAnswer" element={<ScaleAnswer />} />
        <Route path="/SelectImg" element={<SelectImg />} />
        <Route path="/ShortAnswer" element={<ShortAnswer />} />
        <Route
          path="/profile"
          element={
            <Profile
              surveySubmitted={surveySubmitted}
              setSurveySubmitted={setSurveySubmitted}
            />
          }
        />
        <Route
          path="/mockBrand"
          element={
            <Mockbrand
              surveySubmitted={surveySubmitted}
              setSurveySubmitted={setSurveySubmitted}
            />
          }
        />
        <Route path="/BarChartDisplay" element={<BarChartDisplay />} />
      </Routes>
    </Router>
  );
}
