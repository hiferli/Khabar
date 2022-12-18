import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Australia FA pledges to 'weed out' trouble-makers after violent pitch invasion",
            "description": "Football Australia (FA) has launched an investigation into the violent pitch invasion that left a player injured during the abandoned A-League derby between Melbourne Victory and Melbourne City.",
            "url": "https://www.reuters.com/lifestyle/sports/australia-fa-pledges-weed-out-trouble-makers-after-violent-pitch-invasion-2022-12-18/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=124",
            "publishedAt": "2022-12-18T07:36:47Z",
            "content": "MELBOURNE, Dec 18 (Reuters) - Football Australia (FA) has launched an investigation into the violent pitch invasion that left a player injured during the abandoned A-League derby between Melbourne Vi… [+2480 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Faras Ghani",
            "title": "World Cup: For Lionel Messi and Argentina, now is all",
            "description": "The script says Messi will be the conductor of football’s great show and lift the trophy at the end of it. Will he?",
            "url": "http://www.aljazeera.com/sports/2022/12/18/messi-time-is-now",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/12/2022-12-09T200724Z_1513593204_UP1EIC91JWAH0_RTRMADP_3_SOCCER-WORLDCUP-NLD-ARG-REPORT.jpg?resize=1920%2C1440",
            "publishedAt": "2022-12-18T06:36:36Z",
            "content": "Doha, Qatar Now is all is a trademark phrase used by Qatar 2022 organisers. On Sunday, it could not be more apt. The stage for a grand farewell is set at Lusail Stadium. The audience numbers will be… [+4346 chars]"
        },
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "Will Murray, Isabella Podwinski",
            "title": "Federal sports minister questions funding demand for AFL stadium in Hobart",
            "description": "As Tasmania prepares to make a business case for an AFL licence, the stadium required to make it a reality continues to be political football, with the Commonwealth now indicating it is not happy with the amount being sought.",
            "url": "http://www.abc.net.au/news/2022-12-18/afl-stadium-sports-minster-wells-funding-questions/101785934",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/64ce1b70ec21945ee33844bb822504ef?impolicy=wcms_crop_resize&cropH=1159&cropW=2061&xPos=173&yPos=138&width=862&height=485",
            "publishedAt": "2022-12-18T02:55:02Z",
            "content": "The federal sports minister has poured cold water on the prospect of the Commonwealth chipping in to fund the proposed new stadium in Hobart, labelling it 'a lot to ask'. Key points: <ul><li>Federa… [+3369 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "How family unity has helped Mbappe to stardom",
            "description": "As Kylian Mbappe looks to win his second World Cup aged just 23, French football writer Julien Laurens looks at the striker's journey to the top.",
            "url": "http://www.bbc.co.uk/sport/football/63998649",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/6C7C/production/_128027772_mbappe2.png",
            "publishedAt": "2022-12-17T21:52:27.8019099Z",
            "content": "<table><tr><th>Fifa World Cup final, Sunday 18 December, kick-off 15:00 GMT</th></tr> <tr><td>Coverage: Live on BBC One, BBC iPlayer, BBC Radio 5 Live, BBC Sounds and the BBC Sport website and app</… [+5532 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Tom Peck",
            "title": "Whatever happens on Sunday, it will be the start of football’s grim new era",
            "description": "The game is clinging to its past because it doesn’t have the courage to look into its future",
            "url": "http://www.independent.co.uk/voices/football-world-cup-final-sportswashing-qatar-b2246737.html",
            "urlToImage": "https://static.independent.co.uk/2022/12/16/11/1448997750.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2022-12-16T17:09:32Z",
            "content": "Sign up for the View from Westminster email for expert analysis straight to your inbox Get our free View from Westminster email Sport, like gold, is an unreactive element. It cannot be alloyed, com… [+4345 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Field YatesESPN Insider ",
            "title": "Fantasy football Week 15 tips: Mike Evans, J.K. Dobbins",
            "description": "Field Yates discusses top storylines for this big fantasy playoff week, including how to value a star wideout and backfield conundrums galore.",
            "url": "http://espn.go.com/fantasy/football/insider/story/_/id/35252287/mike-evans-jk-dobbins-playoffs-dandre-swift-jerick-mckinnon",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1206%2Fr1102795_1296x729_16%2D9.jpg",
            "publishedAt": "2022-12-15T11:44:00Z",
            "content": "Each week during the 2022 NFL season, Field Yates will help fantasy football managers by providing the precise intel needed on the most important, fantasy-relevant storylines. Field's Rolodex is vast… [+11725 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had. Peter the catThe only … [+5504 chars]"
        }
    ]

    constructor() {
        super();
        console.log("Hello World");        
        this.state = {
            articles: this.articles,
            loading: false
        };
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2>Khabar - Top Headlines</h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem newsTitle={element.title} newsDescription={element.description} newsImageURL={element.urlToImage} newsURL = {element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
