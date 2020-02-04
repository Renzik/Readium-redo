import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default class Authors extends Component {
  constructor() {
    super();
    this.state = {
      authors: [
        {
          id: 1,
          name: "Cody",
          bio: "bio 1",
          imageUrl: "cody.jpg"
        },
        {
          id: 2,
          name: "Fira",
          bio: "bio 2",
          imageUrl: "fira.jpg"
        },
        {
          id: 3,
          name: "Earl",
          bio: "bio 3",
          imageUrl: "earl.png"
        }
      ]
    };
  }

  async componentDidMount() {
    const { data } = await axios.get("/api/authors");
    this.setState({ authors: data });
  }

  render() {
    const authors = this.state.authors;

    return (
      <div>
        {authors.map(author => {
          return (
            <NavLink to={`/authors/${author.id}/stories`} key={author.id}>
              <div className="author row">
                <img src={author.imageUrl} />
                <p>{author.name}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    );
  }
}
