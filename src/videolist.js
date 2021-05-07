import React from 'react'
import './Videos.css'
import Videos from './Videos'
export default function videolist({ videos ,onVideoSelect}) {
  //console.log(videos);
  const renderedList = videos.map((video)=>{
    return(<div key={video.etag}>
      <Videos onVideoSelect={onVideoSelect} videoitem={video} />
    </div>);
  });
      return (
          <div className="ui relaxed divided list">
            {renderedList}
          </div>
      );
  }
