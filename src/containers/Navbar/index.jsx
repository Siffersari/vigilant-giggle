import React, { Component } from 'react';

export class Navbar extends Component {
    render() {
        const { navItemList, class: elementClass } = this.props;
        return (
            <div className="header-container">
            
            {navItemList.map(item => (
                <div className={elementClass}>
                <span>{item}</span> 
            </div>
            ) )}
                
                
          
        </div>
        )
    }
}

export default Navbar
