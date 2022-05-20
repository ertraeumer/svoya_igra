import {useState} from 'react'
import { Button } from './components/Button/Button';
import { Question } from './components/Question/Question';
import { Themes } from './components/Themes/Themes';
import './styles/App.css'

function App() {
  const [partGame, setPartGame] = useState(1)
  switch (partGame) {
    case 1:
      return (
        <div className='mainScreen'>
        <Button/>
        </div>
      );
    case 2:
      return (
        <div className='themes'>
        <Themes/>
        </div>
      );  
    case 3:
      return (
        <div>
        <Question/>
        </div>
      );
    default:
      break;
  }
  
}

export default App;
