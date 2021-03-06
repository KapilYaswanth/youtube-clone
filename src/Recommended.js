import React from 'react'
import './Videos.css'
import CircularProgress from '@material-ui/core/CircularProgress';
export default function Recommended({video}) {
            
            if(!video){
              return <div className="loading"><CircularProgress color="black" disableShrink /></div>
            }
            return(
            <div className="pos">
              <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title="video player"/>
              </div>
              <div className="ui segment">
              <h4 className="ui header">{video.snippet.channelTitle}</h4>
              <h4 className="ui header">{video.snippet.title}</h4>
              <p>{video.snippet.description}</p>
            </div>
            </div>);
}
