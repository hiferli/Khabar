import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor() {
        super();
        console.log("Hello World");        
        this.state = {
            articles: [],
            loading: false
        };
    }

    async componentDidMount() { 
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=961bc7b9faa44191a5f3844566f39cc4`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);

        this.setState({articles: parsedData.articles })
     }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h1>Khabar - Top Headlines</h1>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem newsTitle={element.title ? element.title.slice(0 , 50) : ""} newsDescription={element.description ? element.description.slice(0 , 100) : ""} newsImageURL={element.urlToImage} newsURL = {element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
