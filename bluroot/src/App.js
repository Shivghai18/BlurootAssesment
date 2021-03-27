
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Q1 from './components/Q1';
import Q2 from './components/Q2';

function App() {
  return(
    <Router>
      
      <Navbar/>

       <Switch>

       <Route path='/' exact><Home/></Route>
       
       <Route path='/Q1' exact><Q1/></Route>
       
       <Route path='/Q2' exact><Q2/></Route>
       </Switch>
    </Router>
  )
}

export default App;
