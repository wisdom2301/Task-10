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
      <nav className="nav-header">

             <NavLink to="/" activeClassName="selected-hover" className="selected" >Home</NavLink>

            <NavLink to= "/about" className="selected" activeClassName="selected-hover">About</NavLink>

            <NavLink to="/contact" className="selected" activeClassName="selected-hover">Contact</NavLink>

            <NavLink to="/login" className="selected" activeClassName="selected-hover">Login</NavLink>
        
      </nav>
       
<Switch>

<Route path="/about">
  <About />
</Route>
<Route path="/contact">
  <Contact />
</Route>
<Route path="/login">
  <Login />
</Route>
<Route path="/">
  <Home />
  </Route>
</Switch>
<br></br>


<br />

    </div>
  );
}

export default App;
