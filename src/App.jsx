import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Accomplishments from "./pages/Accomplishments.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/accomplishments" element={<Accomplishments />} />
      </Routes>
    </Router>
  );
}

export default App;
