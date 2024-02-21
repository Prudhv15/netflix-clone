import "./App.css";
import Header from "./components/Header";
import Cardd from "./components/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/now" element={<Cardd />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
