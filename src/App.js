import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Recommended from './Recommended'
import Videolist from './videolist'
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Trending from './Trending'
class App extends React.Component {
  state = {
    videosMetaInfo: [],
    selectedVideoId: null,
    channeldetails:{}
  };
  
  onVideoSelected=(videoId,snippet)=>{
    this.setState({selectedVideoId:videoId,
    channeldetails:snippet})
  }
  onSearch =  async keyword => {
    const key="AIzaSyAXsRp0md6_FiriAoTUhqI4GeChj2r8tSY";
    const max_result=5;
    const response=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max_result}&key=${key}&q=${keyword}`)
    const data = await response.json()
      this.setState({
        videosMetaInfo: data.items,
        selectedVideoId: data.items[0].id.videoId,
        channeldetails:data.items[0].snippet
      });
      console.log(this.state);
      //console.log(data.items)
    }
  
    
  
  render(){
  return (
    <div className="App">
      
      <Header onSearch={this.onSearch}/>
      <div className="app-page">
      
      <Sidebar /> 
      <Router>
        <Switch>
          <Route exact path="/">
      <Recommended data={this.state.channeldetails} videoId={this.state.selectedVideoId}/>
      <Videolist
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosMetaInfo}
        />
        </Route> 
        <Route path="/trending"><Trending /></Route>
        </Switch>
       </Router>
       
      </div>
    </div>
  );
}
}

export default App;
