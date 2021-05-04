import React, { Component } from 'react'
import './App.css'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import Home from '@material-ui/icons/Home'
import Trending from '@material-ui/icons/Whatshot'
import Subscription from '@material-ui/icons/Subscriptions'
import History from '@material-ui/icons/History'
import Library from '@material-ui/icons/VideoLibrary'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                
                <a href="/"><SidebarRow selected={true} Icon={Home} title="Home" /></a>
                <a href="/trending"><SidebarRow Icon={Trending} title="Trending" /></a> 
                <SidebarRow Icon={Subscription} title="Subscription" />
                <hr />
                <SidebarRow Icon={History} title="History" />
                <SidebarRow Icon={Library} title="Library" />
                <hr />
            </div>
        )
    }
}

export default Sidebar
