import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/landing/Landing';
import KeyWordAnswer from './components/questions/KeyWordAnswer';
import LongAnswer from './components/questions/LongAnswer';
import MultipleChoice from './components/questions/MultipleChoice';
import RankingAnswer from './components/questions/RankingAnswer';
import ScaleAnswer from './components/questions/ScaleAnswer';
import SelectImg from './components/questions/SelectImg';
import ShortAnswer from './components/questions/ShortAnswer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/KeyWordAnswer" element={<KeyWordAnswer />} />
        <Route path="/LongAnswer" element={<LongAnswer />} />
        <Route path="/MultipleChoice" element={<MultipleChoice />} />
        <Route path="/RankingAnswer" element={<RankingAnswer />} />
        <Route path="/ScaleAnswer" element={<ScaleAnswer />} />
        <Route path="/SelectImg" element={<SelectImg />} />
        <Route path="/ShortAnswer" element={<ShortAnswer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
