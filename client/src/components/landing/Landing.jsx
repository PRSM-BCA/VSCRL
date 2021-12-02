import './Landing.scss';
import { Link } from 'react-router-dom'
import { AuthProvider } from '../../contexts/AuthContext';
import SignUp from '../SignUp/SignUp';

import LogIn from '../LogIn/LogIn';

function Landing() {
  // const [additionalPage, setAdditionalPage] = useState(false)
  return (
    <AuthProvider>
      <div className="Landing">
        <nav>
          <Link to='/KeyWordAnswer'>KeyWordAnswer</Link>
          <Link to='/LongAnswer'>LongAnswer</Link>
          <Link to='/MultipleChoice'>MultipleChoice</Link>
          <Link to='/RankingAnswer'>RankingAnswer</Link>
          <Link to='/ScaleAnswer'>ScaleAnswer</Link>
          <Link to='/SelectImg'>SelectImg</Link>
          <Link to='/ShortAnswer'>ShortAnswer</Link>
        </nav>
         <div>
        <SignUp></SignUp>
        <LogIn></LogIn>
        </div>
      </div>
    </AuthProvider>
  );
}

export default Landing;
