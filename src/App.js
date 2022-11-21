import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'

//for carousel.min.css
//App.use(Home.static('public'));
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <div className="App" style={{backgroundColor: 'lightblue'}}>
          
          <Navbar />
          <Routes >
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          
        
        </div>
      </BrowserRouter>
      //

    );
  }
}
//
export default App;
