import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
      progress: 0
    }
    document.title = `NewsApp - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
  }

  update = async () => {
    this.props.setProgress(20)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=12&page=${this.state.page}`;
    let response = await fetch(url);
    this.props.setProgress(30)
    let data = await response.json();
    this.props.setProgress(60)
    this.setState({ articles: data.articles, loading: false, totalArticles: data.totalResults })
    this.props.setProgress(100)
  }

  componentDidMount() {
    this.update();
  }

  nextData = async () => {
    this.setState({page: (this.state.page + 1)})
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=12&page=${this.state.page}`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ articles: this.state.articles.concat(data.articles), loading: false})
  }

  render() {

    let noImg = this.props.noImg;

    return (
      <div className='bg-white dark:bg-gray-900'>
        {this.state.loading ?<Spinner />:
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.nextData}
            hasMore={!(this.state.page > Math.ceil(this.state.totalArticles / 12))}
            loader={<Spinner />}
            endMessage={
              <p className='text-center dark:text-white text-black my-4 font-bold'>That's it for this section, check out other News Sections for more News</p>
            }
          >

        <div className='p-4 grid md:grid-cols-4 gap-4 xs:grid-cols-2 grid-cols-1'>
          {this.state.articles.map((element) => {
            return <Newsitem key={element.url} title={element.title} description={element.description} image={element.urlToImage} articleUrl={element.url} noImg={noImg} author={element.author} date={element.publishedAt} source={element.source.name} />
          })}
        </div>

        </InfiniteScroll>
        }
      </div >
    )
  }
}

export default News