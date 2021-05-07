//import './App.css';
import Header from './Header'
import Recommended from './Recommended'
import Videolist from './videolist'
import React from 'react';

class App extends React.Component {
  state = {
    videosMetaInfo: [],
    selectedVideoId: null,
  };
  
  onTermSubmit= async (term)=>{
      const key="AIzaSyBIJV_GmzL_GRe2J7VFCvnot7sZDN4lZHo";
      const max_result=5;
      const response=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max_result}&key=${key}&q=${term}`)
      const data = await response.json()
      console.log(data);
        this.setState({
          videosMetaInfo: data.items,
          selectedVideoId:data.items[0]
        });
        console.log(data);
  }
  onVideoSelect=(video)=>{
    this.setState({selectedVideoId:video})
    console.log(video)
  }
  componentDidMount(){
    this.onTermSubmit('javascript english')
  }
  render(){
  return (
    
    
    <div className="ui container">
    <Header  onSearch={this.onTermSubmit}/>
    <div className="ui grid">
      <div className="ui row">
        <div className="ui ten wide column">
          <Recommended video={this.state.selectedVideoId}/>
        </div>
        <div className="ui six wide column">
          <Videolist onVideoSelect={this.onVideoSelect} videos={this.state.videosMetaInfo}/>
        </div>
      </div>
    </div>
    </div>
  );
}

}
export default App;
