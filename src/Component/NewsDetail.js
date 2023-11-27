import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";

const NewsDetail = () => {
  const { savedArticles } = useContext(AppContext);
  const { newsId } = useParams();

  // Finding the saved article by matching the url
  const selectedArticle = savedArticles.find(
    (article) => encodeURIComponent(article.url) === newsId
  );

  if (!selectedArticle) {
    return <div>No article found for the provided ID</div>;
  }

  return (
    <div className="container my-3">
      <h1 style={{ marginTop: "90px" }}>News Detail</h1>
      <div className="card">
        <img src={selectedArticle.urlToImage} className="card-img-top" alt="news" />
        <div className="card-body">
          <h5 className="card-title">{selectedArticle.title}</h5>
          <p className="card-text">{selectedArticle.description}</p>
          <p className="card-text">
            <small>
              By {selectedArticle.author || "unknown"} on{" "}
              {new Date(selectedArticle.publishedAt).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
