import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import WeatherAPP from './Pages/WeatherApp.jsx';
import PasswordValidator from './Pages/PasswordValidator.jsx';
import QuizApp from './Pages/QuizApp.jsx';
import SubmissionForm from './Pages/SubmissionForm.jsx';
import TestConverter from './Pages/TestConverter.jsx';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<WeatherAPP />} />
          <Route path='/formsubmission' element={<SubmissionForm />}/>
          <Route path='/password' element={<PasswordValidator/>} />
          <Route path='/quiz' element={<QuizApp/>} />
          <Route path='/textconverter' element={<TestConverter/>} />
      </Routes>
    </>
  )
}

export default App
