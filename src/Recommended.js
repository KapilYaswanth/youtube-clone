import React from 'react'
import './Videos.css'
export default function Recommended({videoId,data}) {
            if (!videoId) {
              return (
                <div className="videos">              
                  <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
                  <br/>Search for a video
                </p>
                </div>

              );
            }  
            return (
              <div className="video-player">
                <iframe
                  title={videoId}
                  className="video-iframe"
                  src={`https://www.youtube.com/embed/${videoId}`}
                />
               <div className="description"><hr/>
                <p style={{fontSize :"15px"}}><b>Channel name : </b>{data.channelTitle}</p><br/>
                <p style={{fontSize :"15px"}}><b>Title : </b>{data.title}</p><br/>
                <p style={{fontSize :"15px"}}><b>Description : </b>{data.description}</p><br/>
                {console.log("------",data)}
                </div>
              </div>
              
              
            );
}
