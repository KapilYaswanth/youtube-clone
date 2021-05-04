import React from "react";


const Videos = ({ data, onVideoSelected }) => {
  
  
  function getCss(imageurl) {
    const _styles = {
      backgroundImage: `url(${imageurl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "180px",
      position: "relative"
    };
    return _styles;
  }
  function constructVideoTitles(vidoesData) {
    return vidoesData.map(({ snippet, id }, index) => {
      
      return (
        <div
          className="video"
          key={index}
          onClick={() => onVideoSelected(id.videoId, snippet)}>
          <div style={getCss(snippet.thumbnails.high.url)} key={index} />
          <p className="title">{snippet.title}</p>
        </div>
      );
    });
  
  
  }
  return constructVideoTitles(data);
};

export default Videos;
 