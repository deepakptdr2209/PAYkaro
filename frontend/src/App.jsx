
import {BrowserRouter, Route, Routes} from "react-router-dom"

import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import { Signup } from "./pages/SignUp"
import LandingPage from "./pages/Root"
function App() {
  return (
    <div className="overflow-x-hidden h-screen bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" >
      <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
      </Routes>
      </BrowserRouter>
    </div>
      
    
  )
}

export default App