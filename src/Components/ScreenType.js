import React from 'react'
import { useMediaQuery } from 'usehooks-ts'

function ScreenType() {
    // const matches = useMediaQuery('(min-width: 768px)')
    // console.log('matches',matches)
 
    // console.log('mibile',mobile)
        const Laptop = useMediaQuery('(min-width:1200px)')
        const tablet = useMediaQuery('(min-width: 768px)')
        const mobile = useMediaQuery('(min-width: 320px)')

    const getScreenType=()=>{
        if(Laptop){return"laptop"}
        else if(tablet){ return "tablet";}
        if(mobile){return "mobile"}
    }


  return (
    <div>
       {/* {`The view port is ${matches ? 'at least' : 'less than'} 768 pixels wide`} */}
       <h1>{getScreenType()}</h1>
        </div>
  )
}

export default ScreenType