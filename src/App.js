import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {name: 'About' },
    { name: 'Contact' },
    { name: 'Portfolio' },
    { name: 'Resume' },
  ]); 

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      <main>
      {!contactSelected ? (
          <>
        
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        </>
        ) : (
          <Contact></Contact>
        )}
        
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
