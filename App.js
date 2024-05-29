import React, { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navigation from './Navigation';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <Navigation />;
};

export default App;
