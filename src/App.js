import './App.css';
import { useEffect, useState } from 'react';
import NavigationBar from "./components/NavigationBar";
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectSection'
import ContactMe from './components/ContactMe';
import Loader from './components/Loader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, []);
  
  return (
   <div>
    {loading ? <Loader /> : 
    
      <div>
          <NavigationBar />
          <LandingSection />
          <ProjectSection />
          <ContactMe />
      </div>
    
  }
   </div>
  )

}

export default App;
