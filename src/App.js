import { Route } from "wouter";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Actors from "./pages/actors/Actors";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MyPage from "./pages/myPage/MyPage";
import "./styles/output.css";
import ActorDetails from "./pages/actors/ActorDetails";
import EventDetails from "./pages/events/EventDetails";
import BuyTicket from "./pages/buyTicket/BuyTicket";

function App() {

  return (
    <div className="App">
      <Nav/>
      <Route path="/" component={Home}/>
      <Route path="/events" component={Events}/>
      <Route path="/actors" component={Actors}/>
      <Route path="/login" component={Login}/>
      <Route path="/myPage" component={MyPage}/>
      <Route path="/actors/:id">
        {(params) =>{
          return <ActorDetails id={params.id}/>
        }}
      </Route>
      <Route path="/events/:id">
        {(params) =>{
          return <EventDetails id={params.id}/>
        }}
      </Route>
      <Route path="/tickets/:id">
        {(params) =>{
          return <BuyTicket id={params.id}/>
        }}
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
