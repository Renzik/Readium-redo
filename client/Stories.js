import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Stories = props => {
  const stories = props.stories;
  return (
    <div id="stories" className="column">
      {stories.map(story => (
        <div className="story" key={story.id}>
          <NavLink to={`/stories/${story.id}`}>
            <h3>{story.title}</h3>
          </NavLink>
          {/* pending setup link from author name to author page */}
          <p>{story.author.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Stories;
