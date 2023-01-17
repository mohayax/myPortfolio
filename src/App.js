import './App.css';
import NavigationBar from "./components/NavigationBar";
import { FaBeer } from 'react-icons/fa';

function App() {
  return (
   <div>
    <NavigationBar />
      <FaBeer style={{color: 'red'}}/>
   </div>
  )

}

export default App;
