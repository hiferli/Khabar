import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {newsTitle , newsDescription , newsImageURL , newsURL} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={newsImageURL} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{newsTitle}</h5>
                            <p className="card-text">{newsDescription}</p>
                            <a href="/dummy" className="btn btn-sm btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}
