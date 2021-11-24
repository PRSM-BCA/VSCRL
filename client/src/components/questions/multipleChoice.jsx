import './Question.scss'
import { Link } from 'react-router-dom'

function MultipleChoice(props) {
    return (
    
    <div className="MultipleChoice">
        <h1>Multiple Choice</h1>

        <div id="choices">
            <button>Answer 1</button>
            <button>Answer 2</button>
            <button>Answer 3</button>
            <button>Answer 4</button>
        </div>
        
        <Link to='/RankingAnswer'>Next Question</Link>
    </div>)
}

export default MultipleChoice