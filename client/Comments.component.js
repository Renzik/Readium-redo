import React from "react";

const Comments = props => {
  console.log(props);
  const comments = props.comments;
  return (
    <div>
      {comments.map(comment => {
        return (
          <div key={comment.id} className="comment row">
            <img src={comment.author.imageUrl} />
            <div className="column">
              <a>
                <h5>{comment.author.name}</h5>
              </a>
              <div>{comment.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
