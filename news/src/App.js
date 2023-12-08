import NavBar from './Components/NavBar';
import NewsPage from './Components/NewsPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const country = "in";
  const pageSize = 15;
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<NewsPage key={"1"} country={country} category="general" pageSize={pageSize} />} />
          <Route exact path="business" element={<NewsPage key={"business"} country={country} category="business" pageSize={pageSize} />} />
          <Route exact path="entertainment" element={<NewsPage key={"entertainment"} country={country} category="entertainment" pageSize={pageSize} />} />
          <Route exact path="general" element={<NewsPage key={"general"} country={country} category="general" pageSize={pageSize} />} />
          <Route exact path="health" element={<NewsPage key={"health"} country={country} category="health" pageSize={pageSize} />} />
          <Route exact path="science" element={<NewsPage key={"science"} country={country} category="science" pageSize={pageSize} />} />
          <Route exact path="sports" element={<NewsPage key={"sports"} country={country} category="sports" pageSize={pageSize} />} />
          <Route exact path="technology" element={<NewsPage key={"technology"} country={country} category="technology" pageSize={pageSize} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
