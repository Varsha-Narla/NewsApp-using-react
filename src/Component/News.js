import React, { useEffect, useState, useContext } from "react";
import NewsItem from "./NewsItem"; // Adjust the path based on your project structure
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppContext } from "../App"; // Adjust the path based on your project structure

const News = (props) => {
  const { savedArticles, saveArticle } = useContext(AppContext);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=eab5fe67d95e4ebfab0d0fde9485cd94&page=${page}&pagesize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [page, props.category]);

  const fetchMoreData = async () => {
    setPage(page + 1);
  };

  const handleSaveClick = (article) => {
    saveArticle(article);
  };

  return (
    <div className="container my-3">
      <h1 style={{ marginTop: "90px" }}>News Verse-Top Headline</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>More items...</h4>}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-sm-4" key={element.url}>
                  <NewsItem
                    Title={element.title ? element.title.slice(0, 30) : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    onSave={() => handleSaveClick(element)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
