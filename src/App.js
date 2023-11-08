import "./App.css";
import Celebration from "./Celebration";
import Eighth from "./Eighth";
import Fifth from "./Fifth";
import First from "./First";
import Fourth from "./Fourth";
import Landing from "./Landing";
import Search from "./Search";
import Second from "./Second";
import Seventh from "./Seventh";
import Sixth from "./Sixth";
import Third from "./Third";
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
          <Route path="/third" element={<Third />} />
          <Route path="/fourth" element={<Fourth />} />
          <Route path="/fifth" element={<Fifth />} />
          <Route path="/sixth" element={<Sixth />} />
          <Route path="/seventh" element={<Seventh />} />
          <Route path="/eighth" element={<Eighth />} />
          <Route path="/celebration" element={<Celebration />} />
        </Routes>
      </Router>

      {/* <Landing /> */}
      {/* <Search /> */}
      {/* <First /> */}
      {/* <Second /> */}
      {/* <Third /> */}
      {/* <Fourth /> */}
      {/* <Fifth /> */}
      {/* <Sixth /> */}
      {/* <Eighth /> */}
      {/* <Seventh /> */}
      {/* <Celebration /> */}
    </div>
  );
}

export default App;
