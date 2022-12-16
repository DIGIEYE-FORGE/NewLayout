import logo from './logo.svg';
import './App.css';
import PermanentDrawerLeft from './Layout';
import { Routes, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Test from './Test';
import Test2 from './Test2';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<PermanentDrawerLeft />}>
        <Route path='/test' element={<Test/>}></Route>
        <Route path='/test2' element={<Test2 />}></Route>
      </Route>
    </Routes>
    </Router>
  );
}

export default App;
