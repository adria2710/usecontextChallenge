import React from 'react';
import { ThemeProvider, useTheme } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';

const AppWrapper = () => {
  const { theme } = useTheme();

  return (
    <section className={`App ${theme}`}>
      <div className="content">
        <RoutesApp />
      </div>
    </section>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
};

export default App;