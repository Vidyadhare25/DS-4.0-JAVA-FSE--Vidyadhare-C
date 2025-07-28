import './Stylesheets/mystyle.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore 
        Name="Vidyadhare C" 
        School="PES College of Engineering, Mandya" 
        total={284} 
        goal={300} 
      />
    </div>
  );
}

export default App;
