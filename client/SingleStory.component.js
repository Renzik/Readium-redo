import React, {Component} from 'react';
import axios from 'axios';

export default class SingleStory extends Component {
  constructor() {
    super();
    this.state = {
      story: {
        title: 'Ships',
        id: 2,
        content: "A ship in port is safe,\nbut that's not what ships are built for",
        author: {
          id: 1,
          name: 'Grace Hopper'
        },
        comments: [
          {
            id: 4,
            content: 'I like ships!',
            author: {
              id: 2,
              name: 'Alan Turing',
              imageUrl: 'default-author.png'
            }
          }
        ]
      }
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.storyId
    console.log(id.storyId);
    const {data} = await axios.get(`api/stories/${id}`);
    this.setState({
      story: data
    });

  }

  render() {
    const singleStory = this.state.story;

    return (
      <div id='single-story' className='column'>
        <h1>{singleStory.title}</h1>
        <div>{singleStory.content.split('\n').map(p => {
          return (
          <p key={singleStory.content.split('\n').indexOf(p)}>{p}</p>
          )
        })}</div>
        <h3>Responses:</h3>
        <div id='comments'>
          {
            singleStory.comments.map(comment => {
              return (
                <div key={comment.id} className='comment row'>
                  <img src={comment.author.imageUrl} />
                  <div className='column'>
                    <a>
                      <h5>{comment.author.name}</h5>
                    </a>
                    <div>{comment.content}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
