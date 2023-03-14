import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./features/Login/Login";
import Home from "./features/Home/Home";
import NotFoundPage from "./features/NotFoundPage/NotFoundPage";
import Register from "./features/Register/register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
