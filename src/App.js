import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation"

function App(){
  return <BrowserRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" exact={true} component={About} />
    <Route path="/movie/:id" component={Detail} />
  </BrowserRouter> 
}

export default App;