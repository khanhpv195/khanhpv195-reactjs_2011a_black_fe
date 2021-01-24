import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import RoomMap from './pages/RoomMap';
import Booking from './pages/Booking';
import ListBooking from './pages/ListBooking';
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/search/:keyword/:id">
          <Search />
        </Route>
        <Route path="/room_map">
          <RoomMap />
        </Route>
        <Route path="/room_map/:id">
          <RoomMap />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/list-booking">
          <ListBooking />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
