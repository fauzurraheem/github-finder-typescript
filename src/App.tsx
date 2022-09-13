import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Alert from './components/layouts/Alert';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import User from './pages/User';
import {GithubContextProvider } from './components/context/github/GithubContext'
import { AlertContextProvider } from './components/context/alert/AlertContext';



function App() {
  return (
  <GithubContextProvider>
    <AlertContextProvider>
       <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:loginName' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
    </AlertContextProvider>
   
  </GithubContextProvider>
       
   
  );
}

export default App;
