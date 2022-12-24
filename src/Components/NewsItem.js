import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {newsTitle , newsDescription , newsImageURL , newsURL} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={newsImageURL ? newsImageURL : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{newsTitle}...</h5>
                            <p className="card-text">{newsDescription}...</p>
                            <a href={newsURL} target = "_blank" className="btn btn-sm btn-dark">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}
