import React from 'react';
import Navbar from './Navbar';
import Login from './login';
import './App.css';
import About from './about';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home" style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Welcome to MyApp</h1>
      </div>
      <div id="about" style={{ padding: '50px', textAlign: 'center' }}>
        <About/>
      </div>
      <div id="contact" style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <p>This is the Contact section.</p>
      </div>
      <div id="login" style={{ padding: '50px', textAlign: 'center' }}>
        <Login />
      </div>
    </div>
  );
}

export default App;
