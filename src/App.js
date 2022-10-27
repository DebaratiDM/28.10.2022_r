
import './App.css';
import Navbar from './component/Navbar';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './component/Home';
import AddUser from './component/AddUser';
import AllUser from './component/AllUser';

function App() {
  return (
    <div className="App">
      <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/alluser' element={<AllUser/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
