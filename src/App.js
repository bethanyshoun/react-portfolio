import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header name="Hello" />

      <main>
        <About />
        <Contact></Contact>
        <Portfolio></Portfolio>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
