import React from "react";
import { NavLink } from "react-router-dom";

const Comments = props => {
  const comments = props.comments;
  return (
    <div>
      {comments.map(comment => {
        return (
          <div key={comment.id} className="comment row">
            <img src={comment.author.imageUrl} />
            <div className="column">
              <NavLink to={`/authors/${comment.author.id}`}>
                <h5>{comment.author.name}</h5>
              </NavLink>
              <div>{comment.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
