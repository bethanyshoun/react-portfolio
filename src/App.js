import React, { useState } from 'react';
import './App.css';
//import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {name: 'About' },
    { name: 'ContactForm' },
    { name: 'Portfolio' },
    { name: 'Resume' },
  ]); 

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      {/* <Header /> */}
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
        <ContactForm></ContactForm>
        )}
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
