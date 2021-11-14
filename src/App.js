import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single"
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const user = false;
  return (
    
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register/*" element={user? <Home /> : <Register />} />
        <Route path="login/*" element={user? <Home /> : <Login />} />
        <Route path="settings/*" element={user? <Settings /> : <Login />} />
        <Route path="write/*" element={user? <Write /> : <Login />} />
        <Route path="post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
