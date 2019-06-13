import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamList from "./Streams/StreamList";
import StreamDelete from "./Streams/StreamDelete";
import StreamShow from "./Streams/StreamShow";
import StreamEdit from "./Streams/StreamEdit";
import "semantic-ui-css/semantic.min.css";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className=" ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={StreamList} />
            <Route path ="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/:id(\d+)" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
