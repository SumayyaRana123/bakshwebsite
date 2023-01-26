import React,{useState} from 'react'
import MobileSearch from './MobileSearch';
import Styles from './Style1.css'

function MobileHome() {
    const [selectedButton, setSelectedButton] = useState("buy");
    const handleSearchClick=()=>{
       
        
    }
  return (
    <div className='containerm'>
        <div className='contentm'>
     <p className='big-headingm'>
         Discover a <br></br><span>place</span>you'll <br></br>
       love to live
     </p>
    </div>
    <div className='btn-containerm'>
       <div className={selectedButton==="buy"?'btn background-black':'btn background-white'} onClick={()=>setSelectedButton("buy")}>Buy</div>
       <div className={selectedButton==="rent"?'btn background-black':'btn background-white'} onClick={()=>setSelectedButton("rent")}>Rent</div>
    </div>
     <div className='searchcontainerm'onClick={()=>handleSearchClick()}><p>Start your Search</p>
     <img src={require('../mblImages/Group 10.png')}></img>

    </div>
    <div className='icons-container'>
        <div className='icon1'><img src={require('../mblImages/plus-square.png')}></img>Post</div>
        <div className='icon2'><img src={require('../mblImages/star-01.png')}></img>Saved</div>
        <div className='icon3'><img src={require('../mblImages/search-lg.png')}></img>Search</div>
        <div className='icon4'><img src={require('../mblImages/annotation.png')}></img>Inbox</div>
        <div className='icon5'><img src={require('../mblImages/user-03.png')}></img>Login</div>
    </div>
    <div className='btn-wanted'><p>Wanted</p>

    </div>
    <div className='wanted-text'><p>
    Sed ut perspiciatis unde omnis iste natus error
     sit voluptatem accusantium doloremque laudantium.
        </p></div>
        </div>

  )
}

export default MobileHome