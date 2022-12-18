import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
        This is a News Component
        <NewsItem newsTitle = "Bad day for Ishaan" newsDescription = "Didn't wake up on time!" />
        <NewsItem newsTitle = "Good day for Ishaan" newsDescription = "Got Extra Sleep  !" />
      </div>
    )
  }
}
