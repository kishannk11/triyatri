import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'
import AutoList from '../components/auto-list'

function Homepage() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/auto-list" element={<AutoList />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Homepage