import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


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

    constructor(props) {
        super(props);
        // console.log("Hello World");
        this.state = {
            articles: [],
            page: 1,
            loading: true,
            totalResults: 0
        };

        document.title = `${(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)} - Khabar`
    }

    updateNews = async () => {
        this.props.setProgress(10);
        
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&
        &apiKey=961bc7b9faa44191a5f3844566f39cc4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        // console.log(parsedData);
        
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })

        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePreviousClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        // this.updateNews();

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&
        &apiKey=961bc7b9faa44191a5f3844566f39cc4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })

    };


    render() {
        return (
            <>
                    <h1 className='text-center' style={{ margin: '35px 0px' }}>Khabar - Top {(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)} Headlines</h1>
                    {this.state.loading && <Spinner/>}

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner></Spinner>}
                    >

                        <div className="container">

                            <div className="row">
                                {this.state.articles.map((element) => {
                                    return <div className="col-md-4" key={element.url}>
                                        <NewsItem newsTitle={element.title} newsDescription={element.description} newsImageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
            </>
        )
    }
}
