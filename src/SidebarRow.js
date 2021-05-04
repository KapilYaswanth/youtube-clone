import React from 'react'
import './Sidebar.css'
function SidebarRow({selected,Icon,title}) {
    return (
        <div className={`side-bar-row ${selected && "Selected"}`}>
            <Icon className="sidebarrow-icon"/>
            <h2 className="sidebarrow-title">{title}</h2>
        </div>
    )
}

export default SidebarRow
