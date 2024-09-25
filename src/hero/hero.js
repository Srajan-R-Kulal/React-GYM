
import { useState } from "react";
import style from "./hero.module.css";

import {Link} from 'react-scroll';
const Hero=()=>{
    const mobile = window.innerWidth<=768 ? true:false;
    const [menuOpened, setMenuopened] =useState(false)

    return(

<>


<div className={`${style.color}`}>


    
</div>
<div className="homess"></div>

<div className={`${style.navi}`}>
   
            <div className={`${style.logo}`}>
                 <img src="logo.png" alt="error"
                  />
    
            </div>
        {(menuOpened=== false && mobile===true)?(
            <div onClick={()=> setMenuopened(true)}>
                
                <div className={`${style.log22}`}>
                <img src="bars.png" alt="" style={{width:'1.5rem', height:'1.5rem'}} /></div></div>
        ): (<ul>
        <li><Link 
        onClick={()=>setMenuopened(false)} 
        to='homess' 
        span={true} 
        smooth={true}
        > Home</Link></li>

         <li><Link onClick={()=>setMenuopened(false)} to='programss' span={true} smooth={true}>Programs</Link></li>
         <li><Link onClick={()=>setMenuopened(false)} to='whyy' span={true} smooth={true}>Why us</Link></li>
         <li><Link onClick={()=>setMenuopened(false)} to='planss' span={true} smooth={true}>Plans</Link></li>
         <li><Link onClick={()=>setMenuopened(false)} to='conss' span={true} smooth={true}>Contact us</Link></li>
    </ul>)  }
            

            <button className={`${style.join}`}>
                Join Now
            </button>
</div>
<br />
    <hr />
    <br />
    <br />
   
    <div className={`${style.full}`}>
<div className={`${style.left}`}>
<div className={`${style.conte}`}>


                <h3>THE BEST FITNESS CLUB IN THE TOWN</h3>
</div>


<div className={`${style.hea}`}>
        <div className={`${style.hol}`}><h1>SHAPE</h1>
        </div>
        <h1 className={`${style.ha}`}>YOUR</h1>
</div>
< div className={`${style.hea2}`}>
        <h1>IDEAL</h1>
        <div className={`${style.hea4}`}><h1>BODY</h1></div>
        
</div>

<div className={`${style.para}`}>
    <p>In here we will help you to shape and build your 
        ideal body and live up your life to fullest 
    </p>
</div>


<div  className={`${style.but}`}>
<div className={`${style.but1}`}>

    <button>Get Started</button>
</div>

<div className={`${style.but2}`}>

    <button>Learn More</button>
  </div>
</div>
</div>

<div className={`${style.right}`}>


<img src="hero_image.png" alt="error"
 />


</div>
</div>


</>

    )
}

export default Hero;