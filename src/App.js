import './App.css';
import { useEffect, useState } from 'react';
import NavigationBar from "./components/NavigationBar";
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectSection'
import ContactMe from './components/ContactMe';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, []);
  
  return (
   <div>
    {loading ? <ContactMe /> : 
    
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
