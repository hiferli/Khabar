import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NewsItem extends Component {
    render() {
        let { newsTitle, newsDescription, newsImageURL, newsURL, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex: '1'}}>
                        {source}
                    </span>
                    <img src={newsImageURL ? newsImageURL : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                            {newsTitle}
                        </h5>
                        <p className="card-text">{newsDescription}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Anonymous"} on {new Date(date).toGMTString()}</small></p>
                        <Link to={newsURL} target="_blank" className="btn btn-sm btn-dark">Go somewhere</Link>
                    </div>
                </div>
            </div>
        )
    }
}
