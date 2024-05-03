// App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AdoptionSection from './AdoptionSection';
import GiveAwaySection from './GiveAwaySection';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <AdoptionSection />
        <GiveAwaySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
