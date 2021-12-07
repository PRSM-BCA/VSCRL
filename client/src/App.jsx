import React from 'react'
import { AuthProvider } from "./contexts/AuthContext"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './components/landing/Landing';
import Dashboard from './components/dashboard/Dashboard'
import KeyWordAnswer from './components/questions/KeyWordAnswer';
import LongAnswer from './components/questions/LongAnswer';
import MultipleChoice from './components/questions/MultipleChoice';
import RankingAnswer from './components/questions/RankingAnswer';
import ScaleAnswer from './components/questions/ScaleAnswer';
import SelectImg from './components/questions/SelectImg';
import ShortAnswer from './components/questions/ShortAnswer';

export default function App() {
    return (
    
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/KeyWordAnswer" element={<KeyWordAnswer />} />
                    <Route path="/LongAnswer" element={<LongAnswer />} />
                    <Route path="/MultipleChoice" element={<MultipleChoice />} />
                    <Route path="/RankingAnswer" element={<RankingAnswer />} />
                    <Route path="/ScaleAnswer" element={<ScaleAnswer />} />
                    <Route path="/SelectImg" element={<SelectImg />} />
                    <Route path="/ShortAnswer" element={<ShortAnswer />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}
