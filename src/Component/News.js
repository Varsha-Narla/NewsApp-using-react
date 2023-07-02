import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6ba928f43ff54790aae99459c3393f4e&page=1&pagesize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  // const handlePrevClick = async () => {
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ba928f43ff54790aae99459c3393f4e&page=${this.state.page-1}&pagesize=15`;
  //   // let data= await fetch(url);
  //   // let parsedData= await data.json();
  //   // console.log(parsedData);
  //   // this.setState({
  //   //   page:this.state.page-1,
  //   //   articles:parsedData.articles
  //   // })
  //   setPage(page - 1);
  //   updateNews();
  // };
  // const handleNextClick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / 15)) {
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apiKey=6ba928f43ff54790aae99459c3393f4e&page=${
  //       this.state.page + 1
  //     }&pagesize=15`;
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);
  //     setPage(page+1);
  //     setArticles(parsedData.articles);
  //     // this.setState({
  //     //   page: this.state.page + 1,
  //     //   articles: parsedData.articles,
  //     // });
  //   }
  //   // this.setState ({page:this.setState.page+1})
  //   // this.updateNews();
  // };
  const fetchMoreData = async () => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6ba928f43ff54790aae99459c3393f4e&page=1&pagesize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // });
  };

  return (
    <div className="container my-3">
      <h1 style={{marginTop:'90px'}}>Abhi Tak-Top Headline</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>More items...</h4>}
      >
        <div className="conatiner my-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-sm-4" key={element.url}>
                  <NewsItem
                    Title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="d-flex justify-content-between">
        <button disabled={state.page<=1}className='btn btn-dark' onClick={handlePrevClick}>&laquo; Previous</button>
        <button disabled={state.page+1>(Math.ceil(state.totalResults/15))} className='btn btn-dark' onClick={handleNextClick}>Next  &raquo;</button>
      </div> */}
    </div>
  );
};

News.defaultProps = {
  country: "in",
  category: "sports",
};
News.propTypes = {
  country: PropTypes.string,
};

export default News;
