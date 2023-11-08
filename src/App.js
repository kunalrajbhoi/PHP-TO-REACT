import React from 'react'
import Footer from './superComponents/footer/Footer'
import Header from './superComponents/header/Header'
import './App.css';
import HomeSection from './components/HomeSection';

function App() {
  return (
    <div>
      <Header />
       <HomeSection />
      <Footer />
    </div>
  )
}

export default App
