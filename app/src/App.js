import './App.css';
import {  Route } from "react-router-dom";

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import Home from './components/Home';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      
        <Header />
        <Nav />
        <main className="container py-3" style={{ backgroundColor: "#dbbd8b", minHeight: 600 }}>
          <Route exact path="/" component={Home} />

          <Route path="/menu" component={Menu} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
          <Route path="/map" component={Map} />

        </main>
        <Footer />
    </div>
  );
}

export default App;
