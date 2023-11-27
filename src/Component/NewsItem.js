import React from "react";

const NewsItem = ({ Title, description, imageurl, newsurl, author, date, source, onSave }) => {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            !imageurl
              ? "https://img.etimg.com/thumb/msid-99036713,width-1070,height-580,imgsize-56500,overlay-etmarkets/photo.jpg"
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={{fontSize: '1.25rem'}}>
            {Title}
          </h5>
          <p className="card-text" >
            <small>
              From {!source ? "unknown" : source} on {new Date(date).toGMTString()}
            </small>
          </p>
          {/* save button */}
          <button className="btn btn-primary" onClick={onSave} style={{ marginRight: '30px', marginLeft: '30px' }}>
            Save
          </button>
          {/* read more button */}
          <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
