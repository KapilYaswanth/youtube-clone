import React, { Component } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
class Header extends Component {
     state = { title: "" };
     onChange=(e)=>{
       this.setState({title:e.target.value})
     }
     onSubmit=(e)=>{
      e.preventDefault();
      this.props.onSearch(this.state.title);
    }
  
    render() {
        return (
            <div className="header">
                <div className="search-bar ui segment">
      <form className="ui form" onSubmit={this.onSubmit}>
        <div className="header-center ui field">
          <input type="text" value={this.state.title} onChange={this.onChange} placeholder="Search for a video..." required/>
          <button type="submit" className="button"><SearchIcon /></button>
        </div>
      </form>
    </div>      
            </div>
        )
    }
  }

export default Header
