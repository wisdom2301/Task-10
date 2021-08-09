import './App.css';
import './App Component/First.css';
import { Switch, Route, NavLink } from "react-router-dom";
import About from './Pages/About'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Login from './Pages/Login';



function App() {
  return (
    <div className="App">
      <div className="header">

             <NavLink to="/" activeClassName="selected">Home</NavLink>

            <NavLink to= "/about" activeClassName="selected">About</NavLink>

            <NavLink to="/contact" activeClassName="selected">Contact</NavLink>

            <NavLink to="/login" activeClassName="selected">Login</NavLink>
    
        
      </div>
       
<Switch>
<Route path="/about">
  <About />
</Route>
<Route path="/contact">
  <Contact />
</Route>
<Route path="/">
  <Home />
  </Route>
<Route path="/login">
  <Login />
  </Route>
</Switch>
<br></br>


<br />

    </div>
  );
}

export default App;
