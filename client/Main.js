import React from "react";
import Navbar from "./Navbar";
import AllStories from "./AllStories.component";
import { HashRouter, Route } from "react-router-dom";
import SingleStory from "./SingleStory.component";
import Authors from "./Authors.component";
import SingleAuthor from "./SingleAuthor.component";

export default class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div id="main">
          <div className="column container">
            <div id="header">
              <h1>Readium</h1>
            </div>
            <Navbar />
          </div>
          <Route path="/authors/:authorId" component={SingleAuthor} />
          <Route exact path="/authors" component={Authors} />
          <Route path="/stories/:storyId" component={SingleStory} />
          <Route exact path="/stories" component={AllStories} />
          <Route exact path="/" component={AllStories} />
        </div>
      </HashRouter>
    );
  }
}
