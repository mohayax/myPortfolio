import './App.css';
import { useEffect, useState } from 'react';
import NavigationBar from "./components/NavigationBar";
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectSection'
import ContactMe from './components/ContactMe';
import Loader from './components/Loader';
import Footer from './components/Footer';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1700)
  }, []);
  
  return (
   <div>
    {loading ? <Loader /> : 
    
      <div>
          <NavigationBar />
          <LandingSection />
          <ProjectSection />
          <ContactMe />
          <Footer />
      </div>
    
  }
   </div>
  )

}

export default App;
