import React, {Component} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';


export default class Stories extends Component {
  constructor () {
    super()
    this.state = {
      stories: []
    }
  }

  async componentDidMount () {
    try {
      const storiesResponse = await axios.get('/api/stories')
      this.setState({ stories: storiesResponse.data })
    }
    catch (error) {
      console.error(error)
    }
  }

  render () {
    const stories = this.state.stories

    return (
      <div id='stories' className='column'>
        {
          stories.map(story => (
            <div className='story' key={story.id}>
              <NavLink to={`/stories/${story.id}`}>
              <h3>{story.title}</h3>
              </NavLink>
              {/* pending setup link from author name to author page */}
              <p>{story.author.name}</p>
              <hr />
            </div>
          ))
        }
      </div>
    )
  }
}
