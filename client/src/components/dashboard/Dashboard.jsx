import './Dashboard.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import { AuthProvider, useAuth } from "../../contexts/AuthContext"
import { useNavigate } from 'react-router-dom'


export default function Dashboard() {

    return (
        <AuthProvider>
            <div>
                <Header></Header>
                <h1>Dashboard!!</h1>
                <nav>
                    <Link to='/KeyWordAnswer'>KeyWordAnswer</Link>
                    <Link to='/LongAnswer'>LongAnswer</Link>
                    <Link to='/MultipleChoice'>MultipleChoice</Link>
                    <Link to='/RankingAnswer'>RankingAnswer</Link>
                    <Link to='/ScaleAnswer'>ScaleAnswer</Link>
                    <Link to='/SelectImg'>SelectImg</Link>
                    <Link to='/ShortAnswer'>ShortAnswer</Link>
                </nav>
            </div>
        </AuthProvider>
    )
}
