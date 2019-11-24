import React from 'react';
import '../../assets/styles/Header/Header.css';

export default function Header() {
    return (
        <div className="header-container">
            
                <div className="main-header">
                    <span className="header-span">top</span><span className="header-ending">vet</span> 
                </div>
                <div className="organisation-block">
                    <span>Kenyatta National Clinic</span> 
                </div>
                <div className="schedule-block"><span>Schedule</span></div>
                <div className="customers-block"><span>Customers</span></div>
                <div className="setting-block"><span>Settings</span></div>
                <div className="search-block"><span>Search</span></div>
                <div className="profile-dashboard">Profile</div>
          
        </div>
    )
}
