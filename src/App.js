import logo from './logo.svg';
import './App.css';
import Home from './home';
import Courses from './courses';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Instructors from './Instructors';
import Events from './Events';
import Blogs from './blogs';
import Contact from './contact';
import Form from './component/form';
import Add from './component/Add';
import Table from './component/table';
import End from './component/end ';
import Prov1 from './component/prov1';
import Muni from './component/muni';

function App() {
  return (
    <div className="w-full">
      {/* <Router>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/courses' exact element={<Courses/>}></Route>
          <Route path='/Instructors' exact element={<Instructors/>}></Route>
          <Route path='#' exact element={<Events/>}></Route>
          <Route path='/Blogs' exact element={<Blogs/>}></Route>
          <Route path='/Contact' exact element={<Contact/>}></Route>
          
        </Routes>
      </Router> */}
      {/* .................................................................................................... */}
      {/* <Form/> */}
      <Router>
        <Routes>
          <Route path='table' exact element={<Table/>}></Route>
          <Route path='/' exact element={<Add/>}></Route>
          <Route path='/:id' exact element={<Prov1/>}></Route>
          <Route path='/dis/:bd' exact element={<Muni/>}></Route>
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
