import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Router from "./routes/router";

function App() {
  return <div className="App">
    <Header/>
    <Router/>
  </div>;
}

export default App;
