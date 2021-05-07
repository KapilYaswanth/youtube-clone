import React from "react";
import './Videos.css'

const Videos=({videoitem,onVideoSelect})=>{
  return(
    <div onClick={()=>{onVideoSelect(videoitem)}} className="video-item ui item">
      <img className="ui image" src={videoitem.snippet.thumbnails.medium.url} alt=""/>
      <div className="ui content">
      <div className="header">{videoitem.snippet.title}</div>
      </div>
     
    </div>
  );
}

export default Videos;
 