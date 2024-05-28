import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header.js";
import Center from "./Center.js";
import Comment from "./Comment.js";

function App() {
  return (
    <div className="base">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Center />} />
          <Route path="/list" element={<Center />} />
          <Route path="/comment" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
