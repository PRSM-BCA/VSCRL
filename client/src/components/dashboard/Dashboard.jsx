import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
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
    )
}
