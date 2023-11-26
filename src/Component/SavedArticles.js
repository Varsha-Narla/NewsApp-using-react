import React, { useContext } from "react";
import { AppContext } from "../App"; // Adjust the path based on your project structure
import NewsItem from "./NewsItem"; // Adjust the path based on your project structure
import { Link } from "react-router-dom";

const SavedArticles = () => {
  const { savedArticles } = useContext(AppContext);

  return (
    <div className="container my-3">
      <h1 style={{ marginTop: "90px" }}>Saved Articles</h1>
      <div className="container my-3">
        <div className="row">
          {savedArticles.map((element) => (
            <div className="col-sm-4" key={element.url}>
              <NewsItem
                Title={element.title ? element.title.slice(0, 30) : ""}
                description={element.description ? element.description.slice(0, 88) : ""}
                imageurl={element.urlToImage}
                newsurl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
              <Link to={`/saved/${encodeURIComponent(element.url)}`} className="btn btn-primary">
                View Full Article
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedArticles;
