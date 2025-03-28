import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/preparo" element={<Preparo />} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
