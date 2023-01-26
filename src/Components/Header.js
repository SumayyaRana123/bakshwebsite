import React from 'react'


function Header() {
  return (
    <div className='header'>
    <div className='left-header'><img src={require('../Images/Logo.png')}></img></div>
    <div className='right-header'>
        <div className="add-property"><p>+ Add property</p></div>
        <div className="profile"><img src={require('../Images/LinesIcon.png')}></img><img src={require('../Images/Group 5.png')}></img></div>
    </div>
    </div>
  )
}

export default Header