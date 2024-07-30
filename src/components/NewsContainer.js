import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spin from './Spin';
import propTypes from 'prop-types'

export default class NewsContainer extends Component {
  static defaultProps = {
    catagory : ''
  }
  static propTypes = {
    catagory : propTypes.string
  }
  constructor(){
    super();
    this.state = {
      articles : [],
      totalResults : 0,
      loading : false,
      page    : 1,
      pageCount:0
    }
    // console.log(this.state.pageCount+" constrator"+this.state.page+""+this.state.totalResults);

  }
  async newsFetch(){
    this.setState({loading:true});
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=01f198d7abc943b18fa37958ef9dd092&page=${this.state.page}`;
    let data = await fetch(url);
    let passData = await data.json();
    window.scrollTo({top:0});
    this.setState({
      articles     : passData.articles,
      totalResults : passData.totalResults,
      loading:false
    });
  }
  async componentDidMount(){
    this.newsFetch();
    this.setState({
      page         :   1,
      pageCount    :  0
    })
    console.log(this.state.pageCount+" next"+this.state.page+" "+this.state.totalResults);
  }
  previousNews = async() =>{
    this.setState({
      pageCount : this.state.pageCount-=20,
      page      :   this.state.page-=1,
    })
    this.newsFetch();
    console.log(this.state.pageCount+" next"+this.state.page+" "+this.state.totalResults);

  }
  nextNews = async() =>{
    this.setState({
      pageCount : this.state.pageCount+=20,
      page      :   this.state.page+=1,
    })
    this.newsFetch();
    console.log(this.state.pageCount+" next"+this.state.page+" "+this.state.totalResults);
  }
  fetchMoreData = async() =>{
    this.setState({page:this.state.page+1});
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=01f198d7abc943b18fa37958ef9dd092&page=${this.state.page}`;
    let data = await fetch(url);
    let passData = await data.json();
    this.setState({
      articles     : this.state.articles.concat(passData.articles),
      totalResults : passData.totalResults,
    });
  }





  render() {
    return (
      <>
        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length < this.state.totalResults}
        loader={<div className='flex justify-center  dark:bg-white dark:text-black text-white bg-slate-900'><div class="lds-facebook"><div></div><div></div><div></div></div></div>}
        endMessage={
          <p className='text-center py-3  dark:bg-white dark:text-black text-white bg-slate-900'>
            <b>Yay! You have seen it all</b>
          </p>
        }
        >
      {this.state.loading && <Spin/> }
      <section className='min-h-screen dark:bg-black dark:text-white bg-slate-300 flex flex-col items-center' id='newsContainer'>


              <div className=' grid 2xl:grid-cols-6 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 container'>
                {this.state.articles.map((e)=>{
                  return<NewsItem author={e.author} publishedAt={e.publishedAt} key={e.url}  imgUrl={e.urlToImage} title={e.title} article={e.description} readMore={e.url} source={e.source.name} ></NewsItem>
                })}
              </div>
          {/* <div className='py-9 flex'>
              <button disabled={this.state.pageCount<=0} onClick={this.previousNews} href="#_" className=" w-32 relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white dark:bg-slate-800 dark:border-white border-2 border-black group-hover:bg-black dark:group-hover:bg-white"></span>
              <span className=" text-center relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black">&larr;previous</span>
              </button>



              <button disabled={this.state.pageCount>=this.state.totalResults-20} onClick={this.nextNews} href="#_" className="w-32 relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="text-center absolute inset-0 w-full h-full bg-white dark:bg-slate-800 dark:border-white border-2 border-black group-hover:bg-black dark:group-hover:bg-white"></span>
              <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black">next&rarr;</span>
              </button>
          </div> */}

      </section>
      </InfiniteScroll>

      </>
    )
  }
}

