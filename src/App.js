import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import SignOrLog from './components/SignOrLog';
import RegistrationForm from './components/RegistrationForm';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import PetForm from './components/PetForm';
import FinalMessage from './components/FinalMessage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/sorl'element={<SignOrLog/>}></Route>
        <Route path='/AppB'element={<AppBar/>}></Route>
        <Route path='/regi'element={<RegistrationForm/>}></Route>
        <Route path='/cats'element={<Cats/>}></Route>
        < Route path='/dogs'element={<Dogs/>}></Route>
        < Route path='/petform'element={<PetForm/>}></Route>
        < Route path='/mess'element={<FinalMessage/>}></Route>
       
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
