import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor() {
        super();
        console.log("Hello World");
        this.state = {
            articles: [],
            page: 1,
            loading: false
        };
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=961bc7b9faa44191a5f3844566f39cc4&page=1&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);

        this.setState({ 
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlePreviousClick = async () => {
        console.log("ands")
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=961bc7b9faa44191a5f3844566f39cc4&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({ 
            articles: parsedData.articles,
            page: this.state.page - 1
        })
        
    }
    
    handleNextClick = async  () => {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults / 20)){
            return;
        }

        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=961bc7b9faa44191a5f3844566f39cc4&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({ 
            articles: parsedData.articles,
            page: this.state.page + 1
        })
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h1>Khabar - Top Headlines</h1>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem newsTitle={element.title ? element.title.slice(0, 50) : ""} newsDescription={element.description ? element.description.slice(0, 100) : ""} newsImageURL={element.urlToImage} newsURL={element.url} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                    </div>
                </div>
            </div>
        )
    }
}
