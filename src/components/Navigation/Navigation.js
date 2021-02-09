import '../../App.css';
import './Navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Home from '../../pages/Home/Home'
import logo from '../../logo.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navigation() {
  return (
  <Router>
    <Navbar collapseOnSelect expand="lg">
      <div className="container">
        <Navbar.Brand href="#home"><img src={logo}></img>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link><Link className="nav-links" to="/">Home</Link></Nav.Link>
            <Nav.Link><Link className="nav-links" to="/bewirtschafter">Bewirtschafter</Link></Nav.Link>
            <Nav.Link><Link className="nav-links" to="/mieter">Mieter</Link></Nav.Link>
            <Nav.Link><Link className="nav-links" to="/uberuns">Über uns</Link></Nav.Link>
            <Button variant="primary">Login</Button>
            
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    
    
    <Switch>
      <Route path="/bewirtschafter">
        <h1>asd</h1>
      </Route>
      <Route path="/mieter">
        <h1>asd</h1>
      </Route>
      <Route path="/uberuns">
        <h1>aadsasd</h1>
      </Route>
      <Route exact path="/">
        <h1><Home/></h1>
      </Route>
    </Switch>
    
  </Router>
  );
}
export default Navigation;