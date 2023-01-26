
import './App.css';
import Home from './Components/Home';
import { useMediaQuery } from 'usehooks-ts'
import ScreenType from './Components/ScreenType';
import Header from './Components/Header';
import MobileHome from './Components/MobileHome';



function App() {

  const Laptop = useMediaQuery('(min-width:1200px)')
  const tablet = useMediaQuery('(min-width: 768px)')
  const mobile = useMediaQuery('(min-width: 320px)')
  const getScreenType=()=>{
    if(Laptop){return"laptop"}
    else if(tablet){ return "tablet";}
    if(mobile){return "mobile"}
}



    if(getScreenType()==="laptop"||getScreenType()==="tablet" ){
    return (
    <div className="App">
      {/* <h1>This is Laptop</h1> */}
      <Header></Header>
     <Home></Home>
    </div>
  );}
  else if(getScreenType()==="tablet"){
    return (
      <div className="App">
    {/* <h1>This is Tablet</h1> */}
      </div>
    );
  }
  else if(getScreenType()==="mobile"){
    return (
      <div className="App">
    {/* <h1>This is mobile</h1> */}
    <MobileHome></MobileHome>
      </div>
    );
  }

}

export default App;
