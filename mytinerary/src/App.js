
import NavBar from './components/NavBar.js';
import bg from './assets/Background.png';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import GetStarted from './components/GetStarted.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dates from './components/Dates';
import Interests from './components/Interests';
import Busy from './components/Busy';
import Download from './components/Download';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component = {Home}></Route>
          <Route exact path="/AboutUs" component={AboutUs}></Route>
          <Route exact path="/GetStarted" component={GetStarted}></Route>
          <Route exact path="/Dates" component={Dates}></Route>
          <Route exact path="/Interests" component={Interests}></Route>
          <Route exact path="/Busy" component={Busy}></Route>
          <Route exact path="/Download" component={Download}></Route>
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;