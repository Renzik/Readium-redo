import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Stories = props => {
  console.log(props);
  const stories = props.stories;
  return (
    <div id="stories" className="column">
      {stories.map(story => (
        <div className="story" key={story.id}>
          <NavLink to={`/stories/${story.id}`}>
            <h3>{story.title}</h3>
          </NavLink>
          <NavLink to={`authors/${story.author.id}`}>
            <p>{story.author.name}</p>
          </NavLink>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Stories;
