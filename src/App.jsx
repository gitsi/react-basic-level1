import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import WeatherAPP from './Pages/WeatherApp.jsx';
import PasswordValidator from './Pages/PasswordValidator.jsx';
import QuizApp from './Pages/QuizApp.jsx';
import SubmissionForm from './Pages/SubmissionForm.jsx';
import TestConverter from './Pages/TestConverter.jsx';
import UserList from './UserList.jsx';

function App() {

  const [users, setUsers] = useState([
    { id: 1, name: "Siva", role: "Fullstack Dev" },
    { id: 2, name: "Arun", role: "Frontend Dev" },
    { id: 3, name: "Kumar", role: "Backend Dev" }
  ]);

  function promoteUser(id) {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, role: "Senior Developer" }  : user
    );

    setUsers(updatedUsers);
  }

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

      <div style={{ padding: 20 }}>
        <h1>User Management</h1>

        {/* Passing props */}
        <UserList users={users} promoteUser={promoteUser} />
      </div>
    </>
  )
}

export default App
