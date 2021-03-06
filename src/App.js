import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import WorkDetail from './components/WorkDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const address = "/about"
switch(address) {
  case '/home':
    // Home page dekhate hobe
    break;
  case '/about':
    // About page dekhate hobe
    break;
  case '/works':
      // Works page dekhate hobe
    break;
  case '/contact':
      // Contact page dekhate hobe
    break;
  default: 
    // 404
  
}
function App() {
  return (
    <>
    <Router>
      <Header />

      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/works">
          <Works />
        </Route>
        <Route  path="/work/:name">
          <WorkDetail />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="*">
          <h1>404 Not found!</h1>
        </Route>
        
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
