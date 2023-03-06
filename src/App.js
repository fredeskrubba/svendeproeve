import { Route } from "wouter";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Actors from "./pages/Actors";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import "./styles/output.css";

function App() {

  return (
    <div className="App">
      <Nav/>
      <Route path="/home" component={Home}/>
      <Route path="/events" component={Events}/>
      <Route path="/actors" component={Actors}/>
      <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;
