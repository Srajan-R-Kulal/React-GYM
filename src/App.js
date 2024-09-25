
import "./App.css";
import Hero from "./hero/hero";
import Prog from "./programs/prog";
import Why from "./why/why";
import Plan from "./plan/plan";
import Cont from "./cont/cont";
const App=()=>{
  return(

    <>
    <div className="ever">
    <Hero/>
    <Prog/>
    <Why/>
    <Plan/>
    <Cont/>
    </div>
    
    </>

  )
}

export default App;