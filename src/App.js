import "./App.css";
import Celebration from "./Celebration";
import Fifth from "./Fifth";
import First from "./First";
import Fourth from "./Fourth";
import Landing from "./Landing";
import Search from "./Search";
import Second from "./Second";
import Seventh from "./Seventh";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<Search />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/fourth" element={<Fourth />} />
          <Route path="/fifth" element={<Fifth />} />
          <Route path="/seventh" element={<Seventh />} />
          <Route path="/celebration" element={<Celebration />} />
        </Routes>
      </Router>

      {/* <Landing /> */}
      {/* <Search /> */}
      {/* <First /> */}
      {/* <Second /> */}
      {/* <Fourth /> */}
      {/* <Fifth /> */}
      {/* <Seventh /> */}
      {/* <Celebration /> */}
    </div>
  );
}

export default App;
