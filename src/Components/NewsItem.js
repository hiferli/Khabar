import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {newsTitle , newsDescription} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://www.aljazeera.com/wp-content/uploads/2022/12/2022-12-09T200724Z_1513593204_UP1EIC91JWAH0_RTRMADP_3_SOCCER-WORLDCUP-NLD-ARG-REPORT.jpg?resize=1920%2C1440" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{newsTitle}</h5>
                            <p className="card-text">{newsDescription}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}
