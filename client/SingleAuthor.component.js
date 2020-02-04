import React, { Component } from "react";
import axios from "axios";
import Comments from "./Comments.component";
import Stories from "./Stories";
import { NavLink, Route } from "react-router-dom";

export default class SingleAuthor extends Component {
  constructor() {
    super();
    this.state = {
      author: {
        id: 1,
        name: "Cody",
        bio: "bio",
        imageUrl: "cody.jpg"
      },

      stories: [
        {
          id: 1,
          title: "A bone to pick with jQuery",
          author: {
            id: 1,
            name: "Cody",
            bio: "A friendly pug",
            imageUrl: "cody.jpg",
            createdAt: "2020-02-03T16:47:24.537Z",
            updatedAt: "2020-02-03T16:47:24.537Z"
          }
        },
        {
          id: 2,
          title: "How to React (to treats!)",
          author: {
            id: 1,
            name: "Cody",
            bio: "A friendly pug",
            imageUrl: "cody.jpg",
            createdAt: "2020-02-03T16:47:24.537Z",
            updatedAt: "2020-02-03T16:47:24.537Z"
          }
        }
      ],
      comments: [
        {
          id: 4,
          content: "I love this article as much as I love treats",
          createdAt: "2020-02-03T16:47:24.594Z",
          updatedAt: "2020-02-03T16:47:24.594Z",
          authorId: 1,
          storyId: 3,
          author: {
            id: 1,
            name: "Cody",
            bio: "A friendly pug",
            imageUrl: "cody.jpg",
            createdAt: "2020-02-03T16:47:24.537Z",
            updatedAt: "2020-02-03T16:47:24.537Z"
          }
        },
        {
          id: 5,
          content: "Angular's really in the doghouse!",
          createdAt: "2020-02-03T16:47:24.598Z",
          updatedAt: "2020-02-03T16:47:24.598Z",
          authorId: 1,
          storyId: 4,
          author: {
            id: 1,
            name: "Cody",
            bio: "A friendly pug",
            imageUrl: "cody.jpg",
            createdAt: "2020-02-03T16:47:24.537Z",
            updatedAt: "2020-02-03T16:47:24.537Z"
          }
        }
      ]
    };
  }

  async componentDidMount() {
    const authorId = this.props.match.params.authorId;
    const author = await axios.get(`/api/authors/${authorId}`);
    const comments = await axios.get(`/api/authors/${authorId}/comments`);
    const stories = await axios.get(`/api/authors/${authorId}/stories`);
    this.setState({
      comments: comments.data,
      stories: stories.data,
      author: author.data
    });
  }

  render() {
    const author = this.state.author;
    const stories = this.state.stories;
    const comments = this.state.comments;
    return (
      <div id="single-author" className="column">
        <div id="single-author-detail" className="row">
          <div className="column mr1">
            <h1>{author.name}</h1>
            <p>{author.bio}</p>
          </div>
          <img src={author.imageUrl} />
        </div>
        <hr />
        <div id="single-author-nav">
          <NavLink
            to={`/authors/${author.id}/stories`}
            activeClassName="active"
          >
            Stories
          </NavLink>
          <NavLink
            to={`/authors/${author.id}/comments`}
            activeClassName="active"
          >
            Comments
          </NavLink>
        </div>

        <Route
          path="/authors/:authorId/stories"
          render={() => {
            return <Stories stories={stories} />;
          }}
        />

        <Route
          path="/authors/:authorId/comments"
          render={() => {
            return (
              <div id="comments">
                <Comments comments={comments} />
              </div>
            );
          }}
        />
      </div>
    );
  }
}
