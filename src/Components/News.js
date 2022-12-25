import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 10,
        category: "general"
    }   

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        // console.log("Hello World");
        this.state = {
            articles: [],
            page: 1,
            loading: false
        };
    }

    updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&
        &apiKey=961bc7b9faa44191a5f3844566f39cc4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
                this.setState({ loading: true });
                let data = await fetch(url);
                let parsedData = await data.json();
                // console.log(parsedData);
        
                this.setState({
                    articles: parsedData.articles,
                    totalResults: parsedData.totalResults,
                    loading: false
                })
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePreviousClick = async () => {
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }
    
    handleNextClick = async () => {
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }
    
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h1 className='text-center' style={{margin: '35px 0px'}}>Khabar - Top Headlines</h1>
                    {this.state.loading && <Spinner></Spinner>}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem newsTitle={element.title} newsDescription={element.description} newsImageURL={element.urlToImage} newsURL={element.url} author= {element.author} date = {element.publishedAt} source = {element.source.name}/>
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>

                    </div>
                </div>
            </div>
        )
    }
}
