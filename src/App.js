import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { ProfilePage } from "./components/profilePage";
import { Home } from "./pages/Home";
import { MyProfile } from "./pages/MyProfile";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/" element={<MyProfile />} />
          <Route path="/profile/:name" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
