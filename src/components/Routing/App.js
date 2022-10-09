import './App.css';
//import Users from "./fetching/Users";
//import Axios from './fetching/Axios';
import Users from './components/Routing/Users';
import Home from './components/Routing/Home';
import About from './components/Routing/About';
import User from './components/Routing/User';
//import User from './components/Routing/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/users' component={Users} />
          <Route path='/user/:id' component={User} />
           {/* <Route path='/about'>
            <About/>
          </Route>
          <Route path='/users'>
            <Users/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route> */}
        </Switch>


      </div>
    </Router>
  );
}
// function Home(){
//   return <h2>Home</h2>
// }
// function About(){
//   return <h2>About</h2>
// }
// function Users(){
//   return <h2>Users</h2>
// }
export default App;