import React,{useState} from 'react'
import Styles from './Styles.css'

function Home() {
  const [selectedButton, setSelectedButton] = useState("buy");
  return (
    <div className='container'>
    <div className='content'>
     <p className='big-heading'>
         Discover a <span>place</span><br></br>
         you'll love to live
     </p>
    </div>
    <div className='btn-container'>
       <div className={selectedButton==="buy"?'btn background-black':'btn background-white'} onClick={()=>setSelectedButton("buy")}>Buy</div>
       <div className={selectedButton==="rent"?'btn background-black':'btn background-white'} onClick={()=>setSelectedButton("rent")}>Rent</div>
    </div>
    <div className='search-container'>
      <div className='location'><p><strong>Location</strong></p><p>Bahria Town Islamabad</p></div>
      <div className='property'><p><strong>Property</strong></p><p>Apartment</p></div>
      <div className='filter'><img src={require('../Images/filterIcon.png')}></img></div>
      <div className='search'><img src={require('../Images/SearchIcon.png')}></img></div>
    </div>

    <div className='requirement-container'>
      <div className='bullet'><img src={require('../Images/BulletIcon.png')}></img></div>
      <div className='req-content'>
        <p className='req-title'><strong>Submit your requirements</strong></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam</p>
      </div>
      
    </div>
    <div className='botton-container'>
      <div className='bottomleftImage'>
      <img src={require('../Images/Screen Shot 2023-01-11 at 4.16 1.png')}></img>
      </div>
      <div className='bottomrightImage'>
  
      <img src={require('../Images/Screen Shot 2023-01-11 at 4.17 1.png')}></img>
      </div>
      </div>
      <div className='footer'><img src={require('../Images/footer.png')}></img></div>
    </div>
  )
}

export default Home