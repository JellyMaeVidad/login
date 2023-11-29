import React from 'react'
import './Sidebar.css'


// import images
import b from '../../Assets/b.png'

//import icons
import { RxDashboard } from "react-icons/rx";
import { MdRoundaboutRight } from "react-icons/md";
import { IoDocumentsSharp } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";

const Sidebar = () => {
    
    return(
         <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={b} alt="Image Name" />
                <h2>Purok Registration System</h2>
            </div>
            <div className="menuDiv">
                <h3 className="divTitle">
                    DASHBOARD
                </h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <MdRoundaboutRight className='icon'/>
                        <span className="smallText">
                            ABOUT
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <IoDocumentsSharp className='icon'/>
                        <span className="smallText">
                            DOCUMENT REQUESTS
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <MdOutlinePayments className='icon'/>
                        <span className="smallText">
                            PAYMENTS
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <TfiAnnouncement className='icon'/>    
                        <span className="smallText">
                            ANNOUNCEMENTS
                        </span>
                        </a>
                    </li>
                </ul>
            </div>
         </div>

         
    )
}

export default Sidebar
