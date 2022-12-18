import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2>Khabar - Top Headlines</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <NewsItem newsTitle="Bad day for Ishaan" newsDescription="Didn't wake up on time!" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem newsTitle="Good day for Ishaan" newsDescription="Got Extra Sleep  !" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem newsTitle="Average day for Ishaan" newsDescription="Average of good and bad is still average!" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
