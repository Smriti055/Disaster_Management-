// src/components/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Resources from './Components/Resources';
import HeroSection from './Components/HeroSection';
import DisasterCardsSection from './Components/DisasterCardsSection';
import Footer from './Components/Footer';
import About from './Components/About';
import Weather from './Components/Weather';
import Safety from './Components/Safety';
import Cyclone from './Components/Cyclone';
import News from './Components/News';
import Flood from './Components/Flood';
import Landslide from './Components/Landslide';
import Earthquake from './Components/Earthquake';
import Contact from './Components/Contact';
// import WeatherMap from './Components/WeatherMap';
// import LatestNews from './Components/LatestNews';
// import Crowdsource from './Components/Crowdsource';
// import SignUp from './SignUp';
// import Login from './Login';

// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const { isAuthenticated } = useAuth();
//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
//     />
//   );
// };

function App() {
  return (
    <Router>
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
        <Navbar />
        <Routes>
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<><Hero /><HeroSection /><News /><DisasterCardsSection /><Footer /></>} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emergency-tips/cyclone" element={<Cyclone />} />
          <Route path="/emergency-tips/landslide" element={<Landslide />} />
          <Route path="/emergency-tips/earthquake" element={<Earthquake />} />
           <Route path="/emergency-tips/flood" element={<Flood />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
