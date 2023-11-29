import React from 'react'
import './Dashboard.css'
import Sidebar from '../Dashboard/Component/SidebarSection/Sidebar'
import Body from '../Dashboard/Component/BodySection/Body' 


const Dashboard = () => {
    return (
      <div className="container">
        
        <Sidebar/>
        <Body/>
        <a href="/" className='btnn'><button>LOG OUT</button></a>
        </div>
    )
}
export default Dashboard