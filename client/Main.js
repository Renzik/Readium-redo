import React from 'react'
import Navbar from './Navbar'
import Stories from './Stories'
import {HashRouter, Route} from 'react-router-dom';
import SingleStory from './SingleStory.component';


export default class Main extends React.Component {
  render () {
    return (
      <HashRouter>
      <div id='main'>
        <div className='column container'>
          <div id='header'>
            <h1>Readium</h1>
          </div>
          <Navbar />
        </div>
        <Route path='/stories/:storyId' component={SingleStory} />
        <Route exact path='/stories' component={Stories}/>
        <Route exact path='/' component={Stories}/>
      </div>
      </HashRouter>
    )
  }
}
