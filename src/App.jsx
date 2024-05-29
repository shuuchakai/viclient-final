import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

import Signup from './pages/auth/Signup/Signup';
import Signin from './pages/auth/Signin/Signin';
import VerifyEmail from './pages/auth/VerifyEmail/VerifyEmail';
import Questionary from './pages/dashboard/Questionary/Questionary';
import Dashboard from './pages/dashboard/Dashboard/Dashboard';
import Tracking from './pages/dashboard/Tracking/Tracking';
import Workout from './pages/dashboard/Workout/Workout';
import Profile from './pages/dashboard/Profile/Profile';
import Diets from './pages/dashboard/Diets/Diets';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        <Route path="/questionary" element={<Questionary />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/diets" element={<Diets />} />

        <Route path="/admin/dashboard" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App