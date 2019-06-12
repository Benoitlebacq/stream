import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamList from "./Streams/StreamList";
import StreamDelete from "./Streams/StreamDelete";
import StreamShow from "./Streams/StreamShow";
import StreamEdit from "./Streams/StreamEdit";
import "semantic-ui-css/semantic.min.css";
import Header from "./Header";

const App = () => {
  return (
    <div className=" ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
