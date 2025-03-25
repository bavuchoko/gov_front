import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import './style/App.css';
import Main from "./pages/Main";
import Layout from "./layout/Layout";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/"   element={<Layout />} >
            <Route index element={<Main />}/>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
