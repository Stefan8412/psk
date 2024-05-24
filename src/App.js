import Search from "./components/Search";
import initialDetails from "./data/initialDetails";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="tc bg-white ma0 pa4 min-vh-100">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/search" element={<Search details={initialDetails} />} />
      </Routes>
    </div>
  );
}

export default App;
